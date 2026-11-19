/* Games: uses EVENTS and PEOPLE from script.js */
const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const btn = (text, cls, onClick) => {
  const b = el("button", cls, text);
  b.type = "button";
  if (onClick) b.addEventListener("click", onClick);
  return b;
};

/* ---------- Tabs ---------- */
document.querySelectorAll(".game-tabs [role=tab]").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".game-tabs [role=tab]").forEach((t) => {
      const on = t === tab;
      t.setAttribute("aria-selected", String(on));
      document.getElementById("game-" + t.dataset.game).hidden = !on;
    });
  });
});

/* ---------- History Quiz ---------- */
function makeQuestions() {
  const yearQs = EVENTS.map((e) => {
    const wrong = shuffle(EVENTS.filter((x) => x.year !== e.year).map((x) => x.year))
      .filter((y, i, a) => a.indexOf(y) === i).slice(0, 3);
    return { q: `In what year did this happen: ${e.event}?`, answer: String(e.year), options: shuffle([e.year, ...wrong]).map(String), why: e.detail };
  });
  const personQs = PEOPLE.map((p) => {
    const wrong = shuffle(PEOPLE.filter((x) => x.name !== p.name)).slice(0, 3).map((x) => x.name);
    return { q: `Who is this? ${p.text}`, answer: p.name, options: shuffle([p.name, ...wrong]), why: `${p.name} (${p.years}).` };
  });
  return shuffle([...yearQs, ...personQs]).slice(0, 10);
}

function startQuiz() {
  const box = document.getElementById("game-quiz");
  const qs = makeQuestions();
  let i = 0, score = 0;

  const show = () => {
    box.replaceChildren();
    if (i === qs.length) {
      box.append(el("p", "game-big", `You scored ${score} / ${qs.length}`),
        el("p", "muted", score >= 8 ? "Excellent — you know your history!" : score >= 5 ? "Nice work! Play again to beat your score." : "Keep exploring the timeline and try again."),
        btn("Play again", "primary", startQuiz));
      return;
    }
    const q = qs[i];
    box.append(el("p", "game-progress", `Question ${i + 1} of ${qs.length} · Score ${score}`), el("p", "game-q", q.q));
    const opts = el("div", "quiz-options");
    const feedback = el("p", "game-feedback");
    q.options.forEach((o) => {
      opts.append(btn(o, "quiz-opt", (ev) => {
        const correct = o === q.answer;
        if (correct) score++;
        opts.querySelectorAll("button").forEach((b) => {
          b.disabled = true;
          if (b.textContent === q.answer) b.classList.add("right");
        });
        if (!correct) ev.currentTarget.classList.add("wrong");
        feedback.textContent = (correct ? "Correct! " : `Not quite — it's ${q.answer}. `) + q.why;
        box.append(btn(i + 1 === qs.length ? "See score" : "Next question", "primary", () => { i++; show(); }));
      }));
    });
    box.append(opts, feedback);
  };
  show();
}

/* ---------- Timeline Sort ---------- */
function startOrder() {
  const box = document.getElementById("game-order");
  const picks = [];
  for (const e of shuffle(EVENTS)) {
    if (!picks.some((p) => p.year === e.year)) picks.push(e);
    if (picks.length === 6) break;
  }
  let items = shuffle(picks);
  let checked = false;

  const render = () => {
    box.replaceChildren(el("p", "game-q", "Put these events in order, earliest at the top."));
    const list = el("ol", "order-list");
    items.forEach((e, idx) => {
      const li = el("li");
      const correctIdx = [...picks].sort((a, b) => a.year - b.year).indexOf(e);
      if (checked) li.classList.add(correctIdx === idx ? "right" : "wrong");
      li.append(el("span", "order-text", e.event + (checked ? ` (${e.year})` : "")));
      const up = btn("↑", "ghost small-btn", () => { [items[idx - 1], items[idx]] = [items[idx], items[idx - 1]]; checked = false; render(); });
      up.disabled = idx === 0 || checked;
      up.setAttribute("aria-label", "Move up");
      const down = btn("↓", "ghost small-btn", () => { [items[idx + 1], items[idx]] = [items[idx], items[idx + 1]]; checked = false; render(); });
      down.disabled = idx === items.length - 1 || checked;
      down.setAttribute("aria-label", "Move down");
      li.append(up, down);
      list.append(li);
    });
    box.append(list);
    if (!checked) {
      box.append(btn("Check order", "primary", () => { checked = true; render(); }));
    } else {
      const sorted = [...picks].sort((a, b) => a.year - b.year);
      const right = items.filter((e, idx) => sorted[idx] === e).length;
      box.append(el("p", "game-big", right === items.length ? "Perfect order! 🎉" : `${right} of ${items.length} in the right spot`),
        btn("New round", "primary", startOrder));
    }
  };
  render();
}

/* ---------- Memory Match ---------- */
function startMatch() {
  const box = document.getElementById("game-match");
  const people = shuffle(PEOPLE).slice(0, 6);
  const cards = shuffle(people.flatMap((p, id) => [
    { id, kind: "name", text: p.name },
    { id, kind: "clue", text: p.text },
  ]));
  let open = [], matched = 0, moves = 0, lock = false;

  box.replaceChildren(el("p", "game-q", "Flip two cards to match each person with what they did."));
  const status = el("p", "game-progress", "Moves: 0");
  const grid = el("div", "match-grid");
  cards.forEach((c) => {
    const card = btn("?", "match-card", () => {
      if (lock || card.classList.contains("flipped")) return;
      card.classList.add("flipped", c.kind);
      card.textContent = c.text;
      open.push({ c, card });
      if (open.length < 2) return;
      moves++;
      status.textContent = `Moves: ${moves}`;
      const [a, b] = open;
      open = [];
      if (a.c.id === b.c.id && a.c.kind !== b.c.kind) {
        a.card.classList.add("done"); b.card.classList.add("done");
        a.card.disabled = b.card.disabled = true;
        if (++matched === people.length) {
          box.append(el("p", "game-big", `All matched in ${moves} moves! 🎉`), btn("Play again", "primary", startMatch));
        }
      } else {
        lock = true;
        setTimeout(() => {
          [a, b].forEach(({ card: k }) => { k.classList.remove("flipped", "name", "clue"); k.textContent = "?"; });
          lock = false;
        }, 1100);
      }
    });
    grid.append(card);
  });
  box.append(status, grid);
}

startQuiz();
startOrder();
startMatch();

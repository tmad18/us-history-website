const ERAS = [
  { id: "colonial", name: "Colonial America", years: "1607–1763",
    text: "English settlement begins at Jamestown and Plymouth. Thirteen colonies grow on farming, trade, and enslaved labor, and develop their own traditions of self-government." },
  { id: "revolution", name: "Revolution & New Nation", years: "1763–1800",
    text: "Disputes over taxes and representation lead to independence. The new nation tries the Articles of Confederation, then writes the Constitution and Bill of Rights." },
  { id: "expansion", name: "Expansion & Reform", years: "1800–1848",
    text: "The country doubles in size and pushes west, displacing Native nations. Reform movements for abolition, women's rights, and education take hold." },
  { id: "civilwar", name: "Civil War & Reconstruction", years: "1848–1877",
    text: "The fight over slavery's expansion splits the nation. After four years of war, slavery is abolished and Reconstruction attempts to rebuild the South." },
  { id: "gilded", name: "Gilded Age & Progressive Era", years: "1877–1914",
    text: "Railroads, factories, and immigration transform the economy. Progressives push back against corruption, monopolies, and unsafe working conditions." },
  { id: "worldwars", name: "World Wars & Depression", years: "1914–1945",
    text: "The U.S. fights in World War I, booms in the 1920s, and falls into the Great Depression. The New Deal reshapes government, and World War II makes the U.S. a superpower." },
  { id: "coldwar", name: "Cold War & Civil Rights", years: "1945–1991",
    text: "Rivalry with the Soviet Union shapes foreign policy. At home, the civil rights movement wins landmark laws against segregation and discrimination." },
  { id: "modern", name: "Modern America", years: "1991–Present",
    text: "The digital age, globalization, the September 11 attacks, and new debates over the economy, immigration, and the country's role in the world." },
];

const EVENTS = [
  { year: 1607, era: "colonial", event: "Jamestown founded", detail: "The first permanent English settlement in North America is established in Virginia." },
  { year: 1619, era: "colonial", event: "First enslaved Africans arrive in Virginia", detail: "Also the year the Virginia House of Burgesses, the first colonial legislature, first meets." },
  { year: 1620, era: "colonial", event: "Mayflower Compact", detail: "Pilgrims sign an agreement for self-government before landing at Plymouth." },
  { year: 1754, era: "colonial", event: "French and Indian War begins", detail: "Britain and France fight for control of North America; Britain wins in 1763." },
  { year: 1765, era: "revolution", event: "Stamp Act", detail: "Parliament taxes printed materials, sparking protests of “no taxation without representation.”" },
  { year: 1773, era: "revolution", event: "Boston Tea Party", detail: "Colonists dump British tea into Boston Harbor to protest the Tea Act." },
  { year: 1775, era: "revolution", event: "Battles of Lexington and Concord", detail: "The first shots of the American Revolution are fired in Massachusetts." },
  { year: 1776, era: "revolution", event: "Declaration of Independence", detail: "The Continental Congress adopts the Declaration on July 4." },
  { year: 1783, era: "revolution", event: "Treaty of Paris", detail: "Britain formally recognizes American independence." },
  { year: 1787, era: "revolution", event: "Constitution written", detail: "Delegates in Philadelphia draft the U.S. Constitution; it is ratified in 1788." },
  { year: 1791, era: "revolution", event: "Bill of Rights ratified", detail: "The first ten amendments protect freedoms like speech, religion, and a fair trial." },
  { year: 1803, era: "expansion", event: "Louisiana Purchase", detail: "The U.S. buys about 828,000 square miles from France, roughly doubling its size." },
  { year: 1812, era: "expansion", event: "War of 1812", detail: "The U.S. and Britain fight over trade restrictions and impressment of sailors; it ends in 1815." },
  { year: 1830, era: "expansion", event: "Indian Removal Act", detail: "Leads to the forced removal of Native nations, including the Cherokee's Trail of Tears." },
  { year: 1846, era: "expansion", event: "Mexican-American War", detail: "Ends in 1848 with the U.S. gaining California and much of the Southwest." },
  { year: 1848, era: "expansion", event: "Seneca Falls Convention", detail: "The first women's rights convention calls for equality, including the right to vote." },
  { year: 1857, era: "civilwar", event: "Dred Scott decision", detail: "The Supreme Court rules that Black Americans are not citizens, deepening the national divide." },
  { year: 1861, era: "civilwar", event: "Civil War begins", detail: "Confederate forces fire on Fort Sumter after Southern states secede." },
  { year: 1863, era: "civilwar", event: "Emancipation Proclamation & Gettysburg", detail: "Lincoln declares enslaved people in Confederate states free; the Union wins at Gettysburg." },
  { year: 1865, era: "civilwar", event: "War ends; 13th Amendment", detail: "Lee surrenders at Appomattox, Lincoln is assassinated, and slavery is abolished." },
  { year: 1869, era: "gilded", event: "Transcontinental Railroad completed", detail: "Rail lines meet at Promontory Summit, Utah, linking the coasts." },
  { year: 1896, era: "gilded", event: "Plessy v. Ferguson", detail: "The Supreme Court upholds “separate but equal” segregation." },
  { year: 1906, era: "gilded", event: "Pure Food and Drug Act", detail: "A key Progressive Era law regulating food and medicine safety." },
  { year: 1917, era: "worldwars", event: "U.S. enters World War I", detail: "The U.S. joins the Allies; the war ends in November 1918." },
  { year: 1920, era: "worldwars", event: "19th Amendment", detail: "Women win the right to vote nationwide." },
  { year: 1929, era: "worldwars", event: "Stock market crash", detail: "The crash helps set off the Great Depression." },
  { year: 1933, era: "worldwars", event: "New Deal begins", detail: "Franklin D. Roosevelt launches programs for relief, recovery, and reform." },
  { year: 1941, era: "worldwars", event: "Pearl Harbor", detail: "Japan attacks the U.S. naval base in Hawaii, bringing the U.S. into World War II." },
  { year: 1945, era: "worldwars", event: "World War II ends", detail: "Germany surrenders in May and Japan in September after the atomic bombings." },
  { year: 1954, era: "coldwar", event: "Brown v. Board of Education", detail: "The Supreme Court rules school segregation unconstitutional." },
  { year: 1955, era: "coldwar", event: "Montgomery Bus Boycott", detail: "Sparked by Rosa Parks' arrest, the boycott lasts over a year and ends bus segregation in Montgomery." },
  { year: 1962, era: "coldwar", event: "Cuban Missile Crisis", detail: "A 13-day standoff with the Soviet Union over nuclear missiles in Cuba." },
  { year: 1963, era: "coldwar", event: "March on Washington", detail: "Martin Luther King Jr. delivers his “I Have a Dream” speech." },
  { year: 1964, era: "coldwar", event: "Civil Rights Act", detail: "Outlaws discrimination based on race, color, religion, sex, or national origin." },
  { year: 1969, era: "coldwar", event: "Moon landing", detail: "Apollo 11 astronauts Neil Armstrong and Buzz Aldrin walk on the Moon." },
  { year: 1973, era: "coldwar", event: "U.S. withdraws from Vietnam", detail: "The Paris Peace Accords end direct U.S. combat involvement." },
  { year: 1989, era: "coldwar", event: "Fall of the Berlin Wall", detail: "Signals the end of the Cold War; the Soviet Union dissolves in 1991." },
  { year: 2001, era: "modern", event: "September 11 attacks", detail: "Terrorist attacks kill nearly 3,000 people and lead to the war in Afghanistan." },
  { year: 2008, era: "modern", event: "Great Recession & Obama elected", detail: "A financial crisis hits the economy; Barack Obama becomes the first Black president." },
  { year: 2020, era: "modern", event: "COVID-19 pandemic", detail: "A global pandemic disrupts daily life, schools, and the economy." },
];

const DOCUMENTS = [
  { title: "Mayflower Compact", year: 1620, text: "An early agreement for self-government signed by the Pilgrims aboard the Mayflower.",
    url: "https://en.wikipedia.org/wiki/Mayflower_Compact" },
  { title: "Declaration of Independence", year: 1776, text: "Announces the colonies' independence and states that all men are created equal with unalienable rights.",
    url: "https://www.archives.gov/founding-docs/declaration-transcript" },
  { title: "Articles of Confederation", year: 1781, text: "The first national constitution, which created a weak central government.",
    url: "https://en.wikipedia.org/wiki/Articles_of_Confederation" },
  { title: "U.S. Constitution", year: 1787, text: "Establishes the federal government, separation of powers, and checks and balances.",
    url: "https://www.archives.gov/founding-docs/constitution-transcript" },
  { title: "Bill of Rights", year: 1791, text: "The first ten amendments, protecting individual liberties from government overreach.",
    url: "https://www.archives.gov/founding-docs/bill-of-rights-transcript" },
  { title: "Emancipation Proclamation", year: 1863, text: "Lincoln's order declaring enslaved people in Confederate-held states to be free.",
    url: "https://www.archives.gov/exhibits/featured-documents/emancipation-proclamation" },
  { title: "Gettysburg Address", year: 1863, text: "Lincoln's short speech redefining the war as a struggle for freedom and equality.",
    url: "https://en.wikipedia.org/wiki/Gettysburg_Address" },
  { title: "19th Amendment", year: 1920, text: "Guarantees that the right to vote cannot be denied on account of sex.",
    url: "https://en.wikipedia.org/wiki/Nineteenth_Amendment_to_the_United_States_Constitution" },
  { title: "Civil Rights Act of 1964", year: 1964, text: "Landmark law ending legal segregation in public places and banning job discrimination.",
    url: "https://en.wikipedia.org/wiki/Civil_Rights_Act_of_1964" },
];

const PEOPLE = [
  { name: "George Washington", years: "1732–1799", text: "Commanded the Continental Army and served as the first president.", wiki: "George_Washington" },
  { name: "Thomas Jefferson", years: "1743–1826", text: "Main author of the Declaration of Independence and third president; made the Louisiana Purchase.", wiki: "Thomas_Jefferson" },
  { name: "Benjamin Franklin", years: "1706–1790", text: "Printer, scientist, and diplomat who helped secure French support during the Revolution.", wiki: "Benjamin_Franklin" },
  { name: "Abraham Lincoln", years: "1809–1865", text: "Sixteenth president; led the Union through the Civil War and pushed to end slavery.", wiki: "Abraham_Lincoln" },
  { name: "Frederick Douglass", years: "1818–1895", text: "Escaped slavery and became a leading abolitionist writer and speaker.", wiki: "Frederick_Douglass" },
  { name: "Harriet Tubman", years: "c. 1822–1913", text: "Escaped slavery and guided dozens of others to freedom on the Underground Railroad.", wiki: "Harriet_Tubman" },
  { name: "Susan B. Anthony", years: "1820–1906", text: "Leader of the women's suffrage movement; the 19th Amendment is often called the Anthony Amendment.", wiki: "Susan_B._Anthony" },
  { name: "Theodore Roosevelt", years: "1858–1919", text: "Progressive president who broke up trusts and protected millions of acres of public land.", wiki: "Theodore_Roosevelt" },
  { name: "Franklin D. Roosevelt", years: "1882–1945", text: "Led the nation through the Great Depression with the New Deal and through most of World War II.", wiki: "Franklin_D._Roosevelt" },
  { name: "Rosa Parks", years: "1913–2005", text: "Her refusal to give up her bus seat in 1955 sparked the Montgomery Bus Boycott.", wiki: "Rosa_Parks" },
  { name: "Martin Luther King Jr.", years: "1929–1968", text: "Led the civil rights movement through nonviolent protest; won the Nobel Peace Prize in 1964.", wiki: "Martin_Luther_King_Jr." },
  { name: "Sonia Sotomayor", years: "b. 1954", text: "First Hispanic justice on the U.S. Supreme Court, appointed in 2009.", wiki: "Sonia_Sotomayor" },
];

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};

function renderEras() {
  const grid = document.getElementById("era-grid");
  ERAS.forEach((era) => {
    const card = el("article", "era");
    card.append(el("div", "years", era.years), el("h3", null, era.name), el("p", null, era.text));
    const btn = el("button", null, "See events →");
    btn.type = "button";
    btn.addEventListener("click", () => {
      setFilter(era.id);
      document.getElementById("timeline").scrollIntoView();
    });
    card.append(btn);
    grid.append(card);
  });
}

let currentFilter = "all";

function renderFilters() {
  const wrap = document.getElementById("filters");
  [{ id: "all", name: "All eras" }, ...ERAS].forEach((era) => {
    const b = el("button", null, era.name);
    b.type = "button";
    b.dataset.era = era.id;
    b.setAttribute("aria-pressed", String(era.id === currentFilter));
    b.addEventListener("click", () => setFilter(era.id));
    wrap.append(b);
  });
}

function setFilter(id) {
  currentFilter = id;
  document.querySelectorAll("#filters button").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.era === id));
  });
  renderTimeline();
}

function renderTimeline() {
  const list = document.getElementById("timeline-list");
  list.replaceChildren();
  EVENTS.filter((e) => currentFilter === "all" || e.era === currentFilter).forEach((e) => {
    const li = el("li");
    li.append(el("div", "year", String(e.year)), el("div", "event", e.event), el("p", "detail", e.detail));
    list.append(li);
  });
}

function link(href, text) {
  const a = el("a", null, text);
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener";
  return a;
}

function renderDocuments() {
  const grid = document.getElementById("doc-grid");
  DOCUMENTS.forEach((d) => {
    const card = el("article", "card");
    card.append(el("div", "meta", String(d.year)), el("h3", null, d.title), el("p", null, d.text), link(d.url, "Read more →"));
    grid.append(card);
  });
}

function renderPeople() {
  const grid = document.getElementById("people-grid");
  PEOPLE.forEach((p) => {
    const card = el("article", "card");
    card.append(el("div", "meta", p.years), el("h3", null, p.name), el("p", null, p.text),
      link("https://en.wikipedia.org/wiki/" + p.wiki, "Learn more →"));
    grid.append(card);
  });
}

renderEras();
renderFilters();
renderTimeline();
renderDocuments();
renderPeople();

/* ---------- In-site research (Wikipedia) ---------- */
const WIKI_API = "https://en.wikipedia.org/w/api.php";
const SKIP_SECTIONS = new Set(["See also", "References", "External links", "Notes", "Further reading",
  "Bibliography", "Sources", "Citations", "Footnotes", "Works cited", "Explanatory notes"]);

const panel = document.getElementById("research-panel");
const resultsEl = document.getElementById("results");
const statusEl = document.getElementById("results-status");
const reader = document.getElementById("reader");
const ddgLink = document.getElementById("ddg-link");

async function wiki(params) {
  const url = WIKI_API + "?" + new URLSearchParams({ format: "json", origin: "*", ...params });
  const res = await fetch(url);
  if (!res.ok) throw new Error("Request failed: " + res.status);
  return res.json();
}

function stripTags(html) {
  const d = document.createElement("div");
  d.innerHTML = html;
  return d.textContent;
}

async function runSearch(q) {
  panel.hidden = false;
  panel.scrollIntoView();
  ddgLink.href = "https://duckduckgo.com/?q=" + encodeURIComponent(q);
  statusEl.textContent = "Searching…";
  resultsEl.replaceChildren();
  try {
    const data = await wiki({ action: "query", list: "search", srsearch: q, srlimit: "12" });
    const hits = data.query.search;
    statusEl.textContent = hits.length ? `${hits.length} results for “${q}”` : `No results for “${q}”.`;
    hits.forEach((h, i) => {
      const li = el("li");
      const b = el("button");
      b.type = "button";
      b.append(el("strong", null, h.title), el("span", null, stripTags(h.snippet) + "…"));
      b.addEventListener("click", () => openArticle(h.title, b));
      li.append(b);
      resultsEl.append(li);
      if (i === 0) openArticle(h.title, b, false);
    });
  } catch (err) {
    statusEl.textContent = "Couldn't load results. Check your connection and try again.";
  }
}

async function openArticle(title, btn, scroll = true) {
  resultsEl.querySelectorAll("button").forEach((b) => b.removeAttribute("aria-current"));
  if (btn) btn.setAttribute("aria-current", "true");
  reader.replaceChildren(el("p", "muted", "Loading…"));
  if (scroll && window.innerWidth <= 760) reader.scrollIntoView();
  try {
    const data = await wiki({
      action: "query", prop: "extracts|pageimages|info", explaintext: "1", exsectionformat: "wiki",
      piprop: "thumbnail", pithumbsize: "500", inprop: "url", redirects: "1", titles: title,
    });
    const page = Object.values(data.query.pages)[0];
    renderArticle(page);
  } catch (err) {
    reader.replaceChildren(el("p", "muted", "Couldn't load this article."));
  }
}

function renderArticle(page) {
  reader.replaceChildren();
  reader.scrollTop = 0;
  const head = el("div", "reader-head");
  head.append(el("h2", null, page.title));
  const save = el("button", "primary");
  save.type = "button";
  const setSaveLabel = () => { save.textContent = isSaved(page.fullurl) ? "✓ Saved" : "Save to notebook"; };
  setSaveLabel();
  save.addEventListener("click", () => { toggleSaved(page.title, page.fullurl); setSaveLabel(); });
  head.append(save, link(page.fullurl, "View on Wikipedia ↗"));
  reader.append(head);

  if (page.thumbnail) {
    const img = el("img", "thumb");
    img.src = page.thumbnail.source;
    img.alt = page.title;
    img.loading = "lazy";
    reader.append(img);
  }

  let skipping = false;
  let pendingHeading = null;
  (page.extract || "").split("\n").forEach((raw) => {
    const line = raw.trim();
    if (!line) return;
    const m = line.match(/^(=+)\s*(.*?)\s*=+$/);
    if (m) {
      const level = m[1].length;
      if (level === 2) skipping = SKIP_SECTIONS.has(m[2]);
      if (!skipping) pendingHeading = el(level === 2 ? "h3" : "h4", null, m[2]);
      return;
    }
    if (skipping) return;
    if (pendingHeading) { reader.append(pendingHeading); pendingHeading = null; }
    reader.append(el("p", null, line));
  });

  const credit = el("p", "credit");
  credit.append("Text from Wikipedia, available under ", link("https://creativecommons.org/licenses/by-sa/4.0/", "CC BY-SA 4.0"), ".");
  reader.append(credit);
}

document.getElementById("search-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const q = document.getElementById("q").value.trim();
  if (q) runSearch(q);
});
document.getElementById("close-panel").addEventListener("click", () => {
  panel.hidden = true;
  document.getElementById("top").scrollIntoView();
});

/* ---------- Research notebook ---------- */
const NB_KEY = "ush-notebook";
let notebook = { saved: [], notes: "" };
try { notebook = { ...notebook, ...JSON.parse(localStorage.getItem(NB_KEY) || "{}") }; } catch (e) {}

function persist() {
  try { localStorage.setItem(NB_KEY, JSON.stringify(notebook)); return true; } catch (e) { return false; }
}
const isSaved = (url) => notebook.saved.some((s) => s.url === url);

function toggleSaved(title, url) {
  if (isSaved(url)) notebook.saved = notebook.saved.filter((s) => s.url !== url);
  else notebook.saved.push({ title, url });
  persist();
  renderSaved();
}

function renderSaved() {
  const list = document.getElementById("saved-list");
  list.replaceChildren();
  if (!notebook.saved.length) {
    list.append(el("li", "empty", "Nothing saved yet. Use “Save to notebook” on any article."));
    return;
  }
  notebook.saved.forEach((s) => {
    const li = el("li");
    const open = el("button", "title", s.title);
    open.type = "button";
    open.addEventListener("click", () => {
      panel.hidden = false;
      panel.scrollIntoView();
      openArticle(s.title, null);
    });
    const rm = el("button", "remove", "×");
    rm.type = "button";
    rm.setAttribute("aria-label", "Remove " + s.title);
    rm.addEventListener("click", () => toggleSaved(s.title, s.url));
    li.append(open, rm);
    list.append(li);
  });
}

const notesEl = document.getElementById("notes");
const notesStatus = document.getElementById("notes-status");
notesEl.value = notebook.notes;
let notesTimer;
notesEl.addEventListener("input", () => {
  clearTimeout(notesTimer);
  notesTimer = setTimeout(() => {
    notebook.notes = notesEl.value;
    notesStatus.textContent = persist() ? "Saved" : "Couldn't save in this browser.";
  }, 400);
});

document.getElementById("clear-notebook").addEventListener("click", () => {
  if (!confirm("Clear all saved sources and notes?")) return;
  notebook = { saved: [], notes: "" };
  notesEl.value = "";
  persist();
  renderSaved();
});

renderSaved();

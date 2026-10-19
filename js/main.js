/* ===== Edit content here ===== */
const SOCIALS = [
  ["linkedin", "https://www.linkedin.com/in/harshit2123/"],
  ["github", "https://github.com/harshit2123"],
  // ['x','https://x.com/yourhandle'],
  // ['leetcode','https://leetcode.com/u/yourname'],
];

/* short: what shows before opening (keep it under ~8 words)
   feat: shows a screenshot frame; images:['images/file.png', ...] lists its pictures
   start/end: [year, month] on jobs; adds the duration to the card and the total experience (no end = still there) */
const STOPS = [
  {
    year: 2026,
    now: true,
    type: "work",
    start: [2025, 2],
    when: "Feb 2025 – now",
    title: "Full-stack developer @ UNIQODE",
    short: "Shipping features for 60k+ users",
    bullets: [
      "Built a Dependabot vulnerability tracker that uses the Claude API to triage dependency updates and make safe-to-merge calls across 48 AWS Lambda functions",
      "Architected LinkPage domain management: multi-domain routing, custom domain verification, org-level access control and admin workflows for a 60K+ user platform",
      "Built a domain migration bridge from the legacy Polo platform to Uniqode, remapping DNS and config across systems. It unlocked a $20K customer deal within a week",
      "Engineered a watchlist system with async daily digest pipelines on Redis + Celery, sending link analytics to 5,000+ active users a day",
      "Designed threaded comments with @mentions and real-time updates on shared links, adopted by ~20% of active users in the first month",
      "Shipped age gating, browser titles, deep links and link analytics to ~15,000 monthly active users",
      "Wrote 250+ Datadog synthetic tests across UI flows, REST APIs and end-to-end journeys, cutting post-deploy issues by 30%",
    ],
    stack:
      "Python · Django REST · React · Redis · Celery · AWS Lambda · LocalStack · GitHub API · Claude API · Datadog",
    feat: true,
    images: ["images/uniqode-values.jpeg"],
  },

  {
    year: 2026,
    type: "project",
    feat: true,
    when: "Aug 2026",
    title: "LLM observability platform",
    short: "A chatbot that logs every model call",
    text: "An observability platform with a chatbot attached. Every model call is captured automatically: provider, model, latency, tokens, status and errors. Logs spool to disk first, so telemetry never slows the chat or breaks when the database is down. Cards, emails and phone numbers are redacted before storage, and everything shows on a dashboard.",
    bullets: [
      "Works with OpenRouter, Anthropic and a mock provider",
      "Streaming chat with a two-sided cancel button",
      "Latency, throughput and error charts",
      "PII redaction with Luhn-validated card numbers",
      "One command to run: docker compose up",
    ],
    stack: "FastAPI · PostgreSQL · Redis · React · Docker · 98 tests",
    url: "Chatbot-App",
    links: [
      [
        "video ↗",
        "https://www.loom.com/share/c52103f08d4d477fa04ec899ce3d168f",
      ],
      ["code ↗", "https://github.com/harshit2123/Chatbot-App"],
    ],
    images: ["images/llm-observability.png"],
  },

  {
    year: 2026,
    type: "project",
    feat: true,
    when: "May – Jun 2026",
    title: "Lincom",
    short: "An AI that tames your LinkedIn inbox",
    text: "Built with Komal Singh. A Chrome extension that sorts invites by intent, labels messages as spam, promo, routine or important, and drafts replies you approve before sending. Your LinkedIn login never leaves the browser.",
    stack: "React · TypeScript · Node · MongoDB · Claude API",
    images: [
      "images/lincom-dashboard.png",
      "images/lincom-landing.png",
      "images/lincom-extension.jpeg",
    ],
    url: "lincom",
    links: [
      ["website ↗", "https://lnkd.in/dG-GCdSi"],
      ["chrome store ↗", "https://lnkd.in/df9d4U_8"],
    ],
  },

  {
    year: 2026,
    type: "milestone",
    when: "May 2026",
    title: "OpenAI Codex hackathon",
    short: "Turned a JS repo into Rust",
    text: "Selected for the Bengaluru edition. Our tool had Codex read a JavaScript codebase, split it into modules, and rewrite each one in idiomatic Rust.",
    feat: true,
    images: ["images/codex-hackathon-1.jpeg", "images/codex-hackathon-2.jpeg"],
    note: "so many builders in one room!",
  },

  {
    year: 2026,
    type: "milestone",
    when: "Apr 2026",
    title: "Agentic AI course",
    short: "8 agent projects in 6 weeks",
    text: "Built with CrewAI, LangGraph, AutoGen and MCP, including a 44-tool trading floor that runs on its own.",
    feat: true,
    images: ["images/udemy-certificate.jpeg"],
  },

  {
    year: 2026,
    type: "project",
    feat: true,
    when: "Feb – Apr 2026",
    title: "Voice support agent",
    short: "Call it and talk like a human",
    text: "AssemblyAI hears you, GPT-4.1 Mini decides, Cartesia speaks back, fast enough for a normal chat. When it's stuck it hands off to a human, and learns that answer for next time.",
    stack: "Python · LiveKit · Next.js · Node · MongoDB",
    images: ["images/voice-agent.png"],
    url: "voice-agent",
    links: [
      [
        "demo ↗",
        "https://drive.google.com/file/d/1llirDWjo0sRymr-ceWv1DZ__EFRSZv7_/view?usp=sharing",
      ],
      [
        "older demo ↗",
        "https://drive.google.com/file/d/1SDNYdZsG7qbtdjEcDrPLzv7P-iffrnhx/view",
      ],
      ["code ↗", "https://github.com/harshit2123/agent-app"],
    ],
  },

  {
    year: 2025,
    type: "milestone",
    when: "May 2025",
    title: "Graduated, NIT Bhopal",
    short: "Electrical engineer who codes",
    text: "B.Tech in Electrical and Electronics, 8.0 CGPA. I taught myself the software part.",
  },

  {
    year: 2025,
    type: "project",
    feat: true,
    when: "Jan 2025",
    title: "AI coding helper",
    short: "Gemini inside a coding site",
    text: "Built for the AlgoZenith Hackathon: a Chrome extension that brings AI help to maang.in. It detects the problem you're on, keeps a separate chat history for each one, and formats code in replies. Built with a focus on secure, personal API key storage.",
    bullets: [
      "Reads the problem context automatically and passes it to the AI",
      "Separate persistent chat history for every problem",
      "Formats and highlights code snippets in replies",
      "Chatbox adapts to any screen size",
      "Personal API key management with secure storage",
    ],
    stack: "JavaScript · Gemini API · Chrome extension",
    images: ["images/ai-coding-helper.png"],
    url: "maang.in",
    links: [
      [
        "video ↗",
        "https://drive.google.com/file/d/1cy2D-lzPTYwFHiJWvVJM-K2fWncqDuBs/view",
      ],
      ["demo ↗", "https://lnkd.in/gEcMK9rG"],
      ["code ↗", "https://github.com/harshit2123"],
    ],
  },

  {
    year: 2024,
    type: "project",
    when: "Nov 2024",
    title: "Whiteboard",
    short: "Draw anything, undo everything",
    text: "Canvas app with shapes, arrows, freehand, text and undo/redo.",
    stack: "React · Canvas · Tailwind",
    links: [["code ↗", "https://github.com/harshit2123/whiteboard"]],
  },

  {
    year: 2024,
    type: "project",
    when: "Jul – Aug 2024",
    title: "Spud",
    short: "Spots potato diseases from a photo",
    text: "A CNN with ~95% accuracy, served through FastAPI to Flutter and React apps.",
    stack: "TensorFlow · FastAPI · Flutter · React",
    links: [
      ["code ↗", "https://github.com/harshit2123/Potato-Disease-React-App"],
    ],
  },

  {
    year: 2024,
    type: "project",
    when: "May – Jul 2024",
    title: "Object counter",
    short: "Counts and sorts things with YOLO",
    text: "Flutter app talking to a YOLOv8 model on Azure.",
    stack: "Flutter · FastAPI · YOLOv8 · Azure",
    links: [["code ↗", "https://github.com/harshit2123"]],
  },

  {
    year: 2024,
    type: "work",
    start: [2023, 6],
    end: [2024, 5],
    when: "Jun 2023 – May 2024",
    title: "Flutter developer @ StoxHero",
    short: "Real-time stock trading on iOS + Android",
    bullets: [
      "Built a real-time stock trading module with live market data feeds, lifting user engagement 25% and transaction frequency 30% within three months",
      "One Flutter codebase for iOS and Android, with Dio for backend APIs and WebSockets for instant price updates",
      "Owned critical features of the trading module, about 8–9% of the entire app codebase",
    ],
    stack: "Flutter · Dart · Dio · WebSockets · REST APIs",
    note: "first dev job!",
  },

  {
    year: 2023,
    type: "milestone",
    when: "Dec 2023",
    title: "100xDevs cohort",
    short: "Learned the MERN stack properly",
  },

  /* the next two have no start/end on purpose: they show versatility but don't count toward total experience */
  {
    year: 2023,
    type: "work",
    when: "Dec 2022 – May 2023 · 6 mos",
    title: "Options trader @ StoxHero",
    short: "₹90K profit on ₹5L in six months",
    bullets: [
      "Traded Nifty and Bank Nifty index options intraday for six months, before moving to the app team",
      "Took entries on 9 EMA / 15 EMA crossovers, confirmed with price action: support and resistance, breakouts and candlestick structure",
      "Checked volume and open interest (OI) build-up before every trade to make sure a move had real participation behind it",
      "Picked strikes by moneyness: ATM and slightly ITM options for higher delta, staying away from deep OTM contracts that bleed to theta decay",
      "Set the stop-loss and position size before each entry; grew ₹5 lakh of capital by ₹90,000, an 18% return in six months",
      "Learned the trader side of the product first-hand, which shaped the trading app I built next",
    ],
    stack:
      "Index options · ITM / ATM / OTM · 9 & 15 EMA · Price action · Volume · Open interest · Risk management",
  },

  {
    year: 2022,
    type: "work",
    when: "Jul – Dec 2022 · 6 mos",
    title: "Product & growth manager @ ninepointer",
    short: "Product + YouTube growth for an edtech",
    bullets: [
      "Owned YouTube growth for an edtech platform: content strategy, publishing cadence and audience growth",
      "Ran YouTube SEO: keyword research, then titles, descriptions, tags, chapters and thumbnails written to rank in search and suggested videos",
      "Ran video operations end to end, from topic research and scripts to recording, editing and a weekly content calendar, coordinating creators and editors",
      "Read YouTube Analytics (impressions, click-through rate, watch time, retention) to decide what to make next",
      "Worked as product manager on the platform: turned learner and creator feedback into feature requirements and prioritised them with the dev team",
    ],
    stack:
      "Product management · YouTube SEO · Keyword research · YouTube Analytics · Content strategy · Video operations",
  },

  {
    year: 2021,
    type: "milestone",
    when: "Jul 2021",
    title: "Started college",
    short: "Where it all began",
    text: "Started grinding DSA here. 900+ problems on LeetCode and Codeforces since.",
  },
];
/* ============================= */

/* escape text so content can't inject HTML */
const esc = (s) =>
  String(s).replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
  );
/* label shown on each card's type tag */
const kindLabel = { project: "project", work: "job", milestone: "milestone" };
/* hand-drawn + icon; CSS rotates it to × when a card opens */
const PLUS =
  '<svg class="plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M12.2 4.5c-.3 5-.2 10 .1 15M4.6 11.8c5-.3 10-.2 15 .2"/></svg>';

/* months worked in a job, counted inclusively like LinkedIn; no end = still there */
function months(s) {
  const now = new Date(),
    [ey, em] = s.end || [now.getFullYear(), now.getMonth() + 1];
  return (ey - s.start[0]) * 12 + em - s.start[1] + 1;
}
/* 21 -> "1 yr 9 mos" */
const fmtMonths = (m) =>
  [
    [Math.floor(m / 12), "yr"],
    [m % 12, "mo"],
  ]
    .filter(([n]) => n)
    .map(([n, u]) => `${n} ${u}${n > 1 ? "s" : ""}`)
    .join(" ");
/* total experience across every job with a start date, shown wherever [data-exp] appears */
const TOTAL_EXP = fmtMonths(
  STOPS.filter((s) => s.start).reduce((t, s) => t + months(s), 0),
);
document
  .querySelectorAll("[data-exp]")
  .forEach((el) => (el.textContent = TOTAL_EXP));

/* render social links into the contact section */
document.getElementById("socials").innerHTML = SOCIALS.map(
  ([n, u]) => `<a href="${u}" target="_blank" rel="noopener">${n}</a>`,
).join("");

/* build one timeline card; s = stop data, i = index, side = 'l' or 'r' */
function stop(s, i, side) {
  const id = "stop-" + i;
  const hasBody = s.text || s.bullets || s.stack || s.links || s.feat || s.note;
  const shots = s.images || [];
  return `<li class="row ${side}${s.now ? " now" : ""}"><span class="dot" aria-hidden="true"></span>
    <div class="card${s.now ? " open" : ""}">
      <button class="head" ${hasBody ? `aria-expanded="${!!s.now}" aria-controls="${id}"` : 'disabled style="cursor:default"'}>
        <span class="when">${esc(s.when)}${s.start ? ` · ${fmtMonths(months(s))}` : ""} <span class="kind ${s.type}">${kindLabel[s.type]}</span></span>
        <span class="title">${esc(s.title)}</span>
        <span class="short">${esc(s.short)}</span>
        ${hasBody ? PLUS : ""}
      </button>
      ${
        hasBody
          ? `<div class="body" id="${id}"><div><div class="inner">
        ${s.text ? `<p>${esc(s.text)}</p>` : ""}
        ${s.bullets ? `<ul>${s.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
        ${
          s.feat
            ? `<div class="shot"><div class="bar"><i></i><i></i><i></i><span>${esc(s.url || "")}</span></div>
          <div class="track">${shots.map((src) => `<div class="view"><img src="${esc(src)}" alt="Screenshot of ${esc(s.title)}" loading="lazy"></div>`).join("") || '<div class="view"><em>screenshot goes here</em></div>'}</div></div>`
            : ""
        }
        ${s.stack ? `<div class="stack">${esc(s.stack)}</div>` : ""}
        ${s.links ? `<div class="links">${s.links.map(([l, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(l)}</a>`).join("")}</div>` : ""}
        ${s.note ? `<span class="note">${esc(s.note)}</span>` : ""}
      </div></div></div>`
          : ""
      }
    </div></li>`;
}

const flow = document.getElementById("flow");
/* draw the timeline for a filter: 'all', 'project', 'work' or 'milestone' */
function render(f) {
  let html =
      f === "work"
        ? `<li class="row"><p class="total"><b>${TOTAL_EXP}</b> of work experience in total</p></li>`
        : "",
    y = null,
    side = 0;
  STOPS.forEach((s, i) => {
    if (f !== "all" && s.type !== f) return;
    if (s.year !== y) {
      html += `<li class="row"><span class="yr">${s.now && f === "all" ? "now" : s.year}</span></li>`;
      y = s.year;
    }
    html += stop(s, i, side++ % 2 ? "r" : "l");
  });
  flow.innerHTML = '<svg class="line" aria-hidden="true"></svg>' + html;
  drawLine();
}

/* pencil line that wiggles through every dot and year */
function drawLine() {
  const svg = flow.querySelector("svg.line");
  if (!svg) return;
  const box = flow.getBoundingClientRect();
  const pts = [...flow.querySelectorAll(".dot, .yr")].map((el) => {
    const b = el.getBoundingClientRect();
    return [b.left + b.width / 2 - box.left, b.top + b.height / 2 - box.top];
  });
  if (!pts.length) {
    svg.innerHTML = "";
    return;
  }
  const x0 = pts[0][0],
    end = [x0, box.height + 10];
  const all = [[x0, -10], ...pts, end];
  let d = `M${all[0][0]},${all[0][1]}`;
  for (let i = 1; i < all.length; i++) {
    const [ax, ay] = all[i - 1],
      [bx, by] = all[i],
      dy = by - ay,
      w = (i % 2 ? 1 : -1) * Math.min(26, dy * 0.25);
    d += ` C${ax + w},${ay + dy / 3} ${bx + w},${by - dy / 3} ${bx},${by}`;
  }
  svg.setAttribute("width", box.width);
  svg.setAttribute("height", box.height);
  svg.innerHTML = `<path d="${d}" fill="none" stroke="var(--graphite)" stroke-width="1.8" stroke-linecap="round" opacity=".8"/>
    <path d="${d}" fill="none" stroke="var(--graphite)" stroke-width="1" stroke-linecap="round" opacity=".35" transform="translate(1.4,1)"/>`;
}
/* redraw the pencil line whenever the timeline changes size */
new ResizeObserver(() => drawLine()).observe(flow);

/* open or close a card when its header is clicked (only cards with a body) */
flow.addEventListener("click", (e) => {
  const head = e.target.closest(".head[aria-expanded]");
  if (!head) return;
  const card = head.parentElement,
    open = !card.classList.contains("open");
  card.classList.toggle("open", open);
  head.setAttribute("aria-expanded", open);
});

/* filter buttons: mark the pressed one and re-render the timeline */
document.querySelectorAll(".filter button").forEach((b) =>
  b.addEventListener("click", () => {
    document
      .querySelectorAll(".filter button")
      .forEach((x) => x.setAttribute("aria-pressed", x === b));
    render(b.dataset.f);
  }),
);
render("all");
/* web fonts change text size, so redraw the line once they load */
if (document.fonts) document.fonts.ready.then(drawLine);

/* theme: use the saved choice if there is one, otherwise follow the OS */
const root = document.documentElement;
try {
  const t = localStorage.getItem("theme");
  if (t) root.dataset.theme = t;
} catch (e) {}
/* flip between light and dark, and remember the choice */
document.getElementById("themeBtn").addEventListener("click", () => {
  const dark = root.dataset.theme
    ? root.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = dark ? "light" : "dark";
  try {
    localStorage.setItem("theme", root.dataset.theme);
  } catch (e) {}
});

/* show a short message in the toast, hidden again after 1.8s */
const toast = document.getElementById("toast");
function say(m) {
  toast.textContent = m;
  toast.hidden = false;
  clearTimeout(say.t);
  say.t = setTimeout(() => (toast.hidden = true), 1800);
}
/* copy the email; if the clipboard is blocked, select it so the user can copy by hand */
document.getElementById("copyBtn").addEventListener("click", () => {
  const el = document.getElementById("email");
  const sel = () => {
    const r = document.createRange();
    r.selectNodeContents(el);
    const s = getSelection();
    s.removeAllRanges();
    s.addRange(r);
    say("selected, press Ctrl+C");
  };
  if (navigator.clipboard)
    navigator.clipboard
      .writeText(el.textContent.trim())
      .then(() => say("copied!"), sel);
  else sel();
});

/* ============================================================
   Qihang (Charlie) Wu — shared rendering script.
   Reads data from data/*.js and renders nav, footer, and the
   page-specific sections. Pages opt in via <body data-page="...">.
   ============================================================ */

(function () {
  "use strict";

  const S = window.SITE;

  // ---------- helpers ----------

  const esc = (s) =>
    String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // [text](url) → <a>, **text** → <b>
  const mdLinks = (s) =>
    esc(s)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");

  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const fmtDate = (ym) => {
    const [y, m] = ym.split("-");
    return `${MONTHS[parseInt(m, 10) - 1]} ${y}`;
  };

  // Names to bold in author lists.
  const selfNames = ["Qihang Wu"];

  const boldAuthors = (authors) => {
    let html = esc(authors);
    selfNames.forEach((n) => {
      html = html.split(esc(n)).join(`<b>${esc(n)}</b>`);
    });
    return html;
  };

  // ---------- nav + footer ----------

  function renderNav() {
    const page = document.body.dataset.page || "";
    const items = [
      ["index.html", "home", "Home"],
      ["research.html", "research", "Research"],
      ["publications.html", "publications", "Publications"],
      ["news.html", "news", "News"],
      ["cv.html", "cv", "CV"],
    ];
    const nav = document.createElement("header");
    nav.className = "nav";
    nav.innerHTML = `
      <div class="nav-inner">
        <a class="brand" href="index.html">
          <span><span class="brand-mark">${esc(S.firstName)}</span> Wu</span>
          <span class="brand-sub">${esc(S.institution)}</span>
        </a>
        <button class="nav-toggle" aria-label="Menu" aria-expanded="false">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <ul class="nav-links">
          ${items
            .map(
              ([href, key, label]) =>
                `<li><a href="${href}" class="${key === page ? "active" : ""}">${label}</a></li>`
            )
            .join("")}
        </ul>
      </div>`;
    document.body.prepend(nav);
    const toggle = nav.querySelector(".nav-toggle");
    const links = nav.querySelector(".nav-links");
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  function renderFooter() {
    const f = document.createElement("footer");
    f.className = "footer";
    f.innerHTML = `
      <div class="footer-inner">
        <div>
          <h4>${esc(S.name)}</h4>
          <p>${esc(S.title)}<br>${esc(S.institution)}<br>${esc(S.location)}</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p><a href="mailto:${esc(S.email)}">${esc(S.email)}</a></p>
          <div class="footer-links">
            <a href="${esc(S.links.scholar)}">Google Scholar</a>
            <a href="${esc(S.links.github)}">GitHub</a>
            <a href="${esc(S.links.linkedin)}">LinkedIn</a>
            <a href="${esc(S.links.cv)}">CV</a>
          </div>
          <p class="footer-note">© ${new Date().getFullYear()} ${esc(S.name)}</p>
        </div>
      </div>`;
    document.body.appendChild(f);
  }

  // ---------- news ----------

  function newsItemHTML(n) {
    return `
      <div class="news-item">
        <span class="news-date">${fmtDate(n.date)}</span>
        <span class="news-tag" data-tag="${esc(n.tag)}">${esc(n.tag)}</span>
        <span class="news-text">${mdLinks(n.text)}</span>
      </div>`;
  }

  function renderNews(el, limit) {
    const items = limit ? window.NEWS.slice(0, limit) : window.NEWS;
    el.innerHTML = `<div class="news-list">${items.map(newsItemHTML).join("")}</div>`;
  }

  // Full news archive: tag filters + year grouping.
  function renderNewsPage(listEl, controlsEl) {
    const TAGS = ["All", "Paper", "Talk", "Award", "Milestone", "Patent"];
    let tag = "All";

    function draw() {
      const items = window.NEWS.filter((n) => tag === "All" || n.tag === tag);
      const byYear = {};
      items.forEach((n) => (byYear[n.date.slice(0, 4)] = byYear[n.date.slice(0, 4)] || []).push(n));
      const years = Object.keys(byYear).sort((a, b) => b - a);
      listEl.innerHTML = years
        .map(
          (y) =>
            `<div class="pub-year">${y}</div>` +
            `<div class="news-list">${byYear[y].map(newsItemHTML).join("")}</div>`
        )
        .join("");
      controlsEl.querySelector(".pub-count").textContent =
        `${items.length} item${items.length === 1 ? "" : "s"}`;
    }

    controlsEl.innerHTML =
      TAGS.map(
        (t) => `<button class="pub-filter ${t === "All" ? "active" : ""}" data-tag="${t}">${t}</button>`
      ).join("") + `<span class="pub-count"></span>`;

    controlsEl.querySelectorAll(".pub-filter").forEach((btn) =>
      btn.addEventListener("click", () => {
        tag = btn.dataset.tag;
        controlsEl.querySelectorAll(".pub-filter").forEach((b) => b.classList.toggle("active", b === btn));
        draw();
      })
    );
    draw();
  }

  // ---------- publications ----------

  function pubItemHTML(p, opts) {
    const bold = !opts || opts.bold !== false;
    const titleLink = p.links && (p.links.Paper || Object.values(p.links)[0]);
    const title = titleLink
      ? `<a href="${esc(titleLink)}">${esc(p.title)}</a>`
      : esc(p.title);
    const awards = (p.awards || [])
      .map((a) => `<span class="award-badge">${esc(a)}</span>`)
      .join("");
    const links = Object.entries(p.links || {})
      .map(([k, v]) => `<a href="${esc(v)}">${esc(k)}</a>`)
      .join("");
    return `
      <div class="pub-item${p.type === "preprint" ? " is-preprint" : ""}">
        <div class="pub-title">${title}</div>
        <div class="pub-authors">${bold ? boldAuthors(p.authors) : esc(p.authors)}</div>
        <div class="pub-meta">
          <span class="venue-badge" title="${esc(p.venueFull || "")}">${esc(p.venue)} ${p.year}</span>
          ${awards}
          ${p.note ? `<span class="pub-note">${esc(p.note)}</span>` : ""}
          ${links ? `<span class="pub-links">${links}</span>` : ""}
        </div>
        ${opts && opts.tags ? areaChipsHTML(p) : ""}
      </div>`;
  }

  // Research areas: filter label, chip label, and accent color.
  // Keys match both `tags` in data/publications.js and `id` in
  // data/research.js.
  const AREAS = {
    eda: { label: "Agentic AI for EDA", chip: "Agentic AI for EDA", color: "#8c1d40" },
    hi: { label: "Heterogeneous Integration", chip: "Heterogeneous Integration", color: "#ff7f32" },
    architecture: { label: "Computer Architecture", chip: "Architecture", color: "#00a3e0" },
    circuits: { label: "Circuits & Memory", chip: "Circuits & Memory", color: "#5c9a1b" },
  };

  const areaChipsHTML = (p) => {
    const tags = (p.tags || []).filter((t) => AREAS[t]);
    if (!tags.length) return "";
    const chips = tags
      .map(
        (t) =>
          `<a class="area-chip" style="--chip:${AREAS[t].color}" data-area="${t}" ` +
          `href="publications.html?area=${t}" title="All ${esc(AREAS[t].label)} publications">${esc(AREAS[t].chip)}</a>`
      )
      .join("");
    return `<div class="pub-tags">${chips}</div>`;
  };

  function renderPublicationsPage(listEl, controlsEl) {
    const FILTERS = [
      ["all", "All"],
      ["selected", "Selected"],
      ...Object.entries(AREAS).map(([k, a]) => [k, a.label]),
    ];
    const counts = {
      all: window.PUBLICATIONS.length,
      selected: window.PUBLICATIONS.filter((p) => p.selected).length,
    };
    Object.keys(AREAS).forEach((k) => {
      counts[k] = window.PUBLICATIONS.filter((p) => (p.tags || []).includes(k)).length;
    });

    // Initial state comes from the URL (?area=...&q=...) so any
    // filtered view is linkable and shareable.
    const params = new URLSearchParams(location.search);
    let area = FILTERS.some(([k]) => k === params.get("area")) ? params.get("area") : "all";
    let query = (params.get("q") || "").trim();

    let urlTimer;
    function syncUrl() {
      clearTimeout(urlTimer);
      urlTimer = setTimeout(() => {
        const url = new URL(location.href);
        if (area === "all") url.searchParams.delete("area");
        else url.searchParams.set("area", area);
        if (query) url.searchParams.set("q", query);
        else url.searchParams.delete("q");
        history.replaceState(null, "", url);
      }, 150);
    }

    function matches(p) {
      if (area === "selected" && !p.selected) return false;
      if (area !== "all" && area !== "selected" && !(p.tags || []).includes(area)) return false;
      if (query) {
        const hay = `${p.title} ${p.authors} ${p.venue} ${p.venueFull || ""} ${p.year}`.toLowerCase();
        if (!query.toLowerCase().split(/\s+/).every((w) => hay.includes(w))) return false;
      }
      return true;
    }

    function draw() {
      const pubs = window.PUBLICATIONS.filter(matches);
      const byYear = {};
      pubs.forEach((p) => (byYear[p.year] = byYear[p.year] || []).push(p));
      const years = Object.keys(byYear).sort((a, b) => b - a);
      listEl.innerHTML = pubs.length
        ? years
            .map(
              (y) =>
                `<div class="pub-year">${y}<span class="pub-year-count">${byYear[y].length} paper${byYear[y].length === 1 ? "" : "s"}</span></div>` +
                byYear[y].map((p) => pubItemHTML(p, { tags: true })).join("")
            )
            .join("")
        : `<p class="pub-empty">No publications match. Try a different search or filter.</p>`;
      controlsEl.querySelector(".pub-count").textContent =
        `${pubs.length} publication${pubs.length === 1 ? "" : "s"}`;
    }

    function setArea(next) {
      area = next;
      controlsEl.querySelectorAll(".pub-filter").forEach((b) =>
        b.classList.toggle("active", b.dataset.area === area)
      );
      draw();
      syncUrl();
    }

    controlsEl.innerHTML =
      FILTERS.map(
        ([k, label]) =>
          `<button class="pub-filter ${k === area ? "active" : ""}" data-area="${k}">${label}<span class="pub-filter-count">${counts[k]}</span></button>`
      ).join("") +
      `<input class="pub-search" type="search" placeholder="Search title, author, venue…" aria-label="Search publications" value="${esc(query)}">` +
      `<span class="pub-count" aria-live="polite"></span>`;

    controlsEl.querySelectorAll(".pub-filter").forEach((btn) =>
      btn.addEventListener("click", () => setArea(btn.dataset.area))
    );
    controlsEl.querySelector(".pub-search").addEventListener("input", (e) => {
      query = e.target.value.trim();
      draw();
      syncUrl();
    });

    // Area chips inside the list filter in place instead of reloading.
    listEl.addEventListener("click", (e) => {
      const chip = e.target.closest(".area-chip");
      if (!chip) return;
      e.preventDefault();
      setArea(chip.dataset.area);
    });

    draw();
  }

  // Home page: every publication flagged `selected: true`.
  function renderSelectedPubs(el) {
    el.innerHTML = window.PUBLICATIONS.filter((p) => p.selected)
      .map((p) => pubItemHTML(p, { tags: true }))
      .join("");
  }

  // ---------- research ----------

  function renderPillars(el) {
    el.innerHTML = window.RESEARCH.map((r, i) => {
      const a = AREAS[r.id];
      const style = a ? ` style="--area-color:${a.color}"` : "";
      return `
      <a class="pillar"${style} href="research.html#${esc(r.id)}">
        <div class="pillar-num">0${i + 1}</div>
        <h3>${esc(r.title)}</h3>
        <p>${esc(r.short)}</p>
      </a>`;
    }).join("");
  }

  function renderResearchPage(el) {
    const pubById = {};
    window.PUBLICATIONS.forEach((p) => (pubById[p.id] = p));
    el.innerHTML = window.RESEARCH.map((r) => {
      const reps = (r.pubs || [])
        .map((id) => pubById[id])
        .filter(Boolean)
        .map((p) => {
          const link = p.links && (p.links.Paper || Object.values(p.links)[0]);
          const t = link ? `<a href="${esc(link)}">${esc(p.title)}</a>` : esc(p.title);
          return `<div class="rep-pub">${t}<span class="rep-venue">${esc(p.venue)} ${p.year}</span></div>`;
        })
        .join("");
      const a = AREAS[r.id];
      const style = a ? ` style="--area-color:${a.color}"` : "";
      // Areas without publications (yet) get no rep list and no "All …" link.
      const moreLink = a && reps
        ? `<a class="research-more" href="publications.html?area=${esc(r.id)}">All ${esc(a.label)} publications →</a>`
        : "";
      return `
      <div class="research-block" id="${esc(r.id)}"${style}>
        <h2>${esc(r.title)}</h2>
        ${r.subtitle ? `<div class="research-sub">${esc(r.subtitle)}</div>` : ""}
        <p class="research-long">${esc(r.long)}</p>
        <div class="keywords">${r.keywords.map((k) => `<span class="keyword">${esc(k)}</span>`).join("")}</div>
        ${reps ? `<div class="rep-pubs">${reps}</div>` : ""}
        ${moreLink}
      </div>`;
    }).join("");
  }

  // ---------- cv ----------

  // One dated entry: title + right-aligned dates, optional sub/meta
  // lines, optional blurb and bullets. title/sub/meta are HTML
  // (callers escape); blurb and bullets are plain text.
  function cvEntryHTML(e) {
    const bullets = (e.bullets || []).map((b) => `<li>${esc(b)}</li>`).join("");
    return `
      <div class="cv-entry">
        <div class="cv-entry-head">
          <div class="cv-entry-title">${e.title}</div>
          <div class="cv-entry-dates">${esc(e.dates || "")}</div>
        </div>
        ${e.sub ? `<div class="cv-entry-sub">${e.sub}</div>` : ""}
        ${e.meta ? `<div class="cv-entry-meta">${e.meta}</div>` : ""}
        ${e.blurb ? `<p class="cv-entry-blurb">${esc(e.blurb)}</p>` : ""}
        ${bullets ? `<ul class="cv-bullets">${bullets}</ul>` : ""}
      </div>`;
  }

  // Compact table for presentations / honors. Cells are HTML.
  function cvTableHTML(cols, rows) {
    return `
      <div class="table-scroll">
        <table class="mentee-table cv-table">
          <thead><tr>${cols.map((c) => `<th>${c}</th>`).join("")}</tr></thead>
          <tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
      </div>`;
  }

  // ids: { education, research, industry, projects, presentations, honors } → element ids.
  function renderCvPage(ids) {
    const C = window.CV;
    const put = (key, html) => {
      const el = document.getElementById(ids[key]);
      if (el) el.innerHTML = html;
    };
    const dateCell = (d) => `<span class="mentee-years">${esc(d || "")}</span>`;

    put("education", (C.education || []).map((e) => cvEntryHTML({
      title: esc(e.school),
      dates: e.dates,
      sub: esc(e.degree),
      meta: [e.unit, e.location].filter(Boolean).map(esc).join(" · "),
      blurb: e.note,
    })).join(""));

    put("research", (C.research || []).map((r) => cvEntryHTML({
      title: esc(r.title),
      dates: r.dates,
      sub: esc(r.role),
      meta: [r.advisor ? "Advised by " + r.advisor : "", r.org].filter(Boolean).map(esc).join(" · "),
      bullets: r.bullets,
    })).join(""));

    put("industry", (C.industry || []).map((j) => cvEntryHTML({
      title: j.url ? `<a href="${esc(j.url)}">${esc(j.company)}</a>` : esc(j.company),
      dates: j.dates,
      sub: esc(j.role),
      meta: esc(j.location || ""),
      blurb: j.blurb,
      bullets: j.bullets,
    })).join(""));

    put("projects", (C.projects || []).map((p) => cvEntryHTML({
      title: esc(p.title),
      dates: p.dates,
      bullets: p.bullets,
    })).join(""));

    put("presentations", cvTableHTML(
      ["Title", "Venue", "Place", "Date"],
      (C.presentations || []).map((p) => [
        `<span class="mentee-name">${esc(p.title)}</span>`, esc(p.venue), esc(p.place), dateCell(p.date),
      ])
    ));

    put("honors", cvTableHTML(
      ["Type", "Title", "Date"],
      (C.honors || []).map((h) => [esc(h.kind), `<span class="mentee-name">${esc(h.title)}</span>`, dateCell(h.date)])
    ));
  }

  // ---------- page dispatch ----------

  document.addEventListener("DOMContentLoaded", () => {
    renderNav();
    renderFooter();

    const page = document.body.dataset.page;

    if (page === "home") {
      renderPillars(document.getElementById("pillars"));
      renderSelectedPubs(document.getElementById("home-selected-pubs"));
      renderNews(document.getElementById("home-news"), 6);
    }
    if (page === "news") {
      renderNewsPage(
        document.getElementById("all-news"),
        document.getElementById("news-controls")
      );
    }
    if (page === "publications") {
      renderPublicationsPage(
        document.getElementById("pub-list"),
        document.getElementById("pub-controls")
      );
    }
    if (page === "research") {
      renderPillars(document.getElementById("research-pillars"));
      renderResearchPage(document.getElementById("research-blocks"));
    }
    if (page === "cv") {
      renderCvPage({
        education: "cv-education",
        research: "cv-research",
        industry: "cv-industry",
        projects: "cv-projects",
        presentations: "cv-presentations",
        honors: "cv-honors",
      });
    }
  });
})();

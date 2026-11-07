/* ==========================================================================
   Portfolio app — render từ window.PORTFOLIO (data/content.js), chuyển ngôn ngữ,
   case study dạng hộp thoại, scroll-spy, hiệu ứng nhẹ.
   Không cần thư viện, không cần server.
   ========================================================================== */
(function () {
  "use strict";

  var D = window.PORTFOLIO;
  if (!D) { console.error("Thiếu data/content.js"); return; }

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Ngôn ngữ ---------- */
  var lang = "vi";
  try { var saved = localStorage.getItem("pf-lang"); if (saved === "vi" || saved === "en") lang = saved; } catch (e) { /* bỏ qua */ }

  function t(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return v[lang] != null ? v[lang] : (v.vi != null ? v.vi : "");
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function statText(o) { return lang === "en" && o.textEn ? o.textEn : o.text; }

  /* ---------- Icon (inline SVG) ---------- */
  var ICON = {
    arrow:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    left:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>',
    mail:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    copy:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>',
    link:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1"/></svg>',
    pin:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    close:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>'
  };

  /* ---------- Render các phần ---------- */
  var P = D.profile, U = D.ui;

  function renderNav() {
    var ids = ["about", "projects", "experience", "skills", "voices", "contact"];
    $("#navList").innerHTML = ids.map(function (id) {
      return '<li><a href="#' + id + '" data-spy="' + id + '">' + esc(t(U.nav[id])) + "</a></li>";
    }).join("");
    $("#skipLink").textContent = t(U.skip);
    $("#langSwitch").setAttribute("aria-label", t(U.langLabel));
  }

  function renderHero() {
    var s = D.stats[4];
    $("#hero").innerHTML =
      '<div class="wrap hero-grid">' +
        '<div class="hero-copy">' +
          '<span class="eyebrow">' + esc(t(U.hero.eyebrow)) + "</span>" +
          '<h1 id="heroName">' + esc(P.name) + "</h1>" +
          '<p class="hero-title">' + esc(t(P.title)) + "</p>" +
          '<p class="hero-tagline">' + esc(t(P.tagline)) + "</p>" +
          '<p class="hero-meta">' + ICON.pin + "<span>" + esc(t(P.location)) + "</span></p>" +
          '<div class="hero-cta">' +
            '<a class="btn btn-primary" href="#projects">' + esc(t(U.hero.ctaProjects)) + ICON.arrow + "</a>" +
            '<a class="btn btn-ghost" href="' + esc(P.linkedin) + '" target="_blank" rel="noopener noreferrer">' + ICON.link + esc(t(U.hero.ctaLinkedin)) + "</a>" +
            '<a class="btn btn-text" href="' + esc(P.cv) + '" download>' + ICON.download + esc(t(U.hero.ctaCv)) + "</a>" +
          "</div>" +
        "</div>" +
        '<div class="portrait">' +
          '<div class="portrait-frame"><img src="' + esc(P.photo) + '" alt="' + esc(t(P.photoAlt)) + '" width="1000" height="1250" fetchpriority="high"></div>' +
          '<div class="portrait-badge" aria-hidden="true"><strong>' + esc(statText(s)) + " <small>" + esc(t(s.unit)) + "</small></strong><span>" + esc(t(s.label)) + "</span></div>" +
        "</div>" +
      "</div>";
  }

  var statsAnimated = false;
  function renderStats() {
    $("#stats").innerHTML =
      '<div class="wrap">' +
        '<div class="stats-head"><div><span class="eyebrow">' + esc(t(U.hero.eyebrow)) + '</span><h2 id="statsTitle">' + esc(t(U.statsTitle)) + "</h2></div></div>" +
        '<div class="stat-grid">' +
        D.stats.map(function (s, i) {
          var num;
          if (s.num != null) {
            num = '<span class="stat-num" data-count="' + s.num + '" data-suffix="' + esc(s.suffix || "") + '">' + (statsAnimated ? s.num + esc(s.suffix || "") : "0" + esc(s.suffix || "")) + "</span>";
          } else {
            num = '<span class="stat-num">' + esc(statText(s)) + (s.unit ? "<small>" + esc(t(s.unit)) + "</small>" : "") + "</span>";
          }
          return '<div class="stat reveal" style="transition-delay:' + (i % 4) * 70 + 'ms">' + num + '<p class="stat-label">' + esc(t(s.label)) + "</p></div>";
        }).join("") +
        "</div>" +
      "</div>";
  }

  function renderAbout() {
    $("#about").innerHTML =
      '<div class="wrap">' +
        '<div class="section-head reveal"><span class="eyebrow">' + esc(t(U.nav.about)) + '</span><h2 id="aboutTitle">' + esc(t(U.aboutTitle)) + "</h2><p>" + esc(t(U.aboutIntro)) + "</p></div>" +
        '<div class="about-grid">' +
          '<div class="about-text reveal">' + P.summary.map(function (p) { return "<p>" + esc(t(p)) + "</p>"; }).join("") + "</div>" +
          '<div class="principles">' +
            D.principles.map(function (p, i) {
              return '<div class="principle reveal" style="transition-delay:' + i * 90 + 'ms"><h3>' + esc(p.title) + "</h3><p>" + esc(t(p.text)) + "</p></div>";
            }).join("") +
          "</div>" +
        "</div>" +
      "</div>";
  }

  function renderProjects() {
    $("#projects").innerHTML =
      '<div class="wrap">' +
        '<div class="section-head reveal"><span class="eyebrow">' + esc(t(U.nav.projects)) + '</span><h2 id="projectsTitle">' + esc(t(U.projectsTitle)) + "</h2><p>" + esc(t(U.projectsIntro)) + "</p></div>" +
        '<div class="project-grid">' +
        D.projects.map(function (p, i) {
          return '<button type="button" class="project-card reveal" data-case="' + i + '" style="transition-delay:' + (i % 2) * 90 + 'ms" aria-haspopup="dialog">' +
            '<div class="project-thumb"><img src="' + esc(p.image) + '" alt="' + esc(t(p.imageAlt)) + '" loading="lazy" width="1200" height="900">' +
              '<div class="metric-chip"><strong>' + esc(statText(p.metric)) + "</strong><span>" + esc(t(p.metric.unit)) + "</span></div></div>" +
            '<div class="project-body">' +
              '<span class="project-meta">' + esc(p.period) + " · " + esc(t(p.role)) + "</span>" +
              "<h3>" + esc(t(p.title)) + "</h3>" +
              "<p>" + esc(t(p.summary)) + "</p>" +
              '<span class="project-more">' + esc(t(U.viewCase)) + ICON.arrow + "</span>" +
            "</div></button>";
        }).join("") +
        "</div>" +
      "</div>";
  }

  function list(items, cls) {
    return '<ul class="tick-list ' + (cls || "") + '">' + items.map(function (x) { return "<li>" + esc(t(x)) + "</li>"; }).join("") + "</ul>";
  }

  function renderExperience() {
    var ed = D.education;
    $("#experience").innerHTML =
      '<div class="wrap">' +
        '<div class="section-head reveal"><span class="eyebrow">' + esc(t(U.nav.experience)) + '</span><h2 id="experienceTitle">' + esc(t(U.experienceTitle)) + "</h2></div>" +
        '<div class="exp-layout">' +
          '<div class="timeline">' +
            D.experience.map(function (j) {
              return '<article class="job reveal"><span class="job-period">' + esc(t(j.period)) + "</span>" +
                "<h3>" + esc(t(j.role)) + "</h3>" +
                '<p class="job-company">' + esc(j.company) + " · " + esc(t(j.kind)) + "</p>" +
                '<p class="job-scope">' + esc(t(j.scope)) + "</p>" + list(j.highlights) + "</article>";
            }).join("") +
          "</div>" +
          "<aside>" +
            '<div class="side-card reveal"><h3>' + esc(t(U.educationTitle)) + "</h3><h4>" + esc(t(ed.degree)) + '</h4><p class="sub">' + esc(ed.school) + " · " + esc(ed.period) + '</p><p class="sub">' + esc(t(ed.note)) + "</p></div>" +
            '<div class="side-card reveal"><h3>' + esc(t(U.certsTitle)) + '</h3><ul class="cert-list">' +
              D.certifications.map(function (c) { return "<li><span>" + esc(c.name) + "</span><time>" + esc(c.year) + "</time></li>"; }).join("") +
            "</ul></div>" +
          "</aside>" +
        "</div>" +
      "</div>";
  }

  function renderSkills() {
    $("#skills").innerHTML =
      '<div class="wrap">' +
        '<div class="section-head reveal"><span class="eyebrow">' + esc(t(U.nav.skills)) + '</span><h2 id="skillsTitle">' + esc(t(U.skillsTitle)) + "</h2></div>" +
        '<div class="skill-grid">' +
        D.skills.map(function (g, i) {
          return '<div class="skill-card reveal" style="transition-delay:' + (i % 3) * 80 + 'ms"><h3>' + esc(t(g.group)) + '</h3><div class="chips">' +
            g.items.map(function (x) { return '<span class="chip neutral">' + esc(x) + "</span>"; }).join("") + "</div></div>";
        }).join("") +
        "</div>" +
      "</div>";
  }

  function renderVoices() {
    $("#voices").innerHTML =
      '<div class="wrap">' +
        '<div class="section-head reveal"><span class="eyebrow">' + esc(t(U.nav.voices)) + '</span><h2 id="voicesTitle">' + esc(t(U.voicesTitle)) + "</h2></div>" +
        '<div class="quote-grid">' +
        D.testimonials.map(function (q, i) {
          return '<figure class="quote reveal" style="transition-delay:' + i * 90 + 'ms"><blockquote>' + esc(t(q.quote)) + "</blockquote>" +
            "<figcaption><b>" + esc(q.name) + "</b><span>" + esc(q.role) + " · " + esc(q.company) + "</span></figcaption></figure>";
        }).join("") +
        "</div>" +
        '<p class="note">' + esc(t(U.voicesNote)) + "</p>" +
      "</div>";
  }

  function renderBeyond() {
    $("#beyond").innerHTML =
      '<div class="wrap">' +
        '<div class="beyond-grid">' +
          '<div class="beyond-card reveal"><h3 id="interestsTitle">' + esc(t(U.interestsTitle)) + '</h3><div class="chips">' +
            D.topics.map(function (x) { return '<span class="chip">' + esc(x) + "</span>"; }).join("") + "</div></div>" +
          '<div class="beyond-card reveal" style="transition-delay:90ms"><h3>' + esc(t(U.opportunitiesTitle)) + "</h3>" + list(D.opportunities) + "</div>" +
          '<div class="beyond-card reveal" style="transition-delay:180ms"><h3>' + esc(t(U.beyondTitle)) + "</h3><p>" + esc(t(D.beyondWork)) + "</p></div>" +
        "</div>" +
      "</div>";
  }

  function renderContact() {
    $("#contact").innerHTML =
      '<div class="wrap"><div class="contact-inner reveal">' +
        '<span class="eyebrow">' + esc(t(U.nav.contact)) + "</span>" +
        '<h2 id="contactTitle">' + esc(t(U.contactTitle)) + "</h2>" +
        '<p class="lead">' + esc(t(U.contactIntro)) + "</p>" +
        '<div class="contact-actions">' +
          '<a class="btn btn-primary" href="mailto:' + esc(P.email) + '">' + ICON.mail + esc(t(U.emailBtn)) + "</a>" +
          '<button type="button" class="btn btn-ghost" id="copyEmail">' + ICON.copy + esc(t(U.copyBtn)) + "</button>" +
          '<a class="btn btn-ghost" href="' + esc(P.linkedin) + '" target="_blank" rel="noopener noreferrer">' + ICON.link + "LinkedIn</a>" +
          '<a class="btn btn-ghost" href="' + esc(P.cv) + '" download>' + ICON.download + esc(t(U.hero.ctaCv)) + "</a>" +
        "</div>" +
        '<p class="contact-line"><span>' + esc(P.email) + "</span><span>" + esc(t(P.location)) + "</span></p>" +
      "</div></div>";
  }

  function renderFooter() {
    $("#footer").innerHTML =
      '<div class="wrap footer-inner"><p>© ' + new Date().getFullYear() + " " + esc(P.name) + ". " + esc(t(U.footerNote)) + "</p>" +
      '<a href="#top">' + esc(t(U.toTop)) + " ↑</a></div>";
  }

  /* ---------- Case study (dialog) ---------- */
  var dlg = $("#caseDialog");
  var currentCase = -1;
  var lastTrigger = null;

  function block(title, inner) {
    return '<section class="case-block"><h3>' + esc(t(title)) + "</h3>" + inner + "</section>";
  }

  function renderCase() {
    if (currentCase < 0) return;
    var p = D.projects[currentCase], C = U.case, n = D.projects.length;
    var prev = D.projects[(currentCase - 1 + n) % n], next = D.projects[(currentCase + 1) % n];

    var left = block(C.context, "<p>" + esc(t(p.context)) + "</p>");
    if (p.problems && p.problems.length) left += block(C.problem, list(p.problems));
    if (p.goal) left += block(C.goal, "<p>" + esc(t(p.goal)) + "</p>");

    var right = "";
    if (p.roleList && p.roleList.length) right += block(C.role, list(p.roleList));
    if (p.solutionList && p.solutionList.length) right += block(t(p.solutionTitle), list(p.solutionList));

    var tags = (p.skills || []).map(function (x) { return '<span class="chip">' + esc(x) + "</span>"; }).join("");
    var tools = (p.tools || []).map(function (x) { return '<span class="chip neutral">' + esc(x) + "</span>"; }).join("");

    dlg.innerHTML =
      '<div class="case-bar"><span class="eyebrow">Case study ' + String(currentCase + 1).padStart(2, "0") + " / " + String(n).padStart(2, "0") + "</span>" +
        '<button type="button" class="icon-btn" data-close aria-label="' + esc(t(C.close)) + '">' + ICON.close + "</button></div>" +
      '<div class="case-scroll" id="caseScroll">' +
        '<div class="case-hero"><h2 id="caseTitle">' + esc(t(p.title)) + "</h2>" +
          '<div class="case-facts"><span><b>' + esc(t(p.role)) + "</b></span><span>" + esc(p.company) + "</span><span>" + esc(p.period) + "</span></div></div>" +
        '<figure class="case-figure"><img src="' + esc(p.image) + '" alt="' + esc(t(p.imageAlt)) + '"><figcaption>' + esc(t(U.illustrative)) + "</figcaption></figure>" +
        '<div class="case-body">' +
          '<div class="case-cols"><div class="case-col" style="display:grid;gap:1.6rem;align-content:start">' + left + '</div><div class="case-col" style="display:grid;gap:1.6rem;align-content:start">' + right + "</div></div>" +
          '<div class="case-results">' + block(C.results, list(p.results, "results")) + "</div>" +
          '<div class="case-cols">' + block(C.skills, '<div class="chips">' + tags + "</div>") + (tools ? block(C.tools, '<div class="chips">' + tools + "</div>") : "<div></div>") + "</div>" +
        "</div>" +
      "</div>" +
      '<div class="case-nav">' +
        '<button type="button" class="btn btn-ghost" data-step="-1" aria-label="' + esc(t(C.prev)) + ": " + esc(t(prev.title)) + '">' + ICON.left + "<span>" + esc(t(C.prev)) + "</span></button>" +
        '<button type="button" class="btn btn-primary" data-step="1" aria-label="' + esc(t(C.next)) + ": " + esc(t(next.title)) + '"><span>' + esc(t(C.next)) + "</span>" + ICON.arrow + "</button>" +
      "</div>";
  }

  function openCase(i, trigger) {
    currentCase = i;
    if (trigger) lastTrigger = trigger;
    renderCase();
    if (!dlg.open) {
      document.body.classList.add("modal-open");
      if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
    }
    var sc = $("#caseScroll"); if (sc) sc.scrollTop = 0;
  }
  function closeCase() {
    if (typeof dlg.close === "function") dlg.close(); else dlg.removeAttribute("open");
    afterClose();
  }
  function afterClose() {
    document.body.classList.remove("modal-open");
    currentCase = -1;
    if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus();
  }
  dlg.addEventListener("close", afterClose);
  dlg.addEventListener("click", function (e) {
    if (e.target === dlg) { closeCase(); return; }                // bấm nền mờ để đóng
    var closeBtn = e.target.closest("[data-close]");
    if (closeBtn) { closeCase(); return; }
    var step = e.target.closest("[data-step]");
    if (step) {
      var n = D.projects.length;
      openCase((currentCase + Number(step.getAttribute("data-step")) + n) % n);
      var b = $('[data-step="' + step.getAttribute("data-step") + '"]', dlg); if (b) b.focus();
    }
  });

  /* ---------- Toast & copy email ---------- */
  var toastEl = document.createElement("div");
  toastEl.className = "toast"; toastEl.setAttribute("role", "status"); toastEl.setAttribute("aria-live", "polite");
  document.body.appendChild(toastEl);
  var toastTimer;
  function toast(msg) {
    toastEl.textContent = msg; toastEl.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 2000);
  }
  function copyText(text) {
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      var ok = false; try { ok = document.execCommand("copy"); } catch (e) { /* bỏ qua */ }
      document.body.removeChild(ta); return ok;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(function () { return true; }, function () { return fallback(); });
    }
    return Promise.resolve(fallback());
  }

  /* ---------- Hiệu ứng: reveal, count-up, scroll-spy ---------- */
  var revealIO, countIO, spyIO;

  function setupReveal() {
    var els = $$(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    if (revealIO) revealIO.disconnect();
    revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); revealIO.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (e) { revealIO.observe(e); });
  }

  function countUp(el) {
    var target = Number(el.getAttribute("data-count")), suffix = el.getAttribute("data-suffix") || "";
    if (reduceMotion) { el.textContent = target + suffix; return; }
    var start = null, dur = 1400;
    function step(ts) {
      if (start === null) start = ts;
      var k = Math.min((ts - start) / dur, 1), eased = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  function setupCounters() {
    var els = $$("[data-count]");
    if (statsAnimated || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.textContent = el.getAttribute("data-count") + (el.getAttribute("data-suffix") || ""); });
      statsAnimated = true; return;
    }
    if (countIO) countIO.disconnect();
    countIO = new IntersectionObserver(function (entries) {
      if (entries.some(function (e) { return e.isIntersecting; })) {
        statsAnimated = true; els.forEach(countUp); countIO.disconnect();
      }
    }, { threshold: 0.35 });
    var grid = $(".stat-grid"); if (grid) countIO.observe(grid);
  }

  function setupSpy() {
    var links = $$("[data-spy]");
    if (!("IntersectionObserver" in window)) return;
    if (spyIO) spyIO.disconnect();
    var map = { beyond: "voices" };                                // phần "Ngoài công việc" thuộc nhóm Nhận xét
    spyIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = map[en.target.id] || en.target.id;
        links.forEach(function (a) {
          var on = a.getAttribute("data-spy") === id;
          a.classList.toggle("active", on);
          if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["about", "projects", "experience", "skills", "voices", "beyond", "contact"].forEach(function (id) {
      var s = document.getElementById(id); if (s) spyIO.observe(s);
    });
  }

  /* ---------- Vẽ lại toàn trang ---------- */
  function applyMeta() {
    document.documentElement.lang = lang;
    document.title = t(U.meta.title);
    var d = $('meta[name="description"]'); if (d) d.setAttribute("content", t(U.meta.description));
    var ogt = $('meta[property="og:title"]'); if (ogt) ogt.setAttribute("content", t(U.meta.title));
    var ogd = $('meta[property="og:description"]'); if (ogd) ogd.setAttribute("content", t(U.meta.description));
    $$("#langSwitch button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang)); });
  }

  function renderAll() {
    renderNav(); renderHero(); renderStats(); renderAbout(); renderProjects();
    renderExperience(); renderSkills(); renderVoices(); renderBeyond(); renderContact(); renderFooter();
    applyMeta();
    renderCase();
    setupReveal(); setupCounters(); setupSpy();
  }

  function setLang(next) {
    if (next === lang) return;
    lang = next;
    try { localStorage.setItem("pf-lang", lang); } catch (e) { /* bỏ qua */ }
    var y = window.scrollY;
    renderAll();
    $$(".reveal").forEach(function (e) { e.classList.add("in"); });  // không chạy lại hiệu ứng khi đổi ngôn ngữ
    window.scrollTo(0, y);
  }

  /* ---------- Sự kiện ---------- */
  document.addEventListener("click", function (e) {
    var lb = e.target.closest("#langSwitch [data-lang]");
    if (lb) { setLang(lb.getAttribute("data-lang")); return; }
    var card = e.target.closest("[data-case]");
    if (card) { openCase(Number(card.getAttribute("data-case")), card); return; }
    if (e.target.closest("#copyEmail")) {
      copyText(P.email).then(function (ok) { toast(ok ? t(U.copied) : P.email); });
    }
  });

  var header = $(".site-header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });

  renderAll();
  onScroll();
})();

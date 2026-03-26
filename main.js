/* ============================================================
   PORTFOLIO — main.js
   Smart loader · Sliding nav indicator · Page transitions
   Scroll reveal · Magnetic arrow · Journey sidebar
   ============================================================ */

'use strict';

/* ── Smart Loading Screen ───────────────────────────────────
   Only appears when page load genuinely takes time (>320ms).
   For fast local / cached loads, it vanishes before the user
   even notices it existed.
   ─────────────────────────────────────────────────────────── */
(function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  const SHOW_THRESHOLD = 320; // ms before we make it visible
  const MIN_DISPLAY    = 900; // ms it must stay visible once shown
  const startTime      = performance.now();
  let   loaderShown    = false;

  // Hide the loader immediately — it starts invisible
  loader.style.opacity    = '0';
  loader.style.transition = 'none';

  // Only reveal it if loading takes longer than the threshold
  const showTimer = setTimeout(() => {
    loader.style.transition = 'opacity 0.2s ease';
    loader.style.opacity    = '1';
    loaderShown = true;
  }, SHOW_THRESHOLD);

  function dismiss() {
    clearTimeout(showTimer);
    if (!loaderShown) {
      // Never shown — remove silently
      loader.remove();
      return;
    }
    // Shown — respect minimum display time then fade out
    const elapsed    = performance.now() - startTime;
    const remaining  = Math.max(0, MIN_DISPLAY - elapsed);
    setTimeout(() => {
      loader.style.transition = 'opacity 0.5s ease';
      loader.style.opacity    = '0';
      loader.addEventListener('transitionend', () => loader.remove(), { once: true });
    }, remaining);
  }

  if (document.readyState === 'complete') {
    dismiss();
  } else {
    window.addEventListener('load', dismiss);
  }
})();

/* ── Page Transition Overlay ────────────────────────────────
   Dark fade between internal pages — replaces the "Just a
   moment." loader for navigation inside the site.
   ─────────────────────────────────────────────────────────── */
(function initPageTransition() {
  const overlay = document.createElement('div');
  overlay.id = 'page-transition';
  document.body.appendChild(overlay);

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:')) return;
    if (link.hostname !== location.hostname) return;
    if (link.href === location.href) return;

    e.preventDefault();
    overlay.classList.add('active');
    setTimeout(() => { window.location.href = link.href; }, 240);
  });

  // Fade out overlay when page becomes visible (back/forward cache)
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) overlay.classList.remove('active');
  });
  // Also remove on DOMContentLoaded in case of normal navigation
  document.addEventListener('DOMContentLoaded', () => {
    overlay.classList.remove('active');
  });
})();

/* ── Nav Scroll Border ──────────────────────────────────────*/
(function initNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Sliding Nav Pill Indicator ─────────────────────────────
   A background element that glides between pill links on
   hover, snapping back to the active page on mouse-leave.
   ─────────────────────────────────────────────────────────── */
(function initNavIndicator() {
  const pill   = document.querySelector('.nav-pill');
  if (!pill) return;

  const indicator = document.createElement('span');
  indicator.className = 'nav-indicator';
  pill.insertBefore(indicator, pill.firstChild);

  // Position indicator over a given link element
  function move(el, animate) {
    if (!animate) {
      indicator.style.transition = 'none';
      // Force reflow so the 'none' takes effect before we re-enable transitions
      indicator.getBoundingClientRect();
    }
    indicator.style.left  = el.offsetLeft + 'px';
    indicator.style.width = el.offsetWidth + 'px';
    if (!animate) {
      // Re-enable animation on next frame
      requestAnimationFrame(() => {
        indicator.style.transition = '';
      });
    }
  }

  const activeLink = pill.querySelector('.nav-pill-link.active');
  if (activeLink) move(activeLink, false);

  pill.querySelectorAll('.nav-pill-link').forEach(link => {
    link.addEventListener('mouseenter', () => move(link, true));
  });
  pill.addEventListener('mouseleave', () => {
    if (activeLink) move(activeLink, true);
  });
})();

/* ── Scroll-triggered Reveal ────────────────────────────────*/
(function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
  els.forEach(el => observer.observe(el));
})();

/* ── Journey Sidebar Active State ───────────────────────────*/
(function initJourneySidebar() {
  const sidebarLinks = document.querySelectorAll('.journey-sidebar-link');
  const blocks       = document.querySelectorAll('.journey-block[id]');
  if (!sidebarLinks.length || !blocks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        sidebarLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.35 });
  blocks.forEach(block => observer.observe(block));
})();

/* ── Hero Scroll Button ─────────────────────────────────────*/
(function initHeroScroll() {
  const btn = document.getElementById('hero-scroll-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const target = document.getElementById('projects');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
})();

/* ── Magnetic Arrow on Project Items ───────────────────────*/
(function initMagneticArrows() {
  document.querySelectorAll('.project-item').forEach(item => {
    const arrow = item.querySelector('.project-cta-arrow');
    if (!arrow) return;
    item.addEventListener('mousemove', (e) => {
      const rect = arrow.getBoundingClientRect();
      const dx   = (e.clientX - (rect.left + rect.width  / 2)) * 0.3;
      const dy   = (e.clientY - (rect.top  + rect.height / 2)) * 0.3;
      arrow.style.transform = `rotate(-45deg) translate(${dx}px, ${dy}px)`;
    });
    item.addEventListener('mouseleave', () => {
      arrow.style.transform = '';
    });
  });
})();

/* ── Dynamic Year Badge ─────────────────────────────────────*/
(function setYearBadge() {
  const badge = document.getElementById('year-badge');
  if (!badge) return;
  badge.textContent = `'${new Date().getFullYear().toString().slice(-2)}`;
})();

/* ── Journey Page — Parallax on Portrait Images ─────────────
   Subtle Y-axis translation on [data-parallax] img-frames as
   the user scrolls. ~20% of the element's distance from the
   viewport centre. Only runs above 860px (skips mobile).

   Architecture:
   - IntersectionObserver  tracks which frames are visible
   - scroll + requestAnimationFrame  drives the per-frame math
   ─────────────────────────────────────────────────────────── */
(function initJourneyParallax() {
  // Skip on narrow viewports (mobile/tablet)
  if (window.innerWidth <= 860) return;

  const frames = document.querySelectorAll('.img-frame[data-parallax]');
  if (!frames.length) return;

  const STRENGTH      = 0.18; // ~18-20% of distance from viewport centre
  let   rafScheduled  = false;
  const visibleFrames = new Set();

  // Track which frames are currently near the viewport
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        visibleFrames.add(entry.target);
      } else {
        visibleFrames.delete(entry.target);
        // Reset transform when completely off-screen
        const img = entry.target.querySelector('img');
        if (img) img.style.transform = '';
      }
    });
  }, { rootMargin: '200px 0px 200px 0px' });

  frames.forEach((f) => io.observe(f));

  // Per-frame calculation
  function tick() {
    rafScheduled      = false;
    const viewMidY    = window.scrollY + window.innerHeight / 2;

    visibleFrames.forEach((frame) => {
      const img = frame.querySelector('img');
      if (!img) return;

      const rect     = frame.getBoundingClientRect();
      const frameMid = window.scrollY + rect.top + rect.height / 2;
      const delta    = (viewMidY - frameMid) * STRENGTH;

      img.style.transform = `translateY(${delta.toFixed(2)}px)`;
    });
  }

  window.addEventListener('scroll', () => {
    if (!rafScheduled) {
      rafScheduled = true;
      requestAnimationFrame(tick);
    }
  }, { passive: true });

  // Initial pass on page load
  requestAnimationFrame(tick);
})();

/* ── Journey Horizontal Scroll ──────────────────────────────────
   Converts vertical scroll into horizontal translateX movement
   while the wrapper section is in view.

   Flow:
   1. setup()  — measures track.scrollWidth, sets wrapper height
      so the OS scroll bar reflects the total "scrollable" distance
   2. update() — called on every scroll event; computes progress
      (0→1) between wrapper top and wrapper bottom, then drives
      track.style.transform and the progress fill bar
   ─────────────────────────────────────────────────────────────── */
(function initHorizontalScroll() {
  const wrapper = document.getElementById('hScrollWrapper');
  const track   = document.getElementById('hScrollTrack');
  const fill    = document.getElementById('hProgressFill');
  const hint    = document.getElementById('hScrollHint');
  if (!wrapper || !track) return;

  let overflow = 0; // px the track extends beyond viewport width

  function setup() {
    // Reset transform so measurement is accurate
    track.style.transform = '';
    overflow = Math.max(0, track.scrollWidth - window.innerWidth);
    // Wrapper height = scrollable distance + 1 viewport (the sticky "pause")
    wrapper.style.height = (overflow + window.innerHeight) + 'px';
  }

  function update() {
    if (overflow <= 0) return;
    const wrapperTop  = wrapper.getBoundingClientRect().top + window.scrollY;
    const scrolled    = window.scrollY - wrapperTop;
    const totalScroll = wrapper.offsetHeight - window.innerHeight;
    if (scrolled < 0 || scrolled > totalScroll) return;

    const progress   = scrolled / totalScroll;
    const translateX = -(progress * overflow);
    track.style.transform = `translateX(${translateX.toFixed(2)}px)`;

    if (fill) fill.style.width = `${(progress * 100).toFixed(2)}%`;
    if (hint) hint.classList.toggle('fade-out', scrolled > 80);
  }

  // Init after DOM is fully laid out
  setup();
  update();

  let resizeTick = false;
  window.addEventListener('resize', () => {
    if (!resizeTick) {
      resizeTick = true;
      requestAnimationFrame(() => { setup(); update(); resizeTick = false; });
    }
  }, { passive: true });

  window.addEventListener('scroll', update, { passive: true });
})();

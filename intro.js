/* New Bright: the opening film of the home page.
   Plays on its own, silent, full screen, with a way to skip; when it ends (or is skipped) the page opens behind it.
   It runs only when the head script of index.html turned on html.nbi-on (a fresh visit or a refresh, never for the
   visitor who just clicked "Home" from another page, and never with reduced motion). */
(() => {
  'use strict';
  const root = document.documentElement;
  const el = document.getElementById('nbIntro');
  if (!el) return;
  if (!root.classList.contains('nbi-on')) { el.remove(); return; }

  const v = el.querySelector('video');
  const skip = el.querySelector('.nbi-skip');
  skip.textContent = root.lang === 'ar' ? 'تخطي المقدمة' : 'Skip intro';

  // nothing behind the film can be reached with the keyboard or a screen reader while it plays
  const behind = [...document.body.children].filter((n) => n !== el && n.tagName !== 'SCRIPT');
  behind.forEach((n) => n.setAttribute('inert', ''));

  let done = false, guard = 0, watch = 0, lastT = -1, still = 0;
  function finish(fast) {
    if (done) return;
    done = true;
    clearTimeout(guard); clearInterval(watch);
    el.classList.add(fast ? 'fast' : 'out');
    // the page starts to move while the film is still closing
    setTimeout(() => {
      root.classList.remove('nbi-on');
      behind.forEach((n) => n.removeAttribute('inert'));
      window.dispatchEvent(new Event('nb:intro-done'));
    }, fast ? 60 : 380);
    setTimeout(() => { el.remove(); }, fast ? 600 : 1500);
  }

  v.muted = true; v.defaultMuted = true; v.playsInline = true;
  v.addEventListener('playing', () => { clearTimeout(guard); el.classList.add('is-playing'); });
  v.addEventListener('ended', () => finish(false));
  v.addEventListener('error', () => finish(true));
  const p = v.play();
  if (p && typeof p.catch === 'function') p.catch(() => finish(true)); // the browser refused to play it: just open the site
  // never keep a visitor waiting: a slow connection or a film that stalls opens the site
  guard = setTimeout(() => { if (v.currentTime < 0.2) finish(true); }, 6000);
  watch = setInterval(() => {
    if (v.paused || v.ended) return;
    still = Math.abs(v.currentTime - lastT) < 0.01 ? still + 1 : 0;
    lastT = v.currentTime;
    if (still >= 5) finish(false);
  }, 1000);

  skip.addEventListener('click', () => finish(false));
  addEventListener('keydown', (e) => { if (!done && e.key === 'Escape') finish(false); });
  el.addEventListener('contextmenu', (e) => e.preventDefault());
  skip.focus({ preventScroll: true });
})();

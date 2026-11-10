/* New Bright: a dropdown in the site's own design, in place of the browser's default select.
   The native <select> stays in the page (hidden) and keeps the value, so the form scripts need no change:
   this file draws the button and the list, keeps them in step with the select, and writes back to it. */
(() => {
  'use strict';
  const SVG = (d) => `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${d}"/></svg>`;
  const CHEVRON = SVG('M6 9l6 6 6-6'), CHECK = SVG('M5 12.5l4.5 4.5L19 7.5');
  let uid = 0;

  function upgrade(sel) {
    if (sel.dataset.cs) return;
    sel.dataset.cs = '1';
    const id = `cs${++uid}`;
    const field = sel.closest('.cf-f, .we-f') || sel.parentElement;
    const label = field.querySelector(`label[for="${sel.id}"]`);
    if (label && !label.id) label.id = `${id}-label`;

    const wrap = document.createElement('div');
    wrap.className = 'cs';
    sel.parentNode.insertBefore(wrap, sel);
    wrap.appendChild(sel);
    sel.classList.add('cs-native');
    sel.tabIndex = -1;
    sel.setAttribute('aria-hidden', 'true');

    const btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'cs-btn'; btn.id = `${id}-btn`;
    btn.setAttribute('role', 'combobox');
    btn.setAttribute('aria-haspopup', 'listbox'); btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-controls', `${id}-list`);
    btn.innerHTML = `<span class="cs-val" id="${id}-val"></span>${CHEVRON}`;
    btn.setAttribute('aria-labelledby', `${label ? label.id + ' ' : ''}${id}-val`);
    const list = document.createElement('ul');
    list.className = 'cs-list'; list.id = `${id}-list`; list.setAttribute('role', 'listbox'); list.hidden = true;
    if (label) list.setAttribute('aria-labelledby', label.id);
    wrap.append(btn, list);

    let opts = [], hi = -1, typed = '', typedAt = 0;
    const val = btn.querySelector('.cs-val');
    const curIndex = () => Math.max(0, [...sel.options].findIndex((o) => o.value === sel.value));

    function build() {
      list.textContent = '';
      opts = [...sel.options].map((o, i) => {
        const li = document.createElement('li');
        li.setAttribute('role', 'option'); li.id = `${id}-o${i}`; li.dataset.i = String(i);
        li.innerHTML = `<span>${''}</span>${CHECK}`;
        li.firstChild.textContent = o.textContent;
        list.appendChild(li); return li;
      });
      sync();
    }
    function sync() {
      const i = curIndex(), o = sel.options[i];
      val.textContent = o ? o.textContent : '';
      btn.classList.toggle('is-empty', !!o && o.value === '');
      opts.forEach((li, k) => { li.setAttribute('aria-selected', String(k === i)); });
      btn.setAttribute('aria-invalid', sel.getAttribute('aria-invalid') || 'false');
    }
    function highlight(i, scroll = true) {
      hi = Math.max(0, Math.min(opts.length - 1, i));
      opts.forEach((li, k) => li.classList.toggle('hi', k === hi));
      if (opts[hi]) { btn.setAttribute('aria-activedescendant', opts[hi].id); if (scroll) opts[hi].scrollIntoView({ block: 'nearest' }); }
    }
    function place() {
      const r = btn.getBoundingClientRect(), below = innerHeight - r.bottom - 12, above = r.top - 12;
      const up = below < 200 && above > below;
      wrap.dataset.dir = up ? 'up' : 'down';
      list.style.maxHeight = `${Math.max(140, Math.min(300, up ? above : below))}px`;
    }
    function open() {
      if (!list.hidden) return;
      list.hidden = false; place();
      wrap.dataset.open = 'true'; btn.setAttribute('aria-expanded', 'true');
      highlight(curIndex());
    }
    function close(focus) {
      if (list.hidden) return;
      list.hidden = true; wrap.dataset.open = 'false'; btn.setAttribute('aria-expanded', 'false'); btn.removeAttribute('aria-activedescendant');
      if (focus) btn.focus();
    }
    function choose(i) {
      const o = sel.options[i]; if (!o) return;
      const changed = sel.value !== o.value;
      sel.value = o.value; sync(); close(true);
      if (changed) { sel.dispatchEvent(new Event('input', { bubbles: true })); sel.dispatchEvent(new Event('change', { bubbles: true })); }
    }

    btn.addEventListener('click', () => (list.hidden ? open() : close(false)));
    btn.addEventListener('keydown', (e) => {
      const isOpen = !list.hidden, k = e.key;
      if (k === 'ArrowDown' || k === 'ArrowUp') {
        e.preventDefault();
        if (!isOpen) open(); else highlight(hi + (k === 'ArrowDown' ? 1 : -1));
      } else if (k === 'Home' || k === 'End') {
        if (isOpen) { e.preventDefault(); highlight(k === 'Home' ? 0 : opts.length - 1); }
      } else if (k === 'Enter' || k === ' ') {
        if (k === ' ' && typed && Date.now() - typedAt < 500) return;
        e.preventDefault();
        if (isOpen) choose(hi); else open();
      } else if (k === 'Escape') {
        if (isOpen) { e.preventDefault(); e.stopPropagation(); close(true); }
      } else if (k === 'Tab') {
        close(false);
      } else if (k.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        // type to jump to an option
        const now = Date.now(); typed = now - typedAt > 600 ? k : typed + k; typedAt = now;
        const q = typed.toLowerCase();
        const from = isOpen ? hi : curIndex();
        const order = [...opts.keys()].map((n) => (n + from + (typed.length === 1 ? 1 : 0)) % opts.length);
        const found = order.find((n) => opts[n].textContent.trim().toLowerCase().startsWith(q));
        if (found !== undefined) { if (!isOpen) open(); highlight(found); }
      }
    });
    list.addEventListener('pointermove', (e) => { const li = e.target.closest('li'); if (li && +li.dataset.i !== hi) highlight(+li.dataset.i, false); });
    list.addEventListener('pointerdown', (e) => e.preventDefault()); // keep the focus on the button
    list.addEventListener('click', (e) => { const li = e.target.closest('li'); if (li) choose(+li.dataset.i); });
    document.addEventListener('pointerdown', (e) => { if (!wrap.contains(e.target)) close(false); });
    btn.addEventListener('blur', () => { setTimeout(() => { if (!wrap.contains(document.activeElement)) close(false); }, 0); });
    addEventListener('resize', () => close(false));

    // the label, and the form's own focus() calls, land on the visible button
    sel.addEventListener('focus', () => btn.focus());
    sel.addEventListener('change', sync);
    sel.form && sel.form.addEventListener('reset', () => setTimeout(sync, 0));
    new MutationObserver(build).observe(sel, { childList: true });
    new MutationObserver(sync).observe(sel, { attributes: true, attributeFilter: ['aria-invalid'] });
    build();
  }

  const run = () => document.querySelectorAll('.cf-f select, .we-f select').forEach(upgrade);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();

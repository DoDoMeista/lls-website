// Path to jersey placeholder image
const JERSEY_PATH = 'assets/images/jersey-placeholder.png';

// ── Reveal on scroll ──────────────────────────────────────────────────
const ro = new IntersectionObserver(e => e.forEach(x => {
  if (x.isIntersecting) x.target.classList.add('in');
}), { threshold: .08 });
document.querySelectorAll('.rv').forEach(el => ro.observe(el));

// ── Nav background on scroll ──────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 30);
});

// ── Team modals ───────────────────────────────────────────────────────
function openModal(id) {
  const m = document.getElementById('modal-' + id);
  if (m) {
    m.classList.add('on');
    document.body.style.overflow = 'hidden';
    if (id === 'lol') populateNLCModal();
  }
}
function closeModal() {
  document.querySelectorAll('.modal').forEach(m => m.classList.remove('on'));
  document.body.style.overflow = '';
}
document.querySelectorAll('.modal').forEach(m => m.addEventListener('click', e => {
  if (e.target === m) closeModal();
}));

// ── Build a player card for the NLC modal ────────────────────────────
function buildPcard(id, isStaff) {
  const p = PLAYERS[id];
  if (!p) return '';
  const onClick = p.bio ? `onclick="openPlayer('${id}')"` : '';
  const flag = p.flag ? `<div class="pmeta"><span class="pflag">${p.flag}</span><span class="pnat">${p.nat}</span></div>` : '';
  const real = p.real && p.real !== '—' ? `<div class="preal">${p.real}</div>` : '';
  const roleLabel = p.role ? `<div class="prole">${p.role}</div>` : '';
  const h = isStaff ? 110 : 160;
  const pad = isStaff ? '10' : '14';
  const opa = isStaff ? '.35' : '.45';
  return `<div class="pcard${isStaff ? ' staff' : ''}" ${onClick}>
    <div class="pphoto jersey" style="height:${h}px">
      <img src="${JERSEY_PATH}" alt="jersey" style="width:100%;height:100%;object-fit:contain;padding:${pad}px;opacity:${opa};display:block">
      ${roleLabel}
    </div>
    <div class="pinfo">
      <div class="ptag">${p.tag}</div>
      ${real}${flag}
    </div>
  </div>`;
}

// ── Populate NLC modal grids ──────────────────────────────────────────
function populateNLCModal() {
  const players = ['mansterninja', 'spiderlair', 'unicow', 'bjoernen', 'lyrokun'];
  const staff   = ['ted_guru', 'utama', 'narco', 'amarillo', 'craith', 'ayvar', 'luwey', 'lyovik', 'mysterias', 'thunderyordle'];
  const alumni  = ['kobbe'];
  const pg = document.getElementById('nlc-players');
  const sg = document.getElementById('nlc-staff');
  const ag = document.getElementById('nlc-alumni');
  if (pg) pg.innerHTML = players.map(id => buildPcard(id, false)).join('');
  if (sg) sg.innerHTML = staff.map(id => buildPcard(id, true)).join('');
  if (ag) ag.innerHTML = alumni.map(id => buildPcard(id, true)).join('');
}

// ── Player profile modal ──────────────────────────────────────────────
function openPlayer(id) {
  const p = PLAYERS[id];
  if (!p) return;
  const histHTML   = p.history.map(h => `<div class="pprof-hist-item"><span class="pprof-hist-yr">${h.yr}</span><span class="pprof-hist-team">${h.team}</span></div>`).join('');
  const triviaHTML = p.trivia.map(t => `<div class="trivia-item"><div class="trivia-dot"></div><span>${t}</span></div>`).join('');
  const flagBadge  = p.flag ? `<span class="pbadge flag"><span class="pprof-flag">${p.flag}</span>${p.nat}</span>` : '';
  document.getElementById('pmodal-content').innerHTML = `
    <div class="pprof-header">
      <div class="pprof-photo jersey"><img src="${JERSEY_PATH}" alt="jersey"></div>
      <div class="pprof-meta">
        <div class="pprof-tag">${p.tag}</div>
        <div class="pprof-real">${p.real}</div>
        <div class="pprof-badges">
          <span class="pbadge role">${p.role}</span>
          ${flagBadge}
        </div>
      </div>
    </div>
    <div class="pprof-section">
      <div class="pprof-section-title">Summary</div>
      <p>${p.bio}</p>
    </div>
    <div class="pprof-section">
      <div class="pprof-section-title">Career History</div>
      <div class="pprof-history">${histHTML}</div>
    </div>
    <div class="pprof-section">
      <div class="pprof-section-title">Trivia</div>
      <div class="trivia-list">${triviaHTML}</div>
    </div>`;
  document.getElementById('pmodal').classList.add('on');
}
function closePlayer() {
  document.getElementById('pmodal').classList.remove('on');
}
document.getElementById('pmodal').addEventListener('click', e => {
  if (e.target === document.getElementById('pmodal')) closePlayer();
});

// ── Keyboard shortcuts ────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (document.getElementById('pmodal').classList.contains('on')) closePlayer();
    else closeModal();
  }
});

// ── Contact form ──────────────────────────────────────────────────────
function submitForm(e) {
  e.preventDefault();
  document.getElementById('cf').style.display = 'none';
  document.getElementById('fsok').classList.add('on');
}

// ── Mobile nav toggle ─────────────────────────────────────────────────
function toggleNav() {
  const nl = document.getElementById('nl');
  if (nl.style.display === 'flex') {
    nl.style.display = '';
  } else {
    Object.assign(nl.style, {
      display: 'flex', flexDirection: 'column', position: 'fixed',
      top: '58px', left: '0', right: '0', background: 'rgba(7,9,15,.98)',
      padding: '18px 24px', gap: '16px',
      borderBottom: '1px solid rgba(255,255,255,.07)', zIndex: '99'
    });
  }
}

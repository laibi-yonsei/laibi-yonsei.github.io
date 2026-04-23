/* LAIBI Shared Components — Nav + Footer injection */

function renderNav(activePage) {
  const pages = [
    { name: 'Home', href: 'index.html' },
    { name: 'People', href: 'people.html' },
    { name: 'Publications', href: 'publications.html' },
    { name: 'Patents', href: 'patents.html' },
    { name: 'Projects', href: 'projects.html' },
    { name: 'Gallery', href: 'gallery.html' },
    { name: 'Apply', href: 'apply.html' },
  ];
  return `
  <nav class="site-nav">
    <div class="nav-inner">
      <a href="index.html" class="nav-brand">
        <img src="assets/laibi-logo.png" alt="LAIBI" />
      </a>
      <button class="nav-toggle" onclick="document.querySelector('.nav-links').classList.toggle('open')">☰</button>
      <div class="nav-links">
        ${pages.map(p => `<a href="${p.href}" class="${p.name === activePage ? 'active' : ''}">${p.name}</a>`).join('')}
      </div>
    </div>
  </nav>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-info">
        <strong>LAIBI</strong> · Lab of AI in Biomedical Informatics<br/>
        <span>Yonsei University · Wonju College of Medicine</span>
      </div>
      <div class="footer-links">
        <a href="mailto:syang@yonsei.ac.kr">Contact</a>
        <a href="apply.html">Join Us</a>
        <a href="https://github.com/laibi-yonsei" target="_blank">GitHub</a>
      </div>
    </div>
  </footer>
  <div class="footer-copy">© 2026 LAIBI. All rights reserved.</div>`;
}

function initPage(activePage) {
  const navEl = document.getElementById('site-nav');
  const footerEl = document.getElementById('site-footer');
  if (navEl) navEl.innerHTML = renderNav(activePage);
  if (footerEl) footerEl.innerHTML = renderFooter();
}

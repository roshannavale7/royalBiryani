(() => {
const header = document.getElementById("site-header");
const footer = document.getElementById("site-footer");
const path = location.pathname.split("/").pop() || "index.html";
const nav = [["index.html","home"],["about.html","about"],["menu.html","menu"],["gallery.html","gallery"],["franchise.html","franchise"],["contact.html","contact"]];
if(header){
 header.innerHTML=`<header class="site-header"><div class="container nav-wrap">
 <a class="brand" href="index.html"><span class="brand-mark">RB</span><span class="brand-name">ROYAL BIRYANI<small>THE ROYAL EXPERIENCE</small></span></a>
 <button class="menu-toggle" id="menu-toggle" aria-label="Toggle navigation">☰</button>
 <nav class="nav-links" id="nav-links">${nav.map(([url,key])=>`<a href="${url}" class="${path===url?'active':''}" data-i18n="${key}">${t(key)}</a>`).join("")}</nav>
 <div class="nav-actions"><select class="language-select" id="language-select" aria-label="Select language"><option value="en">English</option><option value="mr">मराठी</option><option value="hi">हिन्दी</option></select><a class="btn btn-gold btn-small" href="menu.html" data-i18n="orderNow">${t("orderNow")}</a></div>
 </div></header>`;
}
if(footer){
 footer.innerHTML=`<footer class="site-footer"><div class="container"><div class="footer-grid">
 <div><a class="brand" href="index.html"><span class="brand-mark">RB</span><span class="brand-name">ROYAL BIRYANI<small>THE ROYAL EXPERIENCE</small></span></a><p data-i18n="footerTagline">${t("footerTagline")}</p></div>
 <div><h4 data-i18n="quickLinks">${t("quickLinks")}</h4>${nav.slice(0,5).map(([url,key])=>`<a href="${url}" data-i18n="${key}">${t(key)}</a>`).join("")}</div>
 <div><h4 data-i18n="getInTouch">${t("getInTouch")}</h4><a href="contact.html" id="footer-address">${ROYAL_CONFIG.address}</a><a href="tel:${ROYAL_CONFIG.phoneDigits}" id="footer-phone">${ROYAL_CONFIG.phoneDisplay}</a><a href="mailto:${ROYAL_CONFIG.email}">${ROYAL_CONFIG.email}</a></div>
 <div><h4 data-i18n="followUs">${t("followUs")}</h4><a href="${ROYAL_CONFIG.instagram}" target="_blank" rel="noopener">Instagram ↗</a><a href="${ROYAL_CONFIG.facebook}" target="_blank" rel="noopener">Facebook ↗</a><a href="franchise.html" data-i18n="franchise">${t("franchise")}</a></div>
 </div><div class="footer-bottom"><span>© <span id="year"></span> Royal Biryani. <span data-i18n="copyright">${t("copyright")}</span></span><span>Crafted for a royal appetite.</span></div></div></footer>`;
 document.getElementById("year").textContent=new Date().getFullYear();
}
const toggle=document.getElementById("menu-toggle");
if(toggle) toggle.addEventListener("click",()=>document.getElementById("nav-links").classList.toggle("open"));
const selector=document.getElementById("language-select");
if(selector){selector.value=currentLang;selector.addEventListener("change",e=>applyLanguage(e.target.value));}
})();

document.addEventListener("DOMContentLoaded",()=>{
  applyLanguage(currentLang);
  const address=document.getElementById("business-address"); if(address) address.textContent=ROYAL_CONFIG.address;
  const phone=document.getElementById("business-phone"); if(phone) phone.textContent=ROYAL_CONFIG.phoneDisplay;
  const email=document.getElementById("business-email"); if(email) email.textContent=ROYAL_CONFIG.email;
  const wa=document.getElementById("contact-whatsapp");
  if(wa) wa.href=`https://wa.me/${ROYAL_CONFIG.phoneDigits}?text=${encodeURIComponent("Hello Royal Biryani, I would like to know more.")}`;
  const franchise=document.getElementById("franchise-form");
  if(franchise) franchise.addEventListener("submit",e=>{e.preventDefault();const data=Object.fromEntries(new FormData(franchise));const subject=encodeURIComponent("Royal Biryani franchise enquiry – "+data.city);const body=encodeURIComponent(Object.entries(data).map(([k,v])=>`${k}: ${v}`).join("\n"));document.getElementById("franchise-status").textContent=t("formEmailFallback");location.href=`mailto:${ROYAL_CONFIG.franchiseEmail}?subject=${subject}&body=${body}`;});
  const contact=document.getElementById("contact-form");
  if(contact) contact.addEventListener("submit",e=>{e.preventDefault();const data=Object.fromEntries(new FormData(contact));const subject=encodeURIComponent("Website enquiry – Royal Biryani");const body=encodeURIComponent(Object.entries(data).map(([k,v])=>`${k}: ${v}`).join("\n"));document.getElementById("contact-status").textContent=t("formEmailFallback");location.href=`mailto:${ROYAL_CONFIG.email}?subject=${subject}&body=${body}`;});
});

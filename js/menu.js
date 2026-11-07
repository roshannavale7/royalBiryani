const PRODUCTS = [
{id:1,name:"Chicken Dum Biryani",category:"nonveg",price:220,desc:"Aromatic basmati rice layered with spiced chicken.",image:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=80"},
{id:2,name:"Chicken 65 Biryani",category:"nonveg",price:240,desc:"A bold, flavour-packed chicken favourite.",image:"https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=700&q=80"},
{id:3,name:"Mutton Dum Biryani",category:"nonveg",price:290,desc:"A hearty dum-style biryani with rich spices.",image:"https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=700&q=80"},
{id:4,name:"Royal Veg Biryani",category:"veg",price:180,desc:"Seasonal vegetables, fragrant rice and whole spices.",image:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=80"},
{id:5,name:"Paneer Tikka Biryani",category:"veg",price:210,desc:"Paneer tikka-inspired flavours with basmati rice.",image:"https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=700&q=80"},
{id:6,name:"Egg Biryani",category:"nonveg",price:190,desc:"Spiced egg and aromatic rice in a satisfying classic.",image:"https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=700&q=80"},
{id:7,name:"Masala Raita",category:"sides",price:40,desc:"Cooling yoghurt with herbs and gentle spices.",image:"https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=700&q=80"},
{id:8,name:"Mirchi Ka Salan",category:"sides",price:55,desc:"A rich, nutty accompaniment to biryani.",image:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80"},
{id:9,name:"Gulab Jamun (2 pcs)",category:"sides",price:60,desc:"A sweet finish to your royal meal.",image:"https://images.unsplash.com/photo-1666190092159-3a7b2b8b9d8d?auto=format&fit=crop&w=700&q=80"}
];
let cart=JSON.parse(localStorage.getItem("royalCart")||"[]");
const money=n=>`${ROYAL_CONFIG.currency}${n.toLocaleString("en-IN")}`;
function renderProducts(filter="all"){
 const grid=document.getElementById("menu-grid");if(!grid)return;
 const list=filter==="all"?PRODUCTS:PRODUCTS.filter(p=>p.category===filter);
 grid.innerHTML=list.map(p=>`<article class="menu-card"><img src="${p.image}" alt="${p.name}" loading="lazy"><div class="menu-card-body"><div class="menu-card-top"><span class="small muted"><i class="diet-dot ${p.category==='nonveg'?'nonveg':''}"></i>${p.category==='veg'?'VEG':p.category==='nonveg'?'NON-VEG':'SIDES'}</span><strong class="price">${money(p.price)}</strong></div><h3>${p.name}</h3><p>${p.desc}</p><button class="btn btn-gold btn-small" data-add="${p.id}">${t("addToCart")}</button></div></article>`).join("");
 grid.querySelectorAll("[data-add]").forEach(btn=>btn.addEventListener("click",()=>addItem(Number(btn.dataset.add))));
}
function saveCart(){localStorage.setItem("royalCart",JSON.stringify(cart));renderCart();}
function addItem(id){const p=PRODUCTS.find(x=>x.id===id);const found=cart.find(x=>x.id===id);if(found)found.qty++;else cart.push({...p,qty:1});saveCart();openCart();}
function changeQty(id,delta){const item=cart.find(x=>x.id===id);if(!item)return;item.qty+=delta;if(item.qty<=0)cart=cart.filter(x=>x.id!==id);saveCart();}
function renderCart(){
 const count=cart.reduce((s,x)=>s+x.qty,0),total=cart.reduce((s,x)=>s+x.price*x.qty,0);
 const countEl=document.getElementById("cart-count"),itemsEl=document.getElementById("cart-items"),totalEl=document.getElementById("cart-total");
 if(countEl)countEl.textContent=count;if(totalEl)totalEl.textContent=money(total);
 if(itemsEl)itemsEl.innerHTML=cart.length?cart.map(x=>`<div class="cart-line"><div><h4>${x.name}</h4><small>${money(x.price)} each</small><div class="qty-controls"><button data-qty="${x.id}" data-delta="-1">−</button><b>${x.qty}</b><button data-qty="${x.id}" data-delta="1">+</button></div></div><strong>${money(x.price*x.qty)}</strong></div>`).join(""):`<p class="muted">${t("emptyCart")}</p>`;
 if(itemsEl)itemsEl.querySelectorAll("[data-qty]").forEach(b=>b.addEventListener("click",()=>changeQty(Number(b.dataset.qty),Number(b.dataset.delta))));
}
function openCart(){document.getElementById("cart-drawer")?.classList.add("open");document.getElementById("cart-backdrop")?.classList.add("open");document.getElementById("cart-drawer")?.setAttribute("aria-hidden","false");}
function closeCart(){document.getElementById("cart-drawer")?.classList.remove("open");document.getElementById("cart-backdrop")?.classList.remove("open");document.getElementById("cart-drawer")?.setAttribute("aria-hidden","true");}
function orderWhatsApp(){
 if(!cart.length){alert(t("cartEmptyAlert"));return;}
 const total=cart.reduce((s,x)=>s+x.price*x.qty,0);
 let msg=t("orderIntro")+"\n\n"+cart.map(x=>`${x.name} x ${x.qty} = ${money(x.price*x.qty)}`).join("\n")+`\n\n${t("total")}: ${money(total)}\n\nName:\nDelivery address:`;
 window.open(`https://wa.me/${ROYAL_CONFIG.phoneDigits}?text=${encodeURIComponent(msg)}`,"_blank","noopener");
}
document.addEventListener("DOMContentLoaded",()=>{
 if(!document.getElementById("menu-grid"))return;
 renderProducts();renderCart();
 document.querySelectorAll("[data-filter]").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("[data-filter]").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderProducts(b.dataset.filter);}));
 document.getElementById("cart-open")?.addEventListener("click",openCart);
 document.getElementById("cart-close")?.addEventListener("click",closeCart);
 document.getElementById("cart-backdrop")?.addEventListener("click",closeCart);
 document.getElementById("whatsapp-btn")?.addEventListener("click",orderWhatsApp);
 document.getElementById("checkout-btn")?.addEventListener("click",orderWhatsApp);
 document.addEventListener("royal:languagechange",()=>{renderProducts(document.querySelector("[data-filter].active")?.dataset.filter||"all");renderCart();});
});

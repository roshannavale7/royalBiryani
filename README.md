# Royal Biryani – Multilingual Franchise Website

A responsive, multi-page restaurant/franchise website built with HTML5, CSS3 and vanilla JavaScript.

## Pages
- `index.html` – Home
- `about.html` – Our story
- `menu.html` – Menu with category filters and cart
- `franchise.html` – Franchise information and enquiry form
- `gallery.html` – Food gallery
- `contact.html` – Contact details and enquiry form

## Run locally
1. Extract the ZIP.
2. Open the folder in VS Code.
3. Recommended: install the **Live Server** extension.
4. Right-click `index.html` → **Open with Live Server**.

You can also open `index.html` directly in a browser. A local web server is recommended.

## Important configuration
Open `js/config.js` and update:
- Restaurant phone and WhatsApp number (international format, digits only, e.g. `919876543210`)
- Email, address, opening hours and social links
- Currency and menu prices
- Franchise investment text and brand details

Replace the demo food photos in `assets/images/` with your own licensed restaurant photographs. The current demo uses remote Unsplash image URLs.

## Languages
Use the language selector in the header to switch between English, Marathi and Hindi. The preference is saved in browser LocalStorage.

## Ordering
- The cart works in the browser and is saved in LocalStorage.
- “Order on WhatsApp” opens WhatsApp with the cart summary.
- “Checkout” creates an order summary and opens WhatsApp as the handoff.
- This is **not** a payment gateway or a server-side order system. For secure online payments, order storage, inventory, customer accounts and an admin panel, integrate a backend and payment provider.

## Forms
Franchise and contact forms validate fields in the browser and open an email draft using the configured email address. They do not store submissions on a server. For production, connect them to a backend or trusted form service.

## Deployment
Upload the entire project folder contents to your hosting provider's public web root (often `public_html`). Keep the folder structure intact. Configure your domain's HTTPS certificate and test all links on the live domain.

## Before launch checklist
- [ ] Replace demo logo/brand text with approved brand assets.
- [ ] Add actual restaurant address, phone, email and opening hours.
- [ ] Add real menu items, prices, portion sizes and allergen details.
- [ ] Replace demo photos with owned/licensed photos.
- [ ] Verify franchise claims, investment details and legal disclosures.
- [ ] Connect forms and payments to production services if required.
- [ ] Test Marathi/Hindi copy with a fluent reviewer.
- [ ] Test WhatsApp ordering on a real phone.

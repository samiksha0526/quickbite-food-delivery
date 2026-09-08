# QuickBite — Food Delivery Demo

A complete multi-page food delivery website inspired by Zomato, built with HTML, CSS and vanilla JavaScript.

This repository contains a static front-end demo (no server-side code). Pages include a home page, restaurants listing, restaurant menu and a cart — data is provided in script.js.

## Features

- Multi-page static site: index.html, restaurants.html, menu.html, cart.html
- Responsive layout using CSS (styles.css)
- Sample restaurant and menu data (script.js)
- Cart stored in browser localStorage (add, remove, update quantity)
- Simple navigation helpers and UI animations

## Quick start — run locally

You only need a static file server to run this project. Pick one of the options below.

1. Clone the repo

```bash
git clone https://github.com/samiksha0526/quickbite-food-delivery.git
cd quickbite-food-delivery
```

2. Serve files locally

- Using Python 3 (no install required on most systems):

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

- Using npx (no global install):

```bash
npx serve . -l 5000
# open http://localhost:5000
```

- Using http-server (Node.js global package):

```bash
npm install -g http-server
http-server -p 8000
# open http://localhost:8000
```

- From VS Code: install the Live Server extension and choose "Open with Live Server" on `index.html`.

3. Open the site in your browser

Visit the served URL (e.g. http://localhost:8000) and navigate the pages. Click a restaurant on the Restaurants page to view its menu and add items to the cart.

## Files of interest

- `index.html` — Home page
- `restaurants.html` — Restaurant listing and filters
- `menu.html` — Restaurant menu and add-to-cart actions
- `cart.html` — Cart and order summary
- `styles.css` — All styles
- `script.js` — Shared sample data and helpers (restaurantData, menuData, navigation and cart utilities)

Note: `script.js` was added to provide sample data and make the pages functional.

## Troubleshooting

- Blank page / broken UI: open Developer Tools → Console and Network to check for 404s (e.g. missing `script.js` or `styles.css`).
- If you open `index.html` directly via file:// some features that rely on navigation or relative requests may not behave as when served via HTTP — use a local server.
- If cart doesn't persist between reloads, ensure localStorage is enabled in your browser.

## Development notes

- The data is currently hard-coded in `script.js`. If you want to use an external JSON file or a real backend, replace `restaurantData` / `menuData` with fetch calls.
- To change the sample restaurants or menu items, edit `script.js`.

## Deploying to GitHub Pages (optional)

1. In the repository settings, enable GitHub Pages and choose the `main` branch (root) as the source.
2. After enabling, your site will be available at `https://<your-username>.github.io/quickbite-food-delivery/` (allow a minute for propagation).

Note: GitHub Pages serves static files; the same site files will work there without changes.

## Contributing

Feel free to open issues or PRs for bug fixes, new features, or content updates. Small, focused commits and clear PR descriptions are appreciated.

## License

This project is provided as-is for demo/learning purposes. Add a license file if you want to clarify reuse terms.

# CineVault — Movie & Series Explorer

A responsive front-end catalog built with React, React Router, and Tailwind CSS. It uses JavaScript OOP models and local storage; no backend is required.

## Features

- Home page with a featured title and trending picks
- Explore catalog with title search, genre filter, format filter, and sorting
- Dynamic details page for each movie or series
- Add/remove items from a watchlist
- Watchlist persists in browser local storage
- Responsive layout for mobile, tablet, and desktop
- OOP models: `MediaItem`, `Movie`, `Series`, and `Watchlist`

## Requirements

Install Node.js LTS first: https://nodejs.org/

## Run locally

Open a terminal in the project folder and run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

Check production build:

```bash
npm run build
npm run preview
```

## Main routes

| Route | Purpose |
|---|---|
| `/` | Home |
| `/explore` | Search, filter, sort catalog |
| `/media/:id` | Details for a title |
| `/watchlist` | Saved titles |

## OOP structure

- `src/models/MediaItem.js`: base class for common media fields
- `src/models/Movie.js`: extends `MediaItem` with movie duration
- `src/models/Series.js`: extends `MediaItem` with season count
- `src/models/Watchlist.js`: encapsulates add/remove/lookup logic
- `src/data/mediaData.js`: creates class instances from the sample catalog

## Figma design plan

Create a Figma file named **CineVault — UI/UX Prototype**. Use a desktop frame (1440 × 1000) and a mobile frame (390 × 844). Build these frames:

1. **Home:** navigation, cinematic hero, featured title, trending cards, CTA.
2. **Explore:** page heading, search field, genre/type/sort controls, poster grid.
3. **Details:** backdrop, poster, title metadata, description, save button.
4. **Watchlist:** saved poster grid and empty state.
5. **Components:** navbar, poster card, buttons, filter input, badges.

Suggested style tokens:
- Background: `#09090F`
- Panel: `#12121C`
- Accent violet: `#8B5CF6`
- Primary text: `#FFFFFF`
- Muted text: `#A1A1AA`
- Card radius: 16 px
- Main content max width: 1280 px

Prototype links:
- Home → Explore
- Poster card → Details
- Add button → Saved state
- Navbar Watchlist → Watchlist
- Watchlist empty state → Explore

## GitHub submission

Create a public repository named `cinevault`. From this folder:

```bash
git init
git add .
git commit -m "Build CineVault movie and series explorer"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/cinevault.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. Do not commit `node_modules`.

## Notes

- Poster images use external image URLs. An internet connection is needed to load them.
- The app is a catalog prototype only; it does not play or stream movies.
- Verify external image URLs and revise any unavailable posters before final submission.
- The sample metadata is for demonstration and should be checked before presenting.

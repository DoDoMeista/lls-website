# Lundqvist Lightside — Official Website

Official website for Lundqvist Lightside, Northern Sweden's competitive esports organization. Founded 2014. #JoinTheLightside

## Project Structure

```
lls-website/
├── index.html              # Main HTML — page structure & content
├── css/
│   └── style.css           # All styles & CSS variables
├── js/
│   ├── players.js          # Player & staff profile data (edit this to update rosters)
│   └── app.js              # UI logic — modals, animations, form handling
├── assets/
│   └── images/
│       ├── logo.png              # White symbol logo (transparent bg)
│       ├── logo-midnight.png     # LLS team card logo (blue)
│       ├── logo-crimson.png      # LDS team card logo (red)
│       ├── mountain.png          # Low-poly mountain hero background
│       └── jersey-placeholder.png # Player photo placeholder
└── README.md
```

## How to Update Common Things

### Update a player profile
Edit `js/players.js`. Each player is an object with:
- `tag` — in-game name
- `real` — real name (use `'—'` if unknown)
- `flag` / `nat` — emoji flag and nationality string
- `role` — role label shown on profile
- `bio` — paragraph shown in the profile modal
- `history` — array of `{yr, team}` objects
- `trivia` — array of trivia strings

### Add a new player to the NLC roster
1. Add their data object to `js/players.js`
2. In `js/app.js`, add their ID to the `players` array inside `populateNLCModal()`

### Change the NLC roster grid
In `js/app.js`, find `populateNLCModal()` and edit the `players`, `staff`, or `alumni` arrays.

### Update social links or nav links
Edit `index.html` directly — links are readable plain text, easy to find with Ctrl+F.

### Update sponsors
Edit the sponsors section in `index.html` (search for `id="sponsors"`).

### Change colors / fonts
Edit the CSS variables at the top of `css/style.css` (`:root { ... }`).

### Add a real player photo
Replace `assets/images/jersey-placeholder.png` with the player's photo, OR add per-player images:
1. Drop `playerhandle.png` into `assets/images/`
2. In `js/players.js` add `photo: 'assets/images/playerhandle.png'` to the player object
3. In `js/app.js` the `buildPcard()` function uses `JERSEY_PATH` — update it to read `p.photo || JERSEY_PATH`

## Deployment (GitHub Pages)

See deployment instructions — push to `main` branch, enable Pages in repo settings.

## Live URL

Once deployed: `https://yourusername.github.io/lls-website/`
Or with a custom domain: `https://lightside.gg`

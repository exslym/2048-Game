## [2048 Game](https://exslym.github.io/2048-Game/)

[![preview](https://github.com/exslym/2048-Game/blob/main/public/preview.jpg)](https://exslym.github.io/2048-Game/)

### This is a popular puzzle game where the player must combine numbered tiles to reach the ultimate goal of creating a tile with the number 2048. Made with JavaScript.

---

### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Production Version

```
npm run build
```

### Preview Build Production Version

```
npm run serve
```

### Deployment on GitHub Pages (Optional)

```
npm run deploy
```

This adds gh-pages branch to your project github repository, deploys built project there, hosts the site via GitHub Pages.

### Features:

- `Legacy Browsers` support via **@vite/plugin-legacy** with built-in **babel**
- `SCSS` support via **sass**
- `Linting` support via **eslint**
- `Formatter` support via **prettier**
- `Autoprefix` support via **postcss**
- `Image Optimization` support via **vite-plugin-image-optimizer**

### When you run `npm run build`:

- All image files (svg, png, jpg/jpeg, tiff, gif, webp, avif) gets compressed with lossless quality
  <br />via [vite-plugin-image-optimizer](https://github.com/FatehAK/vite-plugin-image-optimizer).

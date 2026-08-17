# TORALVA Trailers

Landing page de TORALVA Trailers: fabricación de trailas, venta de refacciones y reparación.

Sitio publicado con **GitHub Pages** a partir de este repositorio.

## Desarrollo local

Requiere Node.js 20+.

```sh
npm install
npm run dev
```

## Build de producción

```sh
npm run build
npm run preview
```

`npm run build` genera el sitio estático en `dist/`. El workflow en
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) hace este build
automáticamente y lo publica en GitHub Pages en cada push a `main`.

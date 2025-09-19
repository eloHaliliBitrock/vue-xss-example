# Vue-i18n v9.10 XSS Demo

This project demonstrates an XSS vulnerability in `vue-i18n@9.10` when using `v-html` to render translations containing untrusted HTML.

## How the XSS Works

- The translation for `welcome` contains a malicious `<img>` tag with an `onerror` handler that triggers `alert('XSS!')`.
- The `XssDemo.vue` component renders this translation using `v-html`:
  ```vue
  <div v-html="$t('welcome')"></div>
  ```
- When the page loads, the malicious code executes, showing an alert.

## How to Run

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the dev server:
   ```sh
   npm run dev
   ```
3. Open the app in your browser. You should see an alert triggered by the XSS payload.

## Important

**Never use `v-html` with untrusted translations or user input.**

---

This demo is for educational purposes only.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

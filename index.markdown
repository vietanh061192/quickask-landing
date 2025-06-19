---
permalink: /
layout: none
---

<script>
  const supportedLangs = ['en', 'vi', 'ja', 'ko', 'hi'];
  const lang = navigator.language.slice(0, 2).toLowerCase();
  const target = supportedLangs.includes(lang) ? lang : 'en';
  window.location.replace(`/${target}/`);
</script>

Redirecting...

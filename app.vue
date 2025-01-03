<template>
  <div class="app">
    <NuxtPage />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "roboto-mono";
  src: url("/fonts/roboto-mono/static/RobotoMono-Regular.ttf") format("ttf");
  font-weight: normal;
  font-style: normal;
}

html,
body,
#__nuxt {
  height: 100%;
}

body {
  background-color: $dark;
  color: $text;
  font-family: "roboto-mono", sans-serif;
  font-size: 18px;
  line-height: 24px;
}

.app {
  height: 100%;
}
</style>

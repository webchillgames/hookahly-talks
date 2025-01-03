<script lang="ts" setup>
import EButton from "~/elements/EButton.vue";
import EText from "~/elements/EText.vue";

import { themes } from "~/modules/theme/mock";

const id = ref<null | number>(null);

const theme = computed((): string | null =>
  id.value !== null && id.value >= 0 ? themes[id.value] : null
);

function changeId(max: number): void {
  id.value = Math.floor(Math.random() * (max - 0) + 0);
}
</script>

<template>
  <div class="c-theme">
    <EButton @click="() => changeId(themes.length)">Random theme</EButton>

    <p v-if="!theme">Click/Tap on 'Random theme'</p>

    <Transition mode="out-in">
      <EText v-if="theme" :key="theme">{{ theme }}</EText>
    </Transition>
  </div>
</template>

<style lang="scss">
.c-theme {
  height: 100%;
  background-image: url("~/assets/bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
  padding: 16px;

  button {
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    padding: 8px;
    background-size: auto 100%;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

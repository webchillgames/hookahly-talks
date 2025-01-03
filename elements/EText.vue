<script lang="ts" setup></script>

<template>
  <div class="e-text">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.e-text {
  border: 2px solid $accent-color;
  border-radius: 8px;
  padding: 8px 16px;
  background-color: rgba($middle-dark, 0.5);
  max-width: 420px;
}
</style>

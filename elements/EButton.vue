<script lang="ts" setup></script>

<template>
  <button class="e-button">
    <slot></slot>
  </button>
</template>

<style lang="scss">
.e-button {
  border: 2px solid $accent-color;
  color: $accent-color;
  background-color: transparent;
  border-radius: 8px;
  padding: 8px 16px;
  transition: all 0.2s;
  cursor: pointer;

  &:active {
    background-color: $middle-dark;
    border-color: $dark-accent-color;
    transform: scale(0.9);
  }

  &:hover {
    background-color: $middle-dark;
    border-color: $dark-accent-color;
  }
}
</style>

<script lang="ts">

export default {
}
</script>

<template>
  <ul class="list__items">
    <slot></slot>
  </ul>
</template>

<style>
.list__items {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-bottom: 20px;
    will-change: transform;
    transform-style: preserve-3d;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
}

ul {
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0;
}
</style>
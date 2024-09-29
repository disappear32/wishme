<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: false,
    },
    hint: {
      type: String,
      required: true,
    },
    timeLeft: {
      type: String,
      required: false,
    },
    redirectTo: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <li class="list_item">
    <div class="list_item_container">

      <div class="list_item_container__name">{{ name }}</div>

      <div
          v-if="date"
          class="list_item_container__date"
      >
        {{ date }}
      </div>

      <div class="list_items">
        <div class="list_item_container__hint">{{ hint }}</div>
        <router-link
            class="list_item_container__button"
            :to="{ name: redirectTo }"
        >
          показать все
        </router-link>
      </div>

    </div>
  </li>
</template>

<style>
.list_item {
  position: relative;
  width: calc(100% - 2px);
  height: 120px;
  border-radius: 15px;
  border: 1px solid var(--theme-button-color);
}

.list_item_container {
  position: absolute;
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.list_item_container__name {
  color: var(--theme-text-color);
  font-family: Roboto,serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
}

.list_items {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.list_item_container__date {
  color: var(--theme-text-color);
  font-family: Roboto,serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
}

.list_item_container__hint {
  flex: auto;
  width: 100%;
  color: var(--theme-text-color);
  opacity: 0.65;
  font-family: Roboto,serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}

.list_item_container__button {
  color: var(--theme-link-color);
  text-align: center;
  text-decoration: none;
  font-family: Roboto,serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  white-space: nowrap;
  display: inline-block;
  position: relative;
  z-index: 1;
  padding: 15px;
  margin: -15px;
}
</style>
<script lang="ts">
import CreateForm from '../components/CreateForm.vue';
import {useTgWebApp} from '../stores/tgWebApp';

export default {
  components: {CreateForm},
  setup() {
    const tgWebApp = useTgWebApp();
    const emojis =  ['📜', '📦', '🎉', '🗿', '✨'];

    return {
      tgWebApp,
      emojis,
    }
  },
  methods: {
    onMainButtonClick() {
      this.$router.push({ name: 'add-wishlist' })
      console.log('Сохранить')
    },
    hideMainButton() {
      this.tgWebApp.hideMainButton()
    },
    showMainButton() {
      this.tgWebApp.showMainButton('Сохранить', this.onMainButtonClick)
    }
  },
  mounted() {
    this.tgWebApp.showBack()
    this.tgWebApp.showMainButton('Сохранить', this.onMainButtonClick)
  },
  unmounted() {
    this.tgWebApp.offMainButtonEventListener(this.onMainButtonClick)
  },
  beforeRouteLeave() {
    this.tgWebApp.offMainButtonEventListener(this.onMainButtonClick)
  },
}
</script>

<template>
  <CreateForm
      @onInputClick="hideMainButton"
      @onOutsideInputClick="showMainButton"
      :emojis="emojis"
  />
</template>

<style></style>
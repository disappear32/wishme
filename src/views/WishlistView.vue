<script lang="ts">
import {defineComponent} from 'vue';
import ListContainer from '../components/ListContainer.vue';
import {useRouter} from 'vue-router';
import {useTgWebApp} from '../stores/tgWebApp';
import {useUserStore} from "../stores/user.ts";

export default defineComponent({
  components: {ListContainer},
  setup() {
    const router = useRouter();
    const user = useUserStore();
    const tgWebApp = useTgWebApp();
    const wishlistId = router.currentRoute.value.meta.id as number;
    const list = user.wishlists[wishlistId];

    return {
      list,
      tgWebApp,
    }
  },
  mounted() {
    this.tgWebApp.showBack();
    this.tgWebApp.showMainButton('Добавить вишлист', () => {});
  },
  unmounted() {
    this.tgWebApp.hideMainButton();
  },
});
</script>

<template>
  <ListContainer>
  </ListContainer>
</template>

<style></style>
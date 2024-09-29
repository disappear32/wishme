<script lang="ts">
import {defineComponent} from 'vue';
import ListContainer from '../components/ListContainer.vue';
import DefaultListItem from "../components/DefaultListItem.vue";
import {useTgWebApp} from '../stores/tgWebApp';
import {useUserStore} from '../stores/user';
import {useRouter} from 'vue-router';

export default defineComponent ({
  components: {DefaultListItem, ListContainer},
  setup() {
    const router = useRouter();
    const user = useUserStore();
    const tgWebApp = useTgWebApp();
    const list = user.wishlists;
    console.log(list)

    return {
      router,
      tgWebApp,
      list
    };
  },
  mounted() {
    this.tgWebApp.showBack();
    this.tgWebApp.showMainButton('Добавить вишлист', this.onMainButtonClick);
  },
  unmounted() {
    this.tgWebApp.offMainButtonEventListener(this.onMainButtonClick);
    this.tgWebApp.hideMainButton();
  },
  beforeRouteLeave(to, from) {
    this.tgWebApp.offMainButtonEventListener(this.onMainButtonClick);

    if (to.path < from.path) {
      this.tgWebApp.hideMainButton();
    }
  },
  methods: {
    onMainButtonClick() {
      this.router.push({ name: 'add-wishlist' });
      console.log('Добавить вишлист');
    }
  },
});
</script>

<template>
  <ListContainer>
    <DefaultListItem
        v-for="(item, index) in list"
        :key="`list_item_${index}`"
        :name="item.name"
        :date="item.date"
        :hint="`${item.list.length} подарков`"
        :redirectTo="'wishlist'"
    />
  </ListContainer>
</template>

<style></style>
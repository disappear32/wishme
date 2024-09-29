<script lang="ts">
import {defineComponent} from 'vue';
import DefaultListItem from '../components/DefaultListItem.vue';
import {useUserStore} from '../stores/user.ts';
import {useTgWebApp} from '../stores/tgWebApp';
import {MainNames} from '../consts/mainNames.ts';
import ListContainer from "../components/ListContainer.vue";

export default defineComponent({
  components: {ListContainer, DefaultListItem},
  setup() {
    const user = useUserStore();
    const tgWebApp = useTgWebApp();

    const list = [
      { name: MainNames.wishlists, hint: `${user.wishlists.length} списков желаний`, redirectTo: 'wishlists'},
      { name: MainNames.unsorted, hint: `${user.unsorted.length} ссылок`, redirectTo: 'wishlists'},
      { name: MainNames.drafts, hint: `${user.drafts.length} несохраненных желаний`, redirectTo: 'wishlists'},
    ];

    return {
      tgWebApp,
      list,
    };
  },
  mounted() {
    this.tgWebApp.hideBack();
  },
});
</script>

<template>
  <ListContainer>
    <DefaultListItem
        v-for="(item, index) in list"
        :key="`list_item_${index}`"
        :name="item.name"
        :hint="item.hint"
        :redirectTo="item.redirectTo"
    />
  </ListContainer>
</template>

<style></style>
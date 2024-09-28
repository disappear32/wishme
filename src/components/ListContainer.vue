<template>
    <ul class="list__items">
        <DefaultListItem v-for="(item, index) in list" :listItemData="item" :key="index" />
    </ul>
</template>

<script lang="ts">
import DefaultListItem from './DefaultListItem.vue'

export default {
    data() {
        return {}
    },
    components: { DefaultListItem },
    props: {
        list: { type: Array, required: true},
    }
}
</script>

<style>
.list__items {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 20px;
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
<template>
    <li class="list_item">
        <div class="list_item_container">
            <div class="list_item_container__name">{{ name }}</div>
            <div style="display: flex; flex-direction: row; justify-content: space-between;">
                <div class="list_item_container__description">{{ description }}</div>
                <!-- <div  @click="openCurrentDirection">показать все</div> -->
                <router-link style="text-decoration: none;" class="list_item_container__button"
                    :to="{ name: 'wishlists' }">показать все</router-link>
            </div>
        </div>
    </li>
</template>

<script lang="ts">
export default {
    data() {
        return {
            name: this.listItemData?.name,
            description: this.listItemData?.description,
            date: this.listItemData?.description,
            url: this.listItemData?.url,
        }
    },
    props: ['listItemData'],
    methods: {
        openCurrentDirection() {
            console.log('добавить редирект по клику')
        }
    }
}
</script>

<style>
.list_item {
    position: relative;
    width: calc(100% - 2px);
    height: 120px;
    border-radius: 15px;
    border: 1px solid var(--tg-theme-button-color);
}

.list_item_container {
    position: absolute;
    width: calc(100% - 30px);
    height: calc(100% - 30px);
    margin: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
}

.list_item_container__name {
    color: var(--tg-theme-text-color);
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
}

.list_item_container__description {
    color: var(--tg-theme-text-color);
    opacity: 0.65;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;

}

.list_item_container__button {
    color: var(--tg-theme-link-color);
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    display: inline-block;
    position: relative;
    z-index: 1;
    padding: 15px;
    margin: -15px;
}
</style>
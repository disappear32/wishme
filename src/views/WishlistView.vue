<template>
    <ListContainer :list="listArray" />
</template>

<script lang="ts">
import ListContainer from '../components/ListContainer.vue'
import { useWebApp } from '../stores/webapp'

export default {
    data() {
        return {
            listArray: [
                { name: 'iPhone 13 Pro', price: '130 000 р', status: 'active', isPinned: true, url: 'https://www.ozon.ru/product/kedy-reebok-court-advance-870121571/?avtc=1&avte=2&avts=1707472059', decription: 'Тут небольшое описание на 400 символов, ну может и не на 400, но текста достаточно' },
                { name: 'iPhone 13 Pro', price: '130 000 р', status: 'active', isPinned: true, url: 'https://www.ozon.ru/product/kedy-reebok-court-advance-870121571/?avtc=1&avte=2&avts=1707472059', decription: 'Тут небольшое описание на 400 символов, ну может и не на 400, но текста достаточно' },
                { name: 'iPhone 13 Pro', price: '130 000 р', status: 'active', isPinned: true, url: 'https://www.ozon.ru/product/kedy-reebok-court-advance-870121571/?avtc=1&avte=2&avts=1707472059', decription: 'Тут небольшое описание на 400 символов, ну может и не на 400, но текста достаточно' },
                { name: 'iPhone 13 Pro', price: '130 000 р', status: 'active', isPinned: true, url: 'https://www.ozon.ru/product/kedy-reebok-court-advance-870121571/?avtc=1&avte=2&avts=1707472059', decription: 'Тут небольшое описание на 400 символов, ну может и не на 400, но текста достаточно' },
            ]
        }
    },
    components: { ListContainer },
    methods: {
        createDateString() {
            //console.log(ts)

            return '20 ноября '
        }
    },
    mounted() {
        useWebApp().showBack()

        useWebApp().MainButton.show()
        useWebApp().MainButton.setText('Добавить вишлист')
    },
    unmounted() {
        useWebApp().MainButton.hide()
    }
}
</script>

<style scoped></style>
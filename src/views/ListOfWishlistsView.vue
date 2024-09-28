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
                { name: '🎁 День Рождения', description: '6 подарков', date: this.createDateString() },
                { name: '8 марта', description: '0 подарков', date: this.createDateString() },
                { name: '23 февраля', description: '15 подарков', date: this.createDateString() },
                { name: '23 февраля', description: '15 подарков', date: this.createDateString() },
                { name: '23 февраля', description: '15 подарков', date: this.createDateString() },
                { name: '23 февраля', description: '15 подарков', date: this.createDateString() },
                { name: '23 февраля', description: '15 подарков', date: this.createDateString() },
                { name: '14 февраля', description: '15 подарков', date: this.createDateString() },
            ]
        }
    },
    components: { ListContainer },
    methods: {
        createDateString() {
            //console.log(ts)

            return '20 ноября '
        },
        onMainButtonClick() {
            this.$router.push({ name: 'add-wishlist' })
            console.log('Добавить вишлист')
        }
    },
    mounted() {
        useWebApp().showBack()
        useWebApp().showMainButton('Добавить вишлист', this.onMainButtonClick)
    },
    unmounted() {
        useWebApp().offMainButtonEventListener(this.onMainButtonClick)
        useWebApp().hideMainButton()
    },
    beforeRouteLeave(to, from) {
        useWebApp().offMainButtonEventListener(this.onMainButtonClick)

        if (to.path < from.path) useWebApp().hideMainButton()
    },
}
</script>

<style scoped></style>
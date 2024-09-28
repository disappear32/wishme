<template>
    <creare-form :emojis="emojis" @onInputClick="hideMainButton" @onOutsideInputClick="showMainButton"/>
</template>

<script lang="ts">
import { useWebApp } from '../stores/webapp'
import CreareForm from '../components/CreateForm.vue'

export default {
    data() {
        return {
            emojis: ['📜', '📦', '🎉', '🗿', '✨']
        }
    },
    components: { CreareForm },
    methods: {
        onMainButtonClick() {
            this.$router.push({ name: 'add-wishlist' })
            console.log('Сохранить')
        },
        hideMainButton() {
            useWebApp().hideMainButton()
        },
        showMainButton() {
            useWebApp().showMainButton('Сохранить', this.onMainButtonClick)
        }
    },
    mounted() {
        useWebApp().showBack()
        useWebApp().showMainButton('Сохранить', this.onMainButtonClick)
    },
    unmounted() {
        useWebApp().offMainButtonEventListener(this.onMainButtonClick)
    },
    beforeRouteLeave() {
        useWebApp().offMainButtonEventListener(this.onMainButtonClick)
    },
}
</script>

<style></style>
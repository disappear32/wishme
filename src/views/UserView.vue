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
                { name: '🗂 Вишлисты', description: '12 списков желаний' },
                { name: '📎 Неотсортированные', description: '6 ссылок' },
                { name: '📝 Черновики', description: '1 несохраненное желание' },
            ]
        }
    },
    components: { ListContainer },
    mounted() {
        useWebApp().hideBack()
    }
}
</script>

<style></style>
<template>
    <header class="header">
        <div class="header_container">
            <div class="header_container__photo"></div>

            <div class="header_container__description">
                <div class="header_container__description--name">{{ name }}</div>
                <div class="header_container__description--link">{{ tgLink }}</div>
            </div>
        </div>
    </header>
</template>

<script lang="ts">

export default {
    data() {
        return {}
    },
    props: {
        name: String,
        tgLink: String,
        photoURL: String,
        isQrAllowed: Boolean
    }
}
</script>

<style>
.header {
    width: 100%;
}

.header_container {
    width: calc(100% - 60px);
    padding-left: 30px;
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.header_container__photo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: url('../assets/gift.jpg');
    background-position: center;
    background-size: cover;
}

.header_container__description {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.header_container__description--name {
    color: var(--theme-text-color);
    text-align: center;
    font-family: Roboto, serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
}

.header_container__description--link {
    color: var(--theme-text-color);
    font-family: Roboto, serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
}
</style>
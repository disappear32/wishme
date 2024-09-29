<template>
    <div class="create_form">
        <div class="create_form__item">
            <span class="create_form__item--title">Название</span>
            <input @focus="openKeyboard" @focusout="hideKeyboard" @blur="hideKeyboard" @keyup.enter="hideKeyboard"
                placeholder="Например, iPhone 15 Pro" class="create_form__item--name">
        </div>

        <div class="create_form__item">
            <span class="create_form__item--title">Дата события</span>
            <div class="create_form__item--data_picker">нажмите для выбора даты</div>
        </div>

        <div class="create_form__item">
            <span class="create_form__item--title">Emoji</span>
            <ul class="create_form__item--emojis-container">
                <li class="create_form__emoji" v-for="(emoji, index) in emojis" :key="index">
                    {{ emoji }}
                </li>
            </ul>
        </div>

        <div class="create_form__item">
            <div style="display: flex; justify-content: space-between;">
                <span class="create_form__item--title">Комментарий</span>
                <div class="create_form__item--title">0 / 280</div>
            </div>
            <textarea placeholder="Дополни описание комментарием, если это необходимо"
                class="create_form__item--comment"></textarea>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: ['emojis'],
    methods: {
        openKeyboard(event: FocusEvent) {
            // event.target?.focus()
            // this.$emit('onInputClick')
        },
        hideKeyboard(event: FocusEvent) {
            event.target?.blur()
            setTimeout(() => {
                this.$emit('onOutsideInputClick')
            }, 200)
        },
        handleClickOutsideKeyboard(event: Event) {
            if (event.target?.className === 'create_form__item--name') return

            document.getElementsByClassName('create_form__item--name')[0].blur()
            this.$emit('onOutsideInputClick')
        }
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutsideKeyboard)
    },
    unmounted() {
        document.removeEventListener('click', this.handleClickOutsideKeyboard)
    },
    beforeRouteLeave() {
        document.removeEventListener('click', this.handleClickOutsideKeyboard)
    },
}
</script>

<style>
.create_form {
    background-color: var(--theme-secondary-bg-color);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 15px 3px 20px 3px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.create_form__header {
    color: var(--theme-text-color);
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
}

.create_form__item {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.create_form__item--data_picker {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    width: 100%;
    height: 42px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--theme-button-color);
    color: var(--theme-text-color);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
}

.create_form__item--emojis-container {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    display: flex;
    flex-direction: row;
    gap: 25px;
}

.create_form__emoji {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: 1px solid var(--theme-button-color);
    border-radius: 5px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
}

.create_form__item--title {
    color: var(--theme-text-color);
    opacity: 0.75;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
}

.create_form__item--name {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    height: 42px;
    padding-left: 10px;
    border-radius: 5px;
    border: 1px solid var(--theme-button-color);
    background-color: var(--theme-secondary-bg-color);
    color: var(--theme-text-color);
    font-family: Roboto;
    font-size: 14px;
}

.create_form__item--comment {
    height: 128px;
    resize: none;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid var(--theme-button-color);
    background-color: var(--theme-secondary-bg-color);
    color: var(--theme-text-color);
    font-family: Roboto;
    font-size: 14px;
}

.create_form__item--name::placeholder,
.create_form__item--comment::placeholder {
    color: var(--theme-hint-color);
    font-family: Roboto;
    font-size: 14px;
}

.create_form__item--name,
.create_form__item--emojis-container,
.create_form__item--data_picker,
.create_form__item--comment {
    margin-top: 7px;
}

.create_form__item--name:focus,
.create_form__item--comment:focus {
    outline: none;
}
</style>
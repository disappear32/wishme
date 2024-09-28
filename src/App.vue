<script lang="ts">
import ProfileBar from './components/ProfileBar.vue'
import { useWebApp } from './stores/webapp'
import router from './router'

export default {
  data() {
    return {
      transitionName: 'slide-right',
    }
  },
  components: { ProfileBar },
  mounted() {
    useWebApp().ready()
    
    const appHeight = useWebApp().viewportStableHeight
    document.documentElement.style.setProperty('--app-height', `${appHeight}px`)
    setTimeout(() => {
      alert(`${window.innerHeight}, ${appHeight}`)
    }, 1000)
  },
  computed: {
    listName() {
      return router.currentRoute.value.meta.name as string
    },
    isShareAllowed() {
      return router.currentRoute.value.meta.isShareAllowed as boolean
    }
  },
  watch: {
    $route(to, from) {

      if (to.path > from.path) this.transitionName = 'slide-left'
      if (to.path < from.path) this.transitionName = 'slide-right'
    }
  }
}
</script>

<template>
  <div class="layout">
    <ProfileBar :name="'Настя'" :tgLink="'@AnaVarn'" :isQrAllowed="isShareAllowed" />

    <main class="list">
      <section class="list__header">
        <div class="list__header--name">{{ listName }}</div>
        <div class="list__header--share" v-if="isShareAllowed"></div>
      </section>
      <section class="content__container">
        <router-view v-slot="{ Component }">
          <transition :name="transitionName">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </section>
    </main>
  </div>
</template>

<style>
:root {
  --app-height: 100vh;
}
html,
body {
  margin: 0;
  padding: 0;
}
body {
  background-color: var(--tg-theme-secondary-bg-color);
  height: var(--app-height);
}

#app {
  height: 100%;
}

.layout {
  background-color: var(--tg-theme-bg-color);
  height: 100%;
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
  overflow-y: auto;
}

.list {
  position: relative;
  border-radius: 15px 15px 0px 0px;
  background-color: var(--tg-theme-secondary-bg-color);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* overflow-x: hidden; */
  /* overflow-y: auto;
  -webkit-transform: translate3d(0, 0, 0); */
  height: 100%;
}

.list__header {
  flex: none;
  padding: 24px 24px 12px 24px;
  background-color: var(--tg-theme-secondary-bg-color);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 2;
}

.list__header--name {
  color: var(--tg-theme-text-color);
  opacity: 0.85;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
}

.list__header--share {
  background-image: url('./assets/share_icon.png');
  background-position: center;
  background-size: cover;
  width: 30px;
  height: 30px;
}

.content__container {
  flex: auto;
  position: relative;
  width: calc(100vw - 40px);
  height: 100%;
  margin-left: 20px;
  margin-right: 20px;
}

.slide-right-enter-active,
.slide-left-enter-active,
.slide-right-leave-active,
.slide-left-leave-active {
  transition: all 0.5s ease;
  position: absolute;
}


.slide-right-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-110%, 0);
  -webkit-transform: translate(-110%, 0);
}

.slide-right-enter-to,
.slide-left-enter-to {
  opacity: 1;
  transform: translate(0, 0);
  -webkit-transform: translate(0, 0);
}

.slide-right-leave-from,
.slide-left-leave-from {
  opacity: 1;
  position: relative;
}

.slide-right-leave-to,
.slide-left-enter-from {
  opacity: 0;
  transform: translate(110%, 0);
  -webkit-transform: translate(110%, 0);
}

/* Скроллбар портит вид листа при переключении*/
@media screen and (min-width: 576px) {
  .content__container {
    width: calc(100vw - 40px - 10px);
  }
}
</style>

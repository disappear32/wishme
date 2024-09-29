<script lang="ts">
import {defineComponent, ref} from 'vue';
import ProfileBar from './components/ProfileBar.vue';
import {useTgWebApp} from './stores/tgWebApp';
import {useUserStore} from './stores/user';
import {useRoute} from 'vue-router';

export default defineComponent({
  components: {ProfileBar},
  setup() {
    const route = useRoute();
    const user = useUserStore();
    const tgWebApp = useTgWebApp();

    user.fetchData();

    const transitionName = ref('slide-up');
    const isScrollAvailable = ref(false);
    const isScrollBarVisible = ref(true);

    return {
      user,
      route,
      tgWebApp,
      transitionName,
      isScrollAvailable,
      isScrollBarVisible,
    };
  },
  computed: {
    listName() {
      return this.route.meta.name as string || this.route.params.wishlist;
    },
    isShareAllowed() {
      return this.route.meta.isShareAllowed as boolean;
    },
  },
  watch: {
    $route(to, from) {
      if (!from.href) {
        this.transitionName = 'slide-up';

        return;
      }

      this.isScrollAvailable = true;

      if (to.path > from.path) {
        this.transitionName = 'slide-left';

        return;
      }

      if (to.path < from.path) {
        this.transitionName = 'slide-right';

        return;
      }
    },
  },
  mounted() {
    this.tgWebApp.ready();

    const appHeight = this.tgWebApp.viewportStableHeight;
    document.documentElement.style.setProperty('--app-height', `${appHeight}px`);
  },
  methods: {
    disableScrollBar() {
      if (this.isScrollAvailable) {
        this.isScrollBarVisible = false;
      }
    },
    showScrollBar() {
      this.isScrollBarVisible = true;
    },
  },
});
</script>

<template>
  <div class="layout">
    <ProfileBar :name="user.name" :tgLink="user.url" :isQrAllowed="isShareAllowed" />

    <main
        :style="{overflow: isScrollBarVisible ? 'initial' : 'hidden'}"
        class="list"
    >
      <section class="list__header">
        <div class="list__header--name">{{ listName }}</div>
        <div class="list__header--share" v-if="isShareAllowed"></div>
      </section>
      <section class="content__container">
        <router-view v-slot="{ Component }">
          <transition
              @before-enter="disableScrollBar"
              @after-leave="showScrollBar"
              :name="transitionName"
          >
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
  --theme-bg-color: var(--tg-theme-bg-color, #F5F7FA);
  --theme-text-color: var(--tg-theme-text-color, #333333);
  --theme-hint-color: var(--tg-theme-hint-color, #666666);
  --theme-link-color: var(--tg-theme-link-color, #007AFF);
  --theme-button-color: var(--tg-theme-button-color, #50A8EB);
  --theme-button-text-color: var(--tg-theme-button-text-color, #FFFFFF);
  --theme-secondary-bg-color: var(--tg-theme-secondary-bg-color, #E9EDF5);
  --theme-header-bg-color: var(--tg-theme-header-bg-color, #F0F2F5);
  --theme-bottom-bar-bg-color: var(--tg-theme-bottom-bar-bg-color, #EDEDED);
  --theme-accent-text-color: var(--tg-theme-accent-text-color, #FF6600);
  --theme-section-bg-color: var(--tg-theme-section-bg-color, #F5F7FA);
  --theme-section-header-text-color: var(--tg-theme-section-header-text-color, #333333);
  --theme-section-separator-color: var(--tg-theme-section-separator-color, #DADCE0);
  --theme-subtitle-text-color: var(--tg-theme-subtitle-text-color, #999999);
  --theme-destructive-text-color: var(--tg-theme-destructive-text-color, #DC2626);
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--theme-secondary-bg-color);
  height: var(--app-height);
}

#app {
  height: 100%;
}

.layout {
  background-color: var(--theme-bg-color);
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.list {
  flex: 1;
  border-radius: 15px 15px 0px 0px;
  background-color: var(--theme-secondary-bg-color);
  display: flex;
  flex-direction: column;
}

.list__header {
  flex: none;
  padding: 24px;
  background-color: var(--theme-secondary-bg-color);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  position: -webkit-sticky;
  transform: translate3d(0,0,0);
  transform-style: preserver-3d;
  backface-visibility: hidden;
  top: 0;
  z-index: 2;
}

.list__header--name {
  color: var(--theme-text-color);
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
.slide-left-leave-active,
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease;
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

.slide-up-enter-from {
  opacity: 0;
  transform: translate(0, 110%);
  -webkit-transform: translate(0, 110%);
}

.slide-up-enter-to {
  opacity: 1;
  transform: translate(0, 0);
  -webkit-transform: translate(0, 0);
}

.slide-up-leave-from {
  opacity: 1;
  position: relative;
}

.slide-up-leave-to {
  opacity: 0;
  transform: translate(0, -110%);
  -webkit-transform: translate(0, -110%);
}

/* Скроллбар портит вид листа при переключении*/
@media screen and (min-width: 576px) {
  .content__container {
    width: calc(100vw - 40px - 10px);
  }
}
</style>

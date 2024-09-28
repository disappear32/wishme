import UserViewVue from '../views/UserView.vue'
import ListOfWishlistsView from '../views/ListOfWishlistsView.vue'
import WishlistViewVue from '../views/WishlistView.vue'
import WishlistFormView from '../views/WishlistFormView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/123',
    },
    {
      path: '/123',
      name: 'user',
      component: UserViewVue,
      meta: { name: 'Списки', isShareAllowed: false }
    },
    {
      path: '/123/wishlists',
      name: 'wishlists',
      component: ListOfWishlistsView,
      meta: { name: 'Вишлисты', isShareAllowed: true },
    },
    {
      path: '/123/wishlists/add-wishlist',
      name: 'add-wishlist',
      component: WishlistFormView,
      meta: { name: 'Добавить вишлист', isShareAllowed: false },
    },
    {
      path: '/123/wishlists/den-rozdenia',
      name: 'wishlist',
      component: WishlistViewVue,
      meta: { name: 'День Рождения', isShareAllowed: true }
    },
  ]
})

export default router

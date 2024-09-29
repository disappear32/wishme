import UserView from '../views/UserView.vue';
import ListOfWishlistsView from '../views/ListOfWishlistsView.vue';
import WishlistView from '../views/WishlistView.vue';
import WishlistFormView from '../views/WishlistFormView.vue';
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/:id',
    },
    {
      path: '/:id',
      name: 'user',
      component: UserView,
      meta: { name: 'Списки', isShareAllowed: false },
    },
    {
      path: '/:id/wishlists',
      name: 'wishlists',
      component: ListOfWishlistsView,
      meta: { name: 'Вишлисты', isShareAllowed: true },
    },
    {
      path: '/:id/wishlists/:wishlistName?',
      name: 'wishlist',
      component: WishlistView,
      meta: { isShareAllowed: true },
    },
    {
      path: '/:id/wishlists/add-wishlist',
      name: 'add-wishlist',
      component: WishlistFormView,
      meta: { name: 'Добавить вишлист', isShareAllowed: false },
    },
  ],
});

export default router;

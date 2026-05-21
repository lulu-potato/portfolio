import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('@/pages/Projects.vue'),
    },
    {
      path: '/projects/:slug',
      name: 'ProjectPage',
      component: () => import('@/pages/ProjectPage.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/pages/About.vue'),
    },
  ],
  scrollBehavior(_, __, savedPosition) {
    return savedPosition ?? { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  const baseTitle = 'Lucy Beauchamp — Frontend Developer'
  if (to.name === 'Home') {
    document.title = baseTitle
    return
  }
  const name =
    to.name === 'ProjectPage' && typeof to.params.slug === 'string'
      ? to.params.slug
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      : typeof to.name === 'string'
        ? to.name
        : ''
  document.title = name ? `${name} — Lucy Beauchamp` : baseTitle
})

export default router

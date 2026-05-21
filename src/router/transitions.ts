import type { RouteLocationNormalizedLoaded } from 'vue-router'

type TransitionMode = 'out-in' | 'in-out'

const DEFAULT_PAGE_TRANSITION = 'out-in-fade'

export const resolvePageTransitionName = (route: RouteLocationNormalizedLoaded) => {
  return typeof route.meta.transitionName === 'string'
    ? route.meta.transitionName
    : DEFAULT_PAGE_TRANSITION
}

export const resolvePageTransitionMode = (route: RouteLocationNormalizedLoaded): TransitionMode => {
  return route.meta.transitionMode === 'in-out' ? 'in-out' : 'out-in'
}

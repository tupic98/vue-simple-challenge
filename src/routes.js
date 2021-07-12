import Home from './views/Home.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: '/',
    component: Home,
    meta: { title: 'Home' }
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: () => import(/* webpackChunkName: "tasks-view" */ './views/Tasks.vue'),
    meta: { title: 'Tasks List' }
  }
]

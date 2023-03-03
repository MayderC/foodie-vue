import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: () => import("@/views/RcIndex.vue"),
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/RcAuth.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/RcHome.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

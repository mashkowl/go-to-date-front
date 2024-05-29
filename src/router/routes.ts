import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    name: "CreateDate",
    path: "/create-date",
    component: () => import("../views/CreateDate.vue"),
  },
];

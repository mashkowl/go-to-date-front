import { createRouter, createWebHistory, Router } from "vue-router";
import { routes } from "./routes.ts";

const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to) => {
  // @ts-ignore
  document.title = to.meta.title ?? window.document.title;
});

export default router;

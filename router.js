import Router from "@easyroute/core";
import hashMode from "@easyroute/core/hash-mode";
import Page1 from "./Page1.svelte";
import Page2 from "./Page2.svelte";

const router = new Router({
  mode: hashMode,
  routes: [
    {
      path: "/",
      component: Page1
    },
    {
      path: "/page-two",
      component: Page2,
      beforeEnter: (to, from, next) => {
        console.log(to);
        next();
      }
    }
  ]
});

export default router;

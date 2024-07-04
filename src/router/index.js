import { createRouter, createWebHistory } from 'vue-router'
import form from"../components/form/Form.vue"
import create from"../components/form/Create.vue"
import hello from"../components/form/Hello.vue"
import Error from "../views/Error.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "form",
      component: form,
    },
    {
      path: "/create",
      name: "create a new",
      component: create,
    },
    {
      path: "/hello",
      name: "hello",
      component: hello,
    },
    {
      path: "/:cathAll(.*)",
      name: "ErrorPage",
      component: Error,
    },
  ],
});

export default router

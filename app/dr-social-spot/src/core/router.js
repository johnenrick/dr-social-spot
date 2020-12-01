import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Registration from "@/views/authentication/Registration.vue";
import LogIn from "@/views/authentication/LogIn.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

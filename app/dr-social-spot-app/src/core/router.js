import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Registration from "@/views/authentication/Registration.vue";
import LogIn from "@/views/authentication/LogIn.vue";
import Profile from "@/views/profile/Profile.vue";
import Newsfeed from "@/views/newsfeed/Newsfeed.vue";

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
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      auth: {
        require_user: true
      }
    }
  },
  {
    path: "/profile/:userId",
    name: "VisitProfile",
    component: Profile,
    meta: {
      auth: {
        require_user: true
      }
    }
  },
  {
    path: "/newsfeed",
    name: "Newsfeed",
    component: Newsfeed,
    meta: {
      auth: {
        require_user: true
      }
    }
  },
  {
    path: "/search-people",
    name: "SearchPeople",
    component: Registration,
    meta: {
      auth: {
        require_user: true
      }
    }
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

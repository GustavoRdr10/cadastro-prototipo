import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue"
import MobilePage from "./pages/MobilePage.vue";
import Login from "./pages/LoginPage.vue";
import SignupPage from "./pages/SignupPage.vue";
import PlanOne from "./pages/PlanOne.vue";
import PlanTwo from "./pages/PlanTwo.vue";
import PlanTree from "./pages/PlanTree.vue";
import AccountPage from "./pages/AccountPage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/MobilePage",
    name: "MobilePage",
    component: MobilePage,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/signupPage",
    name: "Signup",
    component: SignupPage,
  },
  {
    path: "/planOne",
    name: "PlanOne",
    component: PlanOne,
  },
  {
    path: "/planTwo",
    name: "PlanTwo",
    component: PlanTwo,
  },
  {
    path: "/planTree",
    name: "PlanTree",
    component: PlanTree,
  },
  {
    path: "/AccountPage",
    name: "AccountPage",
    component: AccountPage,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

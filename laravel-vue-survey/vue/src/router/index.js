import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import DefaultLayout from "../components/DefaultLayout.vue";

const routes = [
  {
    path: "/",
    name: 'Dashboard',
    redirect: "/dashboard",
    component: DefaultLayout,
    children: [
      { path: "/dashboard", name: "Dashboard", component: Dashboard },
      // { path: "/surveys", name: "Surveys", component: Surveys },
      // { path: "/surveys/create", name: "SurveyCreate", component: SurveyView },
      // { path: "/surveys/:id", name: "SurveyView", component: SurveyView },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router;

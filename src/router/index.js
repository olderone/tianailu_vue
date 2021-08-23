import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/home/login";
import Edit from "@/components/home/edit";
import About from "@/components/home/about";
import BackendLogin from "@/components/admin/Login";
import BackendHome from "@/components/admin/Home";
import Ta from "@/components/home/ta";
import Backend from "@/components/admin/Backend";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: '/login',
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/edit",
      component: Edit,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/ta",
      component: Ta,
    },
    {
      path: '/backend',
      component: Backend,
      redirect: '/backend/login',
      children: [
        {
          path: "login",
          component: BackendLogin,
        },
        {
          path: "home",
          component: BackendHome,
        },
      ]
    }
  ],
});

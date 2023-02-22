import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

/*首页*/
import home from "../../views/Home.vue";
/*用户*/
import user from "../../views/User.vue";
/*NFT*/
import nft from "../../views/NFT.vue";
/*订单*/
import order from "../../views/Order.vue";

const routes: readonly RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path: "/user",
    name: "user",
    component: user,
  },
  {
    path: "/nft",
    name: "nft",
    component: nft,
  },
  {
    path: "/order",
    name: "order",
    component: order,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

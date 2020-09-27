import Vue from "vue";
import VueRouter from "vue-router";
import MixedChart from "@/views/MixedChart.vue";
import BarChart from "@/views/BarChart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MixedChart",
    component: MixedChart
  },
  {
    path: "/bar",
    name: "BarChart",
    component: BarChart
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

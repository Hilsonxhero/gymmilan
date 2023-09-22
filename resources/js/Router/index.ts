import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from "vue-router";
import panel from "@/Router/panel";
// import routes from "@/Router/routes";
const routes: Array<RouteRecordRaw> = [panel];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    next();
});

export default router;


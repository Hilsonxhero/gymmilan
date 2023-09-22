export default {
    path: "/panel",
    meta: {
        auth: true,
    },
    component: () => import("@/Layouts/Panel.vue"),
    children: [
        {
            path: "dashboard",
            name: "panel dashboard",
            component: () => import("@/Pages/panel/dashboard.vue"),
        },
        {
            path: "exercises",
            name: "panel-exercises-index",
            component: () => import("@/Pages/panel/exercises/index.vue"),
        },
        {
            path: "exercises/create",
            name: "panel-exercises-create",
            component: () => import("@/Pages/panel/exercises/create.vue"),
        },
        {
            path: "exercises/edit/:id",
            name: "panel-exercises-edit",
            component: () => import("@/Pages/panel/exercises/edit.vue"),
        },
        // movements
        {
            path: "movements",
            name: "panel-movements-index",
            component: () => import("@/Pages/panel/movements/index.vue"),
        },
        {
            path: "movements/create",
            name: "panel-movements-create",
            component: () => import("@/Pages/panel/movements/create.vue"),
        },
        {
            path: "movements/edit/:id",
            name: "panel-movements-edit",
            component: () => import("@/Pages/panel/movements/edit.vue"),
        },
    ],
};

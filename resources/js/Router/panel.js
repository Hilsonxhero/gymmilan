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
    ],
};

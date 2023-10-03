export default {
    path: "/panel",
    meta: {
        middleware: "auth",
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
        // forms
        {
            path: "forms",
            name: "panel-forms-index",
            component: () => import("@/Pages/panel/forms/index.vue"),
        },
        {
            path: "forms/create",
            name: "panel-forms-create",
            component: () => import("@/Pages/panel/forms/create.vue"),
        },
        {
            path: "forms/:id/manage/exercises",
            name: "panel-forms-exercises-index",
            component: () => import("@/Pages/panel/forms/exercises/index.vue"),
        },
        {
            path: "forms/:id/manage/exercises/create",
            name: "panel-forms-exercises-create",
            component: () => import("@/Pages/panel/forms/exercises/create.vue"),
        },
        {
            path: "forms/:id/manage/exercises/edit/:exercise",
            name: "panel-forms-exercises-edit",
            component: () => import("@/Pages/panel/forms/exercises/edit.vue"),
        },
        {
            path: "forms/edit/:id",
            name: "panel-forms-edit",
            component: () => import("@/Pages/panel/forms/edit.vue"),
        },
        {
            path: "forms/detail/:id",
            name: "panel-forms-detail",
            component: () => import("@/Pages/panel/forms/detail.vue"),
        },
    ],
};

<template>
    <v-layout>
        <v-navigation-drawer permanent location="right">
            <template v-slot:prepend>
                <v-list-item
                    lines="two"
                    prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
                    title="کیان دقانی ن"
                    subtitle="کاربر ادمین"
                ></v-list-item>
            </template>

            <v-divider></v-divider>

            <v-list density="compact" nav>
                <!-- <v-list-item
                    link
                    prepend-icon="mdi-home-city"
                    title="داشبورد"
                    :to="{ name: 'panel dashboard' }"
                >
                </v-list-item> -->
                <v-list-item
                    link
                    prepend-icon="mdi-weight-lifter"
                    title="مدیریت نوع تمرینات "
                    value="exercises"
                    :to="{ name: 'panel-exercises-index' }"
                ></v-list-item>
                <v-list-item
                    prepend-icon="mdi-dumbbell"
                    title="مدیریت  حرکات "
                    value="movements"
                    :to="{ name: 'panel-movements-index' }"
                ></v-list-item>
                <v-list-item
                    prepend-icon="mdi-form-select"
                    title="برنامه ها"
                    value="forms"
                    :to="{ name: 'panel-forms-index' }"
                ></v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar title=""></v-app-bar>
        <v-main>
            <div class="p-5">
                <router-view></router-view>
            </div>
        </v-main>
    </v-layout>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";

const messae = ref("ready for provide api");

onMounted(() => {
    console.log("mounted");
});
</script>

<style></style>

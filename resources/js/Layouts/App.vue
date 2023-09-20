<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";

onMounted(() => {
    console.log("mounted");
});
</script>

<style></style>

<template>
    <div>
        <v-sheet>
            <div class="mb-6">
                <h2 class="text-xl">ایجاد نوع تمرین</h2>
            </div>
            <v-form
                ref="formRef"
                validate-on="submit"
                @submit.prevent="handleCreate"
            >
                <v-text-field
                    v-model="form.name"
                    :rules="rules"
                    label="نام"
                    density="compact"
                    single-line
                    variant="solo"
                ></v-text-field>
                <v-btn
                    :loading="loading"
                    color="light-blue-accent-4"
                    type="submit"
                    block
                    class="mt-2"
                    >ایجاد</v-btn
                >
            </v-form>
        </v-sheet>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ApiService from "@/Core/services/ApiService";
import { useRouter } from "vue-router";

const loading = ref(false);
const formRef = ref(null);
const form = ref({
    name: null,
});
const rules = ref([
    (value) => {
        if (value) return true;

        return "نام نوع تمرین  الزامی می باشد";
    },
]);
const router = useRouter();

const handleCreate = async (event) => {
    const { valid } = await formRef.value.validate();
    if (valid) {
        loading.value = true;
        const form_data = new FormData();
        form_data.append("name", form.value.name);
        const { data } = await ApiService.post(
            "/api/panel/exercises",
            form_data
        );

        if (data.success) {
            router.push({ name: "panel-exercises-index" });
        }
    }
};
</script>

<style scoped></style>

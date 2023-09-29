<template>
    <div
        class="grid grid-cols-12 gap-1 mb-4"
        v-for="(movement_value, index) in movementValues"
        :key="index"
    >
        <div class="col-span-12">
            <v-select
                variant="solo-filled"
                single-line
                label="انتخاب نوع تمرین"
                :items="filteredExercises"
                item-title="name"
                return-object
                item-value="id"
                no-data-text="موردی وجود ندارد"
                v-model="movement_value.movement_type"
            >
                <template v-slot:prepend-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-text-field
                                v-model="searchTerm"
                                placeholder="جستجو"
                            ></v-text-field>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider class="mt-2"></v-divider>
                </template>
                <template v-slot:item="{ props, item }">
                    <v-list-item v-bind="props"></v-list-item>
                </template>
            </v-select>
        </div>
        <div class="col-span-12">
            <v-select
                variant="solo-filled"
                single-line
                label="انتخاب حرکت"
                :items="filteredMovements"
                item-title="name"
                return-object
                item-value="id"
                no-data-text="موردی وجود ندارد"
                v-model="movement_value.movement"
            >
                <template v-slot:prepend-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-text-field
                                v-model="search_movement"
                                placeholder="جستجو"
                            ></v-text-field>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider class="mt-2"></v-divider>
                </template>
                <template v-slot:item="{ props, item }">
                    <v-list-item v-bind="props"></v-list-item>
                </template>
            </v-select>
        </div>
        <div class="col-span-12">
            <v-text-field
                required
                v-model="movement_value.repeat"
                label=" تکرار"
                type="number"
                density="compact"
                single-line
                hide-details="auto"
            ></v-text-field>
            <div class="invalid-feedback d-block">
                <ErrorMessage name="value" />
            </div>
        </div>
        <div class="col-span-12">
            <div
                class="grid grid-cols-12 gap-2 mb-2"
                v-for="(item, j) in movement_value.values"
                :key="j"
            >
                <div class="col-span-10">
                    <v-text-field
                        required
                        v-model="item.value"
                        label="تعداد"
                        density="compact"
                        single-line
                        hide-details="auto"
                        type="number"
                    ></v-text-field>
                    <div class="invalid-feedback d-block">
                        <ErrorMessage name="value" />
                    </div>
                </div>

                <div class="col-span-2">
                    <div class="mr-4">
                        <v-btn
                            @click="deleteMovementValue(movement_value, j)"
                            size="small"
                            density="default"
                            icon="mdi-trash-can-outline"
                        ></v-btn>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12">
            <v-btn
                @click="handleIncMovement(movement_value)"
                color="light-blue-accent-4"
                block
                class="mt-2"
                >اضافه کردن</v-btn
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import ApiService from "@/Core/services/ApiService";
import { ErrorMessage, Field, Form } from "vee-validate";
const props = defineProps({
    exerciseData: {},
    movementData: {},
    movementValues: {},
});
const emits = defineEmits(["add-value", "delete-value"]);

const exercises = ref([]);
const movements = ref([]);
const searchTerm = ref("");
const search_movement = ref("");

const filteredExercises = computed(() => {
    const search = searchTerm.value.trim().toLowerCase();
    if (search === "") {
        return exercises.value;
    } else {
        return exercises.value.filter((exercise) =>
            exercise.name.toLowerCase().includes(search)
        );
    }
});
const filteredMovements = computed(() => {
    const search = search_movement.value.trim().toLowerCase();
    if (search === "") {
        return movements.value;
    } else {
        return movements.value.filter((movement) =>
            movement.name.toLowerCase().includes(search)
        );
    }
});

watch(
    () => props.exerciseData,
    (val) => {
        exercises.value = val;
    },
    { immediate: true }
);
watch(
    () => props.movementData,
    (val) => {
        movements.value = val;
    },
    { immediate: true }
);

const deleteMovementValue = (item, index) => {
    emits("delete-value", { row: item, index: index });
};
const handleIncMovement = (item) => {
    emits("add-value", item);
};

onMounted(() => {
    // exercises.value = props.exerciseData;
    // movements.value = props.movementData;
});
</script>

<style scoped></style>

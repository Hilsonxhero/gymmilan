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
                return-object
                :items="filteredExercises"
                item-title="name"
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
                item-value="id"
                item-title="name"
                return-object
                no-data-text="موردی وجود ندارد"
                v-model="movement_value.movement"
                :on-update:modelValue="
                    handleOnChangeMovement(movement_value, index)
                "
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
                type="number"
                required
                v-model="movement_value.practise"
                label="تعداد گرم کردن"
                density="compact"
                single-line
                variant="solo-filled"
            ></v-text-field>

            <div class="invalid-feedback d-block">
                <ErrorMessage name="practise" />
            </div>
        </div>
        <div class="col-span-12">
            <v-text-field
                v-model="movement_value.title"
                label="یادداشت (اختیاری)"
                density="compact"
                single-line
                variant="solo-filled"
            ></v-text-field>

            <div class="invalid-feedback d-block">
                <ErrorMessage name="practise" />
            </div>
        </div>

        <template v-if="movement_value.movement">
            <template v-if="movement_value.movement.is_aerobic">
                <template v-if="movement_value.movement.is_repeater">
                    <div class="col-span-6">
                        <Field
                            mode="passive"
                            name="value"
                            v-slot="{ field }"
                            label="زمان به ثانیه"
                        >
                            <v-text-field
                                required
                                v-bind="field"
                                v-model="movement_value.value"
                                label="زمان به ثانیه"
                                density="compact"
                                single-line
                                hide-details="auto"
                            ></v-text-field>
                        </Field>
                        <div class="invalid-feedback d-block">
                            <ErrorMessage name="value" />
                        </div>
                    </div>
                    <div class="col-span-6">
                        <Field
                            mode="passive"
                            name="value"
                            v-slot="{ field }"
                            label="دفعات تکرار"
                        >
                            <v-text-field
                                required
                                v-bind="field"
                                v-model="movement_value.repeat"
                                label="دفعات تکرار"
                                density="compact"
                                single-line
                                hide-details="auto"
                            ></v-text-field>
                        </Field>
                        <div class="invalid-feedback d-block">
                            <ErrorMessage name="value" />
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div class="col-span-12">
                        <Field
                            mode="passive"
                            name="value"
                            v-slot="{ field }"
                            label="انتخاب زمان"
                        >
                            <v-select
                                v-bind="field"
                                variant="solo-filled"
                                label="انتخاب زمان"
                                :items="aerobic_times"
                                item-value="value"
                                item-title="title"
                                no-data-text="موردی وجود ندارد"
                                v-model="movement_value.value"
                            >
                            </v-select>
                        </Field>
                    </div>
                </template>
            </template>
            <template v-else>
                <div class="col-span-6">
                    <Field
                        mode="passive"
                        name="value"
                        v-slot="{ field }"
                        label="تعداد"
                    >
                        <v-text-field
                            required
                            v-bind="field"
                            v-model="movement_value.value"
                            label="تعداد"
                            density="compact"
                            single-line
                            hide-details="auto"
                        ></v-text-field>
                    </Field>
                    <div class="invalid-feedback d-block">
                        <ErrorMessage name="value" />
                    </div>
                </div>
                <div class="col-span-6">
                    <Field
                        mode="passive"
                        name="value"
                        v-slot="{ field }"
                        label="دفعات تکرار"
                    >
                        <v-text-field
                            required
                            v-bind="field"
                            v-model="movement_value.repeat"
                            label="دفعات تکرار"
                            density="compact"
                            single-line
                            hide-details="auto"
                        ></v-text-field>
                    </Field>
                    <div class="invalid-feedback d-block">
                        <ErrorMessage name="value" />
                    </div>
                </div>
            </template>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import ApiService from "@/Core/services/ApiService";
import { ErrorMessage, Field, Form } from "vee-validate";
const emits = defineEmits(["change-movement"]);
const props = defineProps({
    exerciseData: {},
    movementData: {},
    movementValues: {},
});
const exercises = ref([]);
const movements = ref([]);
const searchTerm = ref("");
const search_movement = ref("");
const aerobic_times = ref([
    { title: "4 دقیقه", value: 4 },
    { title: "6 دقیقه", value: 6 },
    { title: "8 دقیقه", value: 8 },
    { title: "10 دقیقه", value: 10 },
    { title: "12 دقیقه", value: 12 },
    { title: "14 دقیقه", value: 14 },
    { title: "16 دقیقه", value: 16 },
]);
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

const handleOnChangeMovement = (row, index) => {
    emits("change-movement", index);
};

onMounted(() => {
    // exercises.value = props.exerciseData;
    // movements.value = props.movementData;
});
</script>

<style scoped></style>

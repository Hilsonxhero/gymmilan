<template>
    <div>
        <v-sheet>
            <div class="mb-6">
                <h2 class="text-xl">مدیریت تمرینات</h2>
            </div>

            <div class="grid grid-cols-12 gap-3">
                <div class="col-span-5">
                    <v-select
                        v-model="form.type"
                        label="انتخاب نوع ست"
                        :items="types"
                        item-title="state"
                        item-value="value"
                        return-object
                        single-line
                        variant="solo-filled"
                    ></v-select>

                    <template v-if="form.type.value == '1'">
                        <NormalMovement
                            :movement-values="movement_values"
                            :movement-data="movements"
                            :exercise-data="exercises"
                        />
                    </template>
                    <template v-if="form.type.value == '2'">
                        <SuperSetMovement
                            :movement-values="movement_values"
                            :movement-data="movements"
                            :exercise-data="exercises"
                        />
                    </template>

                    <template v-if="form.type.value == '3'">
                        <DropSetMovement
                            :movement-values="movement_values"
                            :movement-data="movements"
                            :exercise-data="exercises"
                        />
                    </template>
                    <template v-if="form.type.value == '4'">
                        <PyramidalMovement
                            :movement-values="movement_values"
                            :movement-data="movements"
                            :exercise-data="exercises"
                        />
                    </template>

                    <div>
                        <v-btn
                            @click="handleSaveMovement"
                            color="light-blue-accent-4"
                            block
                            class="mt-2"
                            >ذخیره</v-btn
                        >
                    </div>
                </div>
                <div class="col-span-7 border-2 border-gray-700 px-4">
                    <div class="border-b border-gray-600 p-2">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="text-sm text-gray-600">
                                    <span> لاری هالتر از پشت</span>
                                    <span class="mr-1 text-gray-500"
                                        >(پشت بازو)</span
                                    >
                                </div>
                            </div>
                            <div class="flex items-center mr-2">
                                <div class="text-sm">10</div>
                                <span>x</span>
                                <div class="text-sm">10</div>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-gray-600 p-2">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="flex flex-col items-center">
                                    <div class="text-sm text-gray-600">
                                        <span> لاری هالتر از پشت</span>
                                        <span class="mr-1 text-gray-500"
                                            >(پشت بازو)</span
                                        >
                                        <span
                                            class="mr-1 text-gray-800 font-bold"
                                            >(1)</span
                                        >
                                    </div>
                                </div>

                                <span class="mx-2">x</span>
                                <div class="flex flex-col items-center">
                                    <div class="text-sm text-gray-600">
                                        <span> لاری هالتر از پشت</span>
                                        <span class="mr-1 text-gray-500"
                                            >(پشت بازو)</span
                                        >
                                        <span
                                            class="mr-1 text-gray-800 font-bold"
                                            >(2)</span
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center mr-2">
                                <div class="flex flex-col items-center">
                                    <div
                                        class="flex items-center text-sm border-b-2"
                                    >
                                        <span
                                            class="ml-1 text-gray-800 font-bold"
                                            >(1)</span
                                        >
                                        <span>2</span>
                                    </div>
                                    <div
                                        class="flex items-center text-sm border-b-2"
                                    >
                                        <span
                                            class="ml-1 text-gray-800 font-bold"
                                            >(2)</span
                                        >
                                        <span>2</span>
                                    </div>
                                </div>
                                <span class="mx-1">x</span>
                                <div class="text-sm">4</div>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-gray-600 p-2">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="text-sm text-gray-600">
                                    <span> لاری هالتر از پشت</span>
                                    <span class="mr-1 text-gray-500"
                                        >(پشت بازو)</span
                                    >
                                </div>
                            </div>
                            <div class="flex items-center mr-2">
                                <div class="text-sm flex flex-col items-center">
                                    <span class="border-b-2">10</span>
                                    <span>15</span>
                                </div>
                                <span class="mx-2">/</span>
                                <div class="text-sm flex flex-col items-center">
                                    <span class="border-b-2">10</span>
                                    <span>15</span>
                                </div>
                                <span class="mx-2">/</span>
                                <div class="text-sm flex flex-col items-center">
                                    <span class="border-b-2">10</span>
                                    <span>15</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-b border-gray-600 p-2">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="text-sm text-gray-600">
                                    <span> لاری هالتر از پشت</span>
                                    <span class="mr-1 text-gray-500"
                                        >(پشت بازو)</span
                                    >
                                </div>
                            </div>
                            <div class="flex items-center mr-2">
                                <div class="flex flex-col items-center">
                                    <div
                                        class="flex items-center text-sm border-b-2"
                                    >
                                        <span
                                            class="ml-1 text-gray-800 font-bold"
                                            >(1)</span
                                        >
                                        <span>2</span>
                                    </div>
                                    <div
                                        class="flex items-center text-sm border-b-2"
                                    >
                                        <span
                                            class="ml-1 text-gray-800 font-bold"
                                            >(2)</span
                                        >
                                        <span>2</span>
                                    </div>
                                    <div
                                        class="flex items-center text-sm border-b-2"
                                    >
                                        <span
                                            class="ml-1 text-gray-800 font-bold"
                                            >(2)</span
                                        >
                                        <span>2</span>
                                    </div>
                                </div>
                                <span class="mx-1">x</span>
                                <div class="text-sm">4</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-sheet>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import ApiService from "@/Core/services/ApiService";
import { ErrorMessage, Field, Form } from "vee-validate";
import NormalMovement from "@/Components/Movenment/Normal.vue";
import SuperSetMovement from "@/Components/Movenment/SuperSet.vue";
import DropSetMovement from "@/Components/Movenment/DropSet.vue";
import PyramidalMovement from "@/Components/Movenment/Pyramidal.vue";
const exercises = ref([]);
const movements = ref([]);
const searchTerm = ref("");
const created_movements = ref([]);
const search_movement = ref("");
const types = ref([
    { state: "عادی", value: "1" },
    { state: "سوپر ست", value: "2" },
    { state: " دراپ ست", value: "3" },
    { state: " هرمی", value: "4" },
]);
const form = ref({
    type: { state: "عادی", value: "1" },
});
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
const movement_values = ref([
    {
        value: "",
        repeat: "",
        movement_type: null,
        movement: null,
        values: [{ value: "", repeat: "" }],
    },
]);

const handleSaveMovement = () => {
    created_movements.value.push({
        movement: movement_values.value,
        type: form.value.type,
    });
};
const handleIncMovement = (movement) => {
    console.log("movement", movement);

    switch (form.value.type.value) {
        case "4":
            movement.values.push({ value: "", repeat: "" });
            break;

        default:
            break;
    }
};
const deleteMovementValue = (row, index) => {
    row.values.splice(index, 1);
};
watch(
    () => form.value.type,
    (val) => {
        movement_values.value = [];
        switch (val.value) {
            case "1":
                movement_values.value.push({
                    value: "",
                    repeat: "",
                    movement_type: null,
                    movement: null,
                    values: [{ value: "", repeat: "" }],
                });
                break;
            case "2":
                movement_values.value.push(
                    {
                        value: "",
                        repeat: "",
                        movement_type: null,
                        movement: null,
                        values: [{ value: "", repeat: "" }],
                    },
                    {
                        value: "",
                        repeat: "",
                        movement_type: null,
                        movement: null,
                        values: [{ value: "", repeat: "" }],
                    }
                );
                break;
            case "3":
                movement_values.value.push({
                    value: "",
                    repeat: "",
                    movement_type: null,
                    movement: null,
                    values: [{ value: "", repeat: "" }],
                });
                break;
            case "4":
                movement_values.value.push({
                    value: "",
                    repeat: "",
                    movement_type: null,
                    movement: null,
                    values: [{ value: "", repeat: "" }],
                });
                break;

            default:
                break;
        }
    }
);

const fetchData = async () => {
    const { data } = await ApiService.get("/api/panel/exercises");
    exercises.value = data.data;
    const { data: response } = await ApiService.get("/api/panel/movements");
    movements.value = response.data;
};
onMounted(() => {
    fetchData();
});
</script>

<style scoped></style>

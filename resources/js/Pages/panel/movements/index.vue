<template>
    <div>
        <div class="flex justify-between mb-12 items-center">
            <h2 class="text-xl">لیست حرکات</h2>
            <v-btn
                :to="{ name: 'panel-movements-create' }"
                color="blue-accent-2"
            >
                ایجاد حرکت
            </v-btn>
        </div>
        <v-table fixed-header height="700px">
            <thead>
                <tr>
                    <th class="text-right">نام</th>
                    <th class="text-right">عملیات</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in movements" :key="item.name">
                    <td>
                        <div class="whitespace-nowrap">
                            {{ item.name }}
                        </div>
                    </td>
                    <td>
                        <div class="flex items-center">
                            <v-btn
                                :to="{
                                    name: 'panel-movements-edit',
                                    params: { id: item.id },
                                }"
                                prepend-icon="mdi-pencil-box-outline"
                            >
                                ویرایش
                            </v-btn>
                            <v-btn
                                @click="handleShowDeleteMessage(item)"
                                prepend-icon="mdi-trash-can-outline"
                                class="mr-4"
                            >
                                حذف
                            </v-btn>
                        </div>
                    </td>
                </tr>
            </tbody>
        </v-table>
        <v-dialog
            v-model="visible_delete_confirmation"
            persistent
            width="350px"
        >
            <v-card>
                <v-card-title class="">
                    آیا از حذف این آیتم اطمینان دارید؟
                </v-card-title>
                <v-card-text>آیا از حذف این آیتم اطمینان دارید؟</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green-darken-1"
                        variant="text"
                        @click="visible_delete_confirmation = false"
                    >
                        نه
                    </v-btn>
                    <v-btn color="green-darken-1" @click="handleDelete">
                        بله
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-snackbar v-model="visible_delete_message" :timeout="2000">
            نوع تمرین با موفقیت حذف شد.
        </v-snackbar>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import ApiService from "@/Core/services/ApiService";
const visible_delete_confirmation = ref(false);
const visible_delete_message = ref(false);

const movements = ref([]);
const selected_item = ref(null);
const fetchData = async () => {
    const { data } = await ApiService.get("/api/panel/movements");
    movements.value = data.data;
};
const handleShowDeleteMessage = (item) => {
    visible_delete_confirmation.value = true;
    selected_item.value = item;
};

const handleDelete = async () => {
    const { data } = await ApiService.delete(
        `/api/panel/movements/${selected_item.value.id}`
    );
    if (data.success) {
        visible_delete_confirmation.value = false;
        fetchData();
        visible_delete_message.value = true;
    }
};
onMounted(() => {
    fetchData();
});
</script>

<style scoped></style>

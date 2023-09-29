<template>
    <div>
        <div class="form-detail-module mx-auto">
            <div class="grid grid-cols-12 gap-x-8 mb-2">
                <div class="col-span-6">
                    <div
                        class="flex items-center border-b-2 pb-2 border-gray-700 pl-8"
                    >
                        <div class="max-w-[260px]">
                            <div class="text-[28px] leading-7 font-semibold">
                                باشگاه تناسب اندام و بدنسازی میلان
                            </div>
                        </div>
                        <div class="mr-3">
                            <img
                                class="form-detail-logo"
                                src="/panel/media/logo.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div class="col-span-6">
                    <ul class="list-decimal">
                        <li class="text-sm text-gray-700">
                            حین تمرین از مچ بند،کمربند،لوازم ایمنی تمرین استفاده
                            کنید
                        </li>
                        <li class="text-sm text-gray-700">
                            حین تمرین جرعه جرعه آب بنوشید
                        </li>
                        <li class="text-sm text-gray-700">
                            گرم کردن بدن و سرد کردن قبل و بعد از تمرین 8 دقیقه
                            الزامی است.
                        </li>
                        <li class="text-sm text-gray-700">
                            جهت گرفتن برنامه بعدی این برنامه را به همراه داشته
                            باشید.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="form-detail-module__header mb-2">
                <div class="flex items-center">
                    <div class="flex items-center mr-2 grow">
                        <div class="text-gray-500 text-sm">
                            نام و نام خانوادگی :
                        </div>
                        <div class="mr-1 text-gray-700 font-bold text-sm">
                            امیرحسین وطن دوست دوست
                        </div>
                    </div>
                    <div class="flex items-center mr-2 grow">
                        <div class="text-gray-500 text-sm">قد:</div>
                        <div class="mr-1 text-gray-700 font-bold text-sm">
                            180
                        </div>
                    </div>
                    <div class="flex items-center mr-2 grow">
                        <div class="text-gray-500 text-sm">وزن:</div>
                        <div class="mr-1 text-gray-700 font-bold text-sm">
                            115
                        </div>
                    </div>
                    <div class="flex items-center mr-2 grow">
                        <div class="text-gray-500 text-sm">سن:</div>
                        <div class="mr-1 text-gray-700 font-bold text-sm">
                            20
                        </div>
                    </div>
                    <div class="flex items-center mr-2 grow">
                        <div class="text-gray-500 text-sm">سابقه ورزشی :</div>
                        <div class="mr-1 text-gray-700 font-bold text-sm">
                            1/6 سال
                        </div>
                    </div>
                    <div class="flex items-center mr-2 grow">
                        <div class="text-gray-500 text-sm">تاریخ:</div>
                        <div class="mr-1 text-gray-700 font-bold text-sm">
                            1402/12/12
                        </div>
                    </div>
                </div>
                <div class="flex items-center mt-2">
                    <div class="flex items-center mr-2 grow">
                        <div class="text-gray-500 text-xs">
                            نوع آسیب یا بیماری :
                        </div>
                        <div class="mr-1 text-gray-700 font-bold text-xs">
                            لورم ایپسوم متن ساختگی
                        </div>
                    </div>
                    <div class="flex items-center mr-2 grow">
                        <div class="text-gray-500 text-xs">هدف تمرین:</div>
                        <div class="mr-1 text-gray-700 font-bold text-xs">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                        </div>
                    </div>
                    <div class="flex items-center mr-2 grow">
                        <div class="text-gray-500 text-sm">
                            مدت زمان استفاده از برنامه :
                        </div>
                        <div class="mr-1 text-gray-700 font-bold text-sm">
                            115
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="form-detail-module__items border-2 border-gray-900 grid grid-cols-12"
            >
                <div
                    class="border-2 border-gray-900 h-[470px] col-span-6"
                    v-for="(item, index) in 4"
                >
                    <div class="flex justify-end font-bold p-3 text-xl">A</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

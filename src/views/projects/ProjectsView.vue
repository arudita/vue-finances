<template>
  <AdminLayout>
    <div class="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div class="flex flex-col gap-4 border-b border-gray-200 px-4 py-4 sm:px-5 lg:flex-row lg:items-center lg:justify-between dark:border-gray-800">
        <div class="flex-shrink-0">
          <h3 class="text-base font-medium text-gray-800 dark:text-white/90">
            {{ currentPageTitle }}
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Track your recent shipping activities
          </p>
        </div>
        <div>
          <button type="button" class="shadow-theme-xs flex w-full justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path d="M5.5 10.0002H15.5006M10.5002 5V15.0006" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            Add New Project
          </button>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 px-4 py-4 sm:px-5">
        <div v-for="value in dataProjects" :key="value.id" class="flex gap-5 rounded-xl border border-gray-200 p-3 pr-5 dark:border-gray-800">
          <div class="inline-flex h-13 w-13 shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
            <img :src="value.logo" :alt="value.name" class="size-8 object-cover object-center">
          </div>
          <div class="w-full">
            <h3 class="mb-2 flex items-center gap-2 text-gray-800 dark:text-white/90">
              {{ value.name }}
            </h3>
            <div class="flex flex-wrap items-center justify-between gap-5">
              <p class="text-sm font-normal text-gray-400 dark:text-gray-400">
                {{ value.client }}
              </p>
              <p class="text-sm font-normal text-gray-400 dark:text-gray-400">
                {{ value.date_end }}
              </p>
            </div>
            <div class="mt-4 flex flex-wrap gap-3">
              <button class="shadow-theme-xs inline-flex h-6 items-center justify-center rounded-md border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
                Project Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup>
import { ref } from "vue";
import AdminLayout from "@/components/layout/AdminLayout.vue";

const currentPageTitle = ref("All Projects");

const dataProjects = [
  {
    id: 1,
    name: "PT Telkom Indonesia (Persero) Tbk",
    client: "Ririek Adriansyah",
    date_start: '2025-03-01',
    date_end: '2025-09-01',
    logo: '/images/company/logo-telkom.png',
  },
  {
    id: 2,
    name: "PT Bank Rakyat Indonesia (Persero) Tbk (BRI)",
    client: "Hery Gunardi",
    date_start: '2025-01-01',
    date_end: '2025-06-01',
    logo: '/images/company/default.jpg',
  },
  {
    id: 3,
    name: "PT Bank Central Asia Tbk (BCA)",
    client: "Agus T. Hartanto",
    date_start: '2024-06-01',
    date_end: '2024-12-01',
    logo: '/images/company/logo-bca.png',
  },
  {
    id: 4,
    name: "PT Bank Mandiri (Persero) Tbk",
    client: "Ridwan",
    date_start: '2024-03-01',
    date_end: '2024-09-01',
    logo: '/images/company/default.jpg',
  },
  {
    id: 5,
    name: "PT Arudita Teknologi Indonesia",
    client: "Fajar Setiawan",
    date_start: '2024-01-01',
    date_end: '2024-06-01',
    logo: '/images/company/default.jpg',
  },
];
</script>
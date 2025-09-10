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
        <div class="flex flex-col gap-2 sm:flex-row lg:items-center">
          <div class="inline-flex h-11 w-full flex-1 gap-0.5 overflow-x-auto rounded-lg bg-gray-100 p-0.5 sm:w-auto lg:min-w-fit dark:bg-gray-900">
            <button class="h-10 flex-1 rounded-md px-2 py-2 text-xs font-medium sm:px-3 sm:text-sm lg:flex-initial shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800">
              USD
            </button>
            <button class="h-10 flex-1 rounded-md px-2 py-2 text-xs font-medium sm:px-3 sm:text-sm lg:flex-initial text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              IDR
            </button>
          </div>
          <div class="flex flex-col gap-2 sm:flex-row flex-1sm:items-center lg:gap-4">
            <div class="relative">
              <button @click="openFilter = !openFilter" class="shadow-theme-xs flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 sm:w-auto sm:min-w-[100px] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M14.6537 5.90414C14.6537 4.48433 13.5027 3.33331 12.0829 3.33331C10.6631 3.33331 9.51206 4.48433 9.51204 5.90415M14.6537 5.90414C14.6537 7.32398 13.5027 8.47498 12.0829 8.47498C10.663 8.47498 9.51204 7.32398 9.51204 5.90415M14.6537 5.90414L17.7087 5.90411M9.51204 5.90415L2.29199 5.90411M5.34694 14.0958C5.34694 12.676 6.49794 11.525 7.91777 11.525C9.33761 11.525 10.4886 12.676 10.4886 14.0958M5.34694 14.0958C5.34694 15.5156 6.49794 16.6666 7.91778 16.6666C9.33761 16.6666 10.4886 15.5156 10.4886 14.0958M5.34694 14.0958L2.29199 14.0958M10.4886 14.0958L17.7087 14.0958" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                Filter
              </button>
              <div v-show="openFilter" class="absolute right-0 z-10 mt-2 w-56 rounded-lg border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                <div class="mb-5">
                  <label class="mb-2 block text-xs font-medium text-gray-700 dark:text-gray-300">
                    Category
                  </label>
                  <input type="text" class="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-10 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30" placeholder="Search category..." />
                </div>
                <div class="mb-5">
                  <label class="mb-2 block text-xs font-medium text-gray-700 dark:text-gray-300">
                    Company
                  </label>
                  <input type="text" class="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-10 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30" placeholder="Search company..." />
                </div>
                <button @click="openFilter = false;" class="bg-brand-500 hover:bg-brand-600 h-10 w-full rounded-lg px-3 py-2 text-sm font-medium text-white">
                  Apply
                </button>
              </div>
            </div>
          </div>
          <button type="button" class="bg-brand-500 shadow-theme-xs hover:bg-brand-600 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 10.0002H15.0006M10.0002 5V15.0006" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            Add New Income
          </button>
        </div>
      </div>
      <div>
        <div class="custom-scrollbar overflow-x-auto">
          <table class="w-full table-auto">
            <thead class="border-b border-gray-200 dark:border-gray-800">
              <tr class="divide-x divide-gray-200 dark:divide-gray-800">
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400" rowspan="2">
                  No
                </th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400" rowspan="2">
                  Name
                </th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400" rowspan="1" colspan="13">
                  Incomes
                </th>
              </tr>
              <tr class="border-t border-gray-200 dark:border-gray-800 divide-x divide-gray-200 dark:divide-gray-800">
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Total</th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Jan</th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Feb</th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Mar</th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Apr</th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">May</th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Jun</th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Jul</th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Aug</th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Sep</th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Oct</th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Nov</th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Dec</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
              <tr v-for="value in dataIncomes" :key="value.id" class="transition hover:bg-gray-50 dark:hover:bg-gray-900 divide-x divide-gray-200 dark:divide-gray-800">
                <td class="px-4 py-4 sm:px-5 text-left text-xs font-normal whitespace-nowrap text-gray-800 dark:text-white/90">
                  {{ value.id }}
                </td>
                <td class="px-4 py-4 sm:px-5 flex flex-row justify-between items-center gap-2">
                  <span class="text-left text-xs font-normal whitespace-nowrap text-gray-800 dark:text-white/90">
                    {{ value.name }}
                  </span>
                  <div>
                    <div class="flex items-center w-full gap-2">
                      <router-link to="/finance/incomes/1" class="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white/90" title="view list income">
                        <ListIcon class="size-5 "/>
                      </router-link>
                      <button type="button" class="text-gray-500 hover:text-error-500 dark:text-gray-400 dark:hover:text-error-500" title="delete income">
                        <TrashIcon class="size-5" />
                      </button>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-4 sm:px-5 text-left text-xs font-normal whitespace-nowrap text-gray-700 dark:text-white/90">
                  {{ value.total }}
                </td>
                <td class="px-4 py-4 sm:px-5 text-left text-xs font-normal whitespace-nowrap text-gray-700 dark:text-white/90">
                  {{ value.m_jan }}
                </td>
                <td class="px-4 py-4 sm:px-5 text-left text-xs font-normal whitespace-nowrap text-gray-700 dark:text-white/90">
                  {{ value.m_feb }}
                </td>
                <td class="px-4 py-4 sm:px-5 text-left text-xs font-normal whitespace-nowrap text-gray-700 dark:text-white/90">
                  {{ value.m_mar }}
                </td>
                <td class="px-4 py-4 sm:px-5 text-left text-xs font-normal whitespace-nowrap text-gray-700 dark:text-white/90">
                  {{ value.m_apr }}
                </td>
                <td class="px-4 py-4 sm:px-5 text-left text-xs font-normal whitespace-nowrap text-gray-700 dark:text-white/90">
                  {{ value.m_may }}
                </td>
                <td class="px-4 py-4 sm:px-5 text-left text-xs font-normal whitespace-nowrap text-gray-700 dark:text-white/90">
                  {{ value.m_jun }}
                </td>
                <td class="px-4 py-4 sm:px-5 text-left text-xs font-normal whitespace-nowrap text-gray-700 dark:text-white/90">
                  {{ value.m_jul }}
                </td>
                <td class="px-4 py-4 sm:px-5 text-left text-xs font-normal whitespace-nowrap text-gray-700 dark:text-white/90">
                  {{ value.m_aug}}
                </td>
                <td class="px-4 py-4 sm:px-5 text-left text-xs font-normal whitespace-nowrap text-gray-700 dark:text-white/90">
                  {{ value.m_sep }}
                </td>
                <td class="px-4 py-4 sm:px-5 text-left text-xs font-normal whitespace-nowrap text-gray-700 dark:text-white/90">
                  {{ value.m_oct }}
                </td>
                <td class="px-4 py-4 sm:px-5 text-left text-xs font-normal whitespace-nowrap text-gray-700 dark:text-white/90">
                  {{ value.m_nov }}
                </td>
                <td class="px-4 py-4 sm:px-5 text-left text-xs font-normal whitespace-nowrap text-gray-700 dark:text-white/90">
                  {{ value.m_dec }}
                </td>
              </tr>
            </tbody>
            <tfoot class="border-t border-gray-200 dark:border-gray-800">
              <tr class="divide-x divide-gray-200 dark:divide-gray-800">
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                </th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  Grand Total
                </th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  540000
                </th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  45000
                </th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  45000
                </th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  30000
                </th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  30000
                </th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  30000
                </th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  30000
                </th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  30000
                </th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  30000
                </th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  45000
                </th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  45000
                </th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  45000
                </th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  60000
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="flex items-center flex-col sm:flex-row justify-between border-t border-gray-200 px-5 py-4 dark:border-gray-800">
          <div class="pb-3 sm:pb-0">
            <span class="block text-sm font-medium text-gray-500 dark:text-gray-400">
              Showing
              <span class="text-gray-800 dark:text-white/90">1</span> to
              <span class="text-gray-800 dark:text-white/90">5</span> of
              <span class="text-gray-800 dark:text-white/90">7</span></span>
          </div>
          <div class="flex items-center bg-gray-50 dark:bg-white/[0.03] dark:sm:bg-transparent sm:bg-transparent p-4 sm:p-0 w-full sm:w-auto rounded-lg justify-between gap-2 sm:justify-normal">
            <button disabled="" class="shadow-theme-xs flex items-center gap-2 rounded-lg border border-gray-300 bg-white p-2 text-gray-700 hover:bg-gray-50 hover:text-gray-800 disabled:opacity-50 sm:p-2.5 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
              <span>
                <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.58203 9.99868C2.58174 10.1909 2.6549 10.3833 2.80152 10.53L7.79818 15.5301C8.09097 15.8231 8.56584 15.8233 8.85883 15.5305C9.15183 15.2377 9.152 14.7629 8.85921 14.4699L5.13911 10.7472L16.6665 10.7472C17.0807 10.7472 17.4165 10.4114 17.4165 9.99715C17.4165 9.58294 17.0807 9.24715 16.6665 9.24715L5.14456 9.24715L8.85919 5.53016C9.15199 5.23717 9.15184 4.7623 8.85885 4.4695C8.56587 4.1767 8.09099 4.17685 7.79819 4.46984L2.84069 9.43049C2.68224 9.568 2.58203 9.77087 2.58203 9.99715C2.58203 9.99766 2.58203 9.99817 2.58203 9.99868Z" fill=""></path>
                </svg>
              </span>
            </button>
            <span class="block text-sm font-medium text-gray-700 sm:hidden dark:text-gray-400">
              Page 1 of 2
            </span>
            <ul class="hidden sm:flex items-center gap-0.5">
              <li>
                <a href="#" class="bg-brand-500 text-white flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium">1</a>
              </li>
              <li>
                <a href="#" class="text-gray-700 dark:text-gray-400 flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium">2</a>
              </li>
            </ul>
            <button class="shadow-theme-xs flex items-center gap-2 rounded-lg border border-gray-300 bg-white p-2 text-gray-700 hover:bg-gray-50 hover:text-gray-800 disabled:opacity-50 sm:p-2.5 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
              <span>
                <svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4165 9.9986C17.4168 10.1909 17.3437 10.3832 17.197 10.53L12.2004 15.5301C11.9076 15.8231 11.4327 15.8233 11.1397 15.5305C10.8467 15.2377 10.8465 14.7629 11.1393 14.4699L14.8594 10.7472L3.33203 10.7472C2.91782 10.7472 2.58203 10.4114 2.58203 9.99715C2.58203 9.58294 2.91782 9.24715 3.33203 9.24715L14.854 9.24715L11.1393 5.53016C10.8465 5.23717 10.8467 4.7623 11.1397 4.4695C11.4327 4.1767 11.9075 4.17685 12.2003 4.46984L17.1578 9.43049C17.3163 9.568 17.4165 9.77087 17.4165 9.99715C17.4165 9.99763 17.4165 9.99812 17.4165 9.9986Z" fill=""></path>
                </svg>
                </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup>
import { ref } from "vue";
import AdminLayout from "@/components/layout/AdminLayout.vue";
import { ListIcon, TrashIcon } from "@/icons";

const currentPageTitle = ref("Incomes");
const openFilter = ref(false);

const dataIncomes = [
  {
    id: 1,
    name: "Savings Deposits",
    total: 180000,
    m_jan: 15000,
    m_feb: 15000,
    m_mar: 10000,
    m_apr: 20000,
    m_may: 15000,
    m_jun: 15000,
    m_jul: 20000,
    m_aug: 10000,
    m_sep: 15000,
    m_oct: 15000,
    m_nov: 15000,
    m_dec: 20000,
  },
  {
    id: 2,
    name: "Hotel Arudita",
    total: 180000,
    m_jan: 15000,
    m_feb: 15000,
    m_mar: 10000,
    m_apr: 20000,
    m_may: 15000,
    m_jun: 15000,
    m_jul: 20000,
    m_aug: 10000,
    m_sep: 15000,
    m_oct: 15000,
    m_nov: 15000,
    m_dec: 20000,
  },
  {
    id: 3,
    name: "Bank Credit",
    total: 180000,
    m_jan: 15000,
    m_feb: 15000,
    m_mar: 10000,
    m_apr: 20000,
    m_may: 15000,
    m_jun: 15000,
    m_jul: 20000,
    m_aug: 10000,
    m_sep: 15000,
    m_oct: 15000,
    m_nov: 15000,
    m_dec: 20000,
  },
];
</script>

<template>
  <AdminLayout>
    <div class="grid grid-cols-6 gap-4 md:gap-6">
      <!-- All Users -->
      <div class="col-span-4 w-full h-fit overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="flex flex-col gap-4 border-b border-gray-200 px-4 py-4 sm:px-5 lg:flex-row lg:items-center lg:justify-between dark:border-gray-800">
          <div class="flex-shrink-0">
            <h3 class="text-base font-medium text-gray-800 dark:text-white/90">
              {{ currentPageTitle }}
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Track your recent shipping activities
            </p>
          </div>
          <div class="flex flex-col gap-4 sm:flex-row lg:items-center">
            <div class="inline-flex h-11 w-full flex-1 gap-0.5 overflow-x-auto rounded-lg bg-gray-100 p-0.5 sm:w-auto lg:min-w-fit dark:bg-gray-900">
              <button class="h-10 flex-1 rounded-md px-2 py-2 text-xs font-medium sm:px-3 sm:text-sm lg:flex-initial shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800">
                All
              </button>
              <button class="h-10 flex-1 rounded-md px-2 py-2 text-xs font-medium sm:px-3 sm:text-sm lg:flex-initial text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                Director
              </button>
              <button class="h-10 flex-1 rounded-md px-2 py-2 text-xs font-medium sm:px-3 sm:text-sm lg:flex-initial text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                Admin
              </button>
              <button class="h-10 flex-1 rounded-md px-2 py-2 text-xs font-medium sm:px-3 sm:text-sm lg:flex-initial text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                Staff
              </button>
            </div>
          </div>
        </div>
        <div>
          <div class="custom-scrollbar overflow-x-auto">
            <table class="w-full table-auto overflow-y-scroll">
              <thead>
                <tr class="border-b border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                  <th class="p-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                    No
                  </th>
                  <th class="p-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                    Name
                  </th>
                  <th class="p-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                    Email
                  </th>
                  <th class="p-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                    Level
                  </th>
                  <th class="p-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                    Password
                  </th>
                  <th class="p-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
                <tr v-for="value in dataUsers" :key="value.id" class="transition hover:bg-gray-100 dark:hover:bg-gray-900">
                  <td class="p-4 text-sm font-normal whitespace-nowrap text-gray-800 dark:text-white/90">
                    {{ value.id }}
                  </td>
                  <td class="p-4 text-sm font-normal whitespace-nowrap text-gray-800 dark:text-white/90">
                    {{ value.name }}
                  </td>
                  <td class="p-4 text-sm font-normal whitespace-nowrap text-gray-700 dark:text-white/90">
                    {{ value.email }}
                  </td>
                  <td class="p-4 text-sm font-normal whitespace-nowrap text-gray-700 dark:text-white/90">
                    {{ value.level == 1 ? 'Director' : value.level == 2 ? 'Admin' : 'Staff' }}
                  </td>
                  <td class="p-4 text-sm font-normal whitespace-nowrap">
                    <button type="button" class="bg-gray-100 dark:bg-gray-500/15 text-gray-700 dark:text-gray-500 text-theme-xs rounded-full px-3 py-0.5 font-medium" title="reset password">
                      reset
                    </button>
                  </td>
                  <td class="p-4 whitespace-nowrap">
                    <div class="flex items-center w-full gap-2">
                      <button type="button" class="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white/90" title="edit user">
                        <UserPenIcon class="size-5 "/>
                      </button>
                      <button type="button" class="text-gray-500 hover:text-error-500 dark:text-gray-400 dark:hover:text-error-500" title="delete user">
                        <TrashIcon class="size-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
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
      <!-- User Level Distribution -->
      <div class="col-span-2 w-full h-fit rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-5 sm:p-6">
        <div class="flex items-center justify-between gap-2 mb-6">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">
            User Level Distribution
          </h3>
        </div>
        <div>
          <div class="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0 dark:border-gray-800">
            <div class="flex items-center gap-4">
              <p class="font-medium text-gray-700 text-theme-sm dark:text-gray-300">
                Director
              </p>
            </div>
            <div class="flex w-full max-w-[140px] items-center gap-3">
              <div class="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
                <div class="absolute left-0 top-0 flex h-full w-[23%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white"></div>
              </div>
              <p class="font-medium text-gray-700 text-theme-sm dark:text-gray-400">
                23%
              </p>
            </div>
          </div>
          <div class="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0 dark:border-gray-800">
            <div class="flex items-center gap-4">
              <p class="font-medium text-gray-700 text-theme-sm dark:text-gray-300">
                Admin
              </p>
            </div>
            <div class="flex w-full max-w-[140px] items-center gap-3">
              <div class="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
                <div class="absolute left-0 top-0 flex h-full w-[38%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white"></div>
              </div><p class="font-medium text-gray-700 text-theme-sm dark:text-gray-400">
                38%
              </p>
            </div>
          </div>
          <div class="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0 dark:border-gray-800">
            <div class="flex items-center gap-4">
              <p class="font-medium text-gray-700 text-theme-sm dark:text-gray-300">
                Staff
              </p>
            </div>
            <div class="flex w-full max-w-[140px] items-center gap-3">
              <div class="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
                <div class="absolute left-0 top-0 flex h-full w-[46%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white"></div>
              </div>
              <p class="font-medium text-gray-700 text-theme-sm dark:text-gray-400">
                46%
              </p>
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
import { TrashIcon, UserPenIcon } from "@/icons";

const currentPageTitle = ref("All Users");
const dataUsers = [
	{
    id: 1,
		name: "Yvonne Burns",
		email: "urna@hotmail.ca",
    level: 1,
	},
	{
    id: 2,
		name: "Quon Franco",
		email: "sit.amet.luctus@icloud.couk",
    level: 1,
	},
	{
    id: 2,
		name: "Alexander Ellison",
		email: "praesent.eu@icloud.org",
    level: 1,
	},
	{
    id: 3,
		name: "Valentine Cochran",
		email: "vitae@protonmail.org",
    level: 2,
	},
	{
    id: 4,
		name: "Jaime Cunningham",
		email: "purus.accumsan@yahoo.net",
    level: 2,
	},
	{
    id: 5,
		name: "Darryl Chavez",
		email: "mi.pede.nonummy@outlook.com",
    level: 2,
	},
	{
    id: 6,
		name: "Raphael Mitchell",
		email: "ultricies.adipiscing@protonmail.couk",
    level: 2,
	},
	{
    id: 7,
		name: "Illana Ochoa",
		email: "dui.cum@icloud.com",
    level: 2,
	},
	{
    id: 8,
		name: "Serina Mcintyre",
		email: "sit.amet.dapibus@outlook.couk",
    level: 3,
	},
	{
    id: 9,
		name: "Keane Jones",
		email: "laoreet.posuere.enim@aol.com",
    level: 3,
	},
	{
    id: 10,
		name: "Sandra Levine",
		email: "erat.eget@protonmail.ca",
    level: 3,
	},
];
</script>
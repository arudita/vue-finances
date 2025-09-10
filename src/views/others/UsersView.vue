<template>
  <AdminLayout>
    <div class="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div class="flex flex-col gap-2 border-b border-gray-200 px-4 py-4 sm:px-5 lg:flex-row lg:items-center lg:justify-between dark:border-gray-800">
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
          <button @click="modalNewUser = true" type="button" class="bg-brand-500 shadow-theme-xs hover:bg-brand-600 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 10.0002H15.0006M10.0002 5V15.0006" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            Add New User
          </button>
        </div>
      </div>
      <div>
        <div class="custom-scrollbar overflow-x-auto">
          <table class="w-full table-auto">
            <thead>
              <tr class="border-b border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  No
                </th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  Name
                </th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  Email
                </th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  Level
                </th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  Password
                </th>
                <th class="px-4 py-4 sm:px-5 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
              <tr v-for="value in dataUsers" :key="value.id" class="transition hover:bg-gray-100 dark:hover:bg-gray-900">
                <td class="px-4 py-4 sm:px-5 text-xs font-normal whitespace-nowrap text-gray-800 dark:text-white/90">
                  {{ value.id }}
                </td>
                <td class="px-4 py-4 sm:px-5 text-xs font-normal whitespace-nowrap text-gray-800 dark:text-white/90">
                  {{ value.name }}
                </td>
                <td class="px-4 py-4 sm:px-5 text-xs font-normal whitespace-nowrap text-gray-700 dark:text-white/90">
                  {{ value.email }}
                </td>
                <td class="px-4 py-4 sm:px-5 text-xs font-normal whitespace-nowrap text-gray-700 dark:text-white/90">
                  {{ value.level == 1 ? 'Director' : value.level == 2 ? 'Admin' : 'Staff' }}
                </td>
                <td class="px-4 py-4 sm:px-5 text-xs font-normal whitespace-nowrap">
                  <button type="button" class="bg-gray-100 dark:bg-gray-500/15 text-gray-700 dark:text-gray-500 text-theme-xs rounded-full px-3 py-0.5 font-medium" title="reset password">
                    reset
                  </button>
                </td>
                <td class="px-4 py-4 sm:px-5 whitespace-nowrap">
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
        <div class="flex items-center flex-col sm:flex-row justify-between border-t border-gray-200 px-4 py-4 sm:px-5 dark:border-gray-800">
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
    <Modal v-if="modalNewUser" @close="modalNewUser = false" full-screen-backdrop>
      <!-- Modal Add New User -->
      <template #body>
        <div class="no-scrollbar relative w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <!-- close btn -->
          <button @click="modalNewUser = false" class="transition-color absolute right-5 top-5 z-999 flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600 dark:bg-gray-700 dark:bg-white/[0.05] dark:text-gray-400 dark:hover:bg-white/[0.07] dark:hover:text-gray-300">
            <svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.04289 16.5418C5.65237 16.9323 5.65237 17.5655 6.04289 17.956C6.43342 18.3465 7.06658 18.3465 7.45711 17.956L11.9987 13.4144L16.5408 17.9565C16.9313 18.347 17.5645 18.347 17.955 17.9565C18.3455 17.566 18.3455 16.9328 17.955 16.5423L13.4129 12.0002L17.955 7.45808C18.3455 7.06756 18.3455 6.43439 17.955 6.04387C17.5645 5.65335 16.9313 5.65335 16.5408 6.04387L11.9987 10.586L7.45711 6.04439C7.06658 5.65386 6.43342 5.65386 6.04289 6.04439C5.65237 6.43491 5.65237 7.06808 6.04289 7.4586L10.5845 12.0002L6.04289 16.5418Z" fill="" />
            </svg>
          </button>
          <div class="px-2 pr-14">
            <h4 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Add New User
            </h4>
            <p class="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Please fill out the form below with the correct data.
            </p>
          </div>
          <form @submit.prevent="handleSubmitNewUser" class="flex flex-col" autocomplete="off">
            <div v-if="submitNewError" class="mb-2 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-xl text-sm">
              {{ submitNewError }}
            </div>
            <div class="custom-scrollbar overflow-y-auto p-2">
              <div class="grid grid-cols-1 gap-x-6 gap-y-5">
                <div>
                  <div class="flex flex-row justify-between mb-1.5">
                    <label for="first_name" class="text-sm font-medium text-gray-700 dark:text-gray-400">
                      First Name
                    </label>
                    <div id="new-first-name-error" class="text-sm text-red-600 dark:text-red-400">
                      {{ errors.first_name }}
                    </div>
                  </div>
                  <input v-model="formNewUser.first_name" type="text" id="first_name" name="first_name" placeholder="First name" class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" required autofocus />
                </div>
                <div>
                  <label for="last_name" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Last Name
                  </label>
                  <input v-model="formNewUser.last_name" type="text" id="last_name" name="last_name" placeholder="Last name" class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" />
                </div>
                <div>
                  <div class="flex flex-row justify-between mb-1.5">
                    <label for="email" class="text-sm font-medium text-gray-700 dark:text-gray-400">
                      Email Address
                    </label>
                    <div id="new-email-error" class="text-sm text-red-600 dark:text-red-400">
                      {{ errors.email }}
                    </div>
                  </div>
                  <input v-model="formNewUser.email" type="email" id="email" name="email" placeholder="Enter valid email" class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" required />
                </div>
                <div>
                  <div class="flex flex-row justify-between mb-1.5">
                    <label for="password" class="text-sm font-medium text-gray-700 dark:text-gray-400">
                      Password
                    </label>
                    <div id="new-password-error" class="text-sm text-red-600 dark:text-red-400">
                      {{ errors.password }}
                    </div>
                  </div>
                  <div class="relative">
                    <input v-model="formNewUser.password" :type="showPassword ? 'text' : 'password'" id="password" name="password" placeholder="Enter strong password" class="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800" required />
                    <span @click="showPassword = !showPassword" class="absolute z-30 text-gray-500 -translate-y-1/2 cursor-pointer right-4 top-1/2 dark:text-gray-400"  :aria-label="showPassword ? 'Hide password' : 'Show password'">
                      <svg v-if="!showPassword" class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.63803 3.57709C4.34513 3.2842 3.87026 3.2842 3.57737 3.57709C3.28447 3.86999 3.28447 4.34486 3.57737 4.63775L4.85323 5.91362C3.74609 6.84199 2.89363 8.06395 2.4155 9.45936C2.3615 9.61694 2.3615 9.78801 2.41549 9.94558C3.49488 13.0957 6.48191 15.3619 10.0002 15.3619C11.255 15.3619 12.4422 15.0737 13.4994 14.5598L15.3625 16.4229C15.6554 16.7158 16.1302 16.7158 16.4231 16.4229C16.716 16.13 16.716 15.6551 16.4231 15.3622L4.63803 3.57709ZM12.3608 13.4212L10.4475 11.5079C10.3061 11.5423 10.1584 11.5606 10.0064 11.5606H9.99151C8.96527 11.5606 8.13333 10.7286 8.13333 9.70237C8.13333 9.5461 8.15262 9.39434 8.18895 9.24933L5.91885 6.97923C5.03505 7.69015 4.34057 8.62704 3.92328 9.70247C4.86803 12.1373 7.23361 13.8619 10.0002 13.8619C10.8326 13.8619 11.6287 13.7058 12.3608 13.4212ZM16.0771 9.70249C15.7843 10.4569 15.3552 11.1432 14.8199 11.7311L15.8813 12.7925C16.6329 11.9813 17.2187 11.0143 17.5849 9.94561C17.6389 9.78803 17.6389 9.61696 17.5849 9.45938C16.5055 6.30925 13.5184 4.04303 10.0002 4.04303C9.13525 4.04303 8.30244 4.17999 7.52218 4.43338L8.75139 5.66259C9.1556 5.58413 9.57311 5.54303 10.0002 5.54303C12.7667 5.54303 15.1323 7.26768 16.0771 9.70249Z" fill="#98A2B3" />
                      </svg>
                      <svg v-else class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0002 13.8619C7.23361 13.8619 4.86803 12.1372 3.92328 9.70241C4.86804 7.26761 7.23361 5.54297 10.0002 5.54297C12.7667 5.54297 15.1323 7.26762 16.0771 9.70243C15.1323 12.1372 12.7667 13.8619 10.0002 13.8619ZM10.0002 4.04297C6.48191 4.04297 3.49489 6.30917 2.4155 9.4593C2.3615 9.61687 2.3615 9.78794 2.41549 9.94552C3.49488 13.0957 6.48191 15.3619 10.0002 15.3619C13.5184 15.3619 16.5055 13.0957 17.5849 9.94555C17.6389 9.78797 17.6389 9.6169 17.5849 9.45932C16.5055 6.30919 13.5184 4.04297 10.0002 4.04297ZM9.99151 7.84413C8.96527 7.84413 8.13333 8.67606 8.13333 9.70231C8.13333 10.7286 8.96527 11.5605 9.99151 11.5605H10.0064C11.0326 11.5605 11.8646 10.7286 11.8646 9.70231C11.8646 8.67606 11.0326 7.84413 10.0064 7.84413H9.99151Z" fill="#98A2B3" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div>
                  <label for="level" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                    User Level
                  </label>
                  <div class="flex flex-wrap items-center gap-4">
                    <div>
                      <label for="level_director" class="relative flex items-center gap-3 text-sm font-medium cursor-pointer select-none text-gray-500 dark:text-gray-400">
                        <input v-model="formNewUser.level" class="peer sr-only" type="radio" id="level_director" name="level" value="1">
                        <span class="flex h-5 w-5 items-center justify-center rounded-full border-[1.25px] peer-checked:border-brand-500 peer-checked:bg-brand-500">
                          <span class="block w-2 h-2 bg-white rounded-full"></span>
                        </span>
                        Director
                      </label>
                    </div>
                    <div>
                      <label for="level_admin" class="relative flex items-center gap-3 text-sm font-medium cursor-pointer select-none text-gray-500 dark:text-gray-400">
                        <input v-model="formNewUser.level" class="peer sr-only" type="radio" id="level_admin" name="level" value="2">
                        <span class="flex h-5 w-5 items-center justify-center rounded-full border-[1.25px] bg-transparent border-gray-300 dark:border-gray-700 peer-checked:border-brand-500 peer-checked:bg-brand-500">
                          <span class="block w-2 h-2 bg-white rounded-full"></span>
                        </span>
                        Admin
                      </label>
                    </div>
                    <div>
                      <label for="level_staff" class="relative flex items-center gap-3 text-sm font-medium cursor-pointer select-none text-gray-500 dark:text-gray-400">
                        <input v-model="formNewUser.level" class="peer sr-only" type="radio" id="level_staff" name="level" value="3">
                        <span class="flex h-5 w-5 items-center justify-center rounded-full border-[1.25px] bg-transparent border-gray-300 dark:border-gray-700 peer-checked:border-brand-500 peer-checked:bg-brand-500">
                          <span class="block w-2 h-2 bg-white rounded-full"></span>
                        </span>
                        Staff
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-3 px-2 mt-6 justify-end">
              <button @click="modalNewUser = false" type="button" class="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] sm:w-auto">
                Close
              </button>
              <button :disabled="authStore.loading" type="submit" class="flex w-full justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto">
                <span v-if="!authStore.loading">
                  Save Changes
                </span>
                <svg v-else class="animate-spin h-5 w-5 text-gray-100 dark:text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </template>
    </Modal>
  </AdminLayout>
</template>

<script setup>
import { reactive, ref } from "vue";
import { TrashIcon, UserPenIcon } from "@/icons";
import { useAuthStore } from '@/stores/auth';
import { useRouter } from "vue-router";
import AdminLayout from "@/components/layout/AdminLayout.vue";
import Modal from "@/components/ui/Modal.vue";

const router = useRouter();
const authStore = useAuthStore();
const currentPageTitle = ref("Users Management");
const modalNewUser = ref(false);
const modalEditUser = ref(false);

const showPassword = ref(false);
const isSubmitting = ref(false);
const submitNewError = ref('');

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
    id: 3,
		name: "Alexander Ellison",
		email: "praesent.eu@icloud.org",
    level: 1,
	},
	{
    id: 4,
		name: "Valentine Cochran",
		email: "vitae@protonmail.org",
    level: 2,
	},
	{
    id: 5,
		name: "Jaime Cunningham",
		email: "purus.accumsan@yahoo.net",
    level: 2,
	},
	{
    id: 6,
		name: "Darryl Chavez",
		email: "mi.pede.nonummy@outlook.com",
    level: 2,
	},
	{
    id: 7,
		name: "Raphael Mitchell",
		email: "ultricies.adipiscing@protonmail.couk",
    level: 2,
	},
	{
    id: 8,
		name: "Illana Ochoa",
		email: "dui.cum@icloud.com",
    level: 2,
	},
	{
    id: 9,
		name: "Serina Mcintyre",
		email: "sit.amet.dapibus@outlook.couk",
    level: 3,
	},
	{
    id: 10,
		name: "Keane Jones",
		email: "laoreet.posuere.enim@aol.com",
    level: 3,
	},
];

const formNewUser = reactive({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  level: 3,
});

const errors = reactive({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  level: '',
});


const validateEmail = () => {
  errors.email = '';
  if (!formNewUser.email) {
    errors.email = 'Email is required!';
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(formNewUser.email)) {
    errors.email = 'Please enter a valid email address!';
    return false;
  }

  return true;
};

const validatePassword = () => {
  errors.password = '';
  if (!formNewUser.password) {
    errors.password = 'Password is required!';
    return false;
  }
  if (formNewUser.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long!';
    return false;
  }

  return true;
};

const validateForm = () => {
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  return isEmailValid && isPasswordValid;
};

const handleSubmitNewUser = async () => {
  if (!validateForm()) return;

  isSubmitting.value = true;
  submitNewError.value = '';

  try {
    await authStore.addUser(
      (formNewUser.first_name + ' ' + formNewUser.last_name),
      formNewUser.email, 
      formNewUser.password,
      formNewUser.password,
      formNewUser.level,
    );
    console.info('New users have been saved');
    router.push('/users');
  } catch (error) {
    setTimeout(() => {
      submitNewError.value = 'New users failed to save. Please check your form and try again.';
    }, 3000)
    console.error('New users failed to save:', error);
  } finally {
    isSubmitting.value = false;
    modalNewUser.value = false;
  }
};
</script>
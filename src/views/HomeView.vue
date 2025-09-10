<template>
  <div class="relative flex flex-col items-center justify-center w-full min-h-screen p-6 overflow-hidden z-1">
    <div>
      <div class="absolute right-0 top-0 -z-1 w-full max-w-[250px] xl:max-w-[450px]">
        <img src="/images/shape/grid-01.svg" alt="grid" />
      </div>
      <div class="absolute bottom-0 left-0 -z-1 w-full max-w-[250px] rotate-180 xl:max-w-[450px]">
        <img src="/images/shape/grid-01.svg" alt="grid" />
      </div>
    </div>
    <div>
      <div class="mx-auto w-full max-w-lg text-center">
        <a href="/" class="inline-block mb-6">
          <img class="dark:hidden" src="/images/logo/logo.svg" alt="Logo" />
          <img class="hidden dark:block" src="/images/logo/logo.svg" alt="Logo" />
        </a>
        <h1 class="mb-3 font-bold text-gray-800 text-title-md dark:text-white/90 xl:text-title-xl">
          Finance Web Application
        </h1>
        <p class="text-base text-gray-500 mb-9 dark:text-gray-400">
          Our website is currently under construction, enter your email id to get latest updates and notifications about the website.
        </p>
        <div class="mb-10">
          <div class="flex flex-wrap justify-center gap-1 mb-2 font-bold text-title-md text-brand-500 dark:text-brand-400 xl:text-title-lg">
            <!-- Fajar -->
          </div>
        </div>
        <p class="mb-5 text-sm text-gray-700 dark:text-gray-400">
          Let's start diving into the system!
        </p>
        <div class="flex flex-col gap-2 sm:flex-row sm:gap-3 justify-center">
          <router-link to="/login" class="w-full text-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-brand-600 dark:bg-brand-500 dark:hover:bg-brand-600 sm:w-auto">
            Log in
          </router-link>
          <router-link to="/register" class="w-full text-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-brand-600 dark:bg-brand-500 dark:hover:bg-brand-600 sm:w-auto">
            Create an Account
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Sidebar from "./Sidebar.vue";
import UserLogo from "./UserLogo.vue";
</script>

<template>
  <!-- 导航栏 -->
  <header
    aria-label="Site Header"
    class="border-b border-gray-100 sticky top-0 bg-white dark:bg-gray-800 dark:border-gray-700"
  >
    <div
      class="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
    >
      <!-- 左侧侧边栏 -->
      <div class="flex items-center">
        <Sidebar />
      </div>

      <!-- 右侧用户栏 -->
      <div class="flex flex-1 items-center justify-end">
        <nav
          aria-label="Site Nav"
          class="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
        >
          <div class="flex-shrink-0 group block">
            <!-- 用户logo -->
            <UserLogo />
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style></style>

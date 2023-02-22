<script setup lang="ts">
import { storeToRefs } from "pinia";
import useStore from "../../.config/stores/index";
const { userconfig } = useStore();
const { user } = storeToRefs(userconfig);
</script>

<template>
  <div class="flex items-center">
    <img
      class="inline-block flex-shrink-0 h-[2.275rem] w-[2.275rem] rounded-full"
      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
      alt="Image Description"
    />
    <div class="ml-3">
      <h3 class="font-semibold text-gray-800 dark:text-white">
        {{ user.name }}
      </h3>
      <p class="text-sm font-medium text-gray-400">{{ user.email }}</p>
    </div>
  </div>
</template>

<style></style>

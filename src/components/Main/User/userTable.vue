<script setup lang="ts">
import { ref } from "vue";
import $axios from "axios";
const userlist: any = ref([]);

$axios.get("http://localhost:7000/api/all/usergm").then((res) => {
  console.log(res.data);
  userlist.value = res.data;
});
</script>

<template>
  <div class="overflow-hidden">
    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead class="bg-gray-50 dark:bg-gray-700">
        <tr>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
          >
            用户名
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
          >
            权限
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
          >
            链上地址
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
          >
            更改
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
        <tr v-for="data in userlist">
          <td
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
          >
            {{ data.Uid }}
          </td>
          <td
            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
          >
            {{ data.Root }}
          </td>
          <td
            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
          >
            {{ data.Address }}
          </td>
          <td
            class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
          >
            <button class="text-blue-500 hover:text-blue-700" href="#">
              编辑
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style></style>

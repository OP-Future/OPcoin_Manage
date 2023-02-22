<script setup lang="ts">
import { ref } from "vue";

const datalist = ref([1, 2, 3, 4, 5]);
console.log(datalist);
</script>

<template>
  <div v-for="data in datalist">
    <!-- 新公告通知 -->
    <article class="bg-white p-6 sm:p-8">
      <div class="flex items-start">
        <div
          class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
          aria-hidden="true"
        >
          <div class="flex items-center gap-1">
            <span class="h-8 w-0.5 rounded-full bg-indigo-500"></span>
            <span class="h-6 w-0.5 rounded-full bg-indigo-500"></span>
            <span class="h-4 w-0.5 rounded-full bg-indigo-500"></span>
            <span class="h-6 w-0.5 rounded-full bg-indigo-500"></span>
            <span class="h-8 w-0.5 rounded-full bg-indigo-500"></span>
          </div>
        </div>

        <div class="sm:ml-8">
          <strong
            class="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
          >
            NFT新闻
          </strong>

          <h3 class="mt-4 text-lg font-medium sm:text-xl">
            <a href="" class="hover:underline"> NFT新闻标题 </a>
          </h3>

          <p class="mt-1 text-sm text-gray-700">新闻简述与大纲</p>

          <div class="mt-4 sm:flex sm:items-center sm:gap-2">
            <div class="flex items-center text-gray-500">
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p class="ml-1 text-xs font-medium">48:32 minutes</p>
            </div>

            <span class="hidden sm:block" aria-hidden="true">&middot;</span>

            <p class="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
              文章来自
              <a href="" class="underline hover:text-gray-700">Github</a>,
              <a href="" class="underline hover:text-gray-700">QQ</a> and
              <a href="" class="underline hover:text-gray-700">BiliBili</a>
            </p>
          </div>
        </div>
      </div>
    </article>

    <!-- 新用户反馈 -->
    <article class="border-0 border-gray-100 bg-white m-1">
      <div class="flex items-start p-6">
        <a href="#" class="block shrink-0">
          <img
            alt="Speaker"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            class="h-14 w-14 rounded-lg object-cover"
          />
        </a>

        <div class="ml-4">
          <h3 class="font-medium sm:text-lg">
            <a href="#" class="hover:underline"> 关于购买NFT的问题反馈 </a>
          </h3>

          <p class="text-sm text-gray-700 line-clamp-2">问题内容简述与大纲</p>

          <div class="mt-2 sm:flex sm:items-center sm:gap-2">
            <div class="flex items-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              <p class="ml-1 text-xs">14 comments</p>
            </div>

            <span class="hidden sm:block" aria-hidden="true">&middot;</span>

            <p class="hidden sm:block sm:text-xs sm:text-gray-500">
              Posted by
              <a href="#" class="font-medium underline hover:text-gray-700">
                John
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <!-- 已解决标签 -->
        <strong
          class="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl bg-green-600 py-1.5 px-3 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>

          <span class="text-[10px] font-medium sm:text-xs">已解决!</span>
        </strong>
        <!-- 未解决标签 -->
        <!-- <strong
        class="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl bg-red-600 py-1.5 px-3 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>

        <span class="text-[10px] font-medium sm:text-xs">未解决?</span>
      </strong> -->
      </div>
    </article>
  </div>
</template>

<style></style>

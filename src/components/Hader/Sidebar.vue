<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const $router = useRouter();

const datalist: any[] = [
  {
    name: "主页",
    path: "/home",
    icon: "M98.033 480.211c-10.115 0-20.065-4.783-26.285-13.712-10.102-14.501-6.536-34.446 7.966-44.548l414.033-288.425a32.003 32.003 0 0 1 37.505 0.667l384.137 288.424c14.133 10.612 16.987 30.671 6.376 44.804s-30.67 16.988-44.804 6.375L511.335 199.272l-395.04 275.193a31.845 31.845 0 0 1-18.262 5.746zM831.241 927.64H608.515c-17.673 0-32-14.327-32-32V671.965H448.118V895.64c0 17.673-14.327 32-32 32H188.589c-17.673 0-32-14.327-32-32V513.167c0-17.673 14.327-32 32-32s32 14.327 32 32V863.64h163.529V639.965c0-17.673 14.327-32 32-32h192.397c17.673 0 32 14.327 32 32V863.64h158.727V513.167c0-17.673 14.327-32 32-32s32 14.327 32 32V895.64c-0.001 17.672-14.328 32-32.001 32z",
  },
  {
    name: "用户管理",
    path: "/user",
    icon: "M786.4 785.2c0-37.9-30.9-68.8-68.8-68.8s-68.8 30.9-68.8 68.8c0 38 30.9 68.8 68.8 68.8s68.8-30.9 68.8-68.8z m-68.8 33.4c-18.4 0-33.4-15-33.4-33.4s15-33.4 33.4-33.4 33.4 15 33.4 33.4c-0.1 18.4-15 33.4-33.4 33.4zM755.5 322.2c0-142.6-115.6-258.3-258.2-258.4v-0.1c-68.6 0-134.3 27.2-182.8 75.7-48.5 48.6-75.8 114.3-75.7 182.9 0 96.7 53.7 180 132.4 224.3-142.8 51.4-245.6 186.2-247 346.3v5.2c0.2 9.2 2 17.9 2.8 27.1h0.6c1.5 14.3 13.6 25.1 27.9 25.1 14.4 0 26.4-10.8 27.9-25.1h0.9c-0.8-9.7-2.9-19-2.9-28.8 0-83.8 33.2-164.1 92.4-223.4 59.2-59.2 139.6-92.5 223.4-92.5l28.7-2.9c128.9-14.3 229.6-122.5 229.6-255.4zM497.2 523.3c-111 0-201-90-201-201s90-201 201-201 201 90 201 201-89.9 201-201 201z",
  },
  {
    name: "NFT管理",
    path: "/nft",
    icon: "M544 88.3616l320.2672 184.9072a64 64 0 0 1 32 55.424v369.8128a64 64 0 0 1-32 55.4256L544 938.8384a64 64 0 0 1-64 0L159.7328 753.9312a64 64 0 0 1-32-55.424V328.6928a64 64 0 0 1 32-55.4256L480 88.3616a64 64 0 0 1 64 0zM175.7328 346.1664v352.3392a16 16 0 0 0 8 13.856L488 888.032V526.4528l-312.2656-180.288z m672.5328-0.3152L536 526.1392v361.8912l304.2688-175.6688a16 16 0 0 0 8-13.856v-352.656zM504 129.9312l-303.4 175.168L511.728 484.728l311.4-179.7872L520 129.9328a16 16 0 0 0-16 0z",
  },
  {
    name: "订单管理",
    path: "/Order",
    icon: "M298.666667 341.333333h384v42.666667H298.666667v-42.666667z m0 128h298.666666v42.666667H298.666667v-42.666667z m0 128h298.666666v42.666667H298.666667v-42.666667z m0-469.376C298.666667 104.405333 317.824 85.333333 341.12 85.333333h341.76C706.304 85.333333 725.333333 104.490667 725.333333 127.957333v42.752A42.645333 42.645333 0 0 1 682.88 213.333333H341.12C317.696 213.333333 298.666667 194.176 298.666667 170.709333V127.957333zM170.666667 938.666667h682.666666c23.68 0 42.666667-19.157333 42.666667-42.773334V170.773333C896 147.093333 876.842667 128 853.205333 128h-63.296v42.666667h63.296c0.128 0.106667 0.170667 725.333333 0.128 725.333333H170.666667V170.773333C170.752 170.709333 236.16 170.666667 236.16 170.666667V128H170.752A42.752 42.752 0 0 0 128 170.773333v725.12A42.666667 42.666667 0 0 0 170.666667 938.666667z m170.666666-768h341.333334V128H341.333333v42.666667z",
  },
];

function ruoterGO(path: string) {
  $router.push(path);
}
</script>

<template>
  <button
    type="button"
    class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-lg border border-transparent font-semibold bg-white text-slate-800 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:bg-slate-800 dark:text-white dark:focus:ring-offset-gray-800"
    data-hs-overlay="#hs-overlay-basic"
    aria-controls="hs-overlay-basic"
    aria-label="Toggle navigation"
  >
    <svg
      t="1675865324172"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.3"
      xmlns="http://www.w3.org/2000/svg"
      p-id="5825"
      width="30"
      height="30"
    >
      <path
        d="M749.632 477.888c-0.448-0.448-1.024-0.576-1.344-0.96L545.6 274.304a48.704 48.704 0 0 0-68.8-0.896 48.704 48.704 0 0 0 0.96 68.8l121.728 121.792H309.888c-27.2 0-49.28 21.504-49.28 48s22.08 48 49.28 48h289.664l-121.792 121.728a48.64 48.64 0 0 0-0.96 68.736 48.64 48.64 0 0 0 68.8-0.896l202.624-202.688c0.384-0.32 0.96-0.448 1.344-0.832a47.04 47.04 0 0 0 13.824-33.664 47.616 47.616 0 0 0-13.76-34.496z"
        fill="#515151"
        p-id="5826"
      ></path>
      <path
        d="M512 32A479.936 479.936 0 0 0 32 512c0 265.152 214.848 480 480 480s480-214.848 480-480S777.152 32 512 32zM512 896A384 384 0 1 1 512 128a384 384 0 0 1 0 768z"
        fill="#515151"
        p-id="5827"
      ></path>
    </svg>
  </button>

  <div
    id="hs-overlay-basic"
    class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex justify-between items-center px-6">
      <p
        class="flex-none text-xl font-semibold dark:text-white"
        href="#"
        aria-label="Brand"
      >
        欢迎你
      </p>

      <button
        type="button"
        class="w-8 h-8 inline-flex justify-center items-center gap-2 rounded-md border border-gray-200 text-gray-600 hover:text-gray-400 transition dark:border-gray-700"
        data-hs-overlay="#hs-overlay-basic"
        aria-controls="hs-overlay-basic"
        aria-label="Toggle navigation"
      >
        <span class="sr-only">Close Sidebar</span>
        <svg
          class="w-3 h-3"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
          />
        </svg>
      </button>
    </div>

    <nav class="p-6 w-full flex flex-col flex-wrap relative z-20">
      <ul class="space-y-1.5 z-30 relative">
        <li v-for="navdata in datalist">
          <a
            class="flex items-center gap-x-3 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-white/[.05] dark:text-slate-400 dark:hover:text-slate-300"
            @click.prevent="ruoterGO(navdata.path)"
          >
            <svg viewBox="0 0 1024 1024" version="1.1" width="16" height="16">
              <path :d="navdata.icon"></path>
            </svg>

            {{ navdata.name }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style></style>

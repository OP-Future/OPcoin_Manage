import { defineStore } from "pinia";

const useStoreUser = defineStore("storeUser", {
  state: () => ({
    user: {
      name: "John Doe",
      email: "123456@163.com",
      signature: "My is John Doe",
    },
  }),
  persist: true,
  getters: {},
  actions: {},
});
export default useStoreUser;

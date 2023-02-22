import useStoreUser from "./storeUser";

export default function useStore() {
  return {
    userconfig: useStoreUser(),
  };
}

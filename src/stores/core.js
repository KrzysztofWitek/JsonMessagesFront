import { defineStore } from "pinia";

export const useCoreStore = defineStore("core", {
  state: () => {
    return {
      api_url: "http://localhost:4000", // api url
    };
  },
});

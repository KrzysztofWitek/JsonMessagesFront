import { defineStore } from "pinia";
import { useCoreStore } from "@/stores/core";

import requestSender from "@/assets/js/requestSender";

export const useSessionMessageStore = defineStore("sessionMessage", {
  state: () => {
    return {
      myMessages: [],
    };
  },

  persist: true, // save store in session

  getters: {
    getMyMessages(state) {
      // return reversed copy
      return state.myMessages.slice().reverse();
    }
  },

  actions: {
    addMessageToStore(message) {
      // push one object to array
      this.myMessages.push(message);
    }
  }
});
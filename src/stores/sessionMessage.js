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
      return state.myMessages
    }
  },

  actions: {
    addMessageToStore(message) {
      this.myMessages.push(message);
    }
  }
});

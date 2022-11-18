import { defineStore } from "pinia";
import { useCoreStore } from "@/stores/core";
import { useSessionMessageStore } from "@/stores/sessionMessage";

import requestSender from "@/assets/js/requestSender";

export const useMessageStore = defineStore("message", {
  state: () => {
    return {
      messages: []
    };
  },

  getters: {},

  actions: {
    addMessage(message) {
      this.messages.push(message)
    },

    async sendMessage(message) {
      let response = await requestSender
      .sendApiRequest(
        useCoreStore().api_url + "/api/message",
        "POST",
        {
          message: message,
        },
        ""
      )
      .then((response) => {
        return response
      })
      .catch((response) => {
        return response.response
      });

    if (response.status === 201) {
      useSessionMessageStore().addMessageToStore(response.data)
    }

    return false
    }
  }
});

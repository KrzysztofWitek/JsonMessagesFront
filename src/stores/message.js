import { defineStore } from "pinia";
import { useCoreStore } from "@/stores/core";
import { useSessionMessageStore } from "@/stores/sessionMessage";

import requestSender from "@/assets/js/requestSender";

export const useMessageStore = defineStore("message", {
  state: () => {
    return {
      ready: true,
      messages: [],
    };
  },

  getters: {
    getMessages(state) {
      // return reversed copy
      return state.messages.slice().reverse();
    }
  },

  actions: {
    addMessage(message) {
      this.messages.push(message);
    },

    async sendMessage(message) {
      this.ready = false

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
          return response;
        })
        .catch((response) => {
          return response.response;
        });

      if (response.status === 201) {
        useSessionMessageStore().addMessageToStore(response.data);
      }

      this.ready = true

      return
    },

    async getMessageByUUID(uuid) {
      this.ready = false

      this.messages = [];

      let response = await requestSender
        .sendApiRequest(
          useCoreStore().api_url + "/api/message/" + uuid,
          "GET",
          {},
          ""
        )
        .then((response) => {
          return response;
        })
        .catch((response) => {
          return response.response;
        });

      if (response.status === 200) {
        this.messages.push(response.data);
      }

      this.ready = true

      return;
    },

    async getMessagesByTimestamp(timestamp) {
      this.ready = false

      this.messages = [];

      let preparedTime = new Date(timestamp).toLocaleDateString("en-CA");

      let response = await requestSender
        .sendApiRequest(
          useCoreStore().api_url + "/api/messages",
          "GET",
          {
            time: preparedTime,
          },
          ""
        )
        .then((response) => {
          return response;
        })
        .catch((response) => {
          return response.response;
        });

      if (response.status === 200) {
        this.messages = response.data;
      }

      this.ready = true

      return;
    },
  },
});

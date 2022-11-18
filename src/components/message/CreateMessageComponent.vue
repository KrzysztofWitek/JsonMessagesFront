<template>
  <div>
    <n-form ref="formRef" :style="{ maxWidth: '640px' }">
      <n-form-item>
        <n-input v-model:value="inputModel" :placeholder="'Nowa wiadomość'" clearable />
        <n-button style="margin-left: 12px" @click="sendMessage"> wyślij </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script>
import { useMessageStore } from "@/stores/message.js";

export default {
  setup() {
    const messageStore = new useMessageStore();

    return {
      messageStore,
    };
  },

  data() {
    return {
      inputModel: "",
    };
  },

  methods: {
    sendMessage() {
      if (this.inputModel === "") {
        return;
      }

      this.messageStore.sendMessage(this.inputModel);
      this.inputModel = "";
    },
  },
};
</script>

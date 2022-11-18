<template>
  <ul class="messageList">
    <template v-for="message in messageStore.getMessages">
      <li>
        [{{message.timestamp}}] {{message.message}} <span class="light">({{message.uuid}})</span>
      </li>
    </template>
  </ul>
</template>

<script>
import { useMessageStore } from "@/stores/message";

export default {
  setup() {
    const messageStore = new useMessageStore();

    return {
      messageStore
    }
  },

  beforeMount() {
    this.messageStore.messages = [];
  },
}
</script>
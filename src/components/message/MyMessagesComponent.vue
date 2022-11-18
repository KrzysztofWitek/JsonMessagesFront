<template>
  <div>
    <p class="clearHistory" @click="clearHistory">Wyczyść historie</p>
    <ul class="messageList">
      <template v-for="message in sessionMessageStore.getMyMessages">
        <li>
          [{{ message.timestamp }}] {{ message.message }}
          <span class="light">({{ message.uuid }})</span>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { useSessionMessageStore } from "@/stores/sessionMessage";

export default {
  setup() {
    const sessionMessageStore = new useSessionMessageStore();

    return {
      sessionMessageStore,
    };
  },
  methods: {
    clearHistory() {
      this.sessionMessageStore.$reset()
    }
  }
};
</script>

<style lang="scss">
  .clearHistory {
    margin: 10px;
    cursor: pointer;

    &:hover {
      color: black;
    }
  }
</style>

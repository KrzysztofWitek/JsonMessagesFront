<template>
  <div>
    <n-date-picker
      class="datePickerFilter"
      v-model:value="timestamp"
      placeholder="szukaj po dacie"
      clearable
      type="date"
    />

    <n-form ref="formRef" class="uuidilter" :style="{ maxWidth: '350px' }">
      <n-form-item>
        <n-input
          v-model:value="uuid"
          placeholder="szukaj po uuid"
          type="text"
          clearable
        />
        <n-button style="margin-left: 12px" @click="findMessage"> szukaj </n-button>
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
      timestamp: null,
      uuid: "",
    };
  },

  watch: {
    timestamp(newValue, oldValue) {
      this.uuid = "";

      if (newValue !== null) {
        this.messageStore.getMessagesByTimestamp(newValue);
      }
    },

    uuid(newValue, oldValue) {
      this.timestamp = null;
    },
  },

  methods: {
    findMessage() {
      if (this.uuid === "") {
        return;
      }

      this.messageStore.getMessageByUUID(this.uuid);

      this.uuid = "";
    },
  },
};
</script>

<style lang="scss">
.datePickerFilter {
  margin: 20px 0 0 10px;
  width: 350px !important;
}

.uuidilter {
  margin-left: 10px;
}
</style>

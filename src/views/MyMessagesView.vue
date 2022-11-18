<template>
  <div class="page_content">
    <div class="card full_height">
    <!-- message view content -->
      <div class="header">
        <div class="title">
          Moje wiadomości
        </div>
      </div>

      <div class="body">
        <!-- message related components -->
        <CreateMessageComponent />

        <MyMessagesComponent />
      </div>
    </div>
  </div>
</template>

<script>
import CreateMessageComponent from '../components/message/CreateMessageComponent.vue';
import MyMessagesComponent from '../components/message/MyMessagesComponent.vue';

export default {
  components: {
    CreateMessageComponent,
    MyMessagesComponent
  }
}
</script>

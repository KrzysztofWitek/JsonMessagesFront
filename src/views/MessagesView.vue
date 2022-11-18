<template>
  <div class="page_content">
    <div class="card full_height">
    <!-- message view content -->
      <div class="header">
        <div class="title">
          Wiadomości
        </div>
      </div>

      <div class="body">
        <FilterMessagesComponent />
        
        <MessagesListComponent />
      </div>
    </div>
  </div>
</template>

<script>
import FilterMessagesComponent from '../components/message/FilterMessagesComponent.vue';
import MessagesListComponent from '../components/message/MessagesListComponent.vue';

export default {
  components: {
    FilterMessagesComponent,
    MessagesListComponent
  }
}
</script>

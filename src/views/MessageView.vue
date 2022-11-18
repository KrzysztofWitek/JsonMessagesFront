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
        <!-- message related components -->
        <CreateMessageComponent />

      </div>
    </div>
  </div>
</template>

<script>
import CreateMessageComponent from '../components/message/CreateMessageComponent.vue';

export default {
  components: {
    CreateMessageComponent
  }
}
</script>

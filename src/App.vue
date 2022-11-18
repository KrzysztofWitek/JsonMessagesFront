<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <!-- mobile for small devices -->
  <MobileMenu
    :active="mobile_menu_collapse"
    @menuCollapse="collapseMobileMenu"
  ></MobileMenu>

  <!-- top_bar -->
  <TopBar 
    @collapseMobileMenu="collapseMobileMenu"
  />

  <!-- view area -->
  <RouterView />
</template>

<script>
  import TopBar from "./components/partials/TopBar.vue";
  import MobileMenu from "./components/partials/MobileMenu.vue";

  export default {
    components: {
      TopBar,
      MobileMenu
    },

    data() {
      return {
        mobile_menu_collapse: false,
      }
    },

    methods: {
      collapseMobileMenu() {
        this.mobile_menu_collapse = !this.mobile_menu_collapse;
      },
    }
  }
</script>
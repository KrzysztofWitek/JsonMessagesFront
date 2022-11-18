<template>
  <div id="top_bar">
    <div class="sitename">

      <div class="title">
        <span class="bold">Json</span>
        <span>Messages</span>
      </div>
    
      <div class="left_navigation">

        <!-- nav -->
        <div class="navigation">
          <div class="wrapper" v-for="item in leftNavItems">
            <router-link
              :to="item.link"
              class="item"
              >{{ item.text }}</router-link
            >
          </div>
        </div>

      </div>
    </div>
    <div class="mobile_collapse" @click="collapseMobileMenu">
      <i class="fa-solid fa-bars"></i>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      leftNavItems: [
        // link definitions
        { text: "Moje wiadomości", link: "/" },
        { text: "Wiadomości", link: "/wiadomosci" },
      ],
    };
  },

  methods: {
    collapseMobileMenu() {
      this.$emit("collapseMobileMenu");
    },
  },
};
</script>

<template>
  <div id="mobileMenu">
    <div class="mask" @click="menuCollapse" :class="{ active: active }"></div>
    <div class="content" :class="{ active: active }">
      <div class="elementsWrapper">
        <div class="wrapper" v-for="item in leftNavItems">
          <router-link
            @click="menuCollapse"
            :to="item.link"
            class="item"
            >{{ item.text }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["active"],
  data() {
    return {
      leftNavItems: [
        // link definitions
        { text: "Wiadomości", link: "/" },
      ],
    };
  },

  emits: ['menuCollapse'],

  methods: {
    menuCollapse() {
      this.$emit("menuCollapse");
    },
  },
};
</script>
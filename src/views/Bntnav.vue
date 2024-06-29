<template>
  <div class="btn-nav">
    <div class="container">
      <div class="row">
        <div class="btn-two d-flex justify-content-between align-items-center p-2 flex-wrap">
         
          <div class="d-flex gap-2">
            <router-link v-if="showCreateButton" to="/create">
              <button>{{ $t("message.create") }}</button>
            </router-link>
            <router-link v-if="showLogButton" to="/">
              <button>{{ $t("message.log") }}</button>
            </router-link>
          </div>
          <button v-if="showUserButton">{{ $t("message.welcome") }} {{ user.username }}</button>
          <button @click="changeLanguage">
            {{ $t("message.changeLang") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../stores/userStore';

export default {
  name: "Btnnav",
  data() {
    return {
      direction: "ltr",
    };
  },
  computed: {
    showCreateButton() {
      return this.$route.path !== "/create" && this.$route.path !== "/hello";
    },
    showLogButton() {
      return this.$route.path !== "/" && this.$route.path !== "/hello";
    },
    showUserButton() {
      return this.$route.path === "/hello" && this.isLoggedIn;
    },
    isLoggedIn() {
      const userStore = useUserStore();
      return userStore.isLoggedIn;
    },
    user() {
      const userStore = useUserStore();
      return userStore.user;
    },
   
  },
  methods: {
    changeLanguage() {
      if (this.$i18n.locale === "en") {
        this.$i18n.locale = "ar";
        this.direction = "rtl";
        document.body.style.direction = "rtl";
      } else {
        this.$i18n.locale = "en";
        this.direction = "ltr";
        document.body.style.direction = "ltr";
      }
    },
  }
};
</script>

<style scoped>
.btn-nav {
  padding: 20px 0;
}
.btn-two button {
  border: none;
  padding: 8px;
  border-radius: 8px;
  background-color: var(--main-color);
  color: #fff;
}
</style>

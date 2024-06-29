import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {
      username: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      password: "",
    },
    isLoggedIn: false,
  }),
  actions: {
    setUser(user) {
      this.user = user;
      this.isLoggedIn = true;
    },
    logout() {
      this.user = {
        username: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        password: "",
      };
      this.isLoggedIn = false;
    },
  },
});

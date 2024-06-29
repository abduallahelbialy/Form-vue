<template>
  <div class="create">
    <div class="container">
      <div class="row">
        <div class="m-auto mt-3 mb-5">
          <div class="d-flex justify-content-around gap-2 flex-wrap-reverse align-items-center">
            <div class="img-form">
              <img :src="img" alt="" class="img-fluid" />
            </div>
            <form @submit.prevent="createAccount" class="mt-3">
               <div v-if="errorMessage" class="alert alert-danger mt-3">
                {{$t(errorMessage)  }}
              </div>
              <div
                class="one-input mb-3 d-flex flex-column"
                v-for="input in inputs"
                :key="input.id"
              >
                <label for="user" class="text-black mb-2 fw-medium">
                  {{ $t(input.user) }}
                </label>
                <input :type="input.type" v-model="input.value" name="user" />
              </div>
              <div class="forget">
                <router-link to="/">
                  <p class="text-danger">{{ $t("message.how") }}</p>
                </router-link>
              </div>
              <div class="btn d-flex justify-content-center align-items-center">
                <button>{{ $t("message.cre") }}</button>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../../assets/undraw_Access_account_re_8spm.png";
import { useUserStore } from '../../stores/userStore';

export default {
  name: "Create a new",
  data() {
    return {
      img: img1,
      inputs: [
        { id: 1, type: "text", user: "creates.1", value: "" },
        { id: 2, type: "email", user: "creates.2", value: "" },
        { id: 3, type: "tel", user: "creates.3", value: "" },
        { id: 4, type: "date", user: "creates.4", value: "" },
        { id: 5, type: "password", user: "creates.5", value: "" },
        { id: 6, type: "password", user: "creates.6", value: "" },
      ],
      errorMessage: "",
    };
  },
  methods: {
    createAccount() {
      const username = this.inputs[0].value;
      const email = this.inputs[1].value;
      const phone = this.inputs[2].value;
      const dateOfBirth = this.inputs[3].value;
      const password = this.inputs[4].value;
      const confirmPassword = this.inputs[5].value;

      if (!username || !email || !phone || !dateOfBirth || !password || !confirmPassword) {
        this.errorMessage = "message.errorMessageLogin";
      } else if (password !== confirmPassword) {
        this.errorMessage = "message.conf";
      } else {
        const userStore = useUserStore();
        userStore.setUser({
          username,
          email,
          phone,
          dateOfBirth,
          password,
        });
        this.errorMessage = "";
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.create {
  padding: 30px 0;
}
</style>

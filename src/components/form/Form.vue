<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="m-auto mt-5">
          <div
            class="d-flex justify-content-around gap-2 flex-wrap-reverse align-items-center"
          >
            <div class="img-form">
              <img :src="img" alt="" class="img-fluid" />
            </div>

            <form @submit.prevent="login" class="mt-5">
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
                <router-link to="/forget">
                  <p class="text-danger">{{ $t("message.for") }}</p>
                </router-link>
              </div>
              <div class="btn d-flex justify-content-center align-items-center">
                <button>{{ $t("message.log") }}</button>

              </div>

            
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgf from "../../assets/ab059423d9884639658baf6764ceb970.gif";
import { useUserStore } from '../../stores/userStore';


export default {
  name: "Form",
  data() {
    return {
      img: imgf,
         items : [
    {
        label: 'Update',
        command: () => {
            this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
  ],
      inputs: [
        { id: 1, type: "text", user: "names.1", value: "" },
        { id: 2, type: "email", user: "names.2", value: "" },
        { id: 3, type: "password", user: "names.3", value: "" },
      ],
      errorMessage: "",
    };
  },

  methods: {
    login() {
      const username = this.inputs[0].value;
      const email = this.inputs[1].value;
      const password = this.inputs[2].value;

      const userStore = useUserStore();
      const user = userStore.user;

      if (!username || !email || !password) {
        this.errorMessage = "message.errorMessageLogin";
      } else if (
        user.username === username &&
        user.email === email &&
        user.password === password
      ) {
        this.$router.push("/hello");
      } else {
        this.errorMessage = "message.errorMessageNotFound";
      }
    },
  },
};
</script>

<style></style>

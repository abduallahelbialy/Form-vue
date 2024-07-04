<template>
  <div class="error-page">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 text-center">
          <h1 class="error-code">
            <img src="../assets/pikabu.gif" alt="" class=" img-fluid">
          </h1>
          <h2 class="error-message">{{ $t("message.no") }}</h2>
          <p class="error-description">
            {{ $t("message.sorry") }}
          </p>
          <div class="cvar3 button">

          <router-link to="/" class="  ">
          <button>{{ $t("message.backTo") }}</button>
          </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.error-page {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  background-color: #f8f9fa;
}
.error-code {
  font-size: 10rem;
  font-weight: bold;
  color: #343a40;
}
.error-message {
  font-size: 2.5rem;
  color: #343a40;
}
.error-description {
  font-size: 1.25rem;
  color: #6c757d;
  margin-bottom: 2rem;
}
.btn {
  font-size: 1.25rem;
  padding: 0.75rem 1.5rem;
}
.error-code img{
    border-radius: 5px;
}
.cvar3 button{
    border: none;
    padding: 7px;
    color: #fff;
    border-radius: 4px;
    background-color: var(--main-color);
}
@media (max-width:477px) {
    .error-description {
    font-size: 15px;
}
.error-message {
    font-size: 16px;
   
    margin-top: 21px;
}
}
</style>

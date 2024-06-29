<template>
  <div class="hello d-flex justify-content-center align-items-center">
    <div class="container">
      <div class="row">
        <div class="col text-center repeated-text">
          <p class="fs-3 text-danger">{{ $t("message.ardy") }}</p>
          <p class="fs-3 text-danger">{{ $t("message.ardy") }}</p>
          <p class="fs-3 text-danger">{{ $t("message.ardy") }}</p>
          <p class="fs-3 text-danger">{{ $t("message.ardy") }}</p>
          <p class="fs-3 text-danger">{{ $t("message.ardy") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hello"
}
</script>

<style scoped>
.hello {
  height: 100vh; 
  overflow: hidden;
}

.repeated-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: scroll 10s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>

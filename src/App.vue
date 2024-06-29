

<template>
<Bntnav/>
  <RouterView />

</template>
<script>
import { RouterView } from 'vue-router';
import Bntnav from './views/Bntnav.vue';
export default {
name:"Btnnav",
components:{RouterView,Bntnav}
}
</script>
<style >

</style>

<template>
<div>
  <Nav />
</div>
</template>

<script>
import Nav from './components/Nav.vue'
export default {
  name: 'App',
  components: {
    Nav,
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "PingFang SC", "Microsoft Yahei", sans-serif;
}
@keyframes slideIn {
    form {
        transform: translateX(20px);
        opacity: 1;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>

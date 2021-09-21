<template>
  <div class="burger" 
  @click="CisActive"
  :class="{active: isActive}">
    <div class="top-line"></div>
    <div class="middle-line"></div>
    <div class="bottom-line"></div>
  </div>
</template>

<script>
import { ref } from "vue"
import store from "../store/index"
export default {
  name: "AdaptNav",
  // props: [open],
  setup() {
    let isActive = ref(false)
    const CisActive = ()=>{
        isActive.value = !store.state.isOpen
        store.commit('increment')
        // store.dispatch('increment')
        // console.log(store.getters.getisOpen);
    }

    return {
        isActive,
        CisActive
        };
  },
};
</script>

<style scope>
.burger div {
  width: 25px;
  height: 3px;
  background-color: #dadbdd;
  margin: 4px;
}
.burger {
  display: none;
}

@media screen and (max-width: 768px) {
  .burger {
    display: block;
  }

  .burger.active div {
    transition: 0.3s ease-in-out 0.3s;
  }

  .burger.active .top-line {
    transform: rotate(45deg) translate(4px, 6px);
  }

  .burger.active .bottom-line {
    transform: rotate(-45deg) translate(4px, -6px);
  }

  .burger.active .middle-line {
    opacity: 0;
    transform: translateX(10px);
    transition: 0.3s ease-in-out;
  }
}
</style>
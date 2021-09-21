<template>
  <div>
    <nav>
      <div class="logo">响应式导航栏</div>
      <ul class="nav-menu" :class="{ open: isOpen }">
        <li v-for="(navmenu, index) in navmenus" :key="index">{{ navmenu }}</li>
      </ul>
      <AdaptNav @click="ifopen" />
    </nav>
  </div>
</template>

<script>
import { ref } from "vue";
import AdaptNav from "./AdaptNav.vue";
import store from "../store";
// import store from "../store/index"
export default {
  name: "",
  components: {
    AdaptNav,
  },
  setup() {
    const navmenus = ["首页", "关于我", "我的作品", "我的简历", "我的博客"];
    // const nav_Menu = document.querySelector(".nav-menu")
    let isOpen = ref();
    const ifopen = () => {
      isOpen.value = store.state.isOpen;
      document.querySelectorAll(".nav-menu li").forEach(function (item, index) {
        if (item.style.animation) {
          item.style.animation = "";
        } else {
          item.style.animation = `0.3s ease-in slideIn forwards ${
            index * 0.1 + 0.3
          }s`;
        }
      });
    };
    return {
      navmenus,
      // nav_Menu,
      isOpen,
      ifopen,
    };
  },
};
</script>

<style scope>
nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  /* 左右padding */
  padding: 0 5vw;
  height: 80px;

  background-color: rgba(65, 81, 101, 0.9);
}

.logo {
  font-size: 24px;
  font-weight: 600;
  color: #dadbdd;
  flex: 1;
}

.nav-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;

  max-width: 550px;
}

.nav-menu li {
  list-style: none;
  color: #dadbdd;
  font-weight: 600;
}
@media screen and (max-width: 768px) {
  .nav-menu {
    position: absolute;
    top: 80px;
    right: 0;
    bottom: 0;
    width: 50vw;
    height: calc(100vh - 80px);

    background-color: rgba(65, 81, 101, 0.9);
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    /* 水平移动100% */
    transform: translateX(100%);
    transition: 0.4s ease-in-out;
  }

  .nav-menu.open {
    transform: translateX(0);
  }

  .nav-menu li {
    margin: 3vh;
    transform: translateX(20px);
    opacity: 0;
  }
}
</style>
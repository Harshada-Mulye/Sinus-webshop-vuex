<template>
  <div>
    <div class="container">
      <div>
        <img
          class="logo"
          src="../assets/icons/logo.svg"
          alt="Logo"
          @click="home"
        />
      </div>
      <div class="right-container">
        <SocialMedia />
        <div class="cart-container">
          <div @click="cart" class="dropdown">
            <img
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              src="../assets/icons/cart-icon.svg"
              alt="Cart icon"
            />
            <div v-if="showCart" class="dropdown-content">
              <Minicart />
            </div>
          </div>
          <p>{{ Amount }}</p>
        </div>
        <div class="menu">
          <img
            class="login"
            src="../assets/icons/login.svg"
            alt="login"
            @click="openLogin"
          />
          <!-- Lägg till hover funktion -->
          <img
            class="menu-img"
            src="../assets/icons/menu.svg"
            alt="Menu"
            @click="openMenu"
          />
        </div>
      </div>
    </div>
    <transition name="slideMenu">
      <nav v-show="showMenu">
        <router-link to="/">Startsida</router-link>
        <router-link to="/products">Produkter</router-link>
        <!-- Lägg till path -->
        <router-link to="/">Varukorg</router-link>
        <a href="#" @click="openLogin">Logga In</a>
      </nav>
    </transition>
  </div>
</template>

<script>
import Minicart from "./Minicart.vue";
import SocialMedia from "../components/SocialMedia.vue";

export default {
  components: { SocialMedia, Minicart },

  data() {
    return {
      /* Lägg till riktiga order summan */
      Amount: 0,
      showMenu: false,
      showCart: false,
    };
  },
  methods: {
    home() {
      if (this.$route.name != "Home") this.$router.push("/");
    },
<<<<<<< HEAD
    cart() {
      /* Lägg till funktion för att gå till kassan */
      console.log("orders");
    },
    openLogin() {
      this.$store.dispatch("openLogin");
=======

    login() {
      /* Lägg till funktion för att logga in */
      console.log("login");
>>>>>>> 6f74cebf7924eebcc124deb3ed18f23ca90d9340
    },
    openMenu() {
      this.showMenu = !this.showMenu;
    },
    cart() {
      this.showCart = !this.showCart;
      this.Amount = null;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 5px 10px;
}
.logo:hover {
  cursor: pointer;
}
.right-container {
  display: flex;
}
.cart-container {
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
}
.cart-container:hover {
  cursor: pointer;
}
p {
  font-family: "Electrolize", sans-serif;
}
.login {
  width: 48px;
  margin-right: 30px;
  margin-left: 60px;
}
.login:hover {
  cursor: pointer;
}
.menu {
  margin-left: 0px;
}
.menu-img:hover {
  cursor: pointer;
}
nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  color: #e84b38;
}
.slideMenu-enter,
.slideMenu-leave-to {
  visibility: hidden;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
}
.slideMenu-enter-active,
.slideMenu-leave-active {
  transition: all 0.4s;
}
a {
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  padding: 5px;
  color: #e84b38;
  text-transform: capitalize;
}
a:visited {
  color: #e84b38;
}
a:hover {
  cursor: pointer;
}

a:active {
  color: #e84b38;
}
<<<<<<< HEAD
</style>
=======
.dropdown {
  position: relative;
  display: inline-block;
  margin-right: 0;
}
.dropdown-content {
  display: flex;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 250px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  /* background-color: orange; */
  justify-content: center;
}
</style>
>>>>>>> 6f74cebf7924eebcc124deb3ed18f23ca90d9340

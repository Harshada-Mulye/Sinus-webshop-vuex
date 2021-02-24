<template>
  <div>
    <div class="container">
      <div>
        <img class="logo" src="../assets/icons/logo.svg" alt="Logo" @click="home" />
      </div>
      <div class="right-container">
        <div class="cart-container">
          <div>
            <img src="../assets/icons/cart-icon.svg" alt="Cart icon" @click="cart" />
          </div>
          <p>{{ orderSum }}kr</p>
        </div>

        <div class="social-media">
          <img
            class="socialMedia-img"
            src="../assets/icons/facebook.svg"
            alt="Facebook icon"
          />
          <img
            class="socialMedia-img"
            src="../assets/icons/instagram.svg"
            alt="Instagram icon"
          />
          <img
            class="socialMedia-img"
            src="../assets/icons/twitter.svg"
            alt="Twitter icon"
          />
        </div>

        <div class="menu">
          <img
            class="login"
            src="../assets/icons/login.png"
            alt="login"
            @click="login"
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
        <!-- Lägg till path -->
        <router-link to="/">Logga in</router-link>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* Lägg till riktiga order summan */
      orderSum: 0.0,
      showMenu: false,
    };
  },
  methods: {
    home() {
      if (this.$route.name != "Home") this.$router.push("/");
    },
    cart() {
      /* Lägg till funktion för att gå till kassan */
      console.log("orders");
    },
    login() {
      /* Lägg till funktion för att logga in */
      console.log("login");
    },
    openMenu() {
      this.showMenu = !this.showMenu;
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
}
.cart-container:hover {
  cursor: pointer;
}
p {
  font-family: "Electrolize", sans-serif;
}
.social-media {
  margin-left: 150px;
}
.socialMedia-img {
  margin-left: 15px;
}
.social-media:hover {
  cursor: pointer;
}
.login {
  width: 50px;
  margin-right: 20px;
}
.login:hover {
  cursor: pointer;
}
.menu {
  margin-left: 150px;
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
</style>
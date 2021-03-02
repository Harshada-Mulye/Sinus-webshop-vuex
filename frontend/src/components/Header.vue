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
          <p>{{ cartTotalPrice }}</p>
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
            @mouseover="openMenu"
          />
        </div>
      </div>
    </div>
    <transition name="slideMenu">
      <nav v-show="showMenu" id="header">
        <div class="links" id="links">
          <router-link to="/">Startsida</router-link>
          <router-link to="/products">Produkter</router-link>
          <router-link to="/account" v-if="this.$store.state.user.currentUser"
            >Min sida</router-link
          >
          <a
            href="#"
            @click="openLogin"
            v-if="!this.$store.state.user.currentUser"
            >Logga in</a
          >
          <a href="#" v-else @click="logOut">Logga ut</a>
          <router-link
            to="/admin"
            v-if="
              this.$store.state.user.currentUser &&
              this.$store.state.user.currentUser.role == 'admin'
            "
          >
            Admin view
          </router-link>
        </div>
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
      showMenu: false,
      showCart: false,
    };
  },
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  methods: {
    home() {
      if (this.$route.name != "Home") this.$router.push("/");
    },
    cart() {
      this.showCart = !this.showCart;
      this.Amount = null;
    },
    openLogin() {
      if (this.$store.state.user.currentUser)
        this.$router.push("/account").catch((error) => {
          if (error.name != "NavigationDuplicated") throw error;
        });
      else this.$store.dispatch("openLogin");
    },
    logOut() {
      if (this.$route.name == "Account") this.$router.push("/");
      else if (this.$route.name == "Admin") this.$router.push("/");
      location.reload();
    },
    openMenu() {
      document.getElementById("links").style.visibility = "visible";
      this.showMenu = true;
      let counter;
      document.getElementById("header").addEventListener("mouseleave", () => {
        counter = setTimeout(() => {
          this.showMenu = false;
          document.getElementById("links").style.visibility = "hidden";
        }, 800);
      });
      document.getElementById("header").addEventListener("mouseenter", () => {
        clearTimeout(counter);
      });
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
  height: 76px;
  box-sizing: border-box;
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
  width: 100px;
}
.cart-container:hover {
  cursor: pointer;
}
p {
  font-family: "Electrolize", sans-serif;
}
.login {
  width: 45px;
  margin-right: 30px;
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
.links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  transition: opacity 0.6s linear;
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
  transition: all 0.6s;
}
a {
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  padding: 5px;
  color: #e84b38;
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
  justify-content: center;
}
</style>

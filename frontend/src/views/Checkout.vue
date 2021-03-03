<template>
  <section>
    <Header />
    <section
      class="checkout-wrapper"
      v-bind:class="{ emptyCart: this.$store.state.user.cart.length  == 0 }"
    >
      <section class="checkout-container">
        <CheckoutCart />
      </section>
      <section class="checkout-container right">
        <CheckoutForm :getUser="getUser" />
      </section>
    </section>
    <FooterComp />
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import CheckoutCart from "../components/CheckoutCart.vue";
import CheckoutForm from "../components/CheckoutForm.vue";
import FooterComp from "../components/FooterComp.vue";
export default {
  components: {
    Header,
    CheckoutCart,
    CheckoutForm,
    FooterComp,
  },
  computed: {
    getUser() {
      const emptyUser = {
        email: "",
        name: "",
        address: {
          street: "",
          zip: "",
          city: "",
        },
      };
      if (this.$store.state.user.currentUser)
        return this.$store.state.user.currentUser;
      else return emptyUser;
    },
  },
};
</script>

<style scoped>
.checkout-wrapper {
  display: flex;
  justify-content: space-between;
}
.emptyCart {
  margin-bottom: 16em;
}
.checkout-container {
  display: flex;
  width: 80%;
  padding: 30px 60px;
  min-height: 450px;
}

.right {
  width: 30%;
  padding-left: 0;
  display: flex;
  justify-content: flex-end;
  align-self: flex-start;
}
</style>
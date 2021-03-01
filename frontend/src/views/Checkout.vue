<template>
  <section>
    <Header />
    <section class="checkout-wrapper">
      <section class="checkout-container">
        <CheckoutCart />
      </section>
      <section class="checkout-container right">HEJ</section>
    </section>
    <FooterComp />
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import CheckoutCart from "../components/CheckoutCart.vue";
import FooterComp from "../components/FooterComp.vue";
export default {
  components: {
    Header,
    CheckoutCart,
    FooterComp,
  },
};
</script>

<style scoped>
.checkout-wrapper {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  /* border: red solid 1px; */
  /* Radera inte dolda borden ovan förrän vi är helt klara */
}

.checkout-container {
  display: flex;
  width: 55%;
  padding: 20px;
  /* border: green solid 1px; */
  /* Radera inte dolda borden ovan förrän vi är helt klara */
}

.right {
  width: 30%;
  padding-left: 0;
}
</style>
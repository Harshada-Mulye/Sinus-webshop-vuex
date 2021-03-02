<template>
  <section>
    <Header />
    <section class="checkout-wrapper">
      <section class="checkout-container">
        <CheckoutCart />
      </section>
      <section class="checkout-container right">
        <CheckoutForm />
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
};
</script>

<style scoped>
.checkout-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: red solid 1px; */
  /* min-height: 80vh; */
  /* Radera inte dolda borden ovan förrän vi är helt klara */
}

.checkout-container {
  display: flex;
  /* width: 55%; */
  padding: 30px 60px;
  min-height: 450px;
  /* border: green solid 1px; */
  /* Radera inte dolda borden ovan förrän vi är helt klara */
}

.right {
  /* width: 30%; */
  padding-left: 0;
  align-self: flex-start;
}
</style>
<template>
  <div>
    <Header />
    <ProductList />
    <FooterComp />
    <Productinfo />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import FooterComp from "../components/FooterComp.vue";
import ProductList from "../components/ProductList.vue";
import Productinfo from "../components/Productinfo.vue"

export default {
  components: { Header, FooterComp, ProductList, Productinfo },
};
</script>

<style scoped></style>

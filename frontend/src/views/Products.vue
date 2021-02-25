<template>
  <div>
    <Header />
    <ProductList />

    <FooterComp />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import FooterComp from "../components/FooterComp.vue";
import ProductList from "../components/ProductList.vue";

export default {
  components: { Header, FooterComp, ProductList },
};
</script>

<style scoped>
</style>
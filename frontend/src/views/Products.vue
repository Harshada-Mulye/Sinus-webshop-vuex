<template>
  <div>
    <Header />
      <h1>Product</h1>
    <FooterComp />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import FooterComp from "../components/FooterComp.vue";

export default {
  components: { Header, FooterComp },
  created() {
    this.$store.dispatch("getProducts")
  }
};
</script>

<style scoped>
main {
  /* Bara tillfälligt för att sära på header och footer */
  height: 80vh;
  background: rgb(219, 120, 39);
}
</style>
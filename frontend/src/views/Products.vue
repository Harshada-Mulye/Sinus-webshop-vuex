<template>
  <div>
    <Header />
      <h1>Product</h1>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { Header, Footer },
};
</script>

<style scoped>
main {
  /* Bara tillfälligt för att sära på header och footer */
  height: 80vh;
  background: rgb(219, 120, 39);
}
</style>
<template>
  <div>
    <Header />
      <h1>Product</h1>
      <ProductList/>
    
      
    <FooterComp />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import FooterComp from "../components/FooterComp.vue";
import ProductList from "../components/ProductList.vue";

export default {
  components: { Header, FooterComp,ProductList },
  
  }
  

</script>

<style scoped>
main {
  /* Bara tillfälligt för att sära på header och footer */
  height: 80vh;
  background: rgb(219, 120, 39);
}
</style>
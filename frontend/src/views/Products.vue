<template>
  <div>
    <ProductModal
      :product="product"
      v-if="showProductModal"
      @closeModal="closeModal"
    />
    <Header />
    <ProductsList @showModal="showModal" />
    <FooterComp />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import FooterComp from "../components/FooterComp.vue";
import ProductsList from "../components/ProductsList.vue";
import ProductModal from "../components/ProductModal.vue";

export default {
  components: { Header, FooterComp, ProductsList, ProductModal },
  data() {
    return {
      product: null,
      showProductModal: false,
    };
  },
  methods: {
    showModal(data) {
      this.product = data;
      this.showProductModal = true;
    },
    closeModal() {
      this.showProductModal = false;
    },
  },
};
</script>

<style scoped>
</style>

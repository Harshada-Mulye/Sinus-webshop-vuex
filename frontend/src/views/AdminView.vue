<template>
  <div>
    <Header />
    <ProductModal
      :product="product"
      v-if="showProductModal"
      @closeModal="closeModal"
    />
    <EditProduct
      v-if="showEditProduct"
      @closeEditProduct="closeEditProduct"
      :obj="obj"
    />
    <AddProduct v-if="showAddProduct" @closeAddProduct="closeAddProduct" />
    <AdminCrud
      @addProduct="addProduct"
      @editProduct="editProduct"
      @showProduct="showProduct"
    />
    <FooterComp />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import AdminCrud from "../components/AdminCrud.vue";
import AddProduct from "../components/AddProduct.vue";
import EditProduct from "../components/EditProduct.vue";
import FooterComp from "../components/FooterComp.vue";
import ProductModal from "../components/ProductModal.vue";

export default {
  components: {
    Header,
    FooterComp,
    AdminCrud,
    AddProduct,
    EditProduct,
    ProductModal,
  },
  data() {
    return {
      showAddProduct: false,
      showEditProduct: false,
      obj: null,
      product: null,
      showProductModal: false,
    };
  },
  methods: {
    addProduct() {
      this.showAddProduct = true;
    },
    closeAddProduct() {
      this.showAddProduct = false;
    },
    editProduct(obj) {
      this.obj = obj;
      this.showEditProduct = true;
    },
    closeEditProduct() {
      this.showEditProduct = false;
    },
    showProduct(data) {
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

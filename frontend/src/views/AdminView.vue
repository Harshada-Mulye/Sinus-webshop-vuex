<template>
  <div>
    <Header />
    <EditProduct
      v-if="showEditProduct"
      @closeEditProduct="closeEditProduct"
      :obj="obj"
    />
    <AddProduct v-if="showAddProduct" @closeAddProduct="closeAddProduct" />
    <AdminCrud @addProduct="addProduct" @editProduct="editProduct" />
    <FooterComp />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import AdminCrud from "../components/AdminCrud.vue";
import AddProduct from "../components/AddProduct.vue";
import EditProduct from "../components/EditProduct.vue";
import FooterComp from "../components/FooterComp.vue";

export default {
  components: { Header, FooterComp, AdminCrud, AddProduct, EditProduct },
  data() {
    return {
      showAddProduct: false,
      showEditProduct: false,
      obj: null,
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
  },
};
</script>

<style scoped>
</style>

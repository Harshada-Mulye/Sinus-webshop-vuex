<template>
  <div>
    <Header />

    <div v-if="this.$store.state.user.currentUser.role == 'admin'">
      <EditProduct v-if="showEditProduct" @closeEditProduct="closeEditProduct" :obj="obj"/>
      <AddProduct v-if="showAddProduct" @closeAddProduct="closeAddProduct"/>
      <AdminCrud @addProduct="addProduct" @editProduct="editProduct"/>
    </div>

    <div v-else-if="this.$store.state.user.currentUser.role == 'customer'">
      <h1><span>Hej</span> {{ name }}!</h1>
      <div class="box">
        <UserInfo />
        <OrderHistory />
      </div>
    </div>

    <FooterComp />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import UserInfo from "../components/UserInfo.vue";
import OrderHistory from "../components/OrderHistory.vue";
import FooterComp from "../components/FooterComp.vue";
import AdminCrud from "../components/AdminCrud.vue";
import AddProduct from "../components/AddProduct.vue";
import EditProduct from "../components/EditProduct.vue";


export default {
  components: { Header, UserInfo, OrderHistory, FooterComp, AdminCrud, AddProduct, EditProduct },
  data() {
    return {
      showAddProduct: false,
      showEditProduct: false,
      obj: null,
    }
  },
  methods: {
    async getUser() {
      await this.$store.dispatch("getUser");
    },
    addProduct() {
      this.showAddProduct = true
    },
    closeAddProduct() {
      this.showAddProduct = false
    },
    editProduct(obj) {
      this.obj = obj
      this.showEditProduct = true
    },
    closeEditProduct() {
      this.showEditProduct = false
    }
  },
  computed: {
    name() {
      return this.$store.state.user.currentUser.name;
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 10px 0 50px 0;
}
span {
  color: #e84b38;
}
.box {
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 72vh;
}
</style>

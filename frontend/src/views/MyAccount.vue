<template>
  <div>
    <Header />

    <div v-if="this.$store.state.user.currentUser.role == 'admin'">
      <AddProduct v-if="showAddProduct" @closeAddProduct="closeAddProduct"/>
      <AdminCrud @addProduct="addProduct"/>
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


export default {
  components: { Header, UserInfo, OrderHistory, FooterComp, AdminCrud, AddProduct },
  data() {
    return {
      showAddProduct: false
    }
  },
  methods: {
    getUser() {
      this.$store.dispatch("getUser");
    },
    addProduct() {
      this.showAddProduct = true
    },
    closeAddProduct() {
      this.showAddProduct = false
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
}
</style>

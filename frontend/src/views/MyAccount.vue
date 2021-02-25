<template>
  <div class="container">
    <Header />
    <h1><span>Hello</span> {{ name }}!</h1>
    <div class="box">
      <UserInfo />
      <OrderHistory />
    </div>
    <FooterComp />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import UserInfo from "../components/UserInfo.vue";
import OrderHistory from "../components/OrderHistory.vue";
import FooterComp from "../components/FooterComp.vue";

export default {
  components: { Header, UserInfo, OrderHistory, FooterComp },
  methods: {
    getUser() {
      this.$store.dispatch("getUser");
    },
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
  margin-bottom: 50px;
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

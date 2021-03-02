<template>
  <div>
    <Header />
    <div>
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

export default {
  components: { Header, UserInfo, OrderHistory, FooterComp },
  methods: {
    async getUser() {
      await this.$store.dispatch("getUser");
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

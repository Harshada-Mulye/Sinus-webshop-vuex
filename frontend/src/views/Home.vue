<template>
  <div>
    <Header />
    <main>
      <ShopButton />
    </main>
    <FooterComp />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import ShopButton from "../components/ShopButton.vue";
import FooterComp from "../components/FooterComp.vue";

export default {
  components: { Header, ShopButton, FooterComp },
};
</script>

<style>
main {
  background: url("../assets/background-img.jpg") center center no-repeat;
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100% 100% ;
}
</style>

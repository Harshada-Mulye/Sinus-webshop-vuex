<template>
  <div>
    <Header />
    <main>
      <ShopButton />
    </main>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import ShopButton from "../components/ShopButton.vue";

export default {
  components: { Header, ShopButton },
};
</script>

<style>
main {
  background: url("../assets/background-img.svg") center center no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
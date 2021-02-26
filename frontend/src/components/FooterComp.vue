<template>
  <div class="container">
    <div>
      <h2>Faq</h2>
      <h2>Villkor</h2>
      <h2>Kontakt</h2>
    </div>

    <SocialMedia />

    <img src="../assets/icons/klarna.jpg" alt="klarna" />
  </div>
</template>

<script scoped>
import SocialMedia from "../components/SocialMedia.vue";

export default {
  components: { SocialMedia },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 76px;
  box-sizing: border-box;
}
h2 {
  display: inline;
  margin-right: 30px;
  color: black;
}
h2:hover {
  cursor: pointer;
}
.socialMedia-img {
  margin-right: 15px;
}
.social-media:hover {
  cursor: pointer;
}
img {
  width: 250px;
}
</style>
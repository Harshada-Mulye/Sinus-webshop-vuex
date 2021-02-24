<template>
  <div class="container">
    <div>
      <h2>Faq</h2>
      <h2>Villkor</h2>
      <h2>Kontakt</h2>
    </div>
    <div class="social-media">
      <img
        class="socialMedia-img"
        src="../assets/Facebook.png"
        alt="Facebook icon"
      />
      <img
        class="socialMedia-img"
        src="../assets/Instagram.png"
        alt="Instagram icon"
      />
      <img
        class="socialMedia-img"
        src="../assets/Twitter.png"
        alt="Twitter icon"
      />
    </div>
    <img src="../assets/klarna-img.svg" alt="klarna" />
  </div>
</template>

<script scoped>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 10px 20px;
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
</style>
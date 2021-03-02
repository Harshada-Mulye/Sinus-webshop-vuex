<template>
  <div>
    <button @click="goToShop">Handla</button>
  </div>
</template>

<script>
export default {
    methods: {
        goToShop() {
            this.$router.push('/products')
        }
    }
};
</script>

<style scoped>
button {
  width: 280px;
  padding: 20px;
  border-radius: 10px;
  border: 3px solid white;
  background: #e84b38;
  font-size: 28px;
  color: white;
  font-family: "Electrolize", sans-serif;
  transition: all 0.3s;
  outline: none;
}
button:hover {
    cursor: pointer;
    transform:scale(1.2,1.2);
}
</style>
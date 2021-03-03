<template>
  <div class="container">
    <div class="modal">
      <div class="left-container">
        <div class="top">
          <div class="star-container">
            <img class="star" src="../assets/items/star.svg" alt="star" />
            <img class="star" src="../assets/items/star.svg" alt="star" />
            <img class="star" src="../assets/items/star.svg" alt="star" />
          </div>
          <h1 class="price">{{ product.price }}kr</h1>
        </div>
        <div class="img-container">
          <img
            class="product-img"
            :src="require('@/assets/items/' + product.imgFile)"
          />
        </div>
        <div class="bottom">
          <img class="dots" src="@/assets/icons/dots.svg" />
        </div>
      </div>
      <div class="right-container">
        <div class="top-right">
          <h1 class="title">{{ product.title }}</h1>
          <img class="close" src="@/assets/icons/close.svg" @click="close" />
        </div>
        <p>{{ product.longDesc }}</p>
        <div class="size-container">
          <img src="@/assets/icons/sizes.svg" class="sizes" />
        </div>
        <button @click="addToCart">Lägg till i varukorg</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    close() {
      this.$emit("closeModal");
    },
    addToCart() {
      const product = {
        product: this.product,
        quantity: 1,
      };
      this.$store.dispatch("addToCart", product);
      this.$emit("closeModal");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140%;
  width: 100%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
}
.modal {
  width: 40%;
  background: rgba(0, 0, 0, 0.8);
  padding: 17px;
  border-radius: 10px;
  color: #e84b38;
  font-family: "Electrolize", sans-serif;
  display: flex;
}
.left-container {
  border: 2px solid #e84b38;
  border-radius: 10px;
  width: 45%;
  background: #eee;
  padding: 5px 5px 0 3px;
  box-sizing: border-box;
}
.top {
  display: flex;
  justify-content: space-between;
}
.star-container {
  display: flex;
  flex-direction: column;
}
.star {
  width: 40px;
}
.img-container {
  position: sticky;
  margin-top: -70px;
}
.product-img {
  width: 260px;
}
.bottom {
  position: sticky;
  margin-top: -30px;
}
.dots {
  width: 90px;
}
.right-container {
  width: 55%;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.top-right {
  display: flex;
  justify-content: center;
  width: 100%;
}
.title {
  font-size: 44px;
  width: 100%;
  margin-left: 24px;
}
.close {
  width: 30px;
  align-self: flex-start;
  margin-top: -10px;
}
.close:hover {
  cursor: pointer;
}
p {
  color: white;
  font-family: "Roboto", sans-serif;
  text-align: left;
  margin-left: 8px;
}
.size-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-left: 20px;
}
.sizes {
  width: 150px;
}
button {
  width: 250px;
  padding: 17px;
  border-radius: 10px;
  border: 2px solid white;
  background: #e84b38;
  color: white;
  font-family: "Roboto", sans-serif;
  transition: all 0.3s;
  outline: none;
  font-size: 18px;
}
button:hover {
  cursor: pointer;
  transform: scale(1.1, 1.1);
}
</style>
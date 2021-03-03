<template>
  <div class="container">
    <div class="hero-left">
      <img class="hero" src="@/assets/items/hero-left.png" />
    </div>
    <div class="products">
      <div class="product" v-for="(product, index) in products" :key="index">
        <h1 class="title">{{ product.title }}</h1>
        <div class="img-container" @click="showModal(product)">
          <div class="top">
            <h2 class="price">{{ product.price }}kr</h2>
          </div>
          <div class="middle">
            <img
              class="product-img"
              :src="require('@/assets/items/' + product.imgFile)"
            />
          </div>
          <div class="bottom">
            <img class="rating" src="@/assets/icons/rating.svg" />
          </div>
        </div>
        <div class="product-size">
          <button>XS</button>
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
        </div>
        <button class="addToCart" @click="addToCart(product)">
          Lägg till i varukorgen
        </button>
      </div>
    </div>
    <div class="hero-right">
      <img class="hero" src="@/assets/items/hero-right.png" />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    return this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("addToCart", { product, quantity: 1 });
    },
    showModal(product) {
      this.$emit("showModal", product);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 60px;
}
.hero {
  width: 95%;
}
.products {
  display: grid;
  grid-template-columns: repeat(3, 23%);
  justify-content: center;
  column-gap: 14%;
  row-gap: 80px;
  width: 50%;
}
.title {
  font-size: 1.4rem;
  color: black;
  margin-bottom: 0.2em;
}
.img-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px solid #e84b38;
  border-radius: 10px;
  box-sizing: border-box;
  min-height: 35vh;
  padding: 0 0.8em 0 0.8em;
  background: #f7f7f7;
}
.img-container:hover {
  cursor: pointer;
}
.top {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.price {
  color: #e84b38;
  align-self: flex-start;
  font-size: 1.2rem;
}
.middle {
  width: 100%;
}
.product-img {
  width: 100%;
}
.bottom {
  width: 100%;
}
.rating {
  width: 4.5em;
}
.product-size {
  display: flex;
  justify-content: space-around;
  margin: 0.5em 0 0.5em 0;
  width: 100%;
}
.product-size button {
  width: 17%;
  height: 2.5em;
  border: 2px solid #e84b38;
  font-weight: bold;
  border-radius: 8px;
  background: #f7f7f7;
  outline: none;
  font-size: 0.7rem;
}
.product-size button:hover {
  cursor: pointer;
}
.addToCart {
  width: 100%;
  height: 2.5em;
  border: 2px solid #e84b38;
  font-weight: bold;
  border-radius: 8px;
  background: #f7f7f7;
  font-size: 0.8rem;
  outline: none;
}
.addToCart:hover {
  cursor: pointer;
}
</style>
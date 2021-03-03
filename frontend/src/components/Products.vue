<template>
  <div class="container">
    <div class="hero-left">
      <img src="@/assets/items/hero-left.png" />
    </div>
    <div class="products">
      <div class="product" v-for="(product, index) in products" :key="index">
        <h1>{{ product.title }}</h1>
        <div class="img-container">
          <div class="top">
            <h2 class="price">{{ product.price }}kr</h2>
          </div>
          <img
            class="product-img"
            :src="require('@/assets/items/' + product.imgFile)"
          />
          <img class="rating" src="@/assets/icons/rating.svg" />
        </div>
        <div class="product-size">
          <button>XS</button>
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
        </div>
        <button @click="addToCart(product)">Lägg till i varukorgen</button>
      </div>
    </div>
    <div class="hero-right">
      <img src="@/assets/items/hero-right.png" />
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
.products {
  display: grid;
  grid-template-columns: repeat(3, 250px);
  justify-content: center;
  gap: 80px;
  width: 50%;
}
.img-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px solid #e84b38;
  border-radius: 10px;
  min-height: 350px;
  box-sizing: border-box;
}
.top {
    display: flex;
    justify-content: flex-end;
    padding: 0 15px 0 0;
    width: 100%;
}
.price {
  color: #e84b38;
  align-self: flex-start;
}
.product-img {
  width: 250px;
  margin-top: -50px;
}
.rating {
  width: 80px;
}
</style>
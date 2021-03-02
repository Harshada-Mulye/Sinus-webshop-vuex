<template>
  <section class="cart-container">
    <section>
      <section class="cart-top">
        <h2>Handla för över 500kr - få fri frakt</h2>
        <p>Gäller endast nya kunder</p>
      </section>
      <h3>Varukorg ({{ cartItemCount }})</h3>
      <article class="cart-products">
        <h4>Vara</h4>
        <h4>Storlek</h4>
        <h4>Antal</h4>
        <h4>Summa</h4>
      </article>
      <hr />
      <section class="cart-productdetails">
        <div v-for="item in cart" :key="item.id" class="itemdetails">
          <img :src="require('@/assets/items/' + item.product.imgFile)" />

          <h4>Onesize</h4>
          <h4>{{ item.quantity }}</h4>
          <h4>{{ item.quantity * item.product.price }}</h4>
        </div>
      </section>
    </section>
    <section class="cart-bottom">
      <hr />
      <span>Totalt: {{ cartTotalPrice }}kr</span>
    </section>
  </section>
</template>

<script>
export default {
  computed: {
    cart() {
      console.log(this.$store.state.user.cart);
      return this.$store.state.user.cart;
    },

    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
  },
};
</script>

<style scoped>
.cart-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 95%;
  min-height: 78vh;
  /* border: pink solid 1px; */
  /* Radera inte dolda borden ovan förrän vi är helt klara */
}

.cart-top {
  background-color: #f7f7f7;
  border: #e84b38 solid 2px;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
}

h2 h3 {
  font-family: sans-serif;
  font-size: 1.3rem;
  color: black;
}

.cart-top > h2 {
  color: #e84b38;
  text-transform: uppercase;
  text-align: left;
}

p {
  text-align: left;
  font-size: 0.7rem;
  color: #636262;
}

h3 {
  text-align: left;
}

.cart-products {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  /* border: red solid 1px; */
  /* Radera inte dolda borden ovan förrän vi är helt klara  */
}
h4 {
  width: 100%;
  padding: 10px 0;
}
hr {
  background-color: black;
  width: 100%;
}
span {
  width: 100%;
  padding: 5px;
  font-size: 0.7rem;
}

.cart-bottom {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;
  align-self: flex-end;
  /* border: blue solid 1px; */
  /* Radera inte dolda borden ovan förrän vi är helt klara  */
}

.cart-bottom > span {
  display: flex;
  justify-content: flex-end;
  padding: 0;
  font-size: 0.9rem;
  font-weight: bold;
}
.cart-productdetails {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.itemdetails {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
img {
  width: 120px;
  height: 100px;
  padding-bottom: 30px;
}
</style>
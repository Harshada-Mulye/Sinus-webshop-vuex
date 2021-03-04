<template>
  <section class="cart-wrapper">
    <section class="cart-container">
      <section v-for="item in cart" :key="item.id" class="item">
        <h1>{{ item.product.title }}</h1>

        <section class="remove">
          <img
            src="@/assets/icons/trash-can.svg"
            alt="close"
            @click.prevent="removeProductFromCart(item.product)"
          />
        </section>
        <span> {{ item.product.price * item.quantity }}</span>
           <section class="quantity">
          <span @click="decrement(item)">-</span><span>{{ item.quantity }}</span>
          <span @click="increment(item)">+</span>
        </section>
        <hr />
      </section>
    </section>
    <div>
      <p>Summa: {{ cartTotalPrice }}kr</p>
      <button v-on:click="checkOut">Checkout</button>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.user.cart;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  methods: {
    removeProductFromCart(product) {
      event.stopPropagation();
      this.$store.dispatch("removeProductFromCart", product);
    },
    checkOut() {
      this.$router.push({ name: "Checkout" });
    },
    decrement(item) {
      event.stopPropagation();
      this.$store.dispatch("decrementQuantity", item);
    },
    increment(item) {
      event.stopPropagation();
      this.$store.dispatch("incrementQuantity", item);
    },
  },
};
</script>

<style scoped>
.cart-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 40vh;
  margin: 10px;
}
.cart-container {
  display: flex;
  text-align: left;
  flex-direction: column;
}

.item {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  align-items: center;
}

img {
  width: 27%;
  grid-column: 4;
  display: flex;
  justify-content: flex-start;
}

.remove {
  display: flex;
  justify-content: flex-end;
}
.quantity {
  grid-column: 4;
  display: flex;
  justify-content: space-between;
}

.quantity > span:nth-child(2) {
  font-weight: bold;
}

section > span {
  grid-column: 1 / span 3;
}

hr {
  grid-column: 1 / span 4;
}

h1 {
  font-family: sans-serif;
  font-size: 0.9rem;
  grid-column: 1 / span 3;
}

button {
  padding: 0;
  border-radius: 5px;
  border: #e84b38 solid 1px;
  font-weight: bold;
  font-family: sans-serif;
  background-color: #f7f7f7;
  height: 25px;
  font-size: 0.6rem;
  width: 150px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  outline: none;
  margin: 20px auto 5px auto;
}

button:active,
button:hover {
  background-color: #e84b38;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
}
</style>

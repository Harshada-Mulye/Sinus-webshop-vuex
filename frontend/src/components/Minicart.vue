<template>
  <!--
    <div v-for="item in cart" :key="item.id" class="item">
      <h1>{{item.title}}</h1>
       <div>
          <a href="#" @click.prevent="">Remove</a>
        </div>
        <span> 1* {{ item.price }}</span>
      <hr />
      </div>
    <div>
      <hr />
      <p>Sum:799</p>
  <a href="#" @click.prevent="">Clear Cart</a>
      <button>Checkout</button>
      {{item.price}} 

    </div>
    </section>-->
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
        <!-- <div> -->
        <span> {{ item.quantity }}* {{ item.product.price }}</span>

        <section class="quantity">
          <span @click="decrement(item)">-</span><span>1</span
          ><span @click="increment(item)">+</span>
        </section>

        <!-- </div> -->
        <hr />
      </section>
    </section>
    <div>
      <!-- <hr /> -->
      <p>Summa:{{ cartTotalPrice }}</p>
      <!-- <a href="#" @click.prevent="">Clear Cart</a> -->
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
      this.$store.dispatch("removeProductFromCart", product);
    },
    checkOut() {
      this.$router.push({ name: "Checkout" });
    },
    decrement(item) {
      console.log("decrement");
      this.$store.dispatch("decrementQuantity", item);
      console.log(this.$store.state.user.cart);
    },
    increment(item) {
      console.log("increment");
      this.$store.dispatch("incrementQuantity", item);
      console.log(this.$store.state.user.cart);
    },
  },
};
</script>

<style scoped>
.cart-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
  min-width: 200px;
  margin: 10px;
  /* border: blue solid 2px; */
  /* Radera inte dolda borden ovan förrän vi är helt klara */
}
.cart-container {
  display: flex;
  text-align: left;
  flex-direction: column;
  /* border: red solid 2px; */
  /* Radera inte dolda borden ovan förrän vi är helt klara */
}

.item {
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  /* border: yellow solid 2px; */
  align-items: center;
  /* background-color: red; */
  /* grid-gap: 10px; */
  /* Radera inte dolda borden ovan förrän vi är helt klara */
}

/* a {
  text-align: right;
} */

img {
  width: 10px;
  grid-column: 4;
  /* background-color: lime; */
  display: flex;
  justify-content: flex-start;
}

.remove {
  display: flex;
  justify-content: flex-end;
}
.quantity {
  grid-column: 4;
  /* background-color: lime; */
  display: flex;
  justify-content: space-between;
}

.quantity > span:nth-child(2) {
  font-weight: bold;
}

/* div > img {
  background-color: lime;
  display: flex;
  align-self: flex-end;
} */
section > span {
  grid-column: 1 / span 3;
  /* background-color: lime; */
}

hr {
  grid-column: 1 / span 4;
}

h1 {
  font-family: sans-serif;
  font-size: 0.9rem;
  grid-column: 1 / span 3;
  /* background-color: lime; */
}
/* span {
  text-align: left;
} */
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
}

/* div > hr {
  margin-top: 40px;
} */
</style>

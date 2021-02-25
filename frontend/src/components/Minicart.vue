<template>
  <section class="cart-wrapper">
    <section class="cart-container">
      <div v-for="item in cart" :key="item.id" class="item">
        <h1>{{item.title}}</h1>
        <div>
          <a href="#" @click.prevent="">Remove</a>
        </div>
      </div>

      <span>1 * 799</span>
      <hr />
    </section>
    <div>
      <hr />
      <p>Sum:799</p>
      <!-- <a href="#" @click.prevent="">Clear Cart</a> -->
      <button>Checkout</button>
    </div>
  </section>
</template>

<script>
export default {
    computed:{
    cart(){
            return this.$store.state.orders;
        }
    }
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
  display: flex;
  justify-content: space-between;
  /* border: yellow solid 2px; */
  /* Radera inte dolda borden ovan förrän vi är helt klara */
}

h1 {
  font-family: sans-serif;
  font-size: 0.9rem;
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
</style>
<template>
  <section class="checkout">
    <h2>Kassa</h2>
    <form @submit.prevent="payment">
      <input type="text" placeholder="Namn" required v-model="name" />
      <input type="email" placeholder="E-post" required v-model="email" />
      <input type="text" placeholder="Adress" required v-model="address" />
      <section class="input-double">
        <input type="text" placeholder="Postnummer" required v-model="zip" />
        <input type="text" placeholder="Ort" required v-model="city" />
      </section>
      <h3>Välj betalsätt</h3>
      <section class="input-radio">
        <input name="radio" type="radio" checked="checked" />
        <span>Klarna</span>
        <p>Säkert och smidigt</p>
      </section>
      <hr />
      <section class="input-radio">
        <input name="radio" type="radio" checked="checked" />
        <span>Betala med kort</span>
        <p>Fyll i uppgifter</p>
      </section>
      <button>betala</button>
    </form>
  </section>
</template>

<script>
export default {
  props: ["getUser"],
  data() {
    return {
      name: this.getUser.name,
      email: this.getUser.email,
      address: this.getUser.address.street,
      zip: this.getUser.address.zip,
      city: this.getUser.address.city,
    };
  },
  methods: {
    payment() {
      const cart = {
        items: [],
      };
      this.$store.state.user.cart.forEach((product) => {
        for (let i = 0; i < product.quantity; i++) {
          cart.items.push(product.product._id);
        }
      });
      if (cart.items.length > 0) {
        this.$store.dispatch("postOrders", cart);
        this.$store.dispatch("emptyCart");
        alert("Order mottagen");
      } else alert("Din varukorg är tom.");
    },
  },
};
</script>

<style scoped>
.checkout {
  border: #e84b38 solid 1px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  display: flex;
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-top: 20px;
}

.input-double {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.input-double > input {
  width: 45%;
}

input {
  border: #e84b38 solid 1px;
  border-radius: 10px;
  padding: 10px 0 10px 10px;
  background-color: #f7f7f7;
}

input:focus {
  border: #e84b38 solid 2px;
  outline: none;
}

.input-radio {
  text-align: left;
  font-weight: bold;
  font-family: sans-serif;
}

.input-radio > span {
  font-size: 0.8rem;
}

hr {
  background-color: #e84b38;
  border: #e84b38 solid 1px;
}
h3 {
  text-align: left;
}
p {
  text-align: left;
  font-size: 0.7rem;
  color: #636262;
  font-weight: normal;
}

span {
  width: 100%;
  padding: 5px;
  font-size: 0.7rem;
}

button {
  padding: 20px 60px;
  border-radius: 5px;
  border: #e84b38 solid 1px;
  font-weight: bold;
  font-family: sans-serif;
  background-color: #e84b38;
  height: 25px;
  color: white;
  font-size: 1, 3rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  outline: none;
  align-self: center;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
}

button:active,
button:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
}
</style>
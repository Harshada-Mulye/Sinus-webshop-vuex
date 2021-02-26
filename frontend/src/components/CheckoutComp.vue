<template>
  <section class="checkout-wrapper">
    <section class="checkout-container">
      <section class="cart-container">
        <section>
          <section class="cart-top">
            <h2>Handla för över 500kr - få fri frakt</h2>
            <p>Gäller endast nya kunder</p>
          </section>
          <h3>Varukorg (1)</h3>
          <article class="cart-products">
            <h4>Vara</h4>
            <h4>Storlek</h4>
            <h4>Antal</h4>
            <h4>Summa</h4>
          </article>
          <hr />
          <section class="cart-products">
            <span>BILD</span>
            <span>Onesize</span>
            <span>1</span>
            <span>600kr</span>
          </section>
        </section>
        <section class="cart-bottom">
          <hr />
          <span>Totalt: 500kr</span>
        </section>
      </section>
    </section>
    <section class="checkout-container right">
      <section class="checkout">
        <h2>Kassa</h2>
        <section class="input-double">
          <input name="firstname" placeholder="Förnamn" required />
          <input name="surname" placeholder="Efternamn" required />
        </section>
        <input name="email" placeholder="E-post" required />
        <input name="address" placeholder="Adress" required />
        <section class="input-double">
          <input name="zipcode" placeholder="Postnummer" required />
          <input name="city" placeholder="Ort" required />
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
      </section>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.checkout-wrapper {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  /* border: red solid 1px; */
  /* Radera inte dolda borden ovan förrän vi är helt klara */
}

.checkout-container {
  display: flex;
  width: 55%;
  padding: 20px;
  /* border: green solid 1px; */
  /* Radera inte dolda borden ovan förrän vi är helt klara */
}

.right {
  width: 30%;
  padding-left: 0;
}

.cart-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 95%;
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
  font-size: 0.5rem;
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

.checkout {
  border: #e84b38 solid 1px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content: space-between;
  flex-direction: column;
  display: flex;
  width: 95%;
  padding: 20px;
}

.input-double {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border: #e84b38 solid 1px; */
  /* Radera inte dolda borden ovan förrän vi är helt klara  */
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

.checkout > hr {
  background-color: #e84b38;
  border: #e84b38 solid 1px;
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
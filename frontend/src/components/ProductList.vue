<template>
  <section class="wrapper">
    <section class="products-wrapper">
      <section class="hero-container">
        <article class="hero-product">
           <article v-for="(product,index) in products" :key="index" class="product">
          <h2 v-if="index==2" class="hero-heading">{{product.title}}</h2>
           </article>
          <img src="../assets/items/skateboard-greta.png" alt="skateboard" />
        </article>
        <img class="sale-img" src="../assets/items/left-sale.svg" alt="sale" />
      </section>
      <section class="products-container">
        <article v-for="product in products" :key="product.id" class="product">
          <h2>{{ product.title }}</h2>
          <section class="product-item">
            <p>{{ product.price }}:-</p>
            <img
              v-if="
                product.title === 'Hoodie' &&
                product.shortDesc === 'Fire unisex'
              "
              src="../assets/items/hoodie-fire.png"
              alt="hoodie"
            />
            <img
              v-if="
                product.title === 'Hoodie' && product.shortDesc === 'Ash unisex'
              "
              src="../assets/items/hoodie-ash.png"
              alt="hoodie"
            />
            <img
              v-if="
                product.title === 'Hoodie' &&
                product.shortDesc === 'Ocean unisex'
              "
              src="../assets/items/hoodie-ocean.png"
              alt="hoodie"
            />
            <img
              v-if="product.title === 'Gretas Fury'"
              src="../assets/items/skateboard-greta.png"
              alt="hoodie"
            />
            <img
              v-if="product.title === 'Flipper'"
              src="../assets/items/skateboard-generic.png"
              alt="hoodie"
            />
            <img
              v-if="product.title === 'Awesome'"
              src="../assets/items/skateboard-generic.png"
              alt="hoodie"
            />
            <img
              v-if="product.title === 'Swag'"
              src="../assets/items/skateboard-generic.png"
              alt="hoodie"
            />
            <img
              v-if="product.title === 'Tricky'"
              src="../assets/items/skateboard-generic.png"
              alt="hoodie"
            />
            <img
              v-if="product.title === 'Hiphop'"
              src="../assets/items/skateboard-generic.png"
              alt="hoodie"
            />
            <img
              v-if="product.title === 'Rocket'"
              src="../assets/items/wheel-rocket.png"
              alt="hoodie"
            />
            <img
              v-if="product.title === 'Spinner'"
              src="../assets/items/wheel-spinner.png"
              alt="hoodie"
            />
            <img
              v-if="product.title === 'Wave'"
              src="../assets/items/wheel-wave.png"
              alt="hoodie"
            />
            <div>
              <img src="../assets/items/star.svg" alt="star" />
              <img src="../assets/items/star.svg" alt="star" />
              <img src="../assets/items/star.svg" alt="star" />
              <img src="../assets/items/star.svg" alt="star" />
              <img src="../assets/items/star.svg" alt="star" />
            </div>
          </section>
          <div class="product-size">
            <button>XS</button>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
          </div>
          <button @click="addToCart(product)">Lägg till i varukorgen</button>
        </article>
      </section>
      <section class="hero-container right">
        <img
          class="right-sale-img"
          src="../assets/items/right-sale.svg"
          alt="sale"
        />
        <article class="hero-product">
          <h2 class="hero-heading">Gretas Fury</h2>
          <img src="../assets/items/skateboard-greta.png" alt="skateboard" />
        </article>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  data(){
    return{
    id:Math.ceil(Math.random() * 100),
    date:Date.now(),
    status:"In Progress"
    }
  },
  created() {
    return this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods:{

    addToCart(product)
    {
    
      const order={
        id:this.id,
        date:this.date,
        status:this.status
      }
       
      
       this.$store.dispatch("postOrders",{order,product})
   
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  /* border: green solid 2px; */
  /* Radera inte dolda borden ovan förrän vi är helt klara */
}

.products-wrapper {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  width: 95%;
  /* border: black solid 2px; */
  /* Radera inte dolda borden ovan förrän vi är helt klara */
}

.products-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
}

.hero-container {
  display: flex;
}

.right {
  justify-content: flex-end;
}

.hero-product {
  height: 22%;
  border: #e84b38 solid 1px;
  background-color: #f7f7f7;
  border-radius: 10px;
}

.sale-img {
  align-self: flex-start;
  width: 50px;
  margin-left: -5px;
}

.right-sale-img {
  align-self: flex-start;
  width: 43px;
  padding-top: 5px;
  margin-right: -2px;
}

.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* border: red solid 2px; */
  /* Radera inte dolda borden ovan förrän vi är helt klara */
}

h2 {
  font-family: sans-serif;
  font-size: 1.3rem;
  padding-top: 40px;
}

.hero-heading {
  padding: 0;
}

.product-item {
  display: flex;
  flex-direction: column;
  border: #e84b38 solid 1px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

p {
  margin: 0;
  align-self: flex-end;
  padding: 0 5px 10px 0;
  color: #e84b38;
  font-weight: bold;
  font-size: 1rem;
}

img {
  width: 150px;
  padding-bottom: 30px;
}

div {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
div > img {
  width: 20px;
  padding: 0 0 5px 0;
}

.product-size {
  justify-content: space-around;
  width: 150px;
  margin: 5px;
  /* border: blue solid 2px; */
  /* Radera inte dolda borden ovan förrän vi är helt klara */
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
}

div > button {
  width: 25px;
}

button:active,
button:hover {
  background-color: #e84b38;
  color: white;
}
</style>
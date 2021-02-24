<template>
<div>
  <div v-for ="product in products" :key="product.id">
      
        {{product.title}}
        {{product.price}}
      <img v-if="product.title === 'Hoodie'&&product.shortDesc==='Fire unisex'" src="../assets/items/hoodie-fire.png" alt="hoodie">
       <img v-if="product.title === 'Hoodie'&&product.shortDesc==='Ash unisex'" src="../assets/items/hoodie-ash.png" alt="hoodie">
        <img v-if="product.title === 'Hoodie'&&product.shortDesc==='Ocean unisex'" src="../assets/items/hoodie-ocean.png" alt="hoodie">
   <img v-if="product.title === 'Gretas Fury'" src="../assets/items/skateboard-greta.png" alt="hoodie">
   <img v-if="product.title === 'Flipper'" src="../assets/items/skateboard-generic.png" alt="hoodie">
   <img v-if="product.title === 'Awesome'" src="../assets/items/skateboard-generic.png" alt="hoodie">
   <img v-if="product.title === 'Swag'" src="../assets/items/skateboard-generic.png" alt="hoodie">
   <img v-if="product.title === 'Tricky'" src="../assets/items/skateboard-generic.png" alt="hoodie">
   <img v-if="product.title === 'Hiphop'" src="../assets/items/skateboard-generic.png" alt="hoodie">
    <img v-if="product.title === 'Rocket'" src="../assets/items/wheel-rocket.png" alt="hoodie">
     <img v-if="product.title === 'Spinner'" src="../assets/items/wheel-spinner.png" alt="hoodie">
     <img v-if="product.title === 'Wave'" src="../assets/items/wheel-wave.png" alt="hoodie">
        <button>Add to cart</button>
      </div>
      </div>
</template>

<script>
export default {
created() {
    return this.$store.dispatch("getProducts")
  },
  computed:{
    products()
    {
     return this.$store.state.products
    }
}
}
</script>

<style>

</style>
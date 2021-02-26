<template>
  <div class="container">
    <h2>Din orderhisorik</h2>

    <div class="orders" v-for="(order, index) in orders" :key="index">
      <div class="order-info">
        <h3>Order {{ index + 1 }}:</h3>
        <p class="date">
          {{ new Date(order.timeStamp).toLocaleDateString("sv") }}
        </p>
      </div>

      <div class="items-container">
        <div class="items" v-for="(item, index) in order.items" :key="index">
          <div class="title">
            <h4>{{ item.title }}</h4>
          </div>

          <div>
            <img
              :src="require('@/assets/items/' + item.imgFile)"
              alt="item-img"
            />
          </div>

          <div class="items-info">
            <p class="info"><span>Pris:</span> {{ item.price }}kr</p>
            <p class="info"><span>Antal:</span> {{ item.amount }}st</p>
          </div>
        </div>
      </div>
      <p>status: {{ order.status }}</p>
      <p class="total-value">total order value: {{ order.orderValue }}</p>
    </div>
    <button @click="createOrder">Create Order</button>
  </div>
</template>

<script>
export default {
  methods: {
    createOrder() {
      const obj = {
        items: ["1VyDyN3t3bUvBQOk", "Hf8vbUXtlsABrFMR"],
      };
      this.$store.dispatch("postOrders", obj);
    },
  },
  created() {
    this.$store.dispatch("getOrders");
  },
  computed: {
    orders() {
      return this.$store.state.user.orders;
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 30px;
  text-align: left;
}
.container {
  margin-left: 50px;
}
.order-info {
  display: flex;
  justify-content: space-between;
}
h3 {
  margin-bottom: 10px;
}
.date {
  font-weight: bold;
}
.items-container {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #c0c0c0;
  margin-bottom: 15px;
  margin-right: 50px;
  padding-bottom: 10px;
  width: 100%;
}
.items {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  align-items: left;
}
img {
  width: 150px;
}
h4 {
  font-size: 18px;
}
.items-info {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
.info {
  width: 50%;
}
.price-amount {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
span {
  font-weight: bold;
}
.total-value {
  margin-bottom: 30px;
}
</style>

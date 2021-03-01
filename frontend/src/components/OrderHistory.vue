<template>
  <div class="container">
    <h2>Din orderhisorik</h2>

    <div class="orders" v-for="(order, index) in orders" :key="index">
      <div class="top">
        <h3>
          Order {{ index + 1 }}: <span class="status">{{ order.status }}</span>
        </h3>
        <p class="date">
          {{ new Date(order.timeStamp).toLocaleDateString("sv") }}
        </p>
      </div>

      <div class="items-container">
        <div class="items" v-for="(item, index) in order.items" :key="index">
          <h4>{{ item.title }}</h4>

          <img :src="require('@/assets/items/' + item.imgFile)" />

          <div class="info-container">
            <p><span>Pris:</span> {{ item.price }}kr</p>
            <p><span>Antal:</span> {{ item.amount }}st</p>
          </div>
        </div>
      </div>
      <p class="total-price">
        <span>Total summa:</span> {{ order.orderValue }}kr
      </p>
    </div>
  </div>
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch("getOrders");
  },
  computed: {
    orders() {
      return this.$store.state.user.orders;
    },
  },
};
</script>

<style scoped>
.container {
  margin-left: 50px;
}
h2 {
  margin-bottom: 20px;
  text-align: left;
}
.top {
  display: flex;
  justify-content: space-between;
}
h3 {
  margin-bottom: 15px;
}
.status {
  text-transform: lowercase;
  font-size: 14px;
}
.date {
  font-weight: bold;
  font-size: 13px;
  color: #e84b38;
}
.items-container {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #c0c0c0;
  padding-bottom: 10px;
  margin-bottom: 5px;
}
.items {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  align-items: left;
  margin-right: 50px;
}
h4 {
  font-size: 18px;
  margin-bottom: -13px;
}
img {
  width: 135px;
  margin-bottom: 10px;
}

.info-container {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
span {
  color: black;
  font-weight: bold;
}
.total-price {
  margin-bottom: 30px;
}
</style>

<template>
  <div class="container">
    <h2 v-if="this.$store.state.user.currentUser.role == 'customer'">
      Din orderhisorik
    </h2>
    <h2 v-else-if="this.$store.state.user.currentUser.role == 'admin'">
      Ordrar
    </h2>

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
          <div>
            <h4>{{ item.title }}</h4>
          </div>

          <img :src="require('@/assets/items/' + item.imgFile)" />

          <div class="info-container">
            <p class="pris"><span>Pris:</span> {{ item.price }}kr</p>
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
  margin-bottom: 15px;
}
.status {
  text-transform: lowercase;
  font-size: 14px;
  color: #e84b38;
}
.date {
  font-weight: bold;
  font-size: 13px;
  color: #e84b38;
}
.items-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  border-bottom: 2px solid #c0c0c0;
}
.items {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 150px;
}
h4 {
  font-size: 18px;
  height: 20px;
}
img {
  width: 100px;
  margin-bottom: 10px;
}

.info-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 13px;
  margin-bottom: 5px;
}
span {
  color: black;
  font-weight: bold;
}
.total-price {
  margin-top: 5px;
  margin-bottom: 40px;
}
</style>

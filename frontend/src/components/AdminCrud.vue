<template>
  <div class="container">
    <div class="header">
      <h1><span>Admin</span> view</h1>
      <button class="add" @click="addProduct">Add Product</button>
    </div>
    <table>
      <tr>
        <th>Image</th>
        <th>Kategori</th>
        <th>Namn</th>
        <th>Pris</th>
        <th>Action</th>
      </tr>
      <tr v-for="(product, index) in products" :key="index">
        <td><img :src="require('@/assets/items/' + product.imgFile)" /></td>
        <td>{{ product.category }}</td>
        <td>{{ product.title }}</td>
        <td>{{ product.price }}</td>
        <td>
          <button class="show" @click="showProduct(product._id)">Show</button>
          <button class="edit" @click="editProduct(product._id)">Edit</button>
          <button class="delete" @click="deleteProduct(product._id)">
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    addProduct() {
      this.$emit("addProduct");
    },
    showProduct(id) {
      console.log(id);
    },
    editProduct(id) {
      console.log(id);
    },
    async deleteProduct(id) {
      await this.$store.dispatch("deleteProduct", id);
    },
  },
  async created() {
    await this.$store.dispatch("getProducts");
  },
  async updated() {
    await this.$store.dispatch("getProducts");
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.header {
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
h1 {
  margin-left: 5px;
}
span {
  color: #e84b38;
}
table {
  border-collapse: collapse;
  background: #eee;
  width: 60%;
  margin: 5px 0 50px 0;
}
th,
td {
  border: 2px solid #c0c0c0;
  padding: 10px;
  box-sizing: border-box;
}
td {
  padding: 0;
}
img {
  width: 60px;
}
button {
  font-weight: bold;
  padding: 8px;
  margin-right: 5px;
  color: white;
  border: none;
  border-radius: 5px;
  width: 60px;
}
button:hover {
  cursor: pointer;
}
.show {
  background: rgb(47, 174, 216);
}
.edit {
  background: #ffd700;
  color: rgb(73, 73, 73);
}
.delete {
  background: rgb(240, 68, 68);
}
.add {
  width: 100px;
  background: rgb(13, 189, 13);
}
</style>

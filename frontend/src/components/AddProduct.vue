<template>
  <div class="container">
    <form @submit.prevent="addProduct">
      <div class="header">
        <h1>Add Product</h1>
        <img
          src="@/assets/icons/close-black.svg"
          alt="close"
          @click="closeAddProduct"
        />
      </div>
      <input type="text" required placeholder="Namn" v-model="title" />
      <input type="number" required placeholder="Pris" v-model="price" />
      <input type="text" required placeholder="Kategori" v-model="category" />
      <input
        type="text"
        required
        placeholder="Kort beskrivning"
        v-model="shortDesc"
      />
      <input type="text" required placeholder="Bild url" v-model="img" />
      <textarea required placeholder="Beskrivning" v-model="desc"></textarea>
      <button>Add Product</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      category: "",
      price: "",
      shortDesc: "",
      desc: "",
      img: null,
    };
  },
  methods: {
    closeAddProduct() {
      this.$emit("closeAddProduct");
    },
    async addProduct() {
      const newProduct = {
        title: this.title,
        category: this.category,
        price: this.price,
        shortDesc: this.shortDesc,
        longDesc: this.desc,
        imgFile: this.img,
      };
      await this.$store.dispatch("addProduct", newProduct);
      this.$router.push("/account").catch((error) => {
        if (error.name != "NavigationDuplicated") throw error;
        this.$emit("closeAddProduct");
      });
    },
  },
};
</script>

<style scoped>
.container {
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 140%;
  width: 100%;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
form {
  width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  background: #f6f6f6;
}
.header {
  display: flex;
  margin-bottom: 30px;
  width: 100%;
  justify-content: space-between;
}
h1 {
  font-size: 26px;
  color: black;
  width: 100%;
}
img {
  width: 25px;
  margin-top: -35px;
  margin-right: -15px;
}
img:hover {
  cursor: pointer;
}
input {
  width: 80%;
  margin-bottom: 20px;
  padding: 15px;
  border: 2px solid #c0c0c0;
  border-radius: 3px;
}
textarea {
  height: 100px;
  width: 89%;
  margin-bottom: 20px;
  border: 2px solid #c0c0c0;
  border-radius: 3px;
}
label {
  font-weight: bold;
  color: black;
}
button {
  width: 90%;
  padding: 18px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: rgb(13, 189, 13);
  border: none;
  outline: none;
  border-radius: 3px;
  text-transform: uppercase;
}
button:hover {
  cursor: pointer;
}
</style>

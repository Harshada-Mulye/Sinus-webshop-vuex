<template>
  <div class="container">
    <form @submit.prevent="editProduct">
      <div class="header">
        <h1>Ändra Produkt</h1>
        <img
          src="@/assets/icons/close-black.svg"
          alt="close"
          @click="closeEditProduct"
        />
      </div>
      <input type="text" required placeholder="Namn" v-model="title" />
      <input type="text" required placeholder="Kategori" v-model="category" />
      <input type="number" required placeholder="Pris" v-model="price" />
      <input
        type="text"
        required
        placeholder="Kort beskrivning"
        v-model="shortDesc"
      />
      <input type="text" required placeholder="Bild url" v-model="img" />
      <textarea required placeholder="Beskrivning" v-model="desc"></textarea>
      <button>Ändra</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      title: this.product.title,
      category: this.product.category,
      price: this.product.price,
      shortDesc: this.product.shortDesc,
      desc: this.product.longDesc,
      img: this.product.imgFile,
    };
  },
  methods: {
    closeEditProduct() {
      this.$emit("closeEditProduct");
    },
    editProduct() {
      console.log("test");
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
  height: 140%;
  width: 100%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
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
  width: 85%;
  margin-bottom: 20px;
  border: 2px solid #c0c0c0;
  border-radius: 3px;
  padding: 10px 0 0 10px;
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
  background: #ffd700;
  color: black;
  border: none;
  outline: none;
  border-radius: 3px;
  text-transform: uppercase;
  border: 2px solid #777676;
}
button:hover {
  cursor: pointer;
}
</style>
 
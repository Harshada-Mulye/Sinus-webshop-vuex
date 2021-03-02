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
      <select v-model="imgFile">
        <option value="hoodie-fire.png">Hoodie fire</option>
        <option value="hoodie-ash.png">Hoodie ash</option>
        <option value="hoodie-ocean.png">Hoodie ocean</option>
        <option value="skateboard-greta.png">Skateboard Greta</option>
        <option value="skateboard-generic.png">Default Skateboard</option>
        <option value="wheel-rocket.png">Wheel rocket</option>
        <option value="wheel-spinner.png">Wheel spinner</option>
        <option value="wheel-wave.png">Wheel wave</option>
      </select>
      <textarea
        required
        placeholder="Beskrivning"
        v-model="longDesc"
      ></textarea>
      <button>Ändra</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["obj"],
  data() {
    return {
      title: this.obj.product.title,
      category: this.obj.product.category,
      price: this.obj.product.price,
      shortDesc: this.obj.product.shortDesc,
      longDesc: this.obj.product.longDesc,
      imgFile: this.obj.product.imgFile,
    };
  },
  methods: {
    closeEditProduct() {
      this.$emit("closeEditProduct");
    },
    async editProduct() {
      const obj = {
        id: this.obj.id,

        product: {
          title: this.title,
          category: this.category,
          price: this.price,
          shortDesc: this.shortDesc,
          longDesc: this.longDesc,
          imgFile: this.imgFile,
        },
      };
      await this.$store.dispatch("editProduct", obj);
      this.$router.push("/account").catch((error) => {
        if (error.name != "NavigationDuplicated") throw error;
        this.$emit("closeEditProduct");
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
 
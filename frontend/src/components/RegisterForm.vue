<template>
  <div class="container">
    <form @submit.prevent="createUser">
      <div class="header">
        <h1>Skapa ny profil</h1>
        <img
          src="@/assets/icons/close.svg"
          class="close"
          @click="closeRegister"
        />
      </div>

      <div class="box">
        <input
          class="short"
          type="text"
          required
          placeholder="Förnamn"
          v-model="firstName"
        />
        <input
          class="short"
          type="text"
          required
          placeholder="Efternamn"
          v-model="surname"
        />
      </div>

      <input type="Email" required placeholder="E-post" v-model="email" />
      <input
        type="password"
        required
        placeholder="Lösenord"
        v-model="password"
      />
      <input type="text" required placeholder="Adress" v-model="address" />

      <div class="box">
        <input
          class="short"
          type="text"
          required
          placeholder="Postnummer"
          v-model="zip"
        />
        <input
          class="short"
          type="text"
          required
          placeholder="Ort"
          v-model="city"
        />
      </div>

      <button>Registrera</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      surname: "",
      email: "",
      password: "",
      address: "",
      zip: "",
      city: "",
    };
  },
  methods: {
    closeRegister() {
      this.$router.go(-1);
    },
    createUser() {
      const newUser = {
        email: this.email,
        password: this.password,
        name: this.firstName + " " + this.surname,

        address: {
          street: this.address,
          zip: this.zip,
          city: this.city,
        },
      };
      this.$store.dispatch("createUser", newUser);
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("../assets/background.jpg") center center no-repeat;
  background-size: 100% 100%;
}
form {
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  background: #f6f6f6;
  border-radius: 3px;
  padding: 40px;
  box-sizing: border-box;
  margin: 60px 0 40px 0;
}
.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 30px;
}
h1 {
  color: black;
  width: 100%;
}
.close {
  width: 30px;
  margin-top: -60px;
  margin-right: -27px;
}
img:hover {
  cursor: pointer;
}
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
input {
  width: 90%;
  margin-bottom: 20px;
  padding: 15px;
  border: 2px solid #c0c0c0;
  outline-color: #e84b38;
  border-radius: 3px;
}
.short {
  width: 37%;
}

button {
  width: 90%;
  padding: 18px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: #e84b38;
  border: none;
  outline: none;
  border-radius: 3px;
  text-transform: uppercase;
}
button:hover {
  cursor: pointer;
}
</style>

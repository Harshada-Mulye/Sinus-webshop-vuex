<template>
  <div class="container">
    <form @submit.prevent="">
      <div class="header">
        <h1>Mina sidor</h1>
        <img src="@/assets/icons/close.svg" alt="close" @click="closeLogin"/>
      </div>
      <input type="email" placeholder="Email" required v-model="email" />
      <input
        type="password"
        placeholder="Lösenord"
        required
        v-model="password"
      />
      <button>Logga In</button>
      <button class="register">Registrera</button>
      <p>Glömt Lösenordet?</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
      closeLogin() {
          this.$store.dispatch("closeLogin")
      }
  }
};
</script>

<style scoped>
.container {
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
form {
  width: 22%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  background: white;
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
  outline-color: #e84b38;
  border-radius: 3px;
}
button {
  width: 90%;
  padding: 18px;
  margin-bottom: 20px;
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
.register {
  background: white;
  border: 2px solid #e84b38;
  color: #e84b38;
}
p {
  font-size: 13px;
  font-weight: bold;
  color: black;
}
p:hover {
  cursor: pointer;
}
</style>

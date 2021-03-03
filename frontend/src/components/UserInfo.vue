<template>
  <div class="container">
    <div class="userInfo">
      <h2>Konto Information</h2>
      <div>
        <p class="name">{{ name }}</p>
        <p class="email">{{ email }}</p>
        <p class="name">{{ address }}</p>
        <p class="name">{{ zip }}</p>
        <p class="name">{{ city }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changeName: true,
    };
  },
  computed: {
    name() {
      return this.$store.state.user.currentUser.name;
    },
    email() {
      return this.$store.state.user.currentUser.email;
    },
    address() {
      return this.$store.state.user.currentUser.address.street;
    },
    zip() {
      return this.$store.state.user.currentUser.address.zip;
    },
    city() {
      return this.$store.state.user.currentUser.address.city;
    },
  },
};
</script>

<style scoped>
.container {
  width: 25%;
}
.userInfo {
  width: 100%;
  background: white;
  text-align: left;
}
h2 {
  margin-bottom: 10px;
}
p {
  font-weight: bold;
  margin-bottom: 10px;
  padding: 15px 15px 5px 0px;
  border-bottom: 2px solid#c0c0c0;
}
</style>

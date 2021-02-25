<template>
  <div>
    Account
    <button @click="getUser">Get user</button>
  </div>
</template>

<script>
export default {
  methods: {
    getUser() {
      this.$store.dispatch("getUser");
    },
  },
};
</script>

<style></style>

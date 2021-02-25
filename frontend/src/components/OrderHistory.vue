<template>
<div>
    Man måste kunna göra ordrar innan vi lägger till order history
</div>
</template>

<script>
export default {
  created() {
      this.$store.dispatch("getOrders")
  },
};
</script>

<style></style>

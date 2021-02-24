<template>
<div>
    <Header />
    <main>
        <ShopButton />
    </main>
    <Footer />
</div>
</template>

<script>
import Header from '../components/Header.vue'
import ShopButton from '../components/ShopButton.vue'
import Footer from '../components/Footer.vue'

export default {
    components: { Header, ShopButton, Footer }

}
</script>

<style>
main {
    background: url('../assets/background-img.jpg') center center no-repeat;
    height: 92vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
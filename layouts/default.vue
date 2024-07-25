<template>
    <div>
        <Navbar/>
        <slot/>
        <Footer/>
    </div>
</template>

<script setup>
import Navbar from '@/components/nav/Navbar.vue'
import Footer from '@/components/nav/Footer.vue'
</script>
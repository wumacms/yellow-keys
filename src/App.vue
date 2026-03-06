<script setup>
import { RouterView } from 'vue-router'
import NavBlock from '@/components/blocks/common/NavBlock.vue'
import FooterBlock from '@/components/blocks/common/FooterBlock.vue'
import { menuItems, footerData } from '@/data/common'
</script>

<template>
  <div class="min-h-screen bg-black text-white font-sans antialiased">
    <NavBlock :menuItems="menuItems" />
    <RouterView />
    <FooterBlock v-bind="footerData" />
  </div>
</template>

<style scoped>
</style>

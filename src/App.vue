<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBlock from '@/components/blocks/common/NavBlock.vue'
import FooterBlock from '@/components/blocks/common/FooterBlock.vue'
import { menuItems, footerData } from '@/data/common'
import { useTheme } from '@/composables/useTheme'

useTheme()
</script>

<template>
  <div class="min-h-screen font-sans antialiased">
    <NavBlock :menuItems="menuItems" />
    <RouterView />
    <FooterBlock v-bind="footerData" />
  </div>
</template>


<style scoped>
</style>

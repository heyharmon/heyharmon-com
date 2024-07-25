<template>
  <ProductsGrid :title="`Wedding ${collection.title}`" :products="collection.products"/>
</template>
  
<script setup>
import { useCollectionStore } from '@/stores/useCollectionStore'
import ProductsGrid from '@/components/ProductsGrid.vue'

const route = useRoute()
const { $shopify } = useNuxtApp()
const collectionStore = useCollectionStore()

const collectionId = collectionStore.getCollectionGidBySlug(route.params.category)
const collection = await $shopify.collection.fetchWithProducts(collectionId, {productsFirst: 10});

// console.log('category page collection id: ', collectionId)
// console.log('category page collection: ', collection)
</script>
<template>
  <ProductHero :product="product"/>
  <ProductsGrid :title="`Other ${collection.title}`" :products="collection.products"/>
</template>

<script setup>
import { useCollectionStore } from '@/stores/useCollectionStore'
import ProductHero from '@/components/ProductHero.vue'
import ProductsGrid from '@/components/ProductsGrid.vue'

const route = useRoute()
const { $shopify } = useNuxtApp()
const collectionStore = useCollectionStore()

const product = await $shopify.product.fetchByHandle(route.params.slug)
const collectionId = collectionStore.getCollectionGidByTitle(product.productType)
const collection = await $shopify.collection.fetchWithProducts(collectionId, {productsFirst: 10});

// console.log('product page product: ', product)
// console.log('product page related collection id: ', collectionId)
// console.log('product page related collection: ', collection)
</script>
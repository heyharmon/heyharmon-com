<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl pt-4 sm:px-6 sm:pt-8 lg:px-8">
      <div class="relative isolate overflow-hidden bg-teal-700 px-6 py-24 text-center sm:rounded-3xl sm:px-18">
        <!-- <h2 class="mx-auto max-w-2xl text-4xl font-header text-gray-900 sm:text-5xl">A better way to do wedding rental</h2> -->
        <!-- <h2 class="mx-auto max-w-2xl text-4xl font-header text-gray-900 sm:text-5xl">A better way to rent for your wedding day</h2> -->
        <h1 class="mx-auto max-w-lg text-4xl font-header text-white sm:text-5xl">
          Wedding rentals near <br>
          <span class="capitalize">{{ destinationStore.getCityNameBySlug(route.params.destination) }}</span>, Utah
        </h1>
        <!-- <h2 class="mx-auto max-w-2xl text-4xl font-header text-gray-900 sm:text-5xl">Better wedding rental</h2> -->
        <!-- <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">Beautifully crafted wedding rentals</p> -->
        <!-- <div class="mt-10 flex items-center justify-center gap-x-6">
          <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-teal-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
            Get started
            <svg class="h-5 w-5 fill-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z"/></svg>
          </button>
        </div> -->
      </div>
    </div>
  </div>

  <ProductsGrid :title="`Popular rentals for ${destinationStore.getCityNameBySlug(route.params.destination)}`" :products="products"/>
</template>
  
<script setup>
import { useDestinationStore } from '@/stores/useDestinationStore'
import ProductsGrid from '@/components/ProductsGrid.vue'

const route = useRoute()
const { $shopify } = useNuxtApp()
const destinationStore = useDestinationStore()

const products = await $shopify.product.fetchAll(9)
</script>
<template>
  <div>
    <Disclosure as="header" v-slot="{ open }" class="block mx-auto max-w-7xl py-4 px-6 lg:px-8">
      <!-- <div class="px-4 border rounded-full bg-white shadow-sm sm:px-6"> -->
        <!-- Top -->
        <div class="relative flex items-center justify-between h-14">
          <div class="relative z-10 flex lg:px-0">
            <div class="flex gap-6 items-center">
              <!-- Logo -->
              <Logo class="h-10 w-auto"/>
            </div>
          </div>
          
          <!-- Search -->
          <!-- <div class="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
            <div class="w-full sm:max-w-xs">
              <label for="search" class="sr-only">Search</label>
              <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon class="h-5 w-5 text-slate-400" aria-hidden="true" />
                </div>
                <input id="search" name="search" class="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6" placeholder="Search" type="search" />
              </div>
            </div>
          </div> -->

          <!-- Right -->
          <div class="relative ml-4 flex gap-1 items-center">
            <!-- Location -->
            <!-- <span class="inline-flex items-center gap-x-1.5 rounded-full cursor-pointer bg-white hover:bg-green-50 px-2 py-0.5 text-xs font-normal text-slate-600 ring-1 ring-inset ring-slate-900/20 sm:text-sm">
              <svg class="h-1.5 w-1.5 fill-green-600" viewBox="0 0 6 6" aria-hidden="true">
                <circle cx="3" cy="3" r="3" />
              </svg>
              Salt Lake City
            </span> -->

            <!-- Favorites -->
            <!-- <button class="group flex items-center p-2">
              <svg class="h-7 w-7 flex-shrink-0 fill-slate-900 group-hover:fill-slate-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
              <span class="sr-only">View favorites</span>
            </button> -->

            <!-- Cart -->
            <!-- <button v-if="customerStore.customer?.id" class="group flex items-center p-2"> -->
            <!-- <button @click="uiStore.isCartModalOpen = true" class="group flex items-center p-2"> -->
              <!-- <svg class="h-7 w-7 flex-shrink-0 fill-slate-900 group-hover:fill-slate-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg> -->
              <!-- <svg class="h-7 w-7 flex-shrink-0 fill-slate-900 group-hover:fill-slate-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z"/></svg> -->
              <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg> -->

              <!-- <span class="ml-2 text-sm font-medium text-slate-900 group-hover:text-slate-800">{{ customerStore.cart.items?.length }}</span> -->
              <!-- <span class="sr-only"> items in cart, view bag</span> -->
            <!-- </button> -->

            <!-- Log in or sign up -->
            <!-- <button @click="uiStore.isDatePickerModalOpen = true" class="group flex items-center p-2">
              <svg class="h-7 w-7 flex-shrink-0 fill-slate-900 group-hover:fill-slate-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
            </button> -->

            <!-- Mobile menu button -->
            <!-- <div class="relative z-10 flex items-center lg:hidden">
              <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-1 text-slate-900 bg-indigo-400/5 hover:bg-indigo-100 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500">
                <span class="absolute -inset-0.5" />
                <span class="sr-only">Open menu</span>
                <Bars3Icon v-if="!open" class="block h-7 w-7" aria-hidden="true" />
                <XMarkIcon v-else class="block h-7 w-7" aria-hidden="true" />
              </DisclosureButton>
            </div> -->
          </div>
        </div>

        <!-- Bottom -->
        <!-- <nav class="hidden lg:flex lg:space-x-3 lg:py-2" aria-label="Global">
          <NuxtLink 
            v-for="collection in collectionStore.collections" 
            :key="collection.id" 
            :to="`/categories/${collection.slug}`" 
            :aria-current="collection.slug === route.params.category ? 'page' : undefined"
            :class="[collection.slug === route.params.category ? 'bg-teal-700 text-white' : 'ring-1 ring-inset ring-slate-200 text-slate-900 hover:bg-teal-50 hover:text-slate-900', '']" 
            class="inline-flex items-center rounded-full px-3 py-2 text-base sm:-ml-2"
          >
            {{ collection.title }}
          </NuxtLink>
        </nav> -->
      <!-- </div> -->

      <!-- Mobile flyout -->
      <!-- <DisclosurePanel as="nav" class="lg:hidden bg-teal-50" aria-label="Global">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton 
            v-for="item in navigation" 
            as="a"
            :key="item.name"  
            :href="item.href" 
            :aria-current="item.current ? 'page' : undefined"
            :class="[item.current ? 'bg-slate-100 text-slate-900' : 'text-slate-900 hover:bg-teal-100 hover:text-slate-900', '']" 
            class="block rounded-md px-3 py-2 text-base font-medium"
          >
            {{ item.name }}
          </DisclosureButton>
        </div> -->
        <!-- <div class="border-t border-slate-200 pb-3 pt-4">
          <div class="flex items-center px-4">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-slate-800">{{ user.name }}</div>
              <div class="text-sm font-medium text-slate-500">{{ user.email }}</div>
            </div>
            <button type="button" class="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
              <span class="absolute -inset-1.5" />
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-3 space-y-1 px-2">
            <DisclosureButton v-for="item in userNavigation" :key="item.name" as="a" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900">{{ item.name }}</DisclosureButton>
          </div>
        </div> -->
      <!-- </DisclosurePanel> -->
    </Disclosure>

    <!-- <CartModal/> -->
    <!-- <LoginModal/> -->
    <!-- <DatePickerModal/> -->
  </div>
</template>

<script setup>
import { useUiStore } from '@/stores/useUiStore.js'
import { provideUseId, Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import Logo from '@/components/nav/Logo.vue'

const route = useRoute()
const uiStore = useUiStore()

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

// This fixes hydration mismatch issues
provideUseId(() => useId())
</script>
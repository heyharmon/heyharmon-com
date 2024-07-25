<template>
  <footer class="bg-black rounded-t-3xl" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <!-- <div class="xl:grid xl:grid-cols-3 xl:gap-10"> -->
        <div class="mx-auto flex flex-col">
          <!-- <Logo :inverse="true"/> -->
          <p class="text-3xl font-header text-white">Studio Harmon</p>
          <!-- <div class="flex space-x-6">
            <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-slate-400 hover:text-slate-500">
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div> -->
        </div>
        <!-- <div class="mt-16 xl:col-span-2 xl:mt-0">
          <div class="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">Destinations</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.destinations" :key="item.name">
                  <NuxtLink 
                    :key="item.id" 
                    :to="`/destinations/${item.slug}`" 
                    :aria-current="item.slug === route.params.category ? 'page' : undefined"
                    class="text-sm leading-6 text-violet-100 hover:text-white"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">Rentals</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.rentals" :key="item.name">
                  <NuxtLink 
                    :key="item.id" 
                    :to="`/categories/${item.slug}`" 
                    :aria-current="item.slug === route.params.category ? 'page' : undefined"
                    class="text-sm leading-6 text-violet-100 hover:text-white"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="mt-10 sm:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-white">About</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.about" :key="item.name">
                  <NuxtLink 
                    :key="item.id" 
                    :to="`/${item.slug}`" 
                    :aria-current="item.slug === route.name ? 'page' : undefined"
                    class="text-sm leading-6 text-violet-100 hover:text-white"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div> -->
      <!-- </div> -->
      <div class="mt-12 border-t border-white/10 pt-8 sm:mt-16 lg:mt-20">
        <p class="text-xs leading-5 text-white">
          &copy; 2024 Studio Harmon. 
          All rights reserved. 
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Logo from '@/components/nav/Logo.vue'

const route = useRoute()

const navigation = {
  about: [
    { name: 'About Us', slug: 'about' },
    { name: 'Contact Us', slug: 'about/contact-us' },
    { name: 'How It Works', slug: 'about/how-it-works' },
  ],
  destinations: [
    { name: 'Salt Lake City', slug: 'salt-lake-city'},
    { name: 'Bountiful', slug: 'bountiful'},
    { name: 'Provo', slug: 'provo'},
    { name: 'Sandy', slug: 'sandy'},
    { name: 'Ogden', slug: 'ogden'},
    { name: 'Orem', slug: 'orem' },
    { name: 'Lehi', slug: 'lehi'},
  ],
  rentals: [
    { name: 'Arch Rentals', slug: 'arches' },
    { name: 'Game Rentals', slug: 'games' },
    { name: 'Signage Rentals', slug: 'signage' },
    { name: 'Wall Rentals', slug: 'walls' },
  ],
}

// const cities = [
//   'Salt Lake City',
//   'Provo',
//   'Orem',
//   'Sandy',
//   'Ogden',
//   'South Jordan',
//   'Lehi',
//   'Murray',
//   'Draper',
//   'Bountiful',
//   'Riverton',
//   'Roy'
// ]
</script>

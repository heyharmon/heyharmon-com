<template>
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <h2 class="sr-only">Categories</h2>
        
        <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <NuxtImg 
              src="/categories/featured-category-arches.jpg" 
              alt="Wedding arch rental" 
              class="object-cover object-center group-hover:opacity-75"
              format="webp"
              width="600"
              height="600"
            />
            <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50" />
            <div class="flex items-end p-6">
              <div>
                <h3 class="font-header text-3xl text-white">
                  <NuxtLink to="/categories/arches">
                    <span class="absolute inset-0" />
                    Arches
                  </NuxtLink>
                </h3>
                <!-- <p aria-hidden="true" class="mt-1 text-sm font-semibold text-white">Shop now</p> -->
              </div>
            </div>
          </div>
          <div class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <NuxtImg 
              src="/categories/featured-category-signage.jpg" 
              alt="Wedding signage rental" 
              class="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              format="webp"
              width="600"
              height="300"
            />
            <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
            <div class="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 class="font-header text-3xl text-white">
                  <NuxtLink to="/categories/signage">
                    <span class="absolute inset-0" />
                    Signage
                  </NuxtLink>
                </h3>
                <!-- <p aria-hidden="true" class="mt-1 text-sm font-semibold text-white">Shop now</p> -->
              </div>
            </div>
          </div>
          <div class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <NuxtImg 
              src="/categories/featured-category-walls.jpg" 
              alt="Weddings wall rental" 
              class="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              format="webp"
              width="600"
              height="300"
            />
            <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
            <div class="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 class="font-header text-3xl text-white">
                  <NuxtLink to="/categories/walls">
                    <span class="absolute inset-0" />
                    Walls
                  </NuxtLink>
                </h3>
                <!-- <p aria-hidden="true" class="mt-1 text-sm font-semibold text-white">Shop now</p> -->
              </div>
            </div>
          </div>
        </div>
  
        <div class="mt-6 sm:hidden">
          <a href="#" class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  </template>
  
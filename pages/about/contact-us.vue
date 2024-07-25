<template>
  <main class="mx-auto max-w-7xl px-6 lg:px-8">
    <!-- Hero section -->
    <div class="pb-32 pt-16 lg:pt-20">
      <div class="max-w-2xl">
        <p class="text-base font-semibold leading-7 text-teal-600">Contact us</p>
        <h1 class="mt-6 text-4xl font-header tracking-tight text-gray-900 sm:text-6xl">We'd love to hear from you</h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">Our friendly team is always here to chat.</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="option in contact" :key="option.title" class="flex flex-col">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600">
                <component :is="option.icon" class="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              {{ option.title}}
            </dt>
            <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p class="flex-auto">{{ option.description }}</p>
              <p class="mt-6">
                <a :href="option.href" class="text-sm font-semibold leading-6 text-teal-600">{{ option.contact }}</a>
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <!-- Divider -->
    <hr class="h-px my-8 bg-gray-300 border-0">

    <!-- Contact form -->
    <div class="pb-32 pt-16 lg:pt-20">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-header tracking-tight text-gray-900 sm:text-4xl">Contact form</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">Don't be shy, ask away.</p>
      </div>
      <form action="https://formspree.io/f/mrgnndzj" method="POST" class="mt-16 max-w-xl">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
            <div class="mt-2.5">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
            <div class="mt-2.5">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
            <div class="mt-2.5">
              <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
            <div class="relative mt-2.5">
              <div class="absolute inset-y-0 left-0 flex items-center">
                <label for="country" class="sr-only">Country</label>
                <select id="country" name="country" class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm">
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon class="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
            <div class="mt-2.5">
              <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="flex gap-x-4 sm:col-span-2">
            <p class="text-sm leading-6 text-gray-600">
              By submitting, you agree to our
              <a href="#" class="font-semibold text-teal-600">privacy policy</a>.
            </p>
          </div>
        </div>
        <div class="mt-10">
          <button type="submit" class="flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-700">Let's talk</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { AtSymbolIcon, ChatBubbleBottomCenterTextIcon, DevicePhoneMobileIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

const agreed = ref(true)

const contact = [
  {
    title: 'Text us',
    description: 'We\'ll respond as soon as possible',
    contact: '(385) 386-8626',
    href: 'sms:+13853868626',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    title: 'Email us',
    description: 'We\'ll respond within a few hours',
    contact: 'hi@rentcrafted.com',
    href: 'mailto:hi@rentcrafted.com',
    icon: AtSymbolIcon,
  },
  {
    title: 'Call us',
    description: 'We\'re here Mon-Sun 9am-7pm',
    contact: '(385) 386-8626',
    href: 'tel:3853868626',
    icon: DevicePhoneMobileIcon,
  },
]
</script>
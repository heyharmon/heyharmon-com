<template>
    <AppModal @close="uiStore.isLoginModalOpen = false" :open="uiStore.isLoginModalOpen">
        <div class="flex items-center justify-between px-5 pt-4 pb-2">
            <Logo class="h-6 w-auto"/>

            <button @click="emit('close')" type="button" class="inline-flex items-center rounded-md bg-gray-100 p-1 hover:bg-gray-200 active:translate-y-px">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-gray-700" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Body -->
        <div class="p-5 text-center">
            <p class="text-lg font-normal leading-6 text-gray-900 mb-4">Sign in or create an account</p>
            <AppInput v-model="email" type="email" placeholder="Enter your email" class="mb-4" />
            <button type="button" class="inline-flex w-full justify-center rounded-xl bg-indigo-600 p-3 text-base font-normal text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="emit('close')">
                Continue
            </button>
        </div>

        <!-- Footer -->
        <div class="p-5 text-center bg-gray-100">
            <p class="text-xs text-gray-500">
                By continuing, you agree to the <a href="" class="text-indigo-600 hover:text-indigo-500 hover:underline">Terms of Service</a> and acknowledge the <a href="" class="text-indigo-600 hover:text-indigo-500 hover:underline">Privacy Policy</a>.
            </p>
        </div>
    </AppModal>
</template>

<script setup>
import { useUiStore } from '@/stores/useUiStore'
import AppModal from '@/components/app/AppModal.vue'
import Logo from '@/components/nav/Logo.vue';

const uiStore = useUiStore()
</script>
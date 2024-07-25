<template>
    <NuxtLink to="/" class="flex items-center gap-3">
        <img class="w-[50px] max-h-full object-cover" src="/logo-mark.svg" alt="" />
        <span :class="inverse ? 'text-white' : 'text-slate-800'" class="font-header overflow-auto text-lg pt-0.5">Studio&nbsp;Harmon</span>

        <!-- <img class="max-h-[32px] max-w-full object-cover" src="/logo.svg" alt="" /> -->
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
  inverse: {
    type: Boolean,
    default: false,
  },
})
</script>
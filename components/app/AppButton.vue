<template>
    <NuxtLink
      :to="destination"
      @click="$emit('click')"
      :class="`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]} 
      `"
    >
      <slot>{{ label || '' }}</slot>
      <!-- <Icon v-if="icon" :name="icon" class="order-first h-5 w-5 ml-2" aria-hidden="true" /> -->
    </NuxtLink>
  </template>
    
  <script setup>
  // Button as event button
  // <Button @click="onClickButton">Button</Button>
  
  // Button as nuxt-link or anchor
  // <Button to="/en/blog" rel="next">Link</Button>
  // <Button to="https://google.com" rel="external" target="_blank">External link</Button>
  
  const props = defineProps({
      label: String,
      destination: String,
      variant: {
          type: String,
          default: 'bold' // bold, light, ghost, text
      },
      size: {
          type: String,
          default: 'base' // sm, base, lg
      },
      icon: {
          type: String,
          default: ''
      },
  })
  
  const baseClasses = `
    font-semibold 
    rounded-md
    active:translate-y-px
    disabled:pointer-events-none
    disabled:opacity-50
    disabled:shadow-none
    focus-visible:outline-primary-700
    focus-visible:outline 
    focus-visible:outline-2 
    focus-visible:outline-offset-2
  `
  
  const variantClasses = {
    bold: 'text-white bg-primary-600 hover:bg-primary-700 shadow-sm',
    light: 'text-primary-600 bg-primary-100 hover:bg-primary-200 shadow-sm',
    ghost: 'text-primary-600 bg-transparent ring-2 ring-inset ring-primary-600 hover:bg-primary-200',
    text: 'text-primary-600 bg-transparent pl-0 pr-0 pt-0 pb-0',
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    base: 'px-4 py-2.5',
    lg: 'px-8 py-4 text-md',
  }
  </script>
  
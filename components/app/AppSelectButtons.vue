<template>
  <div class="margin-bottom-sm">
    <label v-if="label" class="block text-sm font-medium leading-6 text-gray-900" :for="label">{{ label }}</label>
    <span class="flex mt-2 rounded-md shadow-sm">
      <button 
        v-for="option in options" 
        :key="option.value"
        @click="updateValue(option.value)"
        :class="modelValue === option.value ? 'ring-indigo-500 ring-2 ring-inset bg-indigo-50 z-10' : ''"
        class="flex-1 items-center px-3 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 first:rounded-l-md last:rounded-r-md [&:not(:first-child)]:-ml-px"
        type="button"
      >
      {{ option.label }}
      </button>
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: { 
    type: String
  },
  label: {
    type: String
  },
  options: {
    type: Array
  },
  hint: {
    type: String
  },
})

const emit = defineEmits(['update:modelValue'])

function updateValue(value) {
  emit('update:modelValue', value)
}
</script>

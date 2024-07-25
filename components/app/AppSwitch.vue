<template>
  <div class="margin-bottom-sm">
    <div @click="toggle" class="group flex items-center justify-between cursor-pointer">
      <span v-if="label" class="block text-sm font-medium leading-6 text-gray-900" :for="label">{{ label }}</span>

      <label 
        :class="[modelValue ? 'bg-indigo-600' : 'bg-gray-200']"
        class="group-hover:bg-indigo-400 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
      >
        <input 
          @click="toggle"
          type="checkbox"
          :name="label"
          :disabled="disabled"
          class="hidden"
        >
        <div 
          :class="{'translate-x-5': modelValue}"
          class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        ></div>
      </label>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: { 
    type: Boolean
  },
  label: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

function toggle() {
  emit('update:modelValue', !props.modelValue)
}
</script>

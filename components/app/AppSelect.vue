<template>
  <div class="margin-bottom-sm">
    <label v-if="label" class="block text-sm font-medium leading-6 text-gray-900" :for="label">{{ label }}</label>
    <select 
      @input="updateValue($event.target.value)"
      :value="modelValue"
      :name="label"
      :disabled="disabled"
      :class="errors ? 'ring-red-300 placeholder:text-red-300 focus:ring-red-500' : 'ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600'"
      class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 cursor-pointer ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 hover:bg-gray-50 sm:text-sm sm:leading-6"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>

    <!-- <div v-if="errors" class="mt-2 text-sm text-red-600" role="alert">
      <ul v-if="errors.length > 1">
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
      <p v-else>{{ errors[0] }}</p>
    </div> -->
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
  errors: {
    type: Array
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

function updateValue(value) {
  emit('update:modelValue', value)
}
</script>

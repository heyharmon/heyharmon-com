<template>
  <div class="margin-bottom-sm">
    <label v-if="label" class="block text-sm font-medium leading-6 text-gray-900" :for="label">{{ label }}</label>
    <div class="mt-2">
      <input 
        @input="updateValue($event.target.value)"
        :value="modelValue"
        :type="type"
        :name="label"
        :placeholder="placeholder"
        :required="required"
        :autofocus="autofocus"
        :disabled="disabled"
        :class="errors ? 'ring-red-300 placeholder:text-red-300 focus:ring-red-500' : 'ring-gray-400 placeholder:text-gray-500 focus:ring-indigo-600'"
        class="block w-full rounded-xl border-0 py-4 px-5 text-gray-900 shadow-sm ring-1 ring-inset hover:ring-2 hover:ring-indigo-600 focus:ring-2 focus:ring-inset sm:text-md sm:leading-6"
      >
    </div>
    
    <div v-if="errors" class="mt-2 text-sm text-red-600" role="alert">
      <ul v-if="errors.length > 1">
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
      <p v-else>{{ errors[0] }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: { 
    type: String
  },
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String
  },
  hint: {
    type: String
  },
  placeholder: {
    type: String
  },
  errors: {
    type: Array
  },
  required: {
    type: Boolean,
    default: false
  },
  autofocus: {
    type: Boolean,
    default: false
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

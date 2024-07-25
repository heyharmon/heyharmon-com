import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', () => {
  const isLoginModalOpen = ref(false)
  const isCartModalOpen = ref(false)
  const isDatePickerModalOpen = ref(false)
  const isSendAPicModalOpen = ref(false)

  return { 
    isLoginModalOpen, 
    isCartModalOpen,
    isDatePickerModalOpen,
    isSendAPicModalOpen,
  }
})
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    isLoading: false,
    currentUser: null,
    notifications: []
  }),
  
  actions: {
    setLoading(status) {
      this.isLoading = status
    },
    
    addNotification(notification) {
      this.notifications.push(notification)
    }
  }
})
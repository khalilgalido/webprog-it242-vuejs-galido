import { createApp } from 'vue'
 
import App from './App.vue'
import FoodItemVue from './components/FoodItem.vue'
import FoodItem2Vue from './components/FoodItem2.vue'
import personalprofile from './components/personalprofile.vue'
const app = createApp(App)
app.component('food-item', FoodItemVue)
app.component('food-item2', FoodItem2Vue)
app.component('personal-profile', personalprofile)
app.mount('#app')


import { createApp } from 'vue'
 
import App from './App.vue'
import FoodItemVue from './components/FoodItem.vue'
import FoodItem2Vue from './components/FoodItem2.vue'
import CommentForm from './components/CommentForm.vue'
import PersonalProfile from './components/PersonalProfile.vue'
const app = createApp(App)
app.component('food-item', FoodItemVue)
app.component('food-item2', FoodItem2Vue)
app.component('personal-profile', PersonalProfile)
app.component('comment-form', CommentForm)
app.component('comment', Comment)
app.mount('#app')



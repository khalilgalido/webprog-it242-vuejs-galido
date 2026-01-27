<template>
  <h1>GoodFood</h1>
  <comment-form />
  <comment />
  <PersonalProfile />
</template>

<script>
// 1. IMPORT the component
// (Make sure the path './components/...' matches your actual folder structure)
import PersonalProfile from './components/PersonalProfile.vue'
import CommentForm from './components/CommentForm.vue' // Assuming you have this
import Comment from './components/Comment.vue'         // Assuming you have this

export default {
  name: 'App',
  // 2. REGISTER the component so the template can use it
  components: {
    PersonalProfile,
    CommentForm,
    Comment
  }
}
</script>

<style>
/* Your global styles */
</style>
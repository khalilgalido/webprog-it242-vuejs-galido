<template>
  <h1>GoodFood</h1>
  <comment-form />
  <comment />
  <PersonalProfile />
</template>

<script>

import PersonalProfile from './components/PersonalProfile.vue'
import CommentForm from './components/CommentForm.vue' 
import Comment from './components/Comment.vue'         

export default {
  name: 'App',
  
  components: {
    PersonalProfile,
    CommentForm,
    Comment
  }
}
</script>

<style>*/
</style>

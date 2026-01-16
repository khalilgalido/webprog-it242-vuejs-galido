<template>
  <div class="chicken">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Fried and Roasted',
      message: 'I like Fried chicken and Roasted'
    }
  }
};
</script>

<style>
.chicken {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: rgb(241, 238, 16);
  }</style>
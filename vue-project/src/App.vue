<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const instruments = ref([])

async function getInstruments() {
  // We explicitly ask for 'error' here so we can see it
  const { data, error } = await supabase.from('instruments').select()

  if (error) {
    console.error('Supabase Error:', error)
  } else {
    console.log('Supabase Data:', data)
    instruments.value = data
  }
}

onMounted(() => {
   getInstruments()
})
</script>

<template>
  <div class="container">
    <h1>My Instruments</h1>
    
    <ul>
      <li v-for="instrument in instruments" :key="instrument.id">
        {{ instrument.name }}
      </li>
    </ul>

    <p v-if="instruments.length === 0">Loading instruments...</p>
  </div>
</template>

<style>
/* Basic styling to ensure text is visible */
.container {
  padding: 2rem;
  font-family: sans-serif;
  color: #ffffff; /* Dark grey text */
  background-color: #fff; /* White background */
}

h1 {
  color: #ffffff;
  margin-bottom: 1rem;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

li {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
</style>
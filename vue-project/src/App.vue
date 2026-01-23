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
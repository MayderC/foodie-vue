<template>
  <button
    class="bg-naranjita hover:bg-naranja text-white font-bold py-1 px-3 rounded-2xl"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  text: String,
});
</script>

<style scoped>
button {
  width: 100%;
}
</style>

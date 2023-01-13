<template>
  <form @submit.prevent class="red">
    <v-text-field
      class="red"
      v-model="name"
      label="First name"
      required
    ></v-text-field>
    <v-text-field v-model="name" label="Name" required></v-text-field>
    <v-text-field v-model="name" label="Name" required></v-text-field>
    <v-text-field v-model="email" label="E-mail" required></v-text-field>
    <v-btn class="mr-4" type="submit"> submit </v-btn>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const email = ref("");
</script>

<style scoped></style>

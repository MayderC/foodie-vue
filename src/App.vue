<template>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "./stores/auth";

const store = useAuthStore();
const router = useRouter();
onMounted(() => {
  const { profileAuth } = store;
  if (profileAuth.isAuthenticated) {
    router.push("/home");
  }
});
</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

<template>
  <div class="auth-page red">
    <div class="auth-page-img">
      <img src="@/assets/imgs/chef.jpg" alt="" />
    </div>
    <div class="auth-page-form">
      <v-window v-model="step">
        <v-window-item :value="1">
          <LoginForm></LoginForm>
        </v-window-item>
        <v-window-item :value="2">
          <RegisterForm></RegisterForm>
        </v-window-item>
      </v-window>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from "@/components/auth/LoginForm.vue";
import RegisterForm from "@/components/auth/RegisterForm.vue";
import { ref } from "vue";
const step = ref(1);
</script>

<style scoped>
.auth-page {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
}
.auth-page-form {
  width: 600px;
}
.auth-page-img {
  width: 600px;
}

.auth-page-img img {
  max-width: 100%;
}
</style>

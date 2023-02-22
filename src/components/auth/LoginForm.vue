<template>
  <div class="form-login">
    <form @submit.prevent class="flex flex-row flex-wrap gap-3.5 bg-azulito">
      <h2 class="font-bold text-center text-naranjita text-2xl">Login</h2>
      <RcInput
        @change="(value) => (email = value)"
        :value="email"
        placeholder="Name"
        type="text"
      ></RcInput>
      <RcInput
        @change="(value) => (password = value)"
        :value="password"
        placeholder="Password"
        :type="showPass ? 'text' : 'password'"
      ></RcInput>
      <label class="self-start text-white" for="show-pass">
        <input type="checkbox" v-model="showPass" name="" id="show-pass" />
        <span> Show password</span>
      </label>
      <RcButton @click="handleClick" text="Login"></RcButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import RcButton from "@/common/components/RcButton.vue";
import { ref } from "vue";
import RcInput from "@/common/components/RcInput.vue";
import { login } from "@/services/auth/auth";

const email = ref("");
const password = ref("");
const showPass = ref(false);

const handleClick = async () => {
  if (password.value.length < 6) return;
  const user = await login({ email: email.value, password: password.value });
};
</script>

<style scoped>
form {
  width: 300px;
  border-radius: 20px;
  padding: 15px;
  justify-content: center;
}
</style>

<template>
  <div class="form-login">
    <form @submit.prevent class="flex flex-row flex-wrap gap-3.5 bg-azulito">
      <h2 class="font-bold text-center text-naranjita text-2xl">Register</h2>
      <RcInput
        @change="(value : string) => (email = value)"
        :value="email"
        placeholder="Email"
        type="text"
      ></RcInput>
      <RcInput
        @change="(value : string) => (username = value)"
        :value="username"
        placeholder="Username"
        type="text"
      ></RcInput>
      <RcInput
        @change="(value: string) => (password = value)"
        :value="password"
        placeholder="Password"
        :type="showPass ? 'text' : 'password'"
      ></RcInput>
      <RcInput
        @change="(value: string) => (rPassword = value)"
        :value="rPassword"
        placeholder="Repeat your password"
        :type="showPass ? 'text' : 'password'"
      ></RcInput>
      <label class="self-start text-white" for="show-pass">
        <input type="checkbox" v-model="showPass" name="" id="show-pass" />
        <span> Show password</span>
      </label>
      <RcButton @click="handleClick" text="Register"></RcButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import RcButton from "@/common/components/RcButton.vue";
import RcInput from "@/common/components/RcInput.vue";
import { register } from "@/services/auth/auth";
import { ref } from "vue";

const showPass = ref(false);
const email = ref("");
const username = ref("");
const password = ref("");
const rPassword = ref("");

const handleClick = async () => {
  const user = await register({
    email: email.value,
    username: username.value,
    password: password.value,
  });
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

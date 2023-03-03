<template>
  <nav class="w-full py-2.5 px-5 flex justify-end">
    <div class="w-28">
      <RcButton
        class="w-12"
        @click="swithForm"
        :text="formToggle ? 'Login' : 'Register'"
      ></RcButton>
    </div>
  </nav>
  <div class="auth-page flex flex-wrap-reverse">
    <div class="auth-page-img">
      <img src="@/assets/imgs/chef.jpg" alt="" />
    </div>
    <div class="auth-page-form flex justify-center h-[500px] items-center">
      <LoginForm v-show="!formToggle"></LoginForm>
      <RegisterForm v-show="formToggle"></RegisterForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import RcButton from "@/common/components/RcButton.vue";
import LoginForm from "@/components/auth/LoginForm.vue";
import RegisterForm from "@/components/auth/RegisterForm.vue";
import { ref } from "vue";

const formToggle = ref(false);

const swithForm = () => {
  formToggle.value = formToggle.value ? false : true;
};
</script>

<style scoped>
.auth-page {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
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

@media (max-width: 615px) {
  .auth-page-form,
  .auth-page-img {
    width: 320px;
  }
}
</style>

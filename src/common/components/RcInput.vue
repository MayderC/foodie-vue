<template>
  <div
    :class="[
      'rc-input-wrapper wrap-input',
      'border-2 rounded-[20px] py-1 px-4',
      focus ? 'border-naranjita' : 'border-gray-300',
    ]"
  >
    <input
      :type="type"
      @input="handdleChange"
      :value="value"
      :placeholder="placeholder"
      @focus="focus = true"
      @blur="focus = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["change"]);
const focus = ref(false);
defineProps({
  type: String,
  placeholder: String,
  value: String,
});

const handdleChange = (e: Event) =>
  emit("change", (e.target as HTMLInputElement).value);
</script>

<style scoped>
input {
  outline: 0;
  border: 0;
  width: 100%;
  background: none;
}
.wrap-input {
  width: 100%;
  background-color: #fff;
}
</style>

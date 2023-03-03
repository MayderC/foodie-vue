<template>
  <main>
    <header class="">
      <div class="header-container">
        <div class="header-texts">
          <h2 class="header-title">Foodie</h2>
          <p class="header-paragraph">
            Con Foodie, siempre hay algo delicioso que descubrir.
          </p>
          <button @click="$router.push('/auth')" class="btn" rounded dark>
            Empezar
          </button>
        </div>
        <div class="header-img">
          <img src="../assets/imgs/header.jpg" alt="" />
        </div>
      </div>
    </header>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@900&display=swap");

.btn {
  @apply bg-red-400 hover:bg-red-500 py-1 px-4 rounded-[20px] text-white font-bold mt-3;
}
.header-title {
  font-family: "Merriweather", serif;
  background-image: linear-gradient(45deg, #ff8a78 0, #eb584d 50%);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  font-size: 7rem;
}

header {
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

.header-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 70vh;
  padding: 0 50px;
  justify-content: center;
}

.header-paragraph {
  color: #182f36;
  font-size: 1.5rem;
  width: 75%;
}
.header-img {
  max-width: 600px;
  width: 600px;
}

.header-img img {
  display: block;

  max-width: 100%;
}

@media (max-width: 1271px) {
  .header-texts,
  .header-img {
    width: 360px;
  }
  .header-title {
    font-size: 4rem;
  }
}
@media (max-width: 460px) {
  .header-texts,
  .header-img {
    width: 100%;
    padding: 20px;
  }
  .header-container {
    padding: 0;
  }
}
</style>

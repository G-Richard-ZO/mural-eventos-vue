<script setup>

import { ref } from 'vue'
import RF1 from './components/listEvent.vue'
import NAV from './components/navega.vue'

const paginaAtual = ref('eventos')

</script>

<template>

  <NAV v-model:pagina="paginaAtual"/>
  
  <RF1 v-if="paginaAtual === 'eventos'" />
</template>

<style>

*, *::before, *::after {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
}

body {
  background-color: #f4f4f4;
  color: #222;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

#app {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}

button, input, select {
  font: inherit;
}

button {
  min-height: 44px;
  padding: 10px 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #222;
  cursor: pointer;
}

button:hover {
  border-color: #222;
  background-color: #222;
  color: #fff;
}

button:focus-visible, input:focus-visible, select:focus-visible {
  outline: 2px solid #333;
  outline-offset: 3px;
}

@media (max-width: 600px) {
  #app {
    padding: 0 16px;
  }
}

</style>

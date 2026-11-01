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

html, body{
  padding: 0px;
  margin: 0px;
  width: 100%;
  min-height: 100vh;
}

</style>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import axios from 'axios'
import { useInteressesStores } from '../stores/interesses'

const rota = useRoute()
const interesses = useInteressesStores()

const evento = ref(null)
const carregando = ref(true)
const erro = ref('')

function buscarEvento() {
    evento.value = null
    carregando.value = true
    erro.value = ''

    axios.get('http://localhost:3000/eventos/' + rota.params.id).then(function(resposta){
        evento.value = resposta.data
        carregando.value = false
    })
    .catch(function(falha){
        if (falha.response && falha.response.status === 404){
            erro.value = 'Evento não encontrado.'
        }else{
            erro.value = 'Erro ao carregar o evento. Verifique se a API está em execução.'
        }

      carregando.value = false
    })
}

function formatarData(data){
    const dataSeparada = data.split('-')

    return dataSeparada[2] + '/' + dataSeparada[1] + '/' + dataSeparada[0]
}

watch(function(){
    return rota.params.id
    },
    buscarEvento,
    {immediate: true}
)

</script>

<template>
    <main class="detalhesEvento">
    <p v-if="carregando" role="status">
      Carregando evento…
    </p>

    <p v-else-if="erro" role="alert">
      {{ erro }}
    </p>

    <article v-else-if="evento">
      <h1>{{ evento.titulo }}</h1>

      <p>
        <strong>Descrição:</strong>
        {{ evento.descricao || 'Sem descrição informada.' }}
      </p>

      <p>
        <strong>Data:</strong>
        {{ formatarData(evento.data) }}
      </p>

      <p>
        <strong>Local:</strong>
        {{ evento.local }}
      </p>

      <p>
        <strong>Categoria:</strong>
        {{ evento.categoria }}
      </p>

      <button type="button" @click="interesses.alternar(evento.id)">
        {{ interesses.temInteresse(evento.id) ? 'Remover interesse' : 'Tenho interesse' }}
      </button>
    </article>

    <RouterLink to="/" class="btVoltar">Voltar para os eventos</RouterLink>
  </main>
    

</template>

<style scoped>
.detalhesEvento {
  max-width: 720px;
  margin: 32px auto;
  padding: 24px;
  border: 1px solid #d5d5d5;
  border-radius: 6px;
  background-color: #fff;
  overflow-wrap: anywhere;
}

h1{
  margin-top: 0;
  color: #111;
  font-size: 28px;
}

p{
  color: #555;
}

a{
  display: inline-block;
  margin-top: 16px;
  color: #35495e;
}

a:focus-visible{
  outline: 2px solid #35495e;
  outline-offset: 3px;
}

.btVoltar{
  min-height: 44px;
  padding: 10px 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #222;
  cursor: pointer;
  text-decoration: none;
}

.btVoltar:hover {
  border-color: #222;
  background-color: #222;
  color: #fff;
}

.btVoltar:focus-visible{
  outline: 2px solid #333;
  outline-offset: 3px;
}
</style>

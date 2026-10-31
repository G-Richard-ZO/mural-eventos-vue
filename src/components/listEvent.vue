<script setup>
import CardEvento from "./eventCard.vue"
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

const eventos = ref([])
const carregando = ref(true)
const erro = ref('')

const busca = ref('')
const categoriaSelecionada = ref('Todas')
const filtro = ref(false)

const eventosFiltrados = computed(() => {
    const textoBusca = busca.value.trim().toLowerCase()

    return eventos.value.filter((evento) => {
        const correspondeTitulo = evento.titulo.toLowerCase().includes(textoBusca)
        const correspondeCategoria = categoriaSelecionada.value === 'Todas' ||
            evento.categoria === categoriaSelecionada.value

        return correspondeTitulo && correspondeCategoria
    })
})

function buscarEventos() {
    carregando.value = true
    erro.value = ''

    axios.get('http://localhost:3000/eventos')
        .then(function (resposta) {
            eventos.value = resposta.data
            carregando.value = false
        })
        .catch(function (error) {
            erro.value = 'Não foi possível carregar os eventos. Verifique se a API está em execução.'
            carregando.value = false
            console.error('Erro ao buscar:', error)
        })
}

onMounted(buscarEventos)
</script>

<template>
    <div id="menuEventos">
        <div id="top">
            <h1>Eventos</h1>
            <button @click="filtro = !filtro">
                {{ filtro ? 'Ocultar filtros' : 'Ativar filtros' }}
            </button>
        </div>
        <div v-if="filtro === true" class="filtros">
            <div>
                <label for="busca">Buscar pelo título</label>

                <input id="busca" v-model="busca" type="search" placeholder="Digite o nome do evento" />
            </div>
            <div>
                <label for="categoria">Categoria</label>

                <select id="categoria" v-model="categoriaSelecionada" >
                    <option value="Todas">Todas</option>
                    <option value="Palestra">Palestra</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Minicurso">Minicurso</option>
                    <option value="Hackathon">Hackathon</option>
                </select>
            </div>
        </div>

        <p v-if="carregando" role="status">Carregando eventos…</p>

        <p v-else-if="erro" role="alert">{{ erro }}</p>

        <p v-else-if="eventosFiltrados.length === 0" role="status">
            Nenhum evento encontrado
        </p>



        <ul v-else>
            <CardEvento v-for="evento in eventosFiltrados" :key="evento.id" :evento="evento">
            </CardEvento>
        </ul>
    </div>
</template>

<style scoped>

ul {
    background-color: gray;
    border: 2px solid;
    border-radius: 15px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin: 0px;
    padding: 20px;
}


#menuEventos{
    border: 2px solid;
    padding: 10px;
    display: flex;
    flex-direction: column;
}

#top{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

button{
    width: 70px;
    height: 40px;
}

.filtros {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
}

.filtros > div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

input, select {
  padding: 10px;
  font: inherit;
  border: 1px solid #687b70;
  border-radius: 6px;
}

</style>
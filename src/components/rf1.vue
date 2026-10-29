<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'

const eventos = ref([])
const carregando = ref(true)

const buscarEventos = async () => {
    try{
        const resposta = await axios.get('http://localhost:3000/eventos')
        eventos.value = resposta.data
    } catch (error){
        console.error('Erro ao buscar:', error)
    }
    finally{
        carregando.value = false
    }
}

onMounted(() =>{
    buscarEventos()
})

</script>

<template>
    <div id="menuEventos">
        <h1>Eventos</h1>
        <ul>
            <li v-if="carregando">Carregando eventos disponíveis...</li>

            <li v-else v-for="evento in eventos":key=evento.id>
                <div class="names">
                    {{ evento.id }} - {{ evento.titulo }}
                </div>

                <div class="descri">
                    {{ evento.descricao }}
                </div>

                <div class="infos">
                    {{ evento.data }} - {{ evento.local }} - {{ evento.categoria }}
                </div>
            </li>
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
    margin: 0px;
    padding: 20px;
}

li{
    border: 2px, solid;
    border-radius: 10px;
    margin: 5px;
    padding: 15px;
    display: flex;
    flex-direction: column;
}

.names{
    font-size: 22px;
    font-weight: bold;
    margin: 3px;
}

.descri{
    font-size: 16px;
    margin-bottom: 5px;
}

.infos{
    font-size: 16px;
    font-weight: bold;
}

#menuEventos{
    border: 2px solid;
    padding: 10px;
}

</style>
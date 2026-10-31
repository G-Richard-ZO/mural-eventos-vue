<script setup>
    defineProps({
        evento: { type: Object, required: true},
    })
</script>

<template>
    <li class="card-evento">
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
</template>

<style scoped>
.card-evento {
    border: 2px solid;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column; 
    flex-direction: column;
    flex: 1 1 250px; 
}

.names {
    font-size: 22px;
    font-weight: bold;
    margin: 3px;
}

.descri {
    font-size: 16px;
    margin-bottom: 5px;
}

.infos {
    font-size: 16px;
    font-weight: bold;
}
</style>
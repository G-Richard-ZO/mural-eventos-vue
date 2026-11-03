<script setup>
    import { RouterLink } from 'vue-router'
    defineProps({
        evento: { type: Object, required: true},
    })

    function formatarData(data) {
        return data.split('-').reverse().join('/')
    }
</script>

<template>
    <RouterLink :to="'/eventos/' + evento.id">
        <li class="card-evento">
            <div class="names">
                {{ evento.titulo }}
            </div>

            <div class="descri">
                {{ evento.descricao }}
            </div>

            <div class="infos">
                {{ formatarData(evento.data) }} - {{ evento.local }} - {{ evento.categoria }}
            </div>
        </li>
    </RouterLink>
</template>

<style scoped>
.card-evento {
    padding: 22px;
    border: 1px solid #d5d5d5;
    border-radius: 6px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-width: 0;
    overflow-wrap: anywhere;
}

.card-evento:hover{
    transform: scale(1.05); 
}

.names {
    color: #111;
    font-size: 19px;
    font-weight: bold;
    line-height: 1.4;
}

a {
  color: inherit;
  text-decoration: none;
}

.names a:hover {
  color: rgb(5, 60, 123);
}

.descri {
    color: #555;
    font-size: 15px;
}

.infos {
    margin-top: auto;
    padding-top: 14px;
    border-top: 1px solid #eee;
    color: #555;
    font-size: 13px;
}

@media (max-width: 600px) {
    .card-evento {
        padding: 18px;
    }
}
</style>

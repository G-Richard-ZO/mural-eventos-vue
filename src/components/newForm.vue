<script setup>

</script>

<template>

    <h1>Cadastrar novo evento</h1>
    <form action="/api/db.json" method="POST">
        <fieldset id="cadastrarEvento">
            <div>
                <label for="tituloEvento">Nome do evento:</label>
                <input type="text" id="tituloEvento" name="titulo" placeholder="Insira o titulo do evento" required>
            </div>
            <br>
            <div>
                <label for="descricaoEvento">Descrição do evento:</label>
                <textarea type="text" id="descricaoEvento" name="descricao" rows="5" cols="35"  placeholder="Insira a descricao do evento"></textarea>
            </div>
            <br>
            <div>
                <label for="dataEvento">Data do evento:</label>
                <input type="date" id="dataEvento" name="data" required>
            </div>
            <br>
            <div>
                <label for="localEvento">Local do Evento:</label>
                <input type="text" id="localEvento" name="local" placeholder="Insira o local do evento" required>
            </div>
            <br>
            <div>
                <label for="categoria">Categoria do Evento:</label>
                <select id="categoria" required>
                    <option value="" selected disabled>Selecione a categoria do evento</option>
                    <option value="Palestra">Palestra</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Minicurso">Minicurso</option>
                    <option value="Hackathon">Hackathon</option>
                </select>
            </div>
            <br><br>
            <div>
                <label for="btEnviar"></label>
                <input type="submit" id="btEnviar" name="Enviar">
            </div>



        </fieldset>
        

    </form>

</template>

<style scoped>
</style>
# mural-eventos-vue

O mural de eventos do curso é uma aplicação desenvolvida em Vue.js para o seminário da matéria de Programação Web do curso de Sistemas de Informação da UFMS-CPTL. 
O Mural de Eventos em sua versão final permite consultar eventos do curso, realizar pesquisa por título, filtrar por categoria, cadastrar novos eventos, visualizar detalhes e marcar interesse nos eventos.
Este documento em sua finalidade tem por objetivo instruir a instalação do Vue.js para a utilização durante o seminário na etapa da oficina e do live coding, e relatar a documentação técnica do projeto, explicação de cada branch do repositório e a divisão dos blocos para a apresentação.

## Integrantes do grupo e a divisão dos blocos para apresentação

Integrantes:
Gabriel Gonçalves de Assis Souza,
Gabriel Richard Zambianchi de Oliveira,
Matheus Gomes,
Matheus Mandarini de Menezes.

Divisão dos blocos por integrantes:
| Bloco | Integrantes Responsáveis |
|---|---|
| `Abertura` | Matheus Mandarini |
| `Fundamentos` | Gabriel Gonçalves e Matheus Mandarini |
| `Live Coding` | Gabriel Richard e Matheus Gomes |
| `Oficina` | Todos integrantes no apoio as duplas |
| `Fechamento` | Gabriel Gonçalves |
| `Quiz` | Matheus Mandarini

Branches e seus respectivos conteúdos:
| Branch | Conteúdo |
|---|---|
| `live-coding` | Projeto inicial para implementar RF1 e RF2 ao vivo. |
| `start` | RF1 e RF2 prontos; Base pronta para a oficina. |
| `checkpoint-1` | Solução acumulada até o RF3. |
| `checkpoint-2` | Solução acumulada até o RF4. |
| `checkpoint-3` | Solução acumulada até o RF5. |
| `main` | Solução final. |

Versões das ferramentas utilizadas:
Node.js 26.13.0 LTS - Versão utilizada e testada,
Vue 3.5.44,
Vue Router 5.4.0,
Pinia 4.1.0,
Axios 1.21.0,
Vite 8.3.5,
JSON Server 1.0.0-beta.15.

# Instalação do projeto
Para a instalação do projeto é necessário o Node.js instalado na maquina.

## 1° Baixe o projeto do GitHub na branch start
Pode-se baixar pelo GitHub via Web ou diretamente pelo terminal. 
Para baixar pelo terminal abra-o na pasta onde deseja salvar os arquivos do projeto e execute o seguinte comando:

```sh
git clone --branch start https://github.com/G-Richard-ZO/mural-eventos-vue.git
```

## 2° Entre na pasta do projeto:

```sh
cd mural-eventos-vue
```

## 3° Instale as dependências do projeto:

```sh
npm install
```

O comando "npm install" instala todas as dependências necessárias para rodar o Vue.js corretamente incluindo o próprio Vue.js, Axios e o JSON Server que foram utilizados no projeto


# Execução

Para executar o Vue.js no navegador é necessário inicializar o JSON Server e a aplicação do Vue.js. Para isso abra dois terminais na pasta do projeto.

## 1° Terminal - JSON Server
Dentro da pasta do projeto execute o comando:

```sh
npx json-server api/db.json --port 3000
```

Isso fará com que a API do servidor JSON seja inicializada e fique disponível em: 

http://localhost:3000/eventos

Ao abrir o endereço no navegador devem aparecer os dados dos eventos no formato JSON. Os dados ficam no arquivo dentro de: "pasta do projeto"/api/db.json 

Ele é necessário para que o Vue.js se comunique com a API e possa ler os dados dentro do arquivo JSON.

## 2° Terminal - Aplicação Vue
Dentro da pasta do projeto execute o comando:

```sh
npm run dev
```

Abra o endereço informado no navegador, normalmente será: 
http://localhost:5173

Para não ter erros utilize sempre o endereço informado no terminal.

-----------------------------------------------------------------------------

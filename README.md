# mural-eventos-vue

O mural de eventos do curso é uma aplicação desenvolvida em Vue.js para o seminário da materia de Programação Web do curso de Sistemas de Informação da UFMS-CPTL. 
O Mural de Eventos em sua versão final permite consultar eventos do curso, realizar pesquisa por título, filtrar por categoria, cadastrar novos eventos, visualizar detalhes e marcar interesse nos eventos.
O documento em sua finalizade instrui a instalação do VueJs para a utilização durante o seminário na etapa da oficina e do live coding.

## Integrantes do grupo e a divisão dos blocos para apresentação

Integrantes:
Gabriel Gonçalves de Assis Souza,
Gabriel Richard Zambianchi de Oliveira,
Matheus Gomes,
Matheus Mandarini de Menezes,

Divisão dos blocos por integrantes:
| Bloco | Integrantes Responsáveis |
|---|---|
| `Abertura` | Matheus Mandarini |
| `Fundamentos` | Gabriel Gonsalves e Matheus Mandarini |
| `Live Coding` | Solução acumulada até o RF3. |
| `Oficina` | Solução acumulada até o RF4. |
| `Fechamento` | Solução acumulada até o RF5. |
| `Quiz` | Solução final.

Branchs e seus repectivos conteúdos:
| Branch | Conteúdo |
|---|---|
| `live-coding` | Projeto inicial para implementar RF1 e RF2 ao vivo. |
| `start` | RF1 e RF2 prontos; Base pronta para a oficina. |
| `checkpoint-1` | Solução acumulada até o RF3. |
| `checkpoint-2` | Solução acumulada até o RF4. |
| `checkpoint-3` | Solução acumulada até o RF5. |
| `main` | Solução final. |

Versões das ferramentas utilizadas:
Vue 3.5.44,
Vue Router 5.4.0,
Pinia 4.1.0,
Axios 1.21.0,
Vite 8.3.5,
JSON Server 1.0.0-beta.15.

# Instalação do projeto
Para a instalação do projeto é necessario o Node.js na versão 26.13.0 LTS ou superior

## 1° Baixe o projeto do GitHub na branch start
Pode-se baixar pelo GitHub via Web ou diretamewnte pelo terminal. Para baixar pelo terminal abra o na pasta onde os arquivos serão baixados execute o seguinte comando:

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

O comando "npm install" instala todas as dependencias necessarias para rodar o VueJs corretamente incluindo o proprio VueJs, Axios e o Json Server que foram utilizados no projeto


# Execução

Para executar o Vue Js no navegador é necessário inicializar o Json Server e a aplicação do Vue. Para isso abra dois terminais na pasta do projeto.

## 1° Terminal - Json Server
Dentro da pasta do projeto execute o comando:

```sh
npx json-server api/db.json --port 3000
```

Isso fará com que a API do servidor Json seja inicializada e fique disponivel em: 

http://localhost:3000/eventos

Ao abrir o endereço no navegador deve aparecer os dados dos eventos no formato Json. Os dados ficam no arquivo dentro de: "pasta do projeto"/api/db.json 

Ele é necessário para que o VueJs se comunique com a api e possa ler os dados dentro do arquivo Json.

## 2° Terminal - Aplicação Vue
Dentro da pasta do projeto execute o comando:

```sh
npm run dev
```

Abra o endereço informado no navegador, normalmente será: 
http://localhost:5173

Para não ter erros utilize sempre o endereço informado no terminal.

-----------------------------------------------------------------------------

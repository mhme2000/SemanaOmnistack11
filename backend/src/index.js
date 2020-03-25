const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)

//Tipos de parâmetros:
//Query: Parâmetros nomeados enviados na rota, após o símbolo de interrogação,
//utilizado para filtros, e paginações
//Route: Parâmetros utilizados para identificar recursos
//Request body
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
// necessario para receber json no body da requisicao
app.use(express.json());

app.use(routes);

/**
 * Métodos Http
 * 
 * GET:    Busca
 * POST:   Cria
 * PUT:    Altera
 * DELETE: Exclui
 */

 /**
  * Tipos de parâmetros
  * 
  * Query: parametros nomeados enviados na rota apos ? (filtros, paginacao)
  * Route: parametros utilizados para identificar recursos (e.g. /users/:id)
  * Request Body: 
  */

  /**
   * Banco de dados
   * 
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where
   * 
   *    knex.js
   */

  //app.get('/users', (request, response) => {
  //app.get('/users/:id', (request, response) => {



app.listen(3333);

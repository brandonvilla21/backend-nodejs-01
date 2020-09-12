const { getRockets } = require('../model')
const path = require('path')

function devolverSaludo(req, res) {
  res.send('Hola desde mi funcion');
}

// async function returnRockets(request, response) {}
const returnRockets = async (request, response) => {
  try {
    const result = await getRockets()
    response.json({ respuesta: result.data })
  } catch (error) {
    throw error
  }

}

function renderViewRockets(request, response) {
  response.sendFile(path.resolve(__dirname, '../view/index.html'))
}

module.exports = {
  devolverSaludo,
  returnRockets,
  renderViewRockets,
}   
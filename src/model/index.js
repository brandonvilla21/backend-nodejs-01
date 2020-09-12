/**
  Llamar una API para obtener los datos de la informacion de los 
  cohetes de Space X
  https://api.spacexdata.com/v3/rockets
*/

const axios = require("axios").default;

function getRockets() {
  return axios.get('https://api.spacexdata.com/v3/rockets')
}


module.exports = {
  getRockets
}
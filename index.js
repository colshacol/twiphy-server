require('dotenv').config()

global.log = (...messages) => {
  console.log('\n[twiphy-server] |\n\n\ \ ', ...messages);
}

require('regenerator-runtime/runtime');
require('babel-register');
require('./source');

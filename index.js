require('dotenv').config()
require('babel-register');

global.log = (...messages) => {
  console.log('\n[twiphy-server] |\n\n\ \ ', ...messages);
}

require('regenerator-runtime/runtime');
require('./source');

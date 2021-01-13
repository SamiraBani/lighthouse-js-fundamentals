const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });
  conn.on('connect', () => {console.log('connection established successfully')});
  conn.name = "Name : SNK";
//   conn.on('data' , message => "Move: up");
//  interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', message => {console.log("you ded cuz you idled!")});
  return conn;
}

console.log('Connecting ...');
connect();



module.exports = {connect};
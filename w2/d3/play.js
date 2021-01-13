const { connect } = require('./client');
console.log('Connecting ...');
connect();

const setupInput = function() {
   const stdin = process.stdin;
   stdin.setRawMode(true);
   stdin.setEncoding('utf8');
   stdin.resume();
   stdin.on('data', key => {
      if(key === 'q'){
         process.exit();
      }
   })
   return stdin;
 }
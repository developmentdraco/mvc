/* Modelos helper */
const path = require( 'path' );
const fs   = require('fs'); 

let models = [];
let url    = path.join( __dirname, '../models' );

fs.readdirSync( url ).forEach( file => {

    let modelName       = file.slice( 0, -3 );
    models[ modelName ] = require( url + '/' + modelName );

});

module.exports = models;
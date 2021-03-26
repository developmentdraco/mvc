/* Mongoose helper */
const models   = require( '../helpers/models' );
const database = {};

// Get data froma  specific model
database.getItems = ( model_name, search_filters ) => {

    let promise = null;
    promise     = models[ model_name ].find( search_filters );

    return promise.exec();

}

// Create item in the specific model
database.insertItem = ( model_name, data ) => {

    let promise  = null;
    let item     = new models[ model_name ]( data );
    
    promise      = item.save();

    return promise;

}

module.exports = database;
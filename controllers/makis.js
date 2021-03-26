/* Makis Controller */
const database = require( '../helpers/database' );
let controller = {};

// Get data
controller.getMakis = async ( req, res, next ) => {

    try {

        let viewData = {};
        let makis = await database.getItems( 'makis', {} );

        viewData.title = 'Ordenar Makis';
        viewData.makis = makis;

        res.render( 'index', viewData );

    }
    catch( error ) {
        next( error );
    }

}

//Save data

module.exports = controller;
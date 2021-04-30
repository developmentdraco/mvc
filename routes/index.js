/* Main Router */
const express = require( 'express' );
const router  = express.Router();
// Controllers
const makisController = require( '../controllers/makis.js' );
/* Routeador GET página principal / */
router.get('/', makisController.getMakis );

module.exports = router;
'use strict';

let errorMiddleware = require('../middleware/errorMiddleware'),
    express = require('express'),
    router = express.Router(),
    servicesController = require('../controllers/servicesController');


/**
 * Service Routes
 */

    /**
     * GET = Fetch by user
     * PUT = Update service
     * DELETE = Delete service
     */
router.route('/api/services/:id')
    .get(servicesController.fetchServicesByUser)
    .put(servicesController.updateService)
    .delete(servicesController.deleteService);

    /**
     * GET = Fetch all services
     * POST = Create service
     */
router.route('/api/services/')
    .get(servicesController.fetchAllServices)
    .post(servicesController.createService);

/**
 * TODO: Product Routes
 */


/**
 * Pass any errors to the middleware for consistent logging
 */
router.use(errorMiddleware.handleError);

module.exports = router;
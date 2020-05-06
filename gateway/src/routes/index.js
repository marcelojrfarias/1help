const { Router } = require('express');

const ordersRoute = require('./orders.routes');

const routes = Router();

routes.use('/price', ordersRoute);

module.exports = routes;

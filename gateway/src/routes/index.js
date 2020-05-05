const { Router } = require('express');

const ordersRoute = require('./orders.routes');

const routes = Router();

routes.get('/price', ordersRoute);

module.exports = routes;

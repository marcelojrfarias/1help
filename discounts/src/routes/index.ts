import { Router } from 'express';

import discountsRouter from './discounts.routes';

const routes = Router();

routes.use('/discounts', discountsRouter);

export default routes;

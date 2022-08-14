import { Router } from 'express';

const routes = Router();

const author = 'Felipe Fernandes';

routes.get('/', (request, response) => {
  response.json({ msg: 'Welcome! API sucessfully up!', author });
});

export default routes;

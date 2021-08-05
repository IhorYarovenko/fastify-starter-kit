import fastify from 'fastify';
import fastifySwagger from 'fastify-swagger';
import Router from './src/components/router.js';
import swagger from './swagger.js';
import connect from './config/db/mongoodb.js';
import { initAjvValidator, initEnv } from './src/utils/plugins.js';

const app = fastify({ logger: true });
// Declare a route
app.get('/', () => ({ page: 404 }));

// Run the server!
const start = async () => {
  try {
    await initEnv(app);
    await connect();
    await initAjvValidator(app);
    await app.register(fastifySwagger, swagger);
    await app.register(Router, { prefix: '/api' });
    await app.listen(3000, '0.0.0.0');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();

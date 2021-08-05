import fastify from 'fastify';
import fastifySwagger from 'fastify-swagger';
import * as http from 'http';
import Router from './src/components/router.js';
import swagger from './swagger.js';
import connect from './config/db/mongoodb.js';
import { initAjvValidator, initSockets } from './src/utils/plugins.js';
import { PORT } from './config/env.js';

const app = fastify({ logger: true });

// Declare a route
app.get('/', () => ({ page: 404 }));

const start = async () => {
  try {
    await connect();
    await initAjvValidator(app);
    await app.register(fastifySwagger, swagger);
    await app.register(Router, { prefix: '/api' });
    const server = http.Server(app);
    server.listen(PORT, () => {
      console.log(`Server start on: http://localhost:${PORT}`);
    });
    initSockets(server);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();

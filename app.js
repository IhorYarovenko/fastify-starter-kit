import fastify from 'fastify';
import Router from './src/components/router.js';
import connect from './config/db/mongoodb.js';
import { initSockets, registerPlugins } from './src/utils/plugins.js';
import { PORT } from './config/env.js';

const app = fastify({ logger: true });

// Declare a route
app.get('/', () => ({ page: 404 }));

const start = async () => {
  try {
    await connect();
    await registerPlugins(app);
    await app.register(Router, { prefix: '/api' });
    app.listen(PORT, () => {
      initSockets(app.server);
      console.log(`Server start on: http://localhost:${PORT}`);
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();

import fastify from 'fastify';
import fastifySwagger from 'fastify-swagger';
import Ajv from 'ajv';

import Router from './src/components/router.js';
import swagger from './swagger.js';

const app = fastify({ logger: true });
const ajv = new Ajv({
  removeAdditional: true,
  useDefaults: true,
  coerceTypes: true,
  nullable: true,
});
app.setValidatorCompiler(({
  schema,
}) => ajv.compile(schema));

// Declare a route
app.get('/', () => ({ page: 404 }));

// Run the server!
const start = async () => {
  try {
    await app.register(fastifySwagger, swagger);
    await app.register(Router, { prefix: '/api' });
    await app.listen(3000, '0.0.0.0');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();

import fastify from 'fastify';
import Router from './src/components/router.js';

const app = fastify({ logger: true });

// Declare a route
app.get('/', async (request, reply) => {
    return { hello: 'world' }
})

// Run the server!
const start = async () => {
    try {
        await app.register(Router, { prefix: '/api' });
        await app.listen(3000, '0.0.0.0');
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}
start()
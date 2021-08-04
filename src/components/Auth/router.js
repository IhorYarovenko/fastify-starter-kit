export default async function userController(fastify) {
    fastify.get('/', (request, reply) => {
        reply.send({
            "router": "user"
        });
    })
}
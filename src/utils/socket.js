class WebSocket {
  constructor(client, server) {
    this.server = server;

    client.on('message', this.message);
  }

  message() {
    this.server.emit('sendMessage', { message: 'hello' });
  }
}
const webSocket = (req) => new WebSocket(req);
export default webSocket;

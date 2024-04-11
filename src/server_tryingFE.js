const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: {
        "origin": ["*"],
        "headers": ["Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-language"],
        "additionalHeaders": ["X-Requested-With"]
      },
    }
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
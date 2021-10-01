const routes = require("./routes");
const docs = require("./docs");
const { assertEnvironment } = require("./helper");

assertEnvironment(["MONGODB_URL", "PORT"]);
const fastify = require("fastify")({
  logger: true,
});

fastify.register(require("fastify-mongodb"), {
  forceClose: true,
  url: process.env.MONGODB_URL,
});

fastify.register(require("fastify-swagger"), docs.swaggerConfig);

routes.forEach((route) => fastify.route(route));

fastify.listen(process.env.PORT, "0.0.0.0", function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});

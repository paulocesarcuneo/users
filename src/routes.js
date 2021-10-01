const docs = require("./docs");
const services = require("./services");
module.exports = [
  {
    method: "GET",
    url: "/users",
    handler: services.listUsers,
    schema: docs.listUsers,
  },
  {
    method: "GET",
    url: "/users/:userId",
    handler: services.getUser,
    schema: docs.getUser,
  },
  {
    method: "POST",
    url: "/users",
    handler: services.createUser,
    schema: docs.createUser,
  },
  {
    method: "DELETE",
    url: "/users/:userId",
    handler: services.deleteUser,
    schema: docs.deleteUser,
  },
];

const user = {
  type: "object",
  properties: {
    _id: { type: "string" },
    email: { type: "string", format: "email" },
  },
};

const listUsers = {
  tags: ["users"],
  response: {
    200: {
      description: "Successful response",
      type: "array",
      items: user,
    },
  },
};

const getUser = {
  tags: ["users"],
  params: {
    type: "object",
    properties: {
      userId: { type: "string" },
    },
  },
  response: {
    200: {
      description: "Successful response",
      ...user,
    },
    404: {
      description: "Not found",
      type: "object",
      properties: {},
    },
  },
};

const createUser = {
  tags: ["users"],
  body: {
    type: "object",
    properties: { email: { type: "string", format: "email" } },
  },
  response: {
    201: {
      description: "Successful response",
      ...user,
    },
  },
};

const deleteUser = {
  tags: ["users"],
  params: {
    type: "object",
    properties: {
      userId: { type: "string" },
    },
  },
  response: {
    200: {
      description: "Successful response",
      ...user,
    },
  },
};

const swaggerConfig = {
  routePrefix: "/docs",
  swagger: {
    info: {
      title: "Users",
      description: "Create and list users",
      version: "0.1.0",
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [{ name: "users", description: "User related end-points" }],
  },
  exposeRoute: true,
};

module.exports = { listUsers, getUser, createUser, deleteUser, swaggerConfig };

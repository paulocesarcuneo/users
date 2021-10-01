const { ObjectId } = require("fastify-mongodb");
const listUsers = async function (req, reply) {
  const users = this.mongo.db.collection("users");
  reply.send(await users.find({}).toArray());
};

const getUser = async function (req, reply) {
  const users = this.mongo.db.collection("users");
  console.log(req.params.userId);
  const user = await users.findOne({ _id: new ObjectId(req.params.userId) });
  if (user) {
    reply.send(user);
  } else {
    reply.status(404).send({});
  }
};

const createUser = async function (req, reply) {
  const users = this.mongo.db.collection("users");
  const user = { ...req.body };
  await users.insert(user);
  reply.send(user);
};

const deleteUser = async function (req, reply) {
  const users = this.mongo.db.collection("users");
  console.log(req.params.userId);
  reply.send(await users.deleteOne({ _id: new ObjectId(req.params.userId) }));
};

module.exports = { listUsers, getUser, createUser, deleteUser };

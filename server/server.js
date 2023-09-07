import Fastify from "fastify";

import Routes from "./src/routes/index.js";
import fillDB from "./src/helpers/fillDB.js";
import DBConnector from "./src/plugins/dbConnector.js";

// Logger ON
const fastify = Fastify({
  logger: true,
});

fastify.register(DBConnector);
fastify.register(Routes);

try {
  await fastify.listen({ port: 3000, host: "0.0.0.0" });
  const collection = fastify.mongo.db.collection("drivers");

  const driversArray = await collection.find().toArray();

  if (driversArray.length === 0) {
    await fillDB(collection);
  }
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}

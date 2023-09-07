import fastifyPlugin from "fastify-plugin";
import fastifyMongo from "@fastify/mongodb";

export default fastifyPlugin(async (fastify) => {
  fastify.register(fastifyMongo, {
    url: "mongodb://0.0.0.0:27017/biocad",
  });
});

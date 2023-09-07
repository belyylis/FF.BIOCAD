import driverSchema from "../schemas/driver.js";

export default async function (fastify) {
  const collection = fastify.mongo.db.collection("drivers");

  const schema = {
    body: driverSchema,
  };

  fastify.get("/drivers", async (req) => {
    try {
      const skipCount = (req.query.page - 1) * 20;
      return await collection.find().skip(skipCount).limit(20).toArray();
    } catch (err) {
      return "Invalid page";
    }
  });

  fastify.put("/drivers/:driverId", async (req, res) => {
    try {
      const driver = await collection.findOne({
        driverId: req.params.driverId,
      });
      if (driver) {
        const result = await driverSchema.validate(req.body);
        if (result) {
          await collection.updateOne(
            { driverId: driver.driverId },
            {
              $set: {
                givenName: req.body.givenName,
                familyName: req.body.familyName,
                dateOfBirth: req.body.dateOfBirth,
                url: req.body.url,
                nationality: req.body.nationality,
              },
            }
          );
          return { status: "success", message: `Driver updated!` };
        } else {
          return { status: "failed", message: `Invalid data format!` };
        }
      } else {
        return { status: "failed", message: `Invalid form data!` };
      }
    } catch (err) {
      return { status: "error", message: JSON.stringify(err) };
    }
  });
}

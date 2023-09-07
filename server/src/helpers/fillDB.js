import axios from "axios";

export default async (collection) => {
  const response = await axios.get(
    "https://ergast.com/api/f1/drivers.json?limit=200"
  );
  response.data?.MRData?.DriverTable?.Drivers?.forEach(async (item) => {
    await collection.insertOne(item);
  });
  console.log("Fill completed");
};

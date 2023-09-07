const GET = async (req, res) => {
  return "Hi";
};

const POST = async (req, res) => {
  return { racers: "post" };
};

export default {
  GET,
  POST,
};

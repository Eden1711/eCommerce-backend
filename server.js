const app = require("./src/app");
const {
  app: { port },
} = require("./src/configs/config.mongodb");

const PORT = port || 8001;

const server = app.listen(PORT, () => {
  console.log(`Ecommerce run on port ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => console.log("Exit server"));
});

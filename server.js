const app = require("./app");
require("dotenv").config({ path: "./config/config.env" });
const connectDatabase = require("./config/database");
const error = require("./middleWare/error");
PORT = process.env.PORT || 5000;

// Server Listen on port
(async () => {
  //handelling uncaught exception
  process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`sutting down server due to uncaughtException error`);
    server.close(() => {
      process.exit(1);
    });
  });

  //error middlewares
  app.use(error);
  // listen
  const server = app.listen(PORT, () => {
    console.log(`listening on 8000:${PORT}`);
  });
  // DB connection
  await connectDatabase();
  // Redix connection
  // await client.connect();

  //unhandelled rejection
  process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(
      `sutting down server due to unhandeled promise rejection error`
    );

    server.close(() => {
      process.exit(1);
    });
  });
})();

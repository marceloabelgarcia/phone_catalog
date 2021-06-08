const config = require("./config");
const app = require("./app/loaders/app");

async function startServer() {
  const port = process.env.PORT || 8000;

  app.listen(port, () => console.log("Magic happens on port", port));
}

startServer();

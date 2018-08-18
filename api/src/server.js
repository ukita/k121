const mongoose = require("mongoose");

const app = require("./app");

const { MONGO_DB_URI, PORT } = process.env;

mongoose.Promise = Promise;

async function serve() {
  await mongoose.connect(MONGO_DB_URI);

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

serve().catch(err => {
  console.log(err);
  process.exit(1);
});

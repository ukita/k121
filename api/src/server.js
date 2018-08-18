const mongoose = require("mongoose");

const app = require("./app");

const MONGO_DB_URI = process.env.MONGO_DB_URI || "mongodb://mongo/k121";
const PORT = process.env.PORT || 3000;

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

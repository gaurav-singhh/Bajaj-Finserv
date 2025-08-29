const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bfhlRoutes = require("./src/routes/bfhl");
const errorHandler = require("./src/middleware/errorHandler");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/bfhl", bfhlRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

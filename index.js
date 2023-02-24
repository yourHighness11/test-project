const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const port = 3000;
const parentRoutes = require("./routes/parentRoutes");
const userRoutes = require("./routes/userRoutes");
dbConnect();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/parent", parentRoutes);
app.use("/user", userRoutes);

app.listen(port, () => console.log(`server is running on ${port}`));

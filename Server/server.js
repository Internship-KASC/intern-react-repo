// import section
require("dotenv").config();
const express = require("express");
// const chats = require("./Data/Data");
const port = process.env.PORT || 80;
const bodyParser = require("body-parser");
const { connectDB } = require("./Database/dbConn");
const dbconfig = require("./Database/db.config");
const generateToken = require("./Database/generateToken");

// app section
const app = express();

// middleware section
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const credentials = require("./middlewares/credential");
const router = require("./routes/userRoutes");
//const { notFound, errorHandler } = require("../middlewares/errorHandler");

// database connection
connectDB();

// api section

app.use(express.json());

app.use(router);
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/api/chats", (req, res) => {
//   res.send(chats);
// });
app.get("/test", (req, res) => {
  res.send({ msg: "Hello and Successfull" });
});

// app.use(notFound);
// app.use(errorHandler);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(credentials);
app.use(cors(corsOptions));

// listen section
//app.listen(port, console.log(`Server is running on PORT ${port}`));
app.listen(port, () => {
  console.log(`Listening on port http://${dbconfig.HOST}:${dbconfig.PORT}`);
});

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const PORT = process.env.PORT || 3500;
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const corsOptions = require("./config/corsOptions");

const app = express();

connectDB();
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", require("./Routes/root"));

app.use("/auth", require("./Routes/authRoutes"));
app.use("/user", require("./Routes/userRoutes"));
app.use("/user-info", require("./Routes/userInfoRoutes"));
app.use("/projects", require("./Routes/projectsRoutes"));

mongoose.connection.once("open", () => {
   console.log("db");
   app.listen(PORT, () => {
      console.log(`running on ${PORT}`);
   });
});
mongoose.connection.on("error", (err) => {
   console.log(err);
});

require("dotenv").config();

//importing the modules here in server.js
const express = require("express");
const cors = require("cors");
const path = require("path");
const sequelize = require("./database");
const fs = require("fs");
// const helmet = require("helmet");
// const morgan = require("morgan");

//importing middleware
const verify = require("./middleware/verifyToken");

//importing routes
const expenseRoute = require("./routes/expenseRoute");
const signup_loginRoute = require("./routes/signup&loginRoute");
const forgotPassRoute = require("./routes/forgotPassRoute");
const premiumRoute = require("./routes/premiumRoute");

//importing models
const user = require("./models/userModel");
const List = require("./models/expenseModel");
const Order = require("./models/orderModel");
const forgotPasswordRequest = require("./models/forgotpassModel");


//instantiating the application
const app = express();

// const accessLogStream = fs.createWriteStream(
//   path.join(__dirname, "access.log"),
//   { flags: "a" }
// );


// calling cors, json, making absolute path for static files

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
// app.use(morgan("combined", { stream: accessLogStream }));



//making the relation between the user and the expenses abd the orders
List.belongsTo(user, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});
user.hasMany(List, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Order.belongsTo(user,{
  foreignKey: "userId",
  onDelete: "CASCADE",
});
user.hasMany(Order,{
  foreignKey: "userId",
  onDelete: "CASCADE",
});
forgotPasswordRequest.belongsTo(user, {
  foreignKey: "userId",
});
user.hasMany(forgotPasswordRequest, {
  foreignKey: "userId",
});



//making the route endpoint, server can handle the route request and sending the response
app.use("/sign", signup_loginRoute);
app.use("/pass", forgotPassRoute);
app.use("/expense", verify.verify, expenseRoute);
app.use("/premium",verify.verify, premiumRoute);


// making the port for server to listen
const port = process.env.PORT || 3000;

// syncing the data in the database when models have been updated
// sequelize.sync({force: false}).then(() => {
//   console.log("Database is synced");
// });

// listening on port
async function initiate() {
  try {
    await sequelize.sync();
    console.log("db connected successfully");
    app.listen(port, () => {
      console.log(`Server is running at ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
initiate();

module.exports = app;

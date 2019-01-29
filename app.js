const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const sequilize = require("./util/database");
const Product = require("./models/product");
const User = require("./models/user");

const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findByPk(1)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

//User created this product not purchased it
Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);

sequilize
  .sync()
  .then(result => {
    //console.log(result);
    return User.findByPk(1);
  })
  .then(user => {
    if (!user) {
      return User.create({ name: "Vedran", email: "vedran@gmail.com" });
    }
    return Promise.resolve(user);
  })
  .then(user => {
    //console.log(user);
    app.listen(3000);
  })
  .catch(err => console.log(err));

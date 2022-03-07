var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Octal" });
});

/* GET home page. */
router.get("/login", function (req, res, next) {
  res.render("./pages/login", { title: "Octal" });
});

/* GET home page. */
router.get("/sign-up", function (req, res, next) {
  res.render("./pages/signup", { title: "Octal" });
});

/* GET home page. */
router.get("/sign-up-prestator", function (req, res, next) {
  res.render("./pages/signup-prestator", { title: "Octal" });
});

module.exports = router;

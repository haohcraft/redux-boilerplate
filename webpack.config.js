module.exports = require("./makewebpackconfig")({
  prod: process.env.NODE_ENV === "production"
});
// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var router = require("express").Router();
var fs = require("fs");

// Each of the below routes just handles the HTML page that the user gets sent to.
// index route loads view.html
router.get("/", function (req, res) {
  res.render(path.join(__dirname, "../public/views/brewerySearch.html"));
});

// // cms route loads cms.html
// router.get("/cms", function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/cms.html"));
// });

// blog route loads blog.html
// router.get("/b", function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/brewerySearch.html"));
// });

// // authors route loads author-manager.html
// router.get("/authors", function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/author-manager.html"));
// });

module.exports = router;
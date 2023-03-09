const express = require("express");

class NewsController {
  //  [get] -- news
  index(req, res) {
    res.render("news");
  }
  detail(req, res) {
    res.send("news detail");
  }
 
}

module.exports = new NewsController();

"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/posts/1';
//to make an http req to get data back 
axios_1["default"].get(url).then(function (res) {
    var posts = res.data;
    var id = posts.id;
    var title = posts.title;
    var body = posts.body;
    logData(id, title, body);
});
var logData = function (id, title, body) {
    console.log("\n    PostID : " + id + "\n    PostTitle : " + title + " \n    PostBody : " + body + "\n    ");
};

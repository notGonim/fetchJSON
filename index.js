"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/posts/1';
//to make an http req to get data back 
axios_1["default"].get(url).then(function (res) {
    console.log(res.data);
});

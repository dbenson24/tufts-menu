var express = require('express');
var router = express.Router();
var request = require('request');

//find category line regex

var catLineReg = /(\s+<div class="shortmenucats"><span style="color: #000000">[- ]+)([a-zA-Z\s&]+)(\s+[- ]+<[/]span><[/]div>)/;

//find category regex
var catReg = /--[a-zA-Z\s&]+--/;

//find menu line regex
var itemLineReg = /\s+<div class="shortmenurecipes"><span style="color: #000000"><a name="Recipe_Desc" onMouseOver="javascript:openDescWin\(\'','[a-zA-Z ]+'\)" onMouseOut="javascript:closeDescWin\(\)">[a-zA-Z ]+<\/a><\/div>/;

//find menu item regex
var itemReg = />[a-zA-Z ]+</;

request("http://menus.tufts.edu/foodpro/shortmenu.asp?locationNum=09&dtdate=11%2F7%2F2015", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var arr = body.split("\r\n");
    for (var i = 0; i < arr.length; i++) {
        var match = arr[i].match(catLineReg);
        if (match) {
            console.log(match[2]);
        }
    }
  }
});




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

const axios = require("axios");

 
function runScript(e) {
    //See notes about 'which' and 'key'
    if (e.keyCode == 13) {
        var tb = document.getElementsByClassName("user-search");
        eval(tb.value);
        return false;
    }
}
runScript();

$("user-search").runScript(function(){
    $.ajax({url: "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries", success: function(result){
      $("brewery-list").html(result);
    }});
  });


// axios
//     .get("https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries")
//     .then(function (res) {
//         console.log(res.data);
//     });

// const req = unirest("GET", "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries");

// req.query({
// 	"by_state": "NY",
// 	"by_name": "cooper",
// 	"by_tag": "patio",
// 	"by_type": "micro"
// });

// req.headers({
// 	"x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
// 	"x-rapidapi-key": "4c2c648dcfmsh26fbd934be4b150p1a0be1jsn56e7feae726d"
// });


// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });

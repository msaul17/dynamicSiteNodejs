var Profile = require("./profile.js");
var renderer = require("./render.js");

function home (request, response) {
  //if url == "/" && GET
  if(request.url === "/") {
    //show search
    response.writeHead(200, {'Content-Type': 'text/plain'}); 
    renderer.view("header", {}, response); 
    response.write("Search\n");
    response.end('Footer\n');
  }
  //if url == "/" && POST
    //redirect to /:username
}

//3. Handle HTTP route GET /:username i.e. /chalkers
function user (request, response) {
  //if url == "/...."
  var username = request.url.replace("/", "");
    if (username.length > 0) {
      response.writeHead(200, {'Content-Type': 'text/plain'});  
      response.write("Header\n");
      // get json data from Treehouse
    var studentProfile = new Profile(username);
      // on end
      studentProfile.on("end", function (profileJSON) {
        // show profile 

        // store values that we need
        var values = {
          avatarUrl : profileJSON.gravatar_url,
          username : profileJSON.profile_name,
          badges : profileJSON.badges.length,
          javascriptPoints : profileJSON.points.JavaScript
        };
        // Simple Response
        response.write(values.username + " has " + values.badges + " badges\n");
        response.write("and has " + values.javascriptPoints + " points in JavaScript\n");
        response.write("Soon he'll break 2,000 point in JavaScript\n");
        response.end("Footer\n");
      });

      //on "error"
      studentProfile.on("error", function (error) {
        // show error
        response.error(error.message + "\n");
        response.end('Footer\n');
      });

    }
    
}

module.exports.home = home;
module.exports.user = user;

var fs = require("fs");

// Write a Function that handles the reading of files and merge in value
  // read from file and get a string
    // merge values in to string

function view (templateName, values, response) {
	// Read from the template
	var fileContents = fs.readFileSync("./views/" + templateName + ".html");
	// Insert Values in to the content

	// Write out the contents to the response
	response.write(fileContents);
	
}


module.exports.view = view;
const request = require('request');

// Get the breed name from command-line arguments
const breedName = process.argv[2];

// API endpoint URL with the breed name as a query parameter
const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Request error:', error);
  } else {
    // Convert the JSON string into an object
    const data = JSON.parse(body);

    if (data.length === 0) {
      console.log(`Breed '${breedName}' not found.`);
    } else {
      // Access the first entry in the data array and print the description
      const description = data[0].description;
      console.log(description);
    }
  }
});
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(apiUrl, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);

      if (data.length === 0 || !body) {
        callback(new Error(`Breed '${breedName}' not found.`), null);
      } else {
        const description = data[0].description;
        callback(null, description);
      }
    }
  });
};

module.exports = {fetchBreedDescription};
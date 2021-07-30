const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url,(error, response, body)=>{
    const data = JSON.parse(body);
    console.log(data);
    if (error) {
      callback(console.log('Url not Found'));
      return;
    }
    if (data.length === 0) {
      callback(new Error("Cat is not in our database"));
      return;
    }
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
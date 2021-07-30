const request = require('request');

const breed = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url,(error, response, body)=>{
  const data = JSON.parse(body);
  console.log(data);
  if (error) {
    console.log('Url not Found');
    return;
  }
  if (data.length === 0) {
    console.log("Cat is not in our database");
  }

});
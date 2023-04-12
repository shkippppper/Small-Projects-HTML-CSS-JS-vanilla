const apiKey = 'b870e5f7';
const url = `http://www.omdbapi.com/?apikey=[${apiKey}]&`;



fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.Title);
    console.log(data.Year);
  })
  .catch(error => console.error(error));
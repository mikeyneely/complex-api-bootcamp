document.getElementById("searchButton").addEventListener("click", doSearch);
let searchTerm = ""

function getRandomInt(min, max) {
 min = Math.ceil(min);
 max = Math.floor(max);
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

function doSearch() {
 fetch("https://rickandmortyapi.com/api/character/")
   .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
   .then(response => {
     console.log(response)
     const random = getRandomInt(0, 19);
     document.getElementById("pictureFrame").src = response.results[random].image
     document.getElementById("name").textContent = response.results[random].name
     document.getElementById("species").textContent = response.results[random].species
     document.getElementById("location").textContent = response.results[random].location.name
     document.getElementById("status").textContent = response.results[random].status
     searchTerm = response.results[random].name
     let apiKey ='AoXagPnxpYhzo2HWzj3KaWNTZkwVZ8io'
     let giphyAPI;


                 // let artistName = document.querySelector("input").value
                  fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=5`)
                  .then(response => {
                      return response.json();
                  })
                  .then(json => {
                    console.log(json)
                      // console.log(json.data[0].images.original.url);
                      document.querySelector('#giphy').src= json.data[0].images.original.url
                      console.log(json.data[0].images.original.url, "test")
                  })

                  // .catch(err => console.log(err));

//      response.forEach((el,i) => {
//         let ol = document.querySelector("ol")
//         let li = document.createElement("li")
//         li.appendChild(document.createTextNode(el))
//         ol.appendChild(li)
// })
   })
   .catch(err => {
     // alert("sorry, there are no results for your search") the alert always runs but then completes the function
   });
}

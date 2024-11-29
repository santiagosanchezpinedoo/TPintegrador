let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let input = queryStringObj.get("input");
console.log(queryStringObj);
fetch(`https://dummyjson.com/recipes/search?q=${input}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    if ((data.total == 0)) {
      document.querySelector("#recipeDetail").innerHTML =
        "<h2> No hay coincidencias. </h2>";
    } else {
      for (let i = 0; i < data.recipes.length; i++) {
        document.querySelector("#recipeDetail").innerHTML += `
        <article>
               <img src= ${data.recipes[i].image} alt=''>
                <p> <a href="./receta.html?id=${data.recipes[i].id}"> Nombre: ${data.recipes[i].name} </a> </p>
                <p>Difcultad: ${data.recipes[i].difficulty} </p>
         </article>
     `;
      }
    }
  })
  .catch(function (error) {
    console.log("error: ", error);
  });

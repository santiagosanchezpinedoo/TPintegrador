let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let nombre = queryStringObj.get("name");
fetch(`https://dummyjson.com/recipes/tag/${nombre}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let recetas = data.recipes;
    let recipesList = document.querySelector(".recipes-list");
    document.querySelector("#tituloDetalleCategorias").innerText += `${nombre}`;
    for (let i = 0; i < recetas.length; i++) {
      recipesList.innerHTML += `
                <article>
                       <img src= ${recetas[i].image} alt=''>
                        <p> <a href="./receta.html?id=${recetas[i].id}"> Nombre: ${recetas[i].name} </a> </p>
                        <p>Dificultad:${recetas[i].difficulty} </p>
                 </article>
             `;
    }
  })
  .catch(function (error) {
    console.log("error: ", error);
  });

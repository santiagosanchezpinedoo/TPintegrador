fetch("https://dummyjson.com/recipes?limit=10")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let recetas = data.recipes;
    let recipes = "";
    let recipesList = document.querySelector("#recipes-list");
    recipesList.style.display = "flex"
    recipesList.style.flexWrap = "wrap"
    recipesList.style.justifyContent = "space-evenly"
    for (let i = 0; i < recetas.length; i++) {
      recipes += `
                <article>
                       <img src= ${recetas[i].image} alt=''>
                        <p> <a href="./receta.html?id=${recetas[i].id}"> Name: ${recetas[i].name} </a> </p>
                        <p>nombre:${recetas[i].name} </p>
                        <p>difcultad:${recetas[i].difficulty} </p>
                 </article>
             `;
    }
    console.log(recipes);
    recipesList.innerHTML = recipes
  })
  .catch(function (error) {
    console.log("error: ", error);
  });
let cont = 1
function cargarMas(){
    cont ++
    let recipesList = document.querySelector("#recipes-list");
    fetch(`https://dummyjson.com/recipes?limit=10&skip=${cont*10}`)
  .then(function (response) {
    return response.json();
  })
  .then(function(data) { 
    let recetas = data.recipes;
    let recipes = "";
    let recipesList = document.querySelector("#recipes-list");
    for (let i = 0; i < recetas.length; i++) {
      recipes += `
                <article>
                       <img src= ${recetas[i].image} alt=''>
                        <p> <a href="./detalle.html?id=${recetas[i].id}"> Name: ${recetas[i].name} </a> </p>
                        <p>nombre:${recetas[i].name} </p>
                        <p>difcultad:${recetas[i].difficulty} </p>
                 </article>
             `;
    }
    console.log(recipes);
    recipesList.innerHTML += recipes
  })
}   
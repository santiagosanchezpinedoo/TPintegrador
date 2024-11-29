fetch("https://dummyjson.com/recipes?limit=10")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let recetas = data.recipes;
    let recipes = "";
    let recipesList = document.querySelector(".recipes-list");
    for (let i = 0; i < recetas.length; i++) {
      recipes += `
                <article>
                       <img src= ${recetas[i].image} alt=''>
                        <p> <a href="./receta.html?id=${recetas[i].id}"> Nombre: ${recetas[i].name} </a> </p>
                        <p>Difcultad: ${recetas[i].difficulty} </p>
                 </article>
             `;
    }
    console.log(recipes);
    recipesList.innerHTML = recipes;
  })
  .catch(function (error) {
    console.log("error: ", error);
  });
let cont = 1;
function cargarMas() {
  cont++;
  let recipesList = document.querySelector("#recipes-list");
  fetch(`https://dummyjson.com/recipes?limit=10&skip=${cont * 10}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let recetas = data.recipes;
      let recipes = "";
      let recipesList = document.querySelector("#recipes-list");
      for (let i = 0; i < recetas.length; i++) {
        recipes += `
                <article>
                       <img src= ${recetas[i].image} alt=''>
                        <p> <a href="./detalle.html?id=${recetas[i].id}"> Nombre: ${recetas[i].name} </a> </p>
                        <p>Dificultad: ${recetas[i].difficulty} </p>
                 </article>
             `;
      }
      console.log(recipes);
      recipesList.innerHTML += recipes;
    });
}
let form = document.querySelector("#searchForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  this.submit();
});

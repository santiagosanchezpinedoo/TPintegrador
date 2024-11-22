let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let id= queryStringObj.get("id")
console.log(queryStringObj)
fetch(`https://dummyjson.com/recipes/${id}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
        let receta = data;
        let nombre = document.querySelector("#recipeName");
        let instrucciones = document.querySelector("#recipeInstructions")
        let coccion = document.querySelector("#recipeCookTimeMinutes");
        let foto = document.querySelector("#recipeImage");
        let  categorias = document.querySelector("#recipeCuisine");

        nombre.innerText = `Nombre receta: ${receta.name}`;
        for (let i = 0; i<receta.instructions.length; i++){
            instrucciones.innerHTML += `<p>${receta.instructions[i]}</p>`;
        }
        coccion.innerText = `Coccion: ${receta.cookTimeMinutes}`;
        foto.src = receta.image;
        categorias.innerText = `Categoria: ${receta.cuisine}`
    })
    .catch(function (error) {
        console.log("error: ", error);
    });
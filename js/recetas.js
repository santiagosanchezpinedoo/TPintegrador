let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");
console.log(queryStringObj);
fetch(`https://dummyjson.com/recipes/${id}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let receta = data;
    let nombre = document.querySelector("#recipeName");
    let instrucciones = document.querySelector("#recipeInstructions");
    let coccion = document.querySelector("#recipeCookTimeMinutes");
    let categorias = document.querySelector("#recipeTags");
    let foto = document.querySelector("#recipeImage");
    foto.src = data.image;
    nombre.innerText = `Nombre receta: ${receta.name}`;

    for (let i = 0; i < receta.instructions.length; i++) {
      instrucciones.innerHTML += `<p>${receta.instructions[i]}</p>`;
    }
    coccion.innerHTML += `<p> ${receta.cookTimeMinutes} minutos</p>`;
    categorias.innerHTML += "<h2>Categorias:</h2>";
    for (let i = 0; i < receta.tags.length; i++) {
      categorias.innerHTML += `<p> <a href="./detalleCategoria.html?name=${receta.tags[i]}">${receta.tags[i]}</p>`;
    }
  })
  .catch(function (error) {
    console.log("error: ", error);
  });

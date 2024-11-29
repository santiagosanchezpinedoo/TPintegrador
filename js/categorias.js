fetch("https://dummyjson.com/recipes/tags")
  .then(function (response) {
    return response.json();
  })
  .then(function (categorias) {
    console.log(categorias);
    let categoriesList = document.querySelector("#listaCategorias");
    for (let i = 0; i < categorias.length; i++) {
      categoriesList.innerHTML += `
        <li> <a href="./detalleCategoria.html?name=${categorias[i]}"> ${categorias[i]}</li>
        `;
    }
  })
  .catch(function (error) {
    console.log("error: ", error);
  });

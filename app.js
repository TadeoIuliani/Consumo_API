
window.addEventListener("load", ()=>{
    cargarPeliculas()
})


let pagina = 1
let btnSiguiente = document.querySelector(".btnSiguiente")
let btnAnterior = document.querySelector(".btnAnterior")

/* evento para el btn anter */
btnAnterior.addEventListener("click", ()=>{
    if(pagina>1){
        pagina--
    }
    cargarPeliculas()
})

/* evento para el btn sig */
btnSiguiente.addEventListener("click", ()=>{
    if(pagina<500){
        pagina++
    }
    cargarPeliculas()
})


/* funcion que cargue y muestre las peliculas */
const cargarPeliculas = async ()=>{
    const URL_FETCH = `https://api.themoviedb.org/3/movie/popular?api_key=64ff3df1d2c81df41237b4e7af9929fb&language=es-MX&page=${pagina}`
    try {
        let respuesta = await fetch(URL_FETCH)

        if(respuesta.status == 200){
            
            
            let datos = await respuesta.json()
            /* datos.results  = Peliculas*/
            let peliculas = ""
            datos.results.forEach((e) => {

                console.log(e);
                peliculas += `<div class="pelicula"> 
                                <img class="poster" src="https://image.tmdb.org/t/p/w500${e.poster_path}">
                                <h3 class="titulo" >${e.title}</h3>
                            </div>`
                document.querySelector(".contenedor").innerHTML = peliculas;
            });
        }
        else if(respuesta.status == 404){
            console.log("error 404");
        }
    } catch (error) {
        
    }
}

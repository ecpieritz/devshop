// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

// GET THE INFORMATION THAT IS INSIDE THE FIELD

const btnSalvar         = document.querySelector(".salvar")
const ptitulo            = document.querySelector(".ptitulo")
const pdesc           = document.querySelector(".pdesc")
const pvalor           = document.querySelector(".pvalor")
const pimg           = document.querySelector(".pimg")
const tagResultado       = document.querySelector(".resultado p")
const popUpResultado     = document.querySelector(".resultado")
const btnFechar          = document.querySelector(".resultado")

//GETTING DATA FROM THE FORM
function pegarDadosFormulario(){
    
    //RECOVERING FIELD VALUE (TEXTAREA)
    
    const titulo  = ptitulo.value
    mostrarResultado(titulo)

    ptitulo.value = ""
    pdesc.value = ""
    pvalor.value = ""
    pimg.value = ""
    
}

//INTERCEPTING THE CLICK / RUNNING FUNCTION
btnSalvar.addEventListener("click", pegarDadosFormulario)


function mostrarResultado(titulo){

    tagResultado.innerText = `${titulo} salvo!`
    popUpResultado.classList.add("mostrarResultado")
    
}


function fecharPopUp(){

    popUpResultado.classList.remove("mostrarResultado")

}
btnFechar.addEventListener("click", fecharPopUp)
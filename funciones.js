function darkMode(){
    document.getElementById("body").style.backgroundImage = "linear-gradient(172deg, rgba(2,0,36,1) 0%, rgba(80,40,90,1) 63%, rgba(0,0,0,1) 100%)";
    document.getElementById("body").style.transition = "all 2s";
}

function lightMode(){
    document.getElementById("body").style.backgroundImage = "linear-gradient(60deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"
    document.getElementById("body").style.transition = "all 2s";
}

$(document).ready(function() {

    $("#botonJquery").click(function() {
        $("img").fadeToggle();
        $("img").fadeToggle("slow");
        $("img").fadeToggle(100);
    })

});



function ocultar(){
    $("#contenedor").toggle();
}

function estirarLetra(){
    
}
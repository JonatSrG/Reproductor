var vreproductor = document.getElementById("reproductor");
var origen = vreproductor.getElementsByTagName("source")[0];
var vbtnReproducir = document.getElementById("btnReproducir");
var vbtnPausa = document.getElementById("btnPausar");

vreproductor.load();
vbtnReproducir.addEventListener("click",reproducir);
vbtnPausa.addEventListener("click",pausa);

function reproducir(){
    vreproductor.play();
}
function pausa(){
    vreproductor.pause();
}
const ha1 = document.querySelector(".titulo");
const div1 = document.querySelector(".image");
const input = document.querySelector("input");
const form1 = document.querySelector("#formAccion");
const boton1 = document.querySelector("#btnAccion");

boton1.addEventListener("click", accion1);

ha1.innerText = "CODIGO EN JAVASCRIPT";
input.value ="8"
                                                                                                                                                                                             
const imagen = document.createElement("img");


div1.appendChild(imagen);


function accion1(){
  //console.log({event});
  //event.preventDefault();
  if (input.value == 8){
    imagen.setAttribute("src", "https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_640.png");
  }
  else{
    imagen.setAttribute("src", "https://w7.pngwing.com/pngs/412/774/png-transparent-red-mark-cross-crossed-wrong-incorrect-sign-symbol-icon-thumbnail.png");
  }
}



"use strict";
var forma = document.getElementById("forma"),
    salidaNombre = document.getElementById("salidaNombre"),
    salidaBoleta = document.getElementById("salidaBoleta"),
    salidaGrupo = document.getElementById("salidaGrupo"),
    salidaMateria = document.getElementById("salidaMateria"),
    salidaFecha = document.getElementById("salidaFecha");
function procesa(){
  var nombre = forma["nombre"].value.trim();
  salidaNombre.textContent = "Nombre: "+nombre;
  var boleta=  forma["boleta"].value.trim();
  salidaBoleta.value = "Boleta: "+boleta;   
  var grupo = forma["grupo"].value.trim();
  salidaGrupo.textContent = "Grupo: "+grupo;
  var materia = forma["materia"].value.trim();
  salidaMateria.textContent = "Materia: "+materia;
  var  txtFecha = forma["fecha"],
       salidaFecha = document.getElementById("salidaFecha");
    var date = new Date(txtFecha.value);
    var day = date.getDate()+1;
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if(month < 10){
        salidaFecha.value= `${day}-0${month}-${year}`;
    }
    else{
        salidaFecha.value= `${day}-${month}-${year}`;
    }
}

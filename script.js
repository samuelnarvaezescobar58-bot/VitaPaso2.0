document.addEventListener("DOMContentLoaded", function(){

const habitos = [

"Beber agua","Hacer ejercicio","Leer 10 minutos","Meditar","Caminar 15 minutos",
"Ordenar tu habitación","Escribir un diario","Aprender algo nuevo","Estudiar",
"Planear tu día","Dormir temprano","Despertar temprano","Comer saludable",
"No usar redes 1 hora","Estirar el cuerpo","Respirar profundo",
"Escuchar un podcast","Practicar inglés","Organizar tareas","Tomar sol",
"Agradecer","Sonreír","Tomar agua al despertar","Evitar azúcar",
"Hacer flexiones","Caminar más","Leer un artículo","Estudiar 20 min",
"Apagar pantallas temprano","Respirar 5 minutos","Meditar 5 min",
"Practicar gratitud","Ordenar escritorio","Revisar metas",
"Aprender palabra nueva","Estirar espalda","Tomar descanso",
"Escuchar música","Salir al aire libre","Pensar positivo",
"Ser amable","Ahorrar dinero","Practicar escritura",
"Aprender programación","Hacer sentadillas","Caminar escaleras",
"Evitar comida chatarra","Planificar mañana","Limpiar algo",
"Revisar pendientes","Hacer lista de tareas","Practicar concentración",
"Leer libro","Beber té","Respirar aire fresco","Estirar cuello",
"Apagar notificaciones","Pensar en metas","Visualizar éxito",
"Practicar disciplina","Mejorar postura","Ser paciente",
"Tomar pausa mental","Estudiar matemáticas","Practicar lógica",
"Revisar progreso","Ser organizado","Cuidar salud",
"Aprender historia","Leer noticias","Practicar creatividad",
"Dibujar","Tomar agua extra","Reducir estrés","Practicar silencio",
"Pensar ideas","Estirar piernas","Hacer plan semanal",
"Ser productivo","Escuchar clase","Practicar memoria",
"Leer 5 páginas","Reflexionar","Pensar soluciones",
"Ser positivo","Evitar distracciones","Mejorar hábitos",
"Ser constante","Aprender ciencia","Practicar enfoque",
"Tomar descanso visual","Estirar brazos","Respirar lento",
"Practicar calma","Pensar claro","Mejorar energía","Ser disciplinado"

];

let habitosDisponibles = [...habitos];
let habitosActuales = [];
let habitosCompletados = [];

function mostrarHabitos(){

const contenedor = document.getElementById("listaHabitos");
contenedor.innerHTML="";

habitosActuales.forEach(h=>{

let div=document.createElement("div");
div.className="habito";
div.innerText=h;

div.addEventListener("click", function(){

div.classList.toggle("seleccionado");

if(div.classList.contains("seleccionado")){
habitosCompletados.push(h);
}else{
habitosCompletados=habitosCompletados.filter(x=>x!==h);
}

actualizarProgreso();
verificarCambio();

});

contenedor.appendChild(div);

});

}

function generarHabitos(){

habitosActuales=[];

for(let i=0;i<6;i++){

if(habitosDisponibles.length===0){
habitosDisponibles=[...habitos];
}

let index=Math.floor(Math.random()*habitosDisponibles.length);
let habito=habitosDisponibles.splice(index,1)[0];

habitosActuales.push(habito);

}

mostrarHabitos();

}

function verificarCambio(){

let seleccionados=document.querySelectorAll(".seleccionado").length;

if(seleccionados===6){
generarHabitos();
}

}

function actualizarProgreso(){

document.getElementById("contador").innerText =
habitosCompletados.length + " hábitos completados hoy";

let lista=document.getElementById("listaCompletados");
lista.innerHTML="";

habitosCompletados.forEach(h=>{

let li=document.createElement("li");
li.innerText=h;
lista.appendChild(li);

});

}

window.mostrarInicio = function(){

document.getElementById("inicio").classList.remove("oculto");
document.getElementById("progreso").classList.add("oculto");
document.getElementById("misHabitos").classList.add("oculto");

}

window.mostrarProgreso = function(){

document.getElementById("inicio").classList.add("oculto");
document.getElementById("progreso").classList.remove("oculto");
document.getElementById("misHabitos").classList.add("oculto");

}

window.mostrarMisHabitos = function(){

document.getElementById("inicio").classList.add("oculto");
document.getElementById("progreso").classList.add("oculto");
document.getElementById("misHabitos").classList.remove("oculto");

}

generarHabitos();

});
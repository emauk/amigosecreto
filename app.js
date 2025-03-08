// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let NombreAmigos = [];

function sortearAmigo() {
    let sorteoAmigo = Math.floor(Math.random()*(NombreAmigos.length));
     const lista = document.getElementById("listaAmigos");        
     lista.innerHTML = "";
  
    const li = document.createElement("li");
    li.textContent = "El amigo secreto es: "+NombreAmigos[sorteoAmigo];
    lista.appendChild(li);
 

          
} 


function agregarAmigo(){
   // alert("se añade amiguito");
    const EntradaNombre = document.getElementById("amigo");
    const Nombre= EntradaNombre.value;
    if (Nombre==""){
        alert("Por favor, inserte un nombre.");
    }
    else{
    NombreAmigos.push(Nombre);
    console.log(NombreAmigos);
    console.log(NombreAmigos.length);
    document.getElementById("amigo").value="";
}
actualizaLista();
}

function actualizaLista(){
  // Seleccionar la lista en el documento HTML
  const lista = document.getElementById("listaAmigos");
            
  // Limpiar la lista antes de agregar nuevos elementos
  lista.innerHTML = "";

  // Recorrer el array de amigos y agregar cada nombre como un elemento <li>
  NombreAmigos.forEach((NombreAmigo) => {
    const li = document.createElement("li");
    li.textContent = NombreAmigo;
    lista.appendChild(li);
  });  
  }

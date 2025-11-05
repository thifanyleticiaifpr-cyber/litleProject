let colorCont=0

function mostrarEscolha() {
  var selecionado = document.querySelector('input[name="selecionado"]:checked');
  var nota = document.getElementById("nota").value.trim(); /* cria elemento de notaaa */

  if (nota=="") {
    alert("O campo está vaio");
    return;
  } 

  if (selecionado==null) {
    alert("Selecione uma opçao");
    return;
  }

  var novo = document.createElement("p"); 
  novo.className = "itemNota"; 
  novo.innerText = nota;

  if(colorCont==0){
    novo.style.color="blue"

  } else if(colorCont==1){
    novo.style.color="green"}
    else{
      novo.style.color="purple"
    }
    colorCont=(colorCont+1)%3


  if (selecionado.value == "urgente") {
    var div = document.getElementById("elementoU");
    div.appendChild(novo);
  } else if (selecionado.value == "naourgente") {
    var div = document.getElementById("elementoN");
    div.appendChild(novo); 
  } 

  document.getElementById("nota").value = "";
}

function apagarNotaU() {

  const div = document.getElementById("elementoU");
  const nota= div.querySelector("p");
  if (!nota) {
    alert("Não há notas urgentes para apagar.");
    return;
  }
  nota.remove();
}

function apagarNotaN() {
  const div = document.getElementById("elementoN");
  const nota= div.querySelector("p");
  if (!nota) {
    alert("Não há notas não  urgentes para apagar.");
   // return; 
  } else{
    nota.remove();
  }
  //nota.remove();
}
function apagartudo() {
 
  var lista = document.getElementById("elementoU");
  var lista2 = document.getElementById("elementoN");

  if(lista.innerHTML === "" && lista2.innerHTML === "") {
    
      alert("Não há notas para apagar.");
    
  } else{
    lista.remove()
    lista2.remove()
  }
  

}
/*Um campo de texto e um botão “Adicionar”.
Um botão para marcar a nota como: não urgente ou urgente.
Cada nota digitada deve aparecer dentro de um box. As não urgentes em amarelo limão e as  urgentes em vermelho.
As notas devem ser coladas em formato de lista.
Cada nota a ser inserida seguindo padrão de cores: Azul, Verde, Roxo.  
Botões para remover nota a nota.
Um botão “Apagar tudo” remove todas as notas.
Estilizar todo o conteúdo.
Hospedar e deixar acessível.
 */
function mostrarEscolha() {
  var selecionado = document.querySelector('input[name="selecionado"]:checked');
  var nota = document.getElementById("nota").value.trim();

  if (nota=="") {
    alert("O campo está vaio");
    return;
  }

  if (selecionado==null) {
    alert("Selecione uma opçao");
    return;
  }

  var novo = document.createElement("li");
  novo.className = "ite";
  novo.innerText = nota;


  var cores = ["blue", "green", "purple"];
  var cor = cores[Math.floor(Math.random() * cores.length)];
  novo.classList.add(cor);

  var botaoRemover = document.createElement("button");
  botaoRemover.textContent = " ";
  botaoRemover.className = "remover";
  botaoRemover.onclick = function() {
    novo.remove();
  };

  novo.appendChild(botaoRemover);

  if (selecionado.value == "urgente") {
    var div = document.getElementById("elementoU");
    div.appendChild(novo);
  } else if (selecionado.value == "naourgente") {
    var div = document.getElementById("elementoN");
    div.appendChild(novo);
  }

  document.getElementById("nota").value = "";
}

function apagarTodas(idLista) {
  var lista = document.getElementById(idLista);
  lista.innerHTML = "";
}


function apagartudo() {
  apagarTodas("elementoU");
  apagarTodas("elementoN");
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
/*

Um campo de texto e um botão “Adicionar”.
Um botão para marcar a nota como: não urgente ou urgente.
Cada nota digitada deve aparecer dentro de um box. As não urgentes em amarelo limão e as  urgentes em vermelho.
As notas devem ser coladas em formato de lista.
Cada nota a ser inserida seguindo padrão de cores: Azul, Verde, Roxo.  
Botões para remover nota a nota.
Um botão “Apagar tudo” remove todas as notas.
Estilizar todo o conteúdo.
Hospedar e deixar acessível. */



    function mostrarEscolha() {
      var selecionado = document.querySelector('input[name="urgente"]:checked');/*serve para selecionar elementos no JavaScript com base em seletores CSS do HTML*/
      var nota = document.getElementById("nota").value

      if (selecionado.value == "urgente") { //se o radiobutton estiver selecionado mostra qual cor
        var novo = document.createElement("li")
        novo.class="ite"
        novo.innerText=nota 
        var div=document.getElementById("elementoU")
        div.appendChild(novo)
        
      } 
       if(selecionado.value == "naourgente"){
        var novo = document.createElement("li")
        novo.class="ite"
        novo.innerText=nota 
        var div=document.getElementById("elementoN")
        div.appendChild(novo)
       }
    }


    function apagarTodasU(){
        var p=document.getElementById("elementou")
       if(p){
                p.remove()
            }
            else{
                alert("Não há notas para apagar")
            }
        }
    function apagarTodasN(){
        var p = document.getElementById("elementon")

            if(p){
                p.remove()
            }
            else{
                alert("Não há notas para apagar")
            }
        }
    
        function apagartudo(){
            var pu=document.getElementById("elementou")
            var pn=document.getElementById("elementon")

            if(pu || pn){
                pu.remove()
                pn.remove()

            }
            else{
                alert("Não há notas para apagar")
            }
        }
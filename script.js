/*Pra fazer a foto mudar da Seção Manual do Viajante*/

var imgAtual = "imagens/travel-concept-with-landmarks.jpg";
var imgAnterior = "imagens/traveling-items-arrangement-top-view.jpg";


function mudar(){
    document.getElementById("figura").src = imgAtual;
    let troca = imgAtual;
    imgAtual = imgAnterior;
    imgAnterior = troca;

   
}


/*Esse JavaScript foi feito de acordo com o vídeo, do youtube, do Prof. Luis Tavares*/
const video = document.getElementById("video");
const iniciarBTN = document.getElementById("iniciar");
const vieus = document.getElementById("visualizacao");


let live;
let almentaVius = 1;

iniciarBTN.addEventListener("click", async ()=>{
  try{
  live = await navigator.mediaDevices.getUserMedia({video: true});
  
  
  video.srcObject = live;
  iniciarBTN = true;
  } catch (error){
    console.log("erro ao acessa a sua câmera", error);
    
  }
});

function incrementaVisualizacao() {
  almentaVius++;
  almentaVius++;
  visualizacao.innerHTML = almentaVius ;
}

setInterval(incrementaVisualizacao, 1000); // Chama a função a cada 1 segundo


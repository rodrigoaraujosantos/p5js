let marioBros;
let marioBrosPrincesa;
let marioBrosTijolo;
let marioBrosThanks;

const tamanho = 64;
const velocidade = 64;

let rowX = 0;
let rowY = 0;

let btnRecomecar;
let btnComecar;

let comecar = false;



function setup() {
  createCanvas(576, 576);
  marioBros = loadImage('marioBros.png');
  marioBrosPrincesa = loadImage('marioBrosPrincesa.png');
  marioBrosTijolo = loadImage('marioBrosTijolo.png')
  marioBrosThanks = loadImage('marioBrosThanks.png')
}

function reset(){
  rowX = 0;
  rowY = 0;
  btnRecomecar.remove();
  loop();
}

function comecarJogo(){
  btnComecar.remove();
  comecar = true;
  loop();
}

function draw() {
  if(comecar){
    background(220);
  for (let x = 0; x < 9; x++){
    for (let y = 0; y < 9; y++){
      image(marioBrosTijolo, x * tamanho, y * tamanho, tamanho, tamanho)
    }
  }
  image(marioBrosPrincesa, 512, 512, tamanho, tamanho);
  
  image(marioBros, rowX, rowY, tamanho, tamanho);
  
  if (rowX < 0){
    rowX = 0
  }
  
  if (rowX > tamanho * 8){
    rowX = tamanho * 8
  }
  
  if (rowY < 0){
    rowY = 0
  }
  
  if (rowY > tamanho * 8){
    rowY = tamanho * 8
  }
  
  if (rowX === 512 && rowY === 512){
    image(marioBrosThanks, 192, 192, 192, 192);
    textSize(48);
    textStyle(BOLD);
    text("Thanks!!!", 200, 188);
    
    btnRecomecar = createButton('Recomeçar');
    btnRecomecar.mousePressed(reset);
    btnRecomecar.style('font-size', '16px');
    btnRecomecar.position(240, 400);
    noLoop();
    }
    
  } else {
    rect(20, 100, 650, 200);
    textSize(24);
    textStyle(BOLD);
    text('Encontre a Princesa usando as setas do teclado...', 20, 200);
    btnComecar = createButton('Começar');
    btnComecar.mousePressed(comecarJogo);
    btnComecar.style('font-sixe', '16px');
    btnComecar.position(250, 250);
    noLoop();
  }
}


function keyPressed(){
  if (keyIsDown(UP_ARROW)){
    rowY -= velocidade;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    rowY += velocidade;
  }
  
  if (keyIsDown(LEFT_ARROW)){
    rowX -= velocidade;
  }
  
  if (keyIsDown(RIGHT_ARROW)){
    rowX += velocidade;
  }
}
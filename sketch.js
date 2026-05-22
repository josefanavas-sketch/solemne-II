
function setup() {
  createCanvas(400, 400); 
  
  // Colores base de los ojos
  cafe = color(113, 97, 91);
  negro = color(0);
  blanco = color(255);
  verde = color(75, 205, 91);
  azul = color(115, 165, 195);
  yellow = color(215, 165, 70); // Amarillo/Naranjo
  
  // Colores de fondo con contraste 
  naranjo = color(255, 128, 0);   // Izquierda superior 
  morado = color(128, 0, 128);    // Izquierda inferior 
  rojoInt = color(255, 80, 80);   // Derecha superior 
  azulMar = color(0, 0, 128);     // Derecha inferior
  
}

function draw() {
  // cambiar el color del fondo
  if (mouseX < 200 && mouseY < 200) {
    colorFondo = naranjo;
  } else if (mouseX >= 200 && mouseY < 200) {
    colorFondo = morado;
  } else if (mouseX < 200 && mouseY >= 200) {
    colorFondo = rojoInt;
  } else {
    colorFondo = azulMar;
  }

  background(colorFondo); 

  // Repetición de los ojos por toda la pantalla
  for (let y = 40; y < height; y += 80) { 
    for (let x = 40; x < width; x += 80) {
      dibujarOjo(x, y); 
    }
  }
}

// Función base para construir cada ojo individual
function dibujarOjo(pos_x, pos_y) {
  strokeWeight(0.1);
  
  // 1. Capa blanca (fija)
  fill(blanco);
  ellipse(pos_x, pos_y, 67, 67);
  
  // cambio de color de pupila
  let colorIris;
  if (mouseX < 200 && mouseY < 200) {
    colorIris = verde;
  } else if (mouseX >= 200 && mouseY < 200) {
    colorIris = cafe;
  } else if (mouseX < 200 && mouseY >= 200) {
    colorIris = azul;
  } else {
    colorIris = yellow;
  }

  
  fill(colorIris);
  ellipse(pos_x, pos_y, 57, 57);
  
  
  let angulo = atan2(mouseY - pos_y, mouseX - pos_x);
  let distanciaMax = 9; //tamaño pupila que no salga del centro.
  let pupilaX = pos_x + cos(angulo) * distanciaMax;
  let pupilaY = pos_y + sin(angulo) * distanciaMax;
 
  
  let d = dist(mouseX, mouseY, pos_x, pos_y);
 
  
  let tamanoPupila = map(d, 0, 400, 8, 40, true);
  //40 es suficiente para no interferir con la forma propia
 //8 para una interencion mas notoria
  
  //pupila negra 
  fill(negro);
  ellipse(pupilaX, pupilaY, tamanoPupila, tamanoPupila);
}
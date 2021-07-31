var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var paletajs = document.getElementById('paleta');
var grillajs = document.getElementById('grilla-pixeles');
var indicadorColor = document.getElementById('indicador-de-color');
var mouseApretado = false;
var superheroesBizarros = [batman, flash, wonder, invisible];

$("#borrar").click(function (){
  $(".grilla-pixel").animate({'backgroundColor': 'white'}, 500);
});

$("#guardar").click(function (){
  guardarPixelArt();
});

$("#random").click(function (){
  groovie();
});

$("img").click(function () {
 var personaje = this.id;
  switch(personaje) {
    case 'batman': cargarSuperheroe(batman);
    break;
    case 'wonder': cargarSuperheroe(wonder);
    break;
    case 'flash': cargarSuperheroe(flash);
    break;
    case 'invisible': cargarSuperheroe(invisible);
    break;
  }
});

$("#bizarro").click(function(){
  var colorRandomUno = nombreColores[Math.floor(Math.random()*(nombreColores.length))];
  var colorRandomDos = nombreColores[Math.floor(Math.random()*(nombreColores.length))];

  $(this).css('background-color', colorRandomUno); // cambia color de boton 'bizarro'
  var aleatorio = superheroesBizarros[Math.floor(Math.random()*(superheroesBizarros.length))]
  cargarSuperheroe(aleatorio);

  var $bizarros = $("#grilla-pixeles div");

  for (var i = 0; i <1751; i++) {
    
    var pixel =  $bizarros[i].style.backgroundColor;
      switch(pixel) {
      case 'rgb(192, 192, 192)': $bizarros[i].style.backgroundColor = colorRandomUno;
      break;
      case 'rgb(25, 25, 112)': $bizarros[i].style.backgroundColor = colorRandomDos;
      break;
      case 'rgb(128, 0, 0)': $bizarros[i].style.backgroundColor = colorRandomUno;
      break;
      case 'rgb(255, 215, 0)': $bizarros[i].style.backgroundColor = colorRandomDos;
      break;
      case 'rgb(218, 165, 32)': $bizarros[i].style.backgroundColor = colorRandomDos;
      break;
      case 'rgb(220, 20, 60)': $bizarros[i].style.backgroundColor = colorRandomUno;
      break;
  }
  }
});

var generarPaleta = function (array) {
  for (i=0; i<array.length; i++) {
    var color = array[i];
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'color-paleta';
    nuevoDiv.style.backgroundColor = color;
    paletajs.appendChild(nuevoDiv);
  }
} 

var generarPixeles = function () {
  for (i=0; i<1751; i++) {
    var nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'grilla-pixel';
    grillajs.appendChild(nuevoDiv);
  }
}

var groovie = function () {
  var $randomColors = $("#grilla-pixeles div");
  for (var i = 0; i <1751; i++) {
    $randomColors[i].style.backgroundColor = nombreColores[Math.floor(Math.random()*(nombreColores.length))];
  }
}


paletajs.addEventListener("click", modificarIndicador);

function modificarIndicador(e){
  var nuevoColor = e.target.style.backgroundColor;
  indicadorColor.style.backgroundColor = nuevoColor;
}

grillajs.addEventListener("mousedown", mouse);
grillajs.addEventListener("mouseup", mouse);
grillajs.addEventListener("mousedown", pintar);
grillajs.addEventListener("mouseover", pintar);

function mouse (){
  mouseApretado = !mouseApretado;
}

function pintar(e){
  var colorPintar = indicadorColor.style.backgroundColor;
  if (mouseApretado){
  e.target.style.backgroundColor = colorPintar;
  }
}

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorColor.style.backgroundColor = colorActual;


  })
);

generarPaleta(nombreColores);
generarPixeles();
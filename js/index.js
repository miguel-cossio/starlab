// Función para cerrar la barra de navegación cuando se hace clic en un enlace
$('.navbar-nav a').on('click', function () {
  // Si el elemento con la clase "navbar-collapse" tiene la clase "show",
  // se cierra la barra de navegación.
  if ($('.navbar-collapse').hasClass('show')) {
    $('.navbar-collapse').collapse('hide');
  }
});

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  // var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// Open the PIN
function openPin() {
  document.getElementById("myPin").style.display = "block";
}

// Close the PIN
function closePin() {
  document.getElementById("myPin").style.display = "none";
}

var pinIndex = 1;
showPins(pinIndex);

// Next/previous controls
function plusPins(n) {
  showPins(pinIndex += n);
}

// Thumbnail image controls
function currentPin(n) {
  showPins(pinIndex = n);
}

function showPins(n) {
  var i;
  var pins = document.getElementsByClassName("myPinitem");
  var puntos = document.getElementsByClassName("demo");
  if (n > pins.length) {pinIndex = 1}
  if (n < 1) {pinIndex = pins.length}
  for (i = 0; i < pins.length; i++) {
    pins[i].style.display = "none";
  }
  for (i = 0; i < puntos.length; i++) {
    puntos[i].className = puntos[i].className.replace(" active", "");
  }
  pins[pinIndex-1].style.display = "block";
  puntos[pinIndex-1].className += " active";
  captionText.innerHTML = puntos[pinIndex-1].alt;
}

var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
    // ... more custom settings?
});
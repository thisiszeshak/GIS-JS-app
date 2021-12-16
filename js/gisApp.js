var x = document.getElementById("demo");
var listaPuntosIndividuales = new clsListaPuntos(1);
var listaPuntosTrayecto = new clsListaPuntos(2);


////////////////////////////////////////////////////////////////////
// Almacenar puntos //
////////////////////////////////////////////////////////////////////
function guardarPuntoIndividual() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

////////////////////////////////////////////////////////////////////
// Trayecto //
////////////////////////////////////////////////////////////////////
function iniciarTrayecto(){

}

////////////////////////////////////////////////////////////////////
// Ubicación actual //
////////////////////////////////////////////////////////////////////
function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  var div = document.getElementById("myDiv");
  div.className = "coordenadas";
}

////////////////////////////////////////////////////////////////////
// Control de errores //
////////////////////////////////////////////////////////////////////
function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "Se requieren permisos para acceder a la ubicación"
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Información de ubicación no disponible"
      break;
    case error.TIMEOUT:
      x.innerHTML = "Time out"
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "Ha ocurrido un error inesperado"
      break;
  }

}
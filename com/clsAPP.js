class clsAPP {
    constructor() {
        console.log("app iniciada");
    }

    Start() {

    }

    Stop() {

    }

    fechaActual() {
        var fechaCompleta = new Date();
        var fecha = fechaCompleta.getFullYear() + '-' + (fechaCompleta.getMonth() + 1) + '-' + fechaCompleta.getDate();
        document.getElementById("fecha").innerHTML = "Adrià Rivero, " + fecha;
    }

    ////////////////////////////////////////////////////////////////////
    // Almacenar puntos //
    ////////////////////////////////////////////////////////////////////
    guardarPuntoIndividual() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
            alert("Ubicación guardada");
            /*
            Swal.fire({
              icon: 'success',
              title: '¡Ubicación guardada!',
              text: 'hola'
            })
            */

        } else {
            alert("No se ha podido guardar la ubicación")
            /*
            Swal.fire({
              icon: 'error',
              title: 'No se ha podido accceder a la ubicación'
            })
            */
        }
    }

    ////////////////////////////////////////////////////////////////////
    // Trayecto //
    ////////////////////////////////////////////////////////////////////
    guardarTrayecto() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
        } else {
            pos.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    ////////////////////////////////////////////////////////////////////
    // Ubicación actual //
    ////////////////////////////////////////////////////////////////////
    showPosition(position) {
        var pos = document.getElementById("coords")
        pos.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
        var div = document.getElementById("myDiv");
        div.className = "coordenadas";
        console.log("Latitude: " + position.coords.latitude +
            " Longitude: " + position.coords.longitude);
    }

    ////////////////////////////////////////////////////////////////////
    // Control de errores //
    ////////////////////////////////////////////////////////////////////
    showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                pos.innerHTML = "Se requieren permisos para acceder a la ubicación"
                break;
            case error.POSITION_UNAVAILABLE:
                pos.innerHTML = "Información de ubicación no disponible"
                break;
            case error.TIMEOUT:
                pos.innerHTML = "Time out"
                break;
            case error.UNKNOWN_ERROR:
                pos.innerHTML = "Ha ocurrido un error inesperado"
                break;
        }

    }

}


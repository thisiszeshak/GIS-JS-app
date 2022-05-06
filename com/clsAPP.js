class clsAPP {
    constructor() {
        console.log("app iniciada");
        this.trayectoIniciado;
        this.tick = 0;
        this.listaPuntosIndividuales = new clsListaPuntos("1");
        this.listaPuntosTrayecto = new clsListaPuntos("2");
    }


    ////////////////////////////////////////////////////////////////////
    // Trayecto //
    ////////////////////////////////////////////////////////////////////
    guardarTrayecto() {
        if (this.tick % 1000 == 0) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPositionTrayecto, this.showError);
            } else {
                pos.innerHTML = "Tu buscador no soporta la geolocalización.";
            }
        }
        if (this.tick > 10000000000) {
            this.tick = 0;
        }
        this.tick++;
        this.trayectoIniciado = window.requestAnimationFrame(this.guardarTrayecto.bind(this));
    }

    detenerTrayecto() {
        window.cancelAnimationFrame(this.guardarTrayecto.bind(this.trayectoIniciado))
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
        console.log("/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/")
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPositionIndividual, this.showError);
            console.log("Ubicación guardada correctamente");
        } else {
            console.log("No se ha podido guardar la ubicación")
        }
    }


    ////////////////////////////////////////////////////////////////////
    // Ubicación actual //
    ////////////////////////////////////////////////////////////////////
    showPositionIndividual(position) {
        var punto = new clsPunto(Math.floor(Math.random() * 100000) + 1, position.coords.latitude, position.coords.longitude);
        this.listaPuntosIndividuales.addPoint(punto);
    }

    showPositionTrayecto(position) {
        var punto = new clsPunto(Math.floor(Math.random() * 100000) + 1, position.coords.latitude, position.coords.longitude);
        this.listaPuntosTrayecto.añadirUbicacion(punto);
    }


    mostrarPuntos(lista) {
        var pos = document.getElementById("listaPuntos");
        var i = 0
        while (i < lista.length - 1) {
            var div = document.createElement("div");
            var p = document.createElement("p");
            p.innerText = "Latitudd: " + lista[i].px + " Longitud: " + lista[i].py;
            div.appendChild(p);
            pos.appendChild(div);
            i++;
        }
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


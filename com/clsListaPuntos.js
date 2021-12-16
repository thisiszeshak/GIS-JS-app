class clsListaPuntos{
    constructor(id){
        this.id = id;
        this.listaPuntos = [];
        console.log("lista de puntos creada: " + this.id)
    }
    guardarPunto(lista){
        var punto = new clsPunto(10, 7);
        lista.push(punto);
    }
}
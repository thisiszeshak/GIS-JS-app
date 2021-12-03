class clsListaPuntos{
    constructor(){
        this.listaPuntos = [];
    }
    guardarPunto(lista){
        var punto = new clsPunto(10, 7);
        this.listaPuntos.push(punto);

    }
}
class clsListaPuntos{
    constructor(){
        this.listaPuntos = [];
    }
    guardarPunto(lista){
        var punto = new clsPunto()
        this.listaPuntos.push(punto);
    }
}
class clsListaPuntos {
    constructor(id) {
        this.id = id;
        this.listaPuntos = [];

        console.log("Lista de puntos creada: " + this.id);
        return this;
    }

    addPoint(punto) {
        this.listaPuntos.push(punto);
        console.log(this.listaPuntos);
    }
}
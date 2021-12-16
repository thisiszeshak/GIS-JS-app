class clsAjax {

    constructor(fichero,app) {
        this.xhttp = new XMLHttpRequest();
        this.event = new Event('clsAjax-onLoad'); //Add document.addEventListener('clsAjax-onLoad', this.MYMETHOD.bind(this), false); to the main class for this to work.
        this.app = app;
        this.fichero = fichero;
        this.xhttp.addEventListener("load", this._onLoad.bind(this), false); 
        this.xhttp.addEventListener("error", this._onError.bind(this), false);
        this.xml = null;
        this.Execute();
        
    }
/////////////////////////////////////////////////////////////////

    Execute(){
        this.xhttp.open('GET', this.fichero, true);
        this.xhttp.send(null);
    }

/////////////////////////////////////////////////////////////////

    _onLoad() {
        
        if (this.xhttp.readyState === this.xhttp.DONE) {
            if (this.xhttp.status === 200) {
                this.xml = this.xhttp.responseXML;
                this._dispatchEvent();
            }
        }
    };

/////////////////////////////////////////////////////////////////

    _dispatchEvent(){ 
        document.dispatchEvent(this.event);


    }

    
/////////////////////////////////////////////////////////////////


    GetValue(pnodeName){ //Call this method from a method on the main class to get xml tag (pnodaName) content.
        if (this.xml == null){
            return;
        }
        return this.xml.getElementsByTagName(pnodeName)[0].childNodes[0].nodeValue;
    }

/////////////////////////////////////////////////////////////////   


    _onError(){
        console.log("Document not loaded");
    }        


}
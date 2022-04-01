window.onload = function () {
  if (document.readyState == "complete") {
    app = new clsAPP(window, this.document);
    app.fechaActual();
  }
}
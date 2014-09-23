function reemplazarImagenesFallidas(){
  var imgsFallidas = document.querySelectorAll("img");
  if (imgsFallidas != null) {                        
      for (i = 0; i < imgsFallidas.length; i++) {
          imgsFallidas[i].onerror = function (evt) { this.src = '/imagenes/IMAGE_ERROR-NO_PHOTO.gif' };
      };
  };
};

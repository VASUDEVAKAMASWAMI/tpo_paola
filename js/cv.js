    function validar(nombre, apellido, email, asunto, mensaje){
        let formulario = document.getElementById('form1');
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.value.match(validRegex)&&(nombre.value.length!==0)&&(apellido.value.length!==0)&&(asunto.value.length!==0)&&(mensaje.value.length!==0)) {
        /* codigo para guardar mensajes en el archivo cv.txt*/
        const blob = new Blob([`nombre: ${nombre.value}\n`,`apellido: ${apellido.value}\n`,`email: ${email.value}\n`,`asunto: ${asunto.value}\n`,`mensaje: ${mensaje.value}\n`], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "tumensaje.txt");
        /* mensaje enviado*/
          alert("Mensaje enviado");
        formulario.reset();
        return true;}
      else {
        alert("Es necesario completar todos los campos y brindar una dirección de email válida");
        return false;
    }
    }
/* slide show carousel */
    let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
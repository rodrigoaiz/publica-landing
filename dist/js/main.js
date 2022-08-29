
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('header').classList.add('header-down');
      } else {
        document.getElementById('header').classList.remove('header-down');
      }
  });
});

$(function() {
  $(".contacto__form__theform").submit(function(e){
    e.preventDefault();

    if( $("#fname").val() &&  $("#femail").val() && $("#fmessage").val()) {
      $.post( "contacto.php",$(".contacto__form__theform").serialize(), function( data ) {

        if (data.envio == "exito"){

          Swal.fire({
            title: '¡Éxito!',
            text: 'Se ha enviado tu mensaje, en breve nos pondremos en contacto contigo.',
            icon: 'success',
            confirmButtonText: 'Ok'
          });

          $(".contacto__form__theform").trigger('reset');

        }else if(data.envio == "error"){

          Swal.fire({
            title: '¡Error!',
            text: data.error_message,
            icon: 'error',
            confirmButtonText: 'Cerrar'
          });

        }
      }, "json");
    }else{
      Swal.fire({
        title: '¡Error!',
        text: 'Debes de rellenar todos los campos',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      });
    }
  });
});
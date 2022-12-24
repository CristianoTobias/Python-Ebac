$(document).ready(function () {
  $('#password').mask("00000000")  
  $.validator.addMethod(
    "validaEmail",
    function (value) {
      var regex =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
      return regex.test(value);
    },
    "E-mail inválido!"
  );
  $("#formulario").validate({
    //https://pt.stackoverflow.com/questions/162002/como-mudar-a-cor-do-input-usando-o-jquery-validate
    errorClass: "my-error-class",
    validClass: "my-valid-class",

    rules: {
      email: {
        email: true,
        required: true,
        validaEmail: true,
      }
      
    },
    messages: {
      email: {
        email: "E-mail inválido!",
        required: "E-mail inválido!",
      },
      password: "Digite uma senha com 8 digitos!",
      politica: "Obrigatório"
      
    },

    submitHandler: function (form) {
      form.submit();
      alert("enviado com sucesso");
      $("#formulario").each(function () {
        this.reset();
      });
    },
  });
});

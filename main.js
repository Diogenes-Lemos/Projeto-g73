$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');

    $('#nome').on('input', function() {
        var nomeValue = $(this).val();
        if (/^[a-zA-ZÀ-ÿ\s]+$/.test(nomeValue)) {
            $('#icon_ok_nome').css('display', 'flex');
            $('#nome_erro').css('display', 'none');
        } else {
            $('#icon_ok_nome').css('display', 'none');
            $('#nome_erro').css('display', 'flex');
        }
    });

    $('#email').on('input', function() {
        var emailValue = $(this).val();
        if (/^[a-zA-Z0-9@.]+$/.test(emailValue)) {
            $('#icon_ok_email').css('display', 'flex');
            $('#email_erro').css('display', 'none');
        } else {
            $('#icon_ok_email').css('display', 'none');
            $('#email_erro').css('display', 'flex');
        }
    });

    $('#nome, #email').on('input', function() {
        var nomeValue = $('#nome').val();
        var emailValue = $('#email').val();
        var nomeValido = /^[a-zA-ZÀ-ÿ\s]+$/.test(nomeValue);
        var emailValido = /^[a-zA-Z0-9@.]+$/.test(emailValue);
        if (nomeValido && emailValido) {
            $('#button_sucess').css('display', 'flex');
            $('#button_error').css('display', 'none');
        } else {
            $('#button_sucess').css('display', 'none');
            $('#button_error').css('display', 'flex');
        }
    });

})
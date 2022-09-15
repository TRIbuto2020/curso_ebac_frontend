$(document).ready(function() {

    jQuery.validator.addMethod("fullname", function(value, element) {
        if (/^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(value)) {
            return true;
        } else {
            return false;
        };
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(11) 98765-4321'
    });
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    });
    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true,
                fullname: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            endereco: {
                required: true,
                fullname: true,
            },
            cep: {
                required: true,
            },
        },
        messages: {
            email: {
                required: 'Esse campo é obrigatório.',
            },
            nome: {
                required: 'Esse campo é obrigatório.',
                fullname: 'Por favor, insira seu nome e sobrenome.',
            },
            telefone: 'Esse campo é obrigatório.',
            cpf: 'Esse campo é obrigatório.',
            endereco: {
                required: 'Esse campo é obrigatório.',
                fullname: 'Por favor, insira seu endereço completo.',
            },
            cep: 'Esse campo é obrigatório.',
        }
    })
})
$(document).ready(function() {
    $('#open-form').click(function() {
        $('form').slideDown();
        $('#open-form').fadeOut(0);
        $('#close-form').fadeIn(0);
    })

    $('#close-form').click(function() {
        $('form').slideUp();
        $('#open-form').fadeIn(0);
        $('#close-form').fadeOut(0);
        $('#nova-tarefa').val('');
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        // const novaId = novaTarefa.replace(/\s/g, '');
        const novaId = novaTarefa.replace(/[\\\[\]'"\s`${}%&*()!?@#~^¨´:;=/+.,]+/g, '');
        const novoItem = $(`<li style="display: none" class="${novaId} tarefa" onClick="cortar('.${novaId}')">${novaTarefa}</li>`);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#nova-tarefa').val('');
    })

    $('.all-done').click(function(){
        $('li').addClass("feitoTarefa");
    })

    $('.un-done').click(function(){
        $('li').removeClass("feitoTarefa");
    })
    
})

function cortar(alvo){
    if ($(alvo).hasClass("feitoTarefa")) {
        $(alvo).removeClass("feitoTarefa");
    } else {
    $(alvo).addClass("feitoTarefa");
    }
}
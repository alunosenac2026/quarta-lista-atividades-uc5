$(document).ready(function () {


    // ==========================================
    // ATIVIDADE 1
    // BOTÃO REVELADOR
    // ==========================================

    $("#btnRevelar").click(function () {

        $("#textoRevelado").fadeIn(800);

    });



    // ==========================================
    // ATIVIDADE 2
    // ANIMAÇÃO DE DESLIZE
    // ==========================================

    $("#btnDeslizar").click(function () {

        $("#retangulo").animate({

            left: "calc(100% - 100px)"

        }, 1000);

    });



    // ==========================================
    // ATIVIDADE 3
    // AJUSTE DE TAMANHO
    // ==========================================

    $("#btnAumentar").click(function () {

        $("#imagemAumentar").animate({

            width: "600px"

        }, 800);

    });



    // ==========================================
    // ATIVIDADE 4
    // ANIMAÇÃO DE IMAGENS
    // ==========================================

    $(".imagem-zoom img").mouseenter(function () {

        $(this).animate({

            width: "120%",

            marginLeft: "-10%",

            marginTop: "-10%"

        }, 300);

    });


    $(".imagem-zoom img").mouseleave(function () {

        $(this).animate({

            width: "100%",

            marginLeft: "0",

            marginTop: "0"

        }, 300);

    });



    // ==========================================
    // ATIVIDADE 5
    // TEMA CLARO
    // ==========================================

    $("#btnClaro").click(function () {

        $("body").removeClass("tema-escuro");

    });



    // ==========================================
    // ATIVIDADE 5
    // TEMA ESCURO
    // ==========================================

    $("#btnEscuro").click(function () {

        $("body").addClass("tema-escuro");

    });


});
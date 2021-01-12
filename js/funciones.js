var player;
var ytplayer;

var swiper = new Swiper('#link-Inicio__slider', {
   /* centeredSlides: true,*/
    spaceBetween: 30,/* Por Default en la api distancia entre las diapositivas en pixeles*/
    loop: true,/* viene en los parametros de la api para que alterminar continue cambiando al primer slider en bucle o ciclo*/
     effect : 'fade',/* Viene en los parametros de la api es un desvanecido el efecto , porque si se deja el de por default se ve cuando recorre la diapositiva siguiente */
      
     /* ---------/ Esto viene por default en la api /-------*/
      autoplay: {
        delay: 2500, /* 2500 milisegundos son 2.5 segundos la duracion de cada diapositiva*/
        disableOnInteraction: false,/* Estando en falso la reproduccion automatica no se deshabilitara despues de lasinteracciones con el usuario*/
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
     onSlideChangeStart: function(swiper) 
    {
        var isVideo = swiper.slides[swiper.previousIndex].querySelector('.video-container');
        if (isVideo) {
            YT.get(isVideo.querySelector('iframe').id).stopVideo()
        }
    } 
}); 
    swiper.autoplay.start(); 


/* --------- / cuando pasa el mouse sobre el elemento aparece el otro encima /------ */
$(".container-sec > section").mouseenter(function(){
    var idSec = $(this).attr("id");
    idSec = "#" + idSec + ">div>section"  
    $(idSec).animate({ "top": "-=400px" }, 200 );
}).mouseleave(function() {
    var idSec = $(this).attr("id");
    idSec = "#" + idSec + ">div>section"
    $(idSec).animate({ "top": "+=400px" }, "slow" );
}); 

$(".container-sec_2 > section").mouseenter(function() {
    var idSec = $(this).attr("id");
    idSec = "#" + idSec + ">div>section"
    $(idSec).animate({ "top": "-=400px" }, 200 );
}).mouseleave(function() {
    var idSec = $(this).attr("id");
    idSec = "#" + idSec + ">div>section"
    $(idSec).animate({ "top": "+=400px" }, "slow" );
});


/*----------/ Boton menu responsive hamburguesa /-----------*/
$("#header-btnMenuResponsive__btn").click(function() { 
    if($(this).attr('class') == 'ON'){
        $(this).removeClass('ON').addClass('OFF');
        $('.header-menu').fadeIn();/* Para mostrar el menus*/
    }
    else {
        $(this).removeClass('OFF').addClass('ON');
        $('.header-menu').fadeOut();
    } 
});  
    servicios(); 
    paquetes();
  

function servicios() 
{ 
    $.ajax({
        method: 'POST',
        url: 'servicios_img.php', 
        data: {peticion: "traer_imagenes"}, 
        dataType:'json'
    }).done( resultado => {  
        console.log(resultado);
           for(var i=0;i<resultado.length;i++){ 
           $("#container-servicios").append(
            `
                <section onclick=InfoServPaq('Servicio_${resultado[i].id_servicio}') id='Servicio_${resultado[i].id_servicio}' > 
                    <a> ${resultado[i].ser_titulo} </a> 
                </section>
            `
           )
           $( `#Servicio_${resultado[i].id_servicio}`).css("background-image","url('img/"+resultado[i].ser_source_principal+"')")
        } 
    }); 
}
 

function paquetes() 
{
    $.ajax({
        url: "paquetes_img.php",
        method: "POST",
        data: { peticion: "traer_paquetes"}
    }).done(function(res) { 
        $.each(JSON.parse(res), function(key, value){ 
            $("#container-paquetes").append(
                "<section onclick=InfoServPaq('Paquete_"+ value.id_paquete+"') id='Paquete_"+ value.id_paquete+"' class='conatine-paquetes'>" +
                    "<a>"+value.paq_titulo+"</a>" +
                "</section>"
            );
            document.getElementById('Paquete_'+ value.id_paquete).style.backgroundImage = "url('img/" + value.paq_sorce + "')";
        });
    });
}


function InfoServPaq(id)
{  
    console.log(id);
    id = id.split("_");  
    var spurl = ''; 
    var p = '';  
    switch (id[0])  
    { 
        case 'Servicio':
            spurl = 'servicios_img.php'; 
            p = 'traer_infoservicio';  
            break;
        case 'Paquete':
            spurl = 'paquetes_img.php';
            p = 'traer_infopaquete';
            break;
    }

    $.ajax({
        url:spurl, 
        method: "POST", 
        dataType:'json',
        data:{peticion:p, idsp:id[1]},  
    }).done(function(res){   
     var result =  res;  
    $('.Modal2-title>strong').empty(); 
    $(".Modal2-text").empty();

    switch (id[0]) { 
        case 'Servicio':
            $.each(res, function(key, value){ 
                $("#imgModal2").attr("src","img/" + value.ser_source_secundario); 
                $('.Modal2-title>strong').text(value.ser_titulo); 
                if (value.ser_descripcion.indexOf("@") == -1) 
                {
                    $.each(value.ser_descripcion.split("."), function( index, value ) { 
                        if (value.length > 10) {       
                            $(".Modal2-text").append(
                                "<p>" + value + ".</p>"
                            ); 
                        }
                    });
                }
                    else  
                    {
                        var e = ""; 
                        var t = value.ser_descripcion.length; 
                        var l = value.ser_descripcion.indexOf(":") + 1; 

                        var f = t - l;
                        var m = l - 9; 
                        var e = value.ser_descripcion.substring(l,t); 
                        var newtxt = value.ser_descripcion.substring(0,m); 
                        $.each(newtxt.split("."), function( index3, value3 ) { 
                           
                            if (value3.length > 10) {  
                                $(".Modal2-text").append( 
                                    "<p>" + value3 + ".</p>"
                                );
                            }
                        }); 
                        $(".Modal2-text").append(
                            "<p><strong>Contacto:" + e + "</strong></p>"
                        );
                    }
                });
                break;

            case 'Paquete': 
                $(".Modal2-text").append("<section id='ContainerPaquetes'></section>"); 
                $("#imgModal2").attr("src","img/" + result['informacion'].paq_source2); 
                $('.Modal2-title>strong').text(result['informacion'].paq_titulo); 
                $.each(result['paquetes'], function(key, value) {
                    var arreglo_especificaciones = value.especificaciones.split(","); 
                    console.log(arreglo_especificaciones);
                    var lista = "<ul id='ContainerPaquetes_serv_"+value.id_estudio_especificacion+"'><li class='title_Paquetes'><strong>"+value.est_titulo+"</strong></li>"; 
                    $.each(arreglo_especificaciones, function(index, esp) {  
                        lista+= "<li>"+esp+"</li>"; 
                    });
                    lista+= "</ul>"; 
                    $("#ContainerPaquetes").append(lista); 

                });

                var num = result['informacion'].paq_precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/,'');

                $(".Modal2-text").append("<span class='Modal2-precio'><strong>$ "+num+"</strong></span>");
                break;
        } //llave del switch
    }); 

    $('#ModalMax2').fadeIn();
    $("body").css("overflow", "hidden"); 
    var divs = document.getElementsByClassName("title_Paquetes").length;
    if (divs >= 2) {
        $(".Modal2-text").css("overflow-y", "scroll");
    }
    else if (divs == 1) {
        var p = $(".Modal2-text>section>ul").height() + $(".Modal2-precio").height();
        if ($(".Modal2-text").height() <= p) {
            $(".Modal2-text").css("overflow-y", "scroll");
        }
        else {
            $(".Modal2-text").css("overflow-y", "auto");
        }
    }
    else {
        if ( $(".Modal2-text").height() <= $(".Modal2-text>p").height()) {
            $(".Modal2-text").css("overflow-y", "scroll");
        }
        else {
            $(".Modal2-text").css("overflow-y", "auto");
        }
    }
     
        $('.btn_close').click(function() {
        $('#ModalMax2').fadeOut();
        $("#imgModal2").attr("src","");
        $(".Modal2-text").empty();
        $("body").css("overflow", "auto");

    });  
} 
 

var idanterior;
$(".btn-scroll").click(function() { 
    var idpos = $(this).attr("data-id");
     
    idpos ="#"+idpos; 
    
    idposactual= $(idpos).position().top; 
    $("html, body").animate({ 
                scrollTop:idposactual 
    }, 1000);  
    // var id = $(this).attr("id");//Obtiene el id sin el hastag
    // id = "#"+id;
    
    // $(id).css("color","#BBA73A");
    //   idanterior = id;
    //   console.log(id)
    // console.log(idanterior);
});
 

$(window).scroll(function() {
    var powin = Math.floor($(window).scrollTop());
    var podivini = (Math.floor($("#link-Servicios").position().top)) - 10;
    var podivfin = Math.floor($("#link-Contacto").position().top);
    if (powin >= podivini && powin < podivfin) {
        $(".infoSolicitud").fadeIn();
    }
    else {
        $(".infoSolicitud").fadeOut();
    }
});

 

$(()=> {
    $('input:radio[name=exampleRadios]').change(function() {
        var valor;
        valor = this.value;
        $(".services-reserva").html(`
            <div class="">${valor}</div>
        
        `);
        // if (this.value == 'cortecaballero') {
        //       valor = this.value;
        //     console.log(valor);
        //     $(".services-reserva").html(valor);
        // }
        // else if (this.value == 'expresscorte') {
            
        //       valor = this.value;
        //       console.log(valor);
        //     $(".services-reserva").html(valor);
        // }
    });
});

 
var player, value, ytplayer;

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
           for(var i=0;i<resultado.length;i++){ 
           $("#container-servicios").append(
            `
                <section onclick=InfoServPaq('Servicio_${resultado[i].id_servicio}') id='Servicio_${resultado[i].id_servicio}' > 
                    <a style='text-decoration:none;color:white'> ${resultado[i].ser_titulo} </a> 
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
                    "<a style='text-decoration:none;color:white'>"+value.paq_titulo+"</a>" +
                "</section>"
            );
            document.getElementById('Paquete_'+ value.id_paquete).style.backgroundImage = "url('img/" + value.paq_sorce + "')";
        });
    });
}


function InfoServPaq(id)
{  
     
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
                                "<article class='serpaqtextos'>" + value + ".</article>"
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
                                    "<article class='serpaqtextos'>" + value3 + ".</article>"
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

    $('input:radio[name=serviciosradios]').change(function() {/*detecta seleccion de radio y muestra detalle*/
         
        let valor = this.value; 
        let cadena = valor.split("$");
        let texto = cadena[0];
        let precio = cadena[1];
            $(".services-reserva").html(`
            <div class="mt-2">
                <i class="fas fa-gift icono-servicio"></i><span class="nombre-detalles"> ${texto}</span><br>
                <span class="precios-servicios">$ ${precio}</span>
                
            </div> 
        `); 
        $(".alerta").remove();
    });
    $('input:radio[name=personalradios]').change(function() { 
        let value = this.value;
        let string = value.split("$");
        let textopersonal = string[0];
        personal(textopersonal); 
    }); 
     
    /* ---------/Boton anterior /-------- */
    $('#btnAnt').click(function()
	{
		var size = $('.slider').find('.s_element').length;//3
		 
		$('.slider').find('.s_element').each( function(index,value){// 0 y elemento1 html 
            
            
            if($(value).hasClass('s_visible'))// Al principio inicia aqui por regresa true por que tiene la clase s_visible
            {
                //$(value).slideUp();
                $(value).fadeToggle();
                $(value).removeClass('s_visible');//quita la clase a 1
                
                if(index==0)// la 0 es la la ultima pantalla
                { 
                    
                    $($('.slider').find('.s_element').get(0)).fadeToggle();
                    $($('.slider').find('.s_element').get(0)).addClass('s_visible');
                    return false;
                }
                else  
                { 
                    $($('.slider').find('.s_element').get(index-1)).fadeToggle();
                    $($('.slider').find('.s_element').get(index-1)).addClass('s_visible');	
                    return false;
                }
            }
		});
    }); 
     
    /* ------------/ Boton Siguiente /---------- */
    $(document).on('click','#btnSig',function(e)
    {
        e.preventDefault(); 
         
        $('input:radio[name=radiohoras]').change(function() { 
            value = this.value;  
        });

        $("#default").attr("checked",true);// Se coloca el radio button en checked
        personal($("#default").val());// Se pasa el value al mensaje para mostrarlo del lado derecho
        
        
        var sinseleccionar=0;
        $("input[name=serviciosradios]").each(function (index,elem) {  // Contabiliza los seleccionados / deseleccionados
            if($(this).is(':not(:checked)')) 
                sinseleccionar += 1;  
        });  
        if(sinseleccionar == 6){ // cuando 
            msj(".alerta",'servicio');
        } 
         
        else if($('#ele3').hasClass('s_visible'))
        {    
            var sinseleccionhoras=0;
            $("input[name=radiohoras]").each(function (index,elem) {  // Contabiliza los seleccionados / deseleccionados
                if($(this).is(':not(:checked)')){
                    sinseleccionhoras += 1; 
                }   
            }); 
            /* ------------/ Validacion sin seleccion de elementos /------------*/
            if((!$(".day").hasClass('selected') && sinseleccionhoras == 11) || 
              ($(".day").hasClass('selected') && sinseleccionhoras == 11) || 
              (!$(".day").hasClass('selected') && sinseleccionhoras==10 ))
            {  
                msj(".mensajehoras","Seleccionar Fecha / hora");
            }
            else{
                 
                 
                $(".mensajehoras").remove();// Quita el mensaje al seleccionar fecha y hora
                siguiente();
                $(".hora-reserva").html(`
                    <div class="">
                        <i class="fas fa-clock"></i><span class="nombre-detalles ml-2"  > ${value} </span>  
                    </div> 
                `);
                var fechaselect = $(".fechaseleccionada").text();
                $(".fecha-reserva").html(`
                    <div class="">
                        <i class="far fa-calendar-alt"></i><span class="nombre-detalles ml-2"  > ${fechaselect}&nbsp;${value} </span>  
                    </div> 
                `);
            }  
        } 
        else 
        { 
            
            // if((!$(".day").hasClass('selected') && sinseleccionhoras == 11) || 
            // ($(".day").hasClass('selected') && sinseleccionhoras == 11) || 
            // (!$(".day").hasClass('selected') && sinseleccionhoras==10 ) ||  
            // ($(".fechaseleccionada").text() == 'No disponible' && sinseleccionhoras ==11)  ||
            // ($(".fechaseleccionada").text() == 'No disponible'  && sinseleccionhoras==10))
            // {  
            //     msj(".mensajehoras","Seleccionar Fecha / hora");
            // }
            siguiente();   
        }   
	}); //Btn sig


    function siguiente()
    {
        var size = $('.slider').find('.s_element').length; 
        $('.slider').find('.s_element').each(function(index,value){
          
            if(index == 1){ // Cuando este en la pantalla del calendario se mostrara el mensaje
                $(".nota").html(`
                    <div class=" ml-4" " style="width:290px;"> 
                        <span>
                            Elige a tu barbero o si no tienes preferencia
                            por algúno selecciona "No disponible".
                            Selecciona la fecha y la hora de tu cita. 
                        </span> 
                    </div>
                `);
            } 
            else if(index  == (0 || 2 || 3)){
                $(".nota").remove();
            }
             
            if($(value).hasClass('s_visible'))// Al iniciar entrara a los if ya que tienen por default la clase s_visible
            {   
                
                $(value).fadeToggle();
                $(value).removeClass('s_visible'); 
                if(index+1<size)
                {  
                    $($('.slider').find('.s_element').get(index+1)).fadeToggle();
                    $($('.slider').find('.s_element').get(index+1)).addClass('s_visible');
                    return false;
                }
                  
                else if(index == 3)// Al iniciar en 0 de 0 a 3 son 4 pantallas,  entonces al llegar a 3 el index le colocamos un limite y solo mostrara hasta ahi
                { 
                    
                    $("#btn-form").click();
                    $($('.slider').find('.s_element').get(3)).fadeToggle();// efecto
                    $($('.slider').find('.s_element').get(3)).addClass('s_visible');// para mostrar	
                    return false;
                } 
            }
        });
    }

    function personal(nombre)
    {    
        $(".personal-reserva").html(`
        <div class="mt-2">
            <i class="fas fa-user icono-servicio"></i><span class="nombre-detalles"> ${nombre}</span> <br> 
        </div> 
        `); 
    }

    function msj(clase,desc)
    { // Mensaje de error warning al no seleccionar un servicio 
        if(clase == '.mensajehoras'){
            $('.mensajehoras').html(`
            <div class="alert alert-warning d-flex justify-content-center" role="alert">
                ${desc} 
            </div>  
            `);
        }
        else{
            $(clase).html(`
            <div class="alert alert-warning d-flex justify-content-center" role="alert">
                Seleccionar ${desc}
            </div>  
            `);
        }
    }
        
});
$.validator.addMethod("email", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value);
    }, "Email Address is invalid: Please enter a valid email address.");

    $("#myForm").validate({ 
        rules: {
			name:{required:true},
			email:{required:true},
			subject:{required:true},
			description:{required:true}
		},
        messages:{ 
            name:'<span style="color:#C95E81">Llenar campo</span> ',
            email:'<span style="color:#C95E81">Llenar campo / incorrecto</span>',
            subject:' <span style="color:#C95E81">Llenar campo</span> ',
            description:'<span style="color:#C95E81">Llenar campo</span>'
        } ,
         
    });
 

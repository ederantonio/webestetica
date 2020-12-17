var player;
var ytplayer;
//SWIPER INICIO API
var swiper = new Swiper('#link-Inicio__slider', {
   /* centeredSlides: true,*/
    spaceBetween: 30,/* Por Default en la api distancia entre las diapositivas en pixeles*/
    loop: true,/* viene en los parametros de la api para que alterminar continue cambiando al primer slider en bucle o ciclo*/
     effect : 'fade',/* Viene en los parametros de la api es un desvanecido el efecto , porque si se deja el de por default se ve cuando recorre la diapositiva siguiente */
      
     /* ####### Esto viene por default en la api#######*/
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


/* ####### Es para cuando pase el mouse sobre el elemento aparezca el otro encima ####### */
$(".container-sec > section").mouseenter(function() {
        var idSec = $(this).attr("id");
        idSec = "#" + idSec + ">div>section"
       
            //#container-servdo>div>section)
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
     
    servicios();/* Primero hace la carga de todas las imagenes mandando a llamar la funcion de servicios() de servicios y luego las de los paquetes cuando le dan click a una imagen es cuando se desencadena la funcion pasando argumento*/
    paquetes();
 



function servicios() 
{
    $.ajax({
        url: "servicios_img.php",
        method: "POST",
        data: { peticion: "traer_imagenes"}
    }).done(function(res) {/* Llega un array asociativo en JSON*/
        var result = JSON.parse(res);/* JSON.parse() se utiliza para analizar datos que se recibieron como JSON ; Deserializa una cadena JSON en un object JavaScript . */
        $.each(result, function(key, value){/* itera al arreglo le hace un recorrido y la llamada del metodo devuelve un indice y un valor del array*/
            $("#container-servicios").append(/* hay key y value y dice obtener el value del id_servicio si quisiera el id seria key.id_servicio*/
                "<section onclick=InfoServPaq('Servicio_"+ value.id_servicio+"') id='Servicio_"+ value.id_servicio+"'>" +
                    "<a>"+ value.ser_titulo +"</a>" +
                "</section>"
            );
            document.getElementById('Servicio_'+ value.id_servicio).style.backgroundImage = "url('img/" + value.ser_source_principal + "')";/*seleccionas al id=Servicio_1 donde le aplicas el style para poner la imagen*/
        });
    });
}
 
function paquetes() 
{
    $.ajax({
        url: "paquetes_img.php",
        method: "POST",
        data: { peticion: "traer_paquetes"}
    }).done(function(res) {
       console.log(res);
        var result = JSON.parse(res);
        
       /* console.log(res);*/
        $.each(result, function(key, value){
             
            $("#container-paquetes").append(
                "<section onclick=InfoServPaq('Paquete_"+ value.id_paquete+"') id='Paquete_"+ value.id_paquete+"' class='conatine-paquetes'>" +
                    "<a>"+value.paq_titulo+"</a>" +
                "</section>"
            );
            document.getElementById('Paquete_'+ value.id_paquete).style.backgroundImage = "url('img/" + value.paq_sorce + "')";
        });
    });
}

function InfoServPaq(id){ /* Aqui llega Servicio_1 es un arguumento es un valor que esta definido ya sea en una variable u obtenido de una operacion o base de datos*/        
   /* aqui llega el argumento 'Servicio_1' en id puede ir cualquier otro argumento como obj etc... funcion que se desencadena en la parte de arriba al darle click a la imagen*/
       /* alert(id);*/
       id = id.split("_");/* Aqui se hace el split ya que el argumento que llega es 'Servicio_1' y lo deja asi Servicio, 1 este metodo de javascript lo que realiza es que cada ves que encuentre '_' cortara la cadena de texto de Servicio_1 a Servicio, 1*/
       /* El método split() sirve para dividir o cortar una cadena de texto en sub-cadenas y luego retornar un arreglo(array) de estas.*/
       /* la consola devolverá: ["Servicio", "1"]*/
        var spurl = '';/* se declara la variable spurl para pasarlo por ajax*/
        var p = '';/* se declara la variable spurl para pasarlo por ajax*/
      
        switch (id[0]) /* inicia en id [0] por que split crea un array entonces en el valor 0 llega Servicio valor u opcion */
        {/* segun sea el valor en esta posicion del array al hacer el split crea un array*/
            case 'Servicio':
                spurl = 'servicios_img.php';/* hace la asignacion de la url donde traera los datos igual y las variables las puede asignar aqui en el apartado se servicio*/
                p = 'traer_infoservicio';/* asignacion de letrero para data en ajax*/
                
                break;
            case 'Paquete':
                spurl = 'paquetes_img.php';
                p = 'traer_infopaquete';
                break;
        }

        $.ajax({
            url:spurl,/* Primero se define arribe con valor en blanco luego en el segun sea se le da un valor en este caso la url a donde debe de ir*/
            method: "POST",
            data:{peticion:p, idsp:id[1]} /*Aqui se mandara un valor de un array asociativo parseado a objeto en javascript aqui toma la posicion 1 para obtener el numero en este caso "1" y saber exactamente cual imagen selecciono Aqui en data puedes solo declararla dandole una cadena string o pasandole parametro al cual le asignas un valor declarado previamente*/
        }).done(function(res){ /* confirma si se realizo con exito la peticion de los datos procesados en php*/
            
        var result = JSON.parse(res);/* del objeto Json lo pasa a objeto javascript El comando JSON Parse analiza el contenido de una cadena con formato JSON y extrae los valores que puede almacenar en un campo o variable  . Este comando deserializa los datos JSON JSON Parse por lo tanto puede ser utilizado para validar cadenas JSON*/
        $('.Modal2-title>strong').empty();/* Esto es por si deja el titulo y texto de otra imagen pendiente revisar*/
        $(".Modal2-text").empty();

    switch (id[0]) {/*segun sea elvalor en la posicion '0' Servicio | Paquete ,viene como argumento pero el valor es un objeto json parseado el split lo hizo array javascript usa la posicion [0]Aqui vuelve a usar el id[] como un array ya que se regreso un objeto json o un arreglo asociativo y en id[0] llega un valor como puede ser Paquete o Servicio*/
        case 'Servicio':
            $.each(result, function(key, value){/* $.each Recorrer para recorrer una lista o array Dicha función tiene dos parámetros para dar acceso tanto al índice como al elemento seleccionado y realizamos su escritura por consola.*/
                $("#imgModal2").attr("src","img/" + value.ser_source_secundario);/*.attr Acceder y modificar atributos HTML donde accede al atributo <img> y lo modifica en src, img/ desde jQuery en este caso accedimos por medio de .attr a src , img ,nombre de la imagen img src="images/dinosaur.jpg" */
                $('.Modal2-title>strong').text(value.ser_titulo);/* con $('selector').text(); obtienes el texto del selector y si lleva valor le asignas texto al selector $('selector').text(+value.ser_titulo)*/
                if (value.ser_descripcion.indexOf("@") == -1) /* Usa esta parte solo como condicional para entrar a este if y llenar los elementos cuando encuentra el arroba pasa al else y ahi le da el formato que requiere*/
                {/* Hace esta validacion para recorrer el elemento de ser_descripcion ,Cuando no la encuentra entra aqui por que devuelve -1 Regresa el primer indice de una matriz donde se le especifica que elemento buscar si lo encuentra sino devuelve -1*/
                    $.each(value.ser_descripcion.split("."), function( index, value ) {/* recorre el elemento ser_descripcion y corta donde haya un punto, Hace esto del each para darle formato a la descripcion ya que si solo se imprime lo pone como una cadena de texto completa sin brincar renglones*/
                        if (value.length > 10) {/* Aqui se entra al valor de ser_descripcion ya que se esta recorriendo directo sin entrar al elemento result como arriba, se le asocia la funcion y ahi se le pasan los dos parametros donde accedera al indice y al valor pero precisamente del elemento ser_descripcion de la imagen que haya seleccionado, accede al valor y en la funcion asignada accede al value3*/
                                                /* tenia index3, value3 quiza para no confundirse con las demas funciones que va agregando , aun asi no afecta si se deja index, value*/
                                                /* Luego hace una comparativa del tamaño de la cadena > 4 claro que sera mayor */
                                                /* en value.length "length" te regresa el tamaño de la cadena o numero de caracteres en este caso estaria devolviendo 190 en la primer cadena hasta organos | 222 en la segunda cadena seria hasta donde termina el texto orina| 76 y el ultimo terminaria en digestivo*/
                            $(".Modal2-text").append(/* agregar contenido al final del elemento o si se necesita al principio del elemento es con .prepend sirve en los ul u ol etc*/
                                "<p>" + value + ".</p>"
                            );
                            /*console.log(value.length);*/
                        }
                    });
                }
                    else /* Cuando encuentra el @ lo que hace en las instrucciones de abajo es para darle formato */
                    {
                        var e = "";/* Solo declara una variable en blanco*/
                        var t = value.ser_descripcion.length;/* esta aparte obtiene la cantidad de caracteres 800 total  */
                        var l = value.ser_descripcion.indexOf(":") + 1;/* 754 indexof devuelve el indice donde lo encuentra IndexOf() La instrucción anterior nos retorna 32, siendo la posición del array donde se encuentra ubicado dicho elemento.*/

                        var f = t - l;/* este paso se puede omitir no afecta en nada aqui obtiene de 800-755= 45 caracteres del correo elias.farachala@laboratoriodiagnostica.com.mx*/
                        var m = l - 9;/* aqui le resta 9 posiciones que viene siendo Contacto: y solo deja la descripcion 755-9= 746 que seria quitarle   hasta donde llego los dos puntos "Contacto:" son 9 posiciones*/
                        /*console.log(m);*/
                        var e = value.ser_descripcion.substring(l,t);/* 754 , 800 aqui solo extrae elias.farachala@laboratoriodiagnostica.com.mx ya que se encuentra dentro del rango*/
                        var newtxt = value.ser_descripcion.substring(0,m);/* Puede poner todo el texto completo solo que en la parte de contacto:elias.farachala@laboratoriodiagnostica.com.mx lleva punto despues de elias y lo corta entonces quiza hizo este procedimiento para ponerlo aparte aqui es de '0' hasta 'm' de 0 a 746 extrae el rango definido 0 a m=746*/
                        $.each(newtxt.split("."), function( index3, value3 ) {/* Entra al elemento newtext que tiene asignado la succtraccion de una subcadena de 0 a m y donde encuentre "." cortara la cadena */
                          /* Hace la comparacion del total de caracteres de cada fragmento cortado por el split cuando encuentra el "@" 751,394,140,212 devuelve estos totales y siempre sera mayor ya que se trae el valor de la descripcion de la imagen seleccionada*/  
                            if (value3.length > 10) {/* Hace una comparacion del tamaño de caracteres*/
                                /*console.log(value3.length);*/
                                $(".Modal2-text").append(/* Aqui simplemente agrega html con .append e imprime value3 que contiene el texto pero ya con el formato definido arriba*/
                                    "<p>" + value3 + ".</p>"
                                );
                            }
                        });/* Termina de colocar el texto de la descripcion  ya con su formato y al final agrega la parte del contacto anteponiendo con .append "Contacto:" luego imprime el valor de "e"*/
                        $(".Modal2-text").append(
                            "<p><strong>Contacto:" + e + "</strong></p>"
                        );
                    }
                });
                break;

            case 'Paquete':/*Aqui en paquetes se esta consumiendo un json por eso cambia un poco la manera de trabajarlo a como esta en servicios */
                $(".Modal2-text").append("<section id='ContainerPaquetes'></section>");/* Aqui dentro de .Modal2-text agrega al section #containerPaquetes*/
                $("#imgModal2").attr("src","img/" + result['informacion'].paq_source2);/* Aqui accede al #imgModal2 y modifica el src y agrega la imagen*/
                $('.Modal2-title>strong').text(result['informacion'].paq_titulo);/* Aqui despues de la etiqueta strong agrega el titulo*/
                $.each(result['paquetes'], function(key, value) {
                    var arreglo_especificaciones = value.especificaciones.split(",");/* Aqui al valor de estudios esta con comas hace la separacion con el split como si estuviera dando enter y poniendolos en un arreglo y los asigna a una variable*/
                    console.log(arreglo_especificaciones);
                    var lista = "<ul id='ContainerPaquetes_serv_"+value.id_estudio_especificacion+"'><li class='title_Paquetes'><strong>"+value.est_titulo+"</strong></li>";/* Aqui va a recorrer el each el elemento dependiendo de los resultados que tenga en este caso seran son 3*/
                    $.each(arreglo_especificaciones, function(index, esp) {/* va a recorrer el elemento ya cortado accediendo al index y al valor */
                        /* iterate through array or object */
                        lista+= "<li>"+esp+"</li>";/* lista va hacer igual a lo que tendga asignado + la impresion de esp en la funcion y como esta recorriendolo con el each pondra todos*/
                    });
                    lista+= "</ul>";/* Cierra el ul*/
                    $("#ContainerPaquetes").append(lista);/*Aqui se imprime lo que tenga asignado lista dentro del #containerPaquetes */

                });

                var num = result['informacion'].paq_precio.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
                num = num.split('').reverse().join('').replace(/^[\.]/,'');

                $(".Modal2-text").append("<span class='Modal2-precio'><strong>$ "+num+"</strong></span>");
                break;
        } //llave del switch
    });/* ####### cierre .done despues del primer switch ####### */

$('#ModalMax2').fadeIn();
        $("body").css("overflow", "hidden");/* CSS overflow  especifica: si recortar contenido, dibujar barras de desplazamiento o mostrar el contenido excedente en un elemento a nivel de bloque.*/
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
        /* ####### Para cerrar el servicio o paquete que haya seleccionado #######*/
         $('.btn_close').click(function() {
            $('#ModalMax2').fadeOut();
            $("#imgModal2").attr("src","");
            $(".Modal2-text").empty();
            $("body").css("overflow", "auto");

        }); 

/*      ####### Pertenece aun Modal1 donde habia una promocion #######
        $("#ModalMax-close__btn").click(function() { 
            $("#ModalMax1").fadeOut();
            $("#dna-promocion__title").text("");
            $("#dna-promocion__description").empty();
        });


        $("#ModalMax-text__btnContact").click(function() {
            $("#ModalMax1").fadeOut();
            var idpos = $(this).attr("data-id");
            idpos ="#"+idpos;
            idpos = $(idpos).position().top;
            $("html, body").animate({
                scrollTop: idpos
            }, 1000);
        });*/
}/* ####### cierre de function InfoServPaq ####### */


/* ####### Validación del formulario ########*/
    $("#btn-Contactanos").on("click",function(){ 
    $(".MMError").empty().fadeOut();/* Aqui inicia oculto todos y por eso tienes que mostrar con el fadein , si quitas el fadeout ya puedes quitar el fadein para mostrar solo que va sin el efecto,Este lo coloca por que en el formulario HTML esta dejando el texto 'Error: El nombre demasiado corto', si se quita el texto y se quita esta parte no hay ningun problema*/
    var nombre = $("#NombreContacto").val();
    var telefono = $("#TelefonoContacto").val();
    var email = $("#EmailContacto").val();
    var mensaje =$("#MensajeConacto").val();

    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {/*(/^\s+$/.test(valor)) obliga a que el valor introducido por el usuario no sólo esté formado por espacios en blanco .test*/
      $("#NombreContacto").focus();
      $("#MErrorConNom").fadeIn();/*Solo es meramente efecto ya que se puede hacer directo, quitar la propiedad display:none en css,en html quitar el texto 'Error:El nombre demasiado corto' y  en js quitar el fadeOut y fadeIn  */
      $("#MErrorConNom").append("<strong>Error:</strong> Este campo no puede estar vacio.");
    }
    else  if (nombre.length < 3) {
      $("#NombreContacto").focus();
      $("#MErrorConNom").fadeIn();
      $("#MErrorConNom").append("<strong>Error:</strong> Nombre demaciado pequeÃ±o.");
    }
    else if (email == null || email.length == 0 || /^\s+$/.test(email)) {
      $("#EmailContacto").focus();
      $("#MErrorConEmail").fadeIn();
      $("#MErrorConEmail").append("<strong>Error:</strong> Este campo no puede estar vacio.");
    }
    else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {/*IndexOf regresa el indice de donde esta '@' pero si no esta regresa -1*/
      $("#EmailContacto").focus();
      $("#MErrorConEmail").fadeIn();
      $("#MErrorConEmail").append("<strong>Error:</strong> Este no es un Email valido.");
    }
    else if (telefono == null || telefono.length == 0 || /^\s+$/.test(telefono)) {
      $("#TelefonoContacto").focus();
      $("#MErrorConTel").fadeIn();
      $("#MErrorConTel").append("<strong>Error:</strong> Este campo no puede estar vacio.");
    }
    else if (isNaN(telefono)) {
      $("#TelefonoContacto").focus();
      $("#MErrorConTel").fadeIn();
      $("#MErrorConTel").append("<strong>Error:</strong> No es un numero valido.");
    }
    else if (telefono.length < 10 || telefono.length > 10) {
      $("#TelefonoContacto").focus();
      $("#MErrorConTel").fadeIn();
      $("#MErrorConTel").append("<strong>Error:</strong> No es un numero valido.");
    }
    else if (mensaje.length == 0) {
      $("#MErrorMensajeContacto").focus();
      $("#MErrorMensajeContacto").fadeIn();
      $("#MErrorMensajeContacto").append("<strong>Error:</strong> Este campo no puede estar vacio.");
    }
    else if(recap2 == 0){
      $("#MErrorRecaptchaField2").fadeIn();
      $("#MErrorRecaptchaField2").append("<strong>Error:</strong> Esta seccion no ha sido realizada");
    }
    else {
      recap2 = 0;
      $("#loaderContacto").fadeIn();
      $("#form-Contactanos").submit();
    }
});



var idanterior;
$(".btn-scroll").click(function() {/* Los menus y los div's con la clase btn-scroll al dar click entrara aqui*/
    /*alert('funciona');*/

      
        var idpos = $(this).attr("data-id");/* con this dices solo alque haya invocado lafuncion, this hace referencia al elemento que está llamando o usando la función Accede ala tributo html para modificarlo*/
       /*en idpos llega link-QuienesSomos*/
        idpos ="#"+idpos;/* le dices que llevara primero el '#' arma el id #link-Inicio*/
        
        idposactual= $(idpos).position().top;/* position().top es 'top' para medir las coordenadas en Y, El método .position() nos permite recuperar la posición actual de un elemento */
       /* en idpos se le asigna la posicion 1118 nosostros */   
        $("html, body").animate({/* Algunos navegadores se desplazan por la configuración scrollTop en BODY y otros en HTML.*/
                 scrollTop:idposactual 
         }, 1000);/* Esta unidad de medida esta en milisegundos 1000ms = 1 segudo*/

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




 
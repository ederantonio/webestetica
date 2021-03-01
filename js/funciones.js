var clndr = {};
var player, value, ytplayer,precio;

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
    var radio;
    /*------------------------/ Calendario /--------------------------*/
    var lotsOfEvents = [];
    var actualfecha = moment().format('YYYY-MM-DD hh:mm:ss a'); // Fecha actual 
    var fechaeningles = moment().format('LLLL').split(',');  
    var dia = fechaeningles[0].substring(0,3);
    var mes = fechaeningles[1].substring(0,4); 
    var numero = fechaeningles[1].replace(" ", "").split(' ');  
    var año = fechaeningles[2].replace(" ", "").split(' ');  
    $(".fechaseleccionada").html( '&nbsp;<b>'+ dia +','+ numero[1] + mes +'del'+' '+ año[0]+'</b>');// label abajo del calendario inicia en la fecha actual
     
        clndr.selectedDate = $('#selected-date').clndr({  
            events: lotsOfEvents, // lotsOfEvents: date title para marcar en color verde la fecha que tiene eventos 
            constraints: 
            {//Limite de rango de fechas
                startDate: moment().format('YYYY-MM-DD'),//fecha actual
                endDate: moment().add(1, 'month').format('YYYY-MM-DD')
            }, 
            clickEvents: 
            {
                click: function (target) 
                {   
                    $(".fecha-formato").html(target.date._i); 
                    var fecha = target.date._d.toString();  // Se convierte a string para poder trabajarlo Thu Feb 18 2021 00:00:00 GMT-0600 (hora estándar central)  
                    var fechaentexto = fecha.substring(0,fecha.indexOf("00")); 
                    var fec = fechaentexto.split(' '); 
                    fec.pop(); 
            
                    if(target.element.classList[2] == 'inactive'||  //Al dar click en fechas inactivas pasadas, fin de rango del mes y del mes siguiente no hara nada 
                        target.element.classList[1] == 'inactive'||      
                        target.element.classList[3] == 'inactive'){ 
                    } 
                    else{
                        $(".fechaseleccionada").html('<b> '+ fec[0] +','+fec[2]+' '+fec[1]+' del '+fec[3]+'</b>');  
                    }
                
                    $.ajax({ // Al dar click a alguna fecha se enviara a la db para traer datos de esa fecha
                        url: 'agregarcita.php',
                        type : 'POST',
                        dataType:'json', 
                        data: {
                            peticion:'clickfecha',
                            eventDate : target['date']['_i']   // 2021-02-19                      
                        }, 
                        success: function(datos){  
                            
                            var arreglohorario = ['10:00am' , '11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm']; 
                            if(datos!= '')// Si hay fechas en la tabla, habra que quitarlos del arreglohorario
                            {  
                                var arraynorepetidos=[]; 
                                for(var c=0;c<arreglohorario.length;c++)//se hace comparacion para dejar los que no se repiten
                                {
                                    var igual=false;
                                    for(var e=0;e<datos.length;e++){
                                        if(arreglohorario[c] == datos[e].hora){
                                            igual=true;
                                        } 
                                    }
                                    if(!igual) 
                                    arraynorepetidos.push(parseInt(arreglohorario[c])); 
                                } 
                                horas(arraynorepetidos,1); 
                            }
                            else  { // si no hay datos deja por default todas las horas
                                horas(arreglohorario,2);
                            } 
                            $('input:radio[name=radiohoras]').change(function() { 
                                radio = this.value;
                                
                            });
                        } 
                    });// Ajax      
                }, 
            }, 
            trackSelectedDate: true,// Para al seleccionar la fecha le coloca un color
            ignoreInactiveDaysInSelection: true,// Para no seleccionar los que estan inactivos
            template: $('#clndr-template').html()
        }); // SelectedDate  
     
    
    $("#default").attr("checked",true);// Se coloca en checked 'Cualquiera disponible'
    personal($("#default").val());// Se pasa el value al mensaje para mostrarlo del lado derecho
    var fechaselect;
    /*------------------------/ Advertencia covid /--------------------------*/
    $(document).on("click","#checkbox",function(){ // Controlar el checkbox al dar click
        if( $("#checkbox").is(':checked') ) 
            $(".advertencia-covid").css("border-left","4px solid #F9F9FF"); 
        else 
            $(".advertencia-covid").css("border-left","4px solid #C95E81"); // linea roja
    })

    /*---------/ Radios servicios /----------*/
    $('input:radio[name=serviciosradios]').change(function() {/*detecta seleccion de radio y muestra en detalle*/ 
        let valor = this.value;  
        let cadena = valor.split("$");
        let texto = cadena[0];
        precio = cadena[1]; 
        // Se coloca el label
        $(".services-reserva").html(`
            <div class="mt-2">
                <i class="fas fa-gift icono-servicio"></i><span class="nombre-detalles"> ${texto}</span><br>
                <span class="precios-servicios">$ ${precio}</span> 
            </div>`); 
        $(".alerta").remove();
    });

    /*---------/ Radios personal /-------*/
    $('input:radio[name=personalradios]').change(function() { 
        let value = this.value;
        let string = value.split("$");
        let textopersonal = string[0]; 
        // Se coloca el label
        personal(textopersonal); 
    });  

    /* ----------/Boton anterior /--------- */
    $('#btnAnt').click(function()
	{ 
		var size = $('.slider').find('.s_element').length;//3 
		$('.slider').find('.s_element').each( function(index,value){// 0 y elemento1 html  
             
            if($(value).hasClass('s_visible'))// Al principio inicia aqui por regresa true por que tiene la clase s_visible
            { 
                $(value).fadeToggle();
                $(value).removeClass('s_visible');//quita la clase a 1  
                if(index == 3){ // Cuando va de regreso se mantiene el indice 3 en donde esta el caldendario
                    nota(); 
                }
                else{
                    $('.nota').css("display","none"); // nota de elegir barbero, fecha y hora
                }
                
                if(index==0)
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
         
         

        var sinseleccionar=0;
        $("input[name=serviciosradios]").each(function (index,elem) {  // Contabiliza los seleccionados / deseleccionados
            if($(this).is(':not(:checked)')) 
                sinseleccionar += 1;  
        });  
        if(sinseleccionar == 6){ // si no se selecciono ninguno se muestra el mensaje
            msj(".alerta",'servicio');
        } 
        else if($('#ele3').hasClass('s_visible'))
        {    
            var sinseleccionhoras=0,seleccionar=0;
            $("input[name=radiohoras]").each(function (index,elem) {  // Contabiliza los seleccionados / deseleccionados
                if($(this).is(':not(:checked)')){
                    sinseleccionhoras += 1; // si selecciono uno con eso
                }
                else{
                    seleccionar+=1;
                    //siguiente(seleccionar);
                }   
            });  
                 
            if((!$(".day").hasClass('selected') && sinseleccionhoras == 11) || //Validacion sin seleccion de fecha y hora
            ($(".day").hasClass('selected') && sinseleccionhoras == 11) || 
            (!$(".day").hasClass('selected') && sinseleccionhoras==10 )|| !$(".day").hasClass('selected')
            ||$(".day").hasClass('selected') && radio == undefined)// cuando radio es undefined es por que no ha seleccionado nada 
            {  
                msj(".mensajehoras","Seleccionar Fecha / hora");
            } 
            else
            { 
                $(".mensajehoras").remove();// Quita el mensaje al seleccionar fecha y hora
                siguiente();// avanza
                // label hora
                $(".hora-reserva").html(`
                    <div class="">
                    <i class="fas fa-clock"></i><span class="nombre-fecha ml-2">${radio}</span>  
                    </div>                    
                `);

                fechaselect = $(".fechaseleccionada").text();// label fecha
                $(".fecha-reserva").html(`
                    <div class="">
                        <i class="far fa-calendar-alt"></i><span class="nombre-fecha ml-2">${fechaselect}</span>  
                    </div> 
                `);
            } 
              
        } 
        else 
        { 
            siguiente();   
        }   
	}); //Btn sig 
   
     /*----------------/ Validación de formulario/-------------*/
    $.validator.addMethod("email", function(value, element) { 
        return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value);
    }, "Email Address is invalid: Please enter a valid email address."); 
         
    $("#myForm").validate({ 
        rules: {
            name:{required:true,lettersonly:true}, 
            email:{required:true}, 
            phone:{required:true,digits:true },
            description:{required:true},
            checkbox:{required:true }, 
        },
        messages:{ 
            name:'<span style="color:#C95E81">Llenar campo / incorrecto</span> ',
            email:'<span style="color:#C95E81">Llenar campo / incorrecto</span>',
            phone:' <span style="color:#C95E81">Llenar campo / ingresar solo números</span> ',
            description:'<span style="color:#C95E81">Llenar campo</span>', 
            checkbox:'<span style="color:#C95E81">Aceptar la politica de cancelación</span>',
        } , 
        submitHandler: function(form){ //si todos los controles cumplen con las validaciones, se ejecuta este codigo
            // $(".loader").css("visibility","visible");  
            jQuery.ajax({ 
                url: 'agregarcita.php', 
                type: 'POST',      
                dataType: 'json',  
                data: {
                    peticion:'validacionfechas',
                    servicio:$(".nombre-detalles").text(),
                    personal:$(".nombre-personal").text(),
                    fecha:$(".fecha-formato").text(),
                    hora:$(".nombre-horas").text(),
                    name: $("#name").val(),
                    email:$("#email").val(),
                    phone:$("#phone").val(),
                    description:$("#description").val(), 
                    precio:parseInt(precio)
                },  
                complete: function(xhr, textStatus) {
                //se llama cuando se recibe la respuesta (no importa si es error o exito)
                // alert("La respuesta regreso");
                },
                success: function(data, textStatus, xhr) { 
                // $(".loader").css("visibility","hidden"); 
                // $("#name").val(" ") ; 
                // $("#email").val(" ") ; 
                // $("#subject").val(" ") ; 
                // $("#description").val(" ") ; 
                // $('.notificacion').html(`
                // <div class="alert alert-success">
                // 	<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                // 	 Enviado correctamente!
                // </div> `); 
                },
                error: function(xhr, textStatus, errorThrown) {
                // $(".loader").css("visibility","hidden");
                // //called when there is an error
                // $('.notificacion').html(`
                // <div class="alert alert-danger"> 
                // 	<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                // 	Algo ocurrio
                    // </div> `);
                }
            });
        }, 
    });

    function siguiente()
    { 
        var size = $('.slider').find('.s_element').length; 
        $('.slider').find('.s_element').each(function(index,value){ 
          
            if(index == 1){ // Cuando este en la pantalla del calendario se mostrara el mensaje de seleccion
                nota();
                
            } 
            else if(index  == (0 || 2 || 3)){ // En las otras pantallas debe ocultarse
                $(".nota").css('display','none');
            }

            if(index == 2 && $("#checkbox").is(":not(:checked)")   ){ // Cuando llegue a la pantalla final 
                
                $(".advertencia-covid").css("border-left","4px solid #C95E81");
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
            <i class="fas fa-user icono-servicio"></i><span class="nombre-personal"> ${nombre}</span> <br> 
        </div> 
        `); 
    } 

    function msj(clase,desc)
    { // Mensaje de error warning al no seleccionar un servicio 
         console.log(clase,desc);
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

    function nota(){
        $(".nota").css("display","unset");
        $(".nota").html(`
            <div class="alert alert-secondary ml-4" " style="width:290px;"> 
                <span>
                    Elige a tu barbero o si no tienes preferencia
                    por algúno selecciona "No disponible".
                    Selecciona la fecha y la hora de tu cita. 
                </span> 
            </div>
        `);
    }
     
 
     

    function horas(horarios,op)
    { 
        console.log(horarios,op);
        switch(op) {
            case 1://'existe'
            var radioam='', radiopm='';
            for(var d=0;d<horarios.length;d++){
                if(horarios[d] == 10 || horarios[d] ==11){ // Si es igual a las horas 10 o 11 coloca am
                    radioam += `
                    <div class="form-check ml-3 mt-2 d-flex align-items-center radio-personal"> 
                        <input class="form-check-input btn-radios" type="radio" name="radiohoras" id=" " value="${horarios[d] +':'+'00am'}"> 
                        <div class="ml-2">
                            <div class=" ">${horarios[d] +':'+'00am'}</div>
                        </div>
                    </div> 
                    `;
                }
                else{
                    radiopm += `
                    <div class="form-check ml-3 mt-2 d-flex align-items-center radio-personal"> 
                        <input class="form-check-input btn-radios" type="radio" name="radiohoras" id=" " value="${horarios[d] +':'+'00pm'}"> 
                        <div class="ml-2">
                            <div class=" ">${horarios[d] +':'+'00pm'}</div>
                        </div>
                    </div> 
                    `;
                }
            }
            $(".horario").html(radioam);  
            $(".horario2").html(radiopm);
                break;
            case 2://'no existe'
            var botonradios ="",botonradios2="";  
            for(var i=0;i<horarios.length;i++){// Para ir generando los radio buttons 
                if((i+10)<12)
                {
                    botonradios += `
                    <div class="form-check ml-3 mt-2 d-flex align-items-center radio-personal"> 
                    <input class="form-check-input btn-radios" type="radio" name="radiohoras" id=" " value="${10+i+':'+'00'+''+' am'}"> 
                    <div class="ml-2">
                        <div class=" ">${10+i+':'+'00'+''+' am'}</div>
                    </div>
                    </div> 
                    `; 
                }
                else{
                    botonradios2 += `
                    <div class="form-check ml-3 mt-2 d-flex align-items-center radio-personal"> 
                        <input class="form-check-input btn-radios" type="radio" name="radiohoras" id=" " value="${(i == 2) ? '12:00 pm' : i-2+':'+'00'+''+'pm'}"> 
                        <div class="ml-2">
                            <div class=" ">${(i == 2) ? '12:00 pm' : i-2+':'+'00'+''+' pm'}</div>
                        </div>
                    </div> 
                    `;
                }   
            }
            $(".horario").html(botonradios);
            $(".horario2").html(botonradios2);
                break;
            default:   
        } 
    }
    
         
});
     
 

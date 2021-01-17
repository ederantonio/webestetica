<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<link rel="stylesheet" href="css/swiper.min.css">  
    <link href="img/favicon.png" rel="shortcut icon">
    <!---------/ Boostrap Css/-------- -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
    <!---------/Font awesome /-------- -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://kit.fontawesome.com/9cf8a80e3d.js" crossorigin="anonymous"></script>
    <title>Estetica</title> 
</head>
<div class="container-ppal">
    <!-- ===============================================================
        ---------/ Header inicia
        =============================================================== -->
    <header class="header-ppal">
        <div class=""><!-- Pone el fondo en color blanco y ancho y altura en 100% display flex indica la capacidad de un elemento flexible para alterar sus dimensiones y llenar el espacio disponible-->
            <figure class=" ">
                <img src="img/selene.jpg" class="logo"/>
            </figure>
            <nav class="header-menu">
                <ul>
                    <li><a class="  btn-scroll color-link" data-id="link-Inicio"  id="inicio">INICIO</a></li>
                    <li><a class="  btn-scroll" data-id="link-QuienesSomos" id="nosotros">NOSOTROS</a></li>
                    <li><a class="  btn-scroll" data-id="link-Servicios" id="servicios">SERVICIOS</a></li>
                    <li><a class="  btn-scroll" data-id="link-Paquetes" id="paquetes">PAQUETES</a></li>
                    <li><a  class=""  data-toggle="modal" data-target="#exampleModal" id="contacto">HAZ CITA</a></li>
                    <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                    </button> -->
                    <!-- <li><a id="btn_ResultLinea">SESIÓN</a></li> -->
                    <li><a  class="  btn-scroll" data-id="link-Contacto" id="contacto">CONTACTO</a></li>
                </ul>
            </nav>
            <div class="header-btnMenuResponsive">
                <div>
                    <section id="header-btnMenuResponsive__btn" class="ON">
                        <figure></figure>
                        <figure></figure>
                        <figure></figure>
                    </section>
                </div>
            </div>
        </div>
    </header>
    <!-- ===============================================================
        ---------/ Header termina
        =============================================================== -->


    <!-- ===============================================================
    ---------/ Slider inicio
    =============================================================== -->
    <div class="space bc-negro" id="link-Inicio"></div><!--con este div pone un espacio  y hace que las imagenes del slider swiper baje al tamaño estandard o al tamaño natural si no se pone sube la imagen se le da estilos en css pero solo con poner el div es suficiente para bajar la imagen o puede que se use mas a delante para otras cosas en la media querys-->
    <div class="container-slider bc-negro" id="link-Inicio__slider"><!--####### Swiperslider ####### -->
        <div class="swiper-wrapper" > 
            <div class="swiper-slide" style="background-image:url(./img/baneruno.jpg);  ">
                <!-- <h1 class="txtShadow">Consiéntete</h1>
                <h2 class="txtShadow">con la mejor</h2>
                <h2 class="txtShadow"><span>atención</span></h2> --> 
            </div>
            <div class="swiper-slide" style="background-image:url(./img/estetica2.jpg)">
                <h1 class="txtShadow">Consiéntete</h1>
                <h2 class="txtShadow">con la mejor</h2>
                <h2 class="txtShadow"><span>atención</span></h2> 
            </div>
            <div class="swiper-slide" style="background-image:url(./img/estetica3.jpg)">
                <h1 class="txtShadow">Obtén  </h1>
                <h2 class="txtShadow">tu cita través de</h2>
                <h2 class="txtShadow"><span>Whatsapp</span></h2> 
            </div>
            <div class="swiper-slide" style="background-image:url(./img/estetica4.jpg)">
                <h1 class="txtShadow">Servicio</h1>
                <h2>de cálidad y comodidad</h2> 
            </div>
            <div id="slider_video" class="swiper-slide">
                <div class="video-container" id="player">
                    <div class="video-iframe"></div>
                    <div class="video-play"></div>
                </div>
            </div>  
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination swiper-pagination-white" id="slider-pagination"></div>
        <!-- Add Arrows -->
        <div class="swiper-button-next swiper-button-white" id="slider-button-next"></div>
        <div class="swiper-button-prev swiper-button-white" id="slider-button-prev"></div> 
    </div>
    <div class="space bc-negro"></div><!-- solo es un div para hacer un espacio en la estructura con otra clase de color blanco definido en css-->
    <div class="container-tittle bc-negro">
        <span class="container-tittle__tittles1">
            <strong>Somos la <span class="colorTittle">mejor </span> opción para tu <span class="colorMora"> cabello.</span></strong>
        </span>
    </div> 
    <!-- ===============================================================
        ---------/ Slider termina
        =============================================================== --> 

    <div class="space_min bc-negro"></div><!-- ---/ comentario/--- -->


    <!-- ===============================================================
        ---------/ Container aplicacion, maquillaje, planchado
        =============================================================== --> 
    <div class="container-sec bc-negro"> 
        <!-- Membresia-->
        <section id="container-membresia"><!-- Seccion de Membresias -->
            <div class="container-animate__down"><!-- div del efecto a sobre poner el cursor-->
                <section>
                    <span class="container-NameServ"><strong>Aplicación de uñas</strong></span>
                    <span class="container-membresia__tittle"><strong>Aplicación de uñas</strong></span>
                    <p class="container-membresia__text">

                        Lorem ipsum sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et  magna aliqua. Ut enim ad minim veniam,
                        <br><br>
                        •  Lorem ipsum sit amet, consectetur adipisicing <br><br>
                        •  15% Lorem ipsum sit amet, consectetur adipisicing elit, 
                            <br><br>
                        •  Lorem ipsum  sit amet, consectetur adipisicing elit. <br><br>
                        •  TLorem ipsum  sit amet. <br><br>
                        •  Es vitalicia <br>
                            
                    </p>
                </section>
            </div>
        </section>
        <!-- Servicio Empresas-->
        <section id="container-seremp">
            <div class="container-animate__down">
            <section>
                <span class="container-NameServ"><strong>Maquillaje</strong></span><!-- Es el primer titulo-->
                <span class="container-membresia__tittle"><strong>Maquillaje</strong></span><!-- Segundo titulo -->
                <p class="container-membresia__text">
                    Lorem ipsum sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et  magna aliqua. Ut enim ad minim veniam,
                    
                    <br><br>
                    Contacto: correo@gmail.com.mx<!-- con los espacios en los textos logra que se centre el texto -->
                </p>
            </section>      
            </div>
        </section> 
        <!-- Servicio a domicilio-->
        <section id="container-servdo"  >
            <div class="container-animate__down">
                <section>
                    <span class="container-NameServ"><strong>Planchado de cabello</strong></span>
                    <span class="container-membresia__tittle"><strong>Planchado de cabello</strong></span>
                    <p class="container-membresia__text">
                        Lorem ipsum sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam,
                        s
                        
                    </p>
                </section>
            </div>
        </section>  
    </div>
        <!-- ==============================================================
        ---------/ Container aplicacion, maquillaje, planchado termina
        =============================================================== -->

         
        <div class="space bc-negro" id="link-QuienesSomos"></div> 
        <div class="container-tittle bc-negro">
            <span class="container-tittle__tittles2">Nosotros</span>
            <p class="container-tittle__text">Conócenos</p>
        </div>  
        <div class="space_min bc-negro"></div>
        

        <!-- ===============================================================
        ---------/ Container conocenos, mision, vision inicia
        =============================================================== --> 
        <div class="container-sec_2 bc-negro">
            <section id="container-qsomos">
                <div class="container-animate__down">
                    <section>
                        <span class="container-NameServ backgroundNMV"><strong>¡Conócenos!</strong></span>
                        <span class="container-membresia__tittle"><strong>¡Conócenos!</strong></span>
                        <p class="container-membresia__text">
                            Lorem ipsum sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam.
                        </p>
                    </section>
                </div>
            </section>
            <section id="container-mision">
                        <div class="container-animate__down">
                            <section>
                                <span class="container-NameServ backgroundNMV"><strong class="">Misión</strong></span>
                                <span class="container-membresia__tittle"><strong>Misión</strong></span>
                                <p class="container-membresia__text">
                                Crear experiencias positivas, a través de un servicio innovador.
                                </p>
                            </section>
                        </div>
            </section>
             <!-- div .container-sec__ho estaba de mas-->
            <section id="container-vision">
                <div class="container-animate__down">
                    <section>
                        <span class="container-NameServ backgroundNMV"><strong>Visión</strong></span>
                        <span class="container-membresia__tittle"><strong>Visión</strong></span>
                        <p class="container-membresia__text">
                        Lorem ipsum sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure in reprehenderit in voluptate velit esse
                        cillum eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in  qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>
                </div>
            </section> 
        </div>
        <!-- ===============================================================
        ---------/ Container conocenos, mision, vision termina
        =============================================================== -->  

         
        <div class="space bc-negro"  id="link-Servicios"></div> 
        <div class="container-tittle bc-negro">
            <span class="container-tittle__tittles2">Servicios</span>
            <p class="container-tittle__text">Elige tu mejor opción</p>
        </div>
        <div class="space-min bc-negro"></div>

        <!-- ===============================================================
        ---------/ Servicios inicia
        =============================================================== --> 
        <div class="container-sec bc-negro">
            <div class="container-ho2" id="container-servicios">
                
            </div>
        </div>
        <!-- ===============================================================
        ---------/ Servicios termina
        =============================================================== --> 

        
        <!-- ===============================================================
        ---------/ Modal Servicios o Paquetes inicia
        =============================================================== --> 
        <div class="ModalMax" id="ModalMax2"><!-- Aca llega solo uno de los dos ya sea 1 servicio o paquete-->
            <div class="">
                <div class="container-ModalMin">
                    <div class="btn_close"></div>
                    <section>
                        <span class="Modal2-title"><strong></strong></span>
                        <div class="Modal2-text"></div>
                    </section>
                    <figure>
                        <img src="" alt="" id="imgModal2">
                    </figure>
                </div>
            </div>
        </div>
        <!-- ===============================================================
        ---------/ Modal Servicios o Paquetes termina
        =============================================================== -->
        
         
        <div class="space bc-negro" id="link-Paquetes"></div><!--Es un espacio en blanco--> 
        <div class="container-tittle bc-negro"><!-- Container del letrero Paquetes-->
            <span class="container-tittle__tittles2">Paquetes</span>
            <p class="container-tittle__text">Tenemos los pauetes adaptados a tus eventos</p>
        </div> 
        <div class="space_min bc-negro"></div>


        <!-- ===============================================================
        ---------/ Paquetes inicia
        =============================================================== -->
        <div class="container-sec bc-negro">
            <div class="container-ho2" id="container-paquetes">
                    <!-- Aqui es donde llega el contenido de Ajax Paquetes-->   
            </div>
        </div>
        <!-- ===============================================================
        ---------/ Paquetes termina
        =============================================================== -->
        
    
        <div class="space bc-negro"></div> 
        <div class="container-tittle bc-negro">
            <span class="container-tittle__tittles2" id="link-Contacto">Contacto</span>
        </div> 
        <div class="space_min bc-negro"></div>


        <!-- ===============================================================
        ---------/ Contacto inicia
        =============================================================== --> 
        <div class="container-sec"><!--container sec por ende deja todo en columna por eso usa la clase container-ho2 para ahi poner en row los elementos-->
            <div class="container-ho2">  <!-- Esta clase se puede omitir se uso mas que nada para el llenado de todos los servicios y paquetes para evitar o permitir desbordamientos-->
                <div class="container-map">
                <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJN7Kzdpnbj4YRXukZ_tIZJos&key=AIzaSyBwAk3u-wZbpvrGazyGRp9ZxioQheso_UQ" allowfullscreen></iframe> 
                </div>
            </div>
        </div>
        <!-- ===============================================================
        ---------/ Contacto termina
        =============================================================== --> 
        

        <!-- ===============================================================
        ---------/ footer inicia
        =============================================================== -->                
        <div class="container-footer">
            <div class="footer-btn__flotante btn-scroll" data-id="link-Inicio"></div>
            <div class="container-derechos">
                <p class="derechos"> Todos los Derechos quedan reservados </p>
            </div>
        </div>
        <!-- ===============================================================
        ---------/ footer termina
        =============================================================== --> 


        <!-- ===============================================================
        ---------/ info inicia
        =============================================================== --> 
        <div class="infoSolicitud" id="infoSolicitudWaFa">
            <div class="">
                <span><strong>Agenda tu cita</strong></span>
                <span>Whatsapp:<br/> (618) 951 54 67</span>
                <span>Correo: correo@gmail.com</span>
            </div>
        </div> 
        <!-- ===============================================================
        ---------/ info termina
        =============================================================== --> 

        <!-- ===============================================================
        ---------/ Modal
        =============================================================== --> 
        <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"  >
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" ><b>Seleccionar Servicios</b></h4> 
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                     
                    <div class="modal-body">
                        <span class="alerta"></span>
                        <div class="row">
                         
                            <article class="article-slider mt-4">
                                <div class="slider m-1">
                                    <div id="ele1" class="s_element s_visible">  
                                        <div class="panel-group" id="accordion7401210" role="tablist" aria-multiselectable="false">

                                            <div class="panel panel-default"><!-- Panel 1-->
                                                <div class="panel-heading mb-4" role="tab" id="heading8122873"><!-- Distancia entre titulos de los panel-->
                                                    <h5 class="panel-title ml-3">
                                                        <a role="button" data-toggle="collapse" class="accordion-plus-toggle collapsed  " data-parent="#accordion7401210" href="#collapse8122873" aria-expanded="false" aria-controls="collapse8122873">Corte de Pelo</a>
                                                    </h5> 
                                                </div>
                                                <div id="collapse8122873" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading8122873">
                                                    <div class="panel-body mb-5"> 
                                                        <div class="form-check ml-3"   >
                                                            <input class="form-check-input btn-radios" type="radio" name="serviciosradios" id=" " value="Corte de pelo para caballero $320.00">
                                                            <label class="form-check-label radios alt" for="exampleRadios1">
                                                                    Corte de pelo para caballero 
                                                            </label> 
                                                        </div>
                                                        <span class="precios">$320.00</span>

                                                        <div class="form-check mt-3 ml-3">
                                                            <input class="form-check-input btn-radios" type="radio" name="serviciosradios" id=" " value="Corte de pelo express $280.0">
                                                            <label class="form-check-label radios alt" for="exampleRadios1">
                                                                    Corte de pelo express 
                                                            </label>
                                                        </div>
                                                        <span class="precios">$280.00</span> 
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="panel panel-default"><!-- Panel 2-->
                                                <div class="panel-heading  mb-4" role="tab" id="heading411391">
                                                    <h5 class="panel-title ml-3">
                                                        <a role="button" data-toggle="collapse" class="accordion-plus-toggle collapsed" data-parent="#accordion7401210" href="#collapse411391" aria-expanded="false" aria-controls="collapse411391">Arreglo barba y bigote</a>
                                                    </h5>
                                                </div>
                                                <div id="collapse411391" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading411391">
                                                    <div class="panel-body mb-4">
                                                        
                                                            <div class="form-check   ml-3">
                                                                <input class="form-check-input btn-radios" type="radio" name="serviciosradios" id=" " value="Barba y Bigote $220.00">
                                                                <label class="form-check-label radios alt" for="exampleRadios1">
                                                                    Barba y Bigote
                                                                </label>  
                                                            </div>
                                                            <span class="precios">$220.00</span>
                                                            <div class="form-check mt-3 ml-3">
                                                                <input class="form-check-input btn-radios" type="radio" name="serviciosradios" id=" " value="Bigote $100.00">
                                                                <label class="form-check-label radios alt" for="exampleRadios1">
                                                                Bigote
                                                                </label>
                                                            </div>
                                                            <span class="precios">$100.00</span>
                                                    </div> 
                                                </div>
                                            </div> 

                                            <div class="panel panel-default"><!-- Panel 3-->
                                                <div class="panel-heading mb-4" role="tab" id="heading2183316">
                                                    <h5 class="panel-title   ml-3">
                                                        <a role="button" data-toggle="collapse" class="accordion-plus-toggle collapsed" data-parent="#accordion7401210" href="#collapse2183316" aria-expanded="false" aria-controls="collapse2183316">Paquetes (corte de pelo + barba)</a>
                                                    </h5>
                                                </div>
                                                <div id="collapse2183316" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2183316">
                                                    <div class="panel-body mb-5">
                                                        <div class="form-check   ml-3">
                                                            <input class="form-check-input btn-radios" type="radio" name="serviciosradios" id=" " value="Paquete Clásico $430.00">
                                                            <label class="form-check-label radios alt" for="exampleRadios1">
                                                                Paquete Clásico
                                                            </label>  
                                                        </div>
                                                        <span class="precios">$430.00</span>
                                                        <div class="form-check mt-3 ml-3">
                                                            <input class="form-check-input btn-radios" type="radio" name="serviciosradios" id=" " value="Paquete Capital $450.00">
                                                            <label class="form-check-label radios alt" for="exampleRadios1">
                                                            Paquete Capital
                                                            </label>
                                                        </div>
                                                        <span class="precios">$450.00</span> 
                                                    </div>
                                                </div>
                                            </div>  
                                        </div><!-- Panel group-->  
                                    </div><!-- ele1 -->
                        
                                    <div id="ele2" class="s_element">
                                            
                                            <div class="form-check ml-2 d-flex align-items-center radio-personal">
                                                <input class="form-check-input btn-radios" type="radio" name="personalradios" id=" " value="Rodrigo Salazar">
                                                <div class="circulo ml-2">
                                                </div>
                                                <div class="ml-3">
                                                    <div class="nombre-personal"><b>Alondra Salazar</b></div> 
                                                    <div class="cargo">Barbero/Peluquero</div>
                                                </div> 
                                                
                                            </div>
                                            
                                            <div class="form-check ml-2 mt-3 d-flex align-items-center radio-personal">
                                                <input class="form-check-input btn-radios" type="radio" name="personalradios" id=" " value="Alondra Salazar">
                                                <div class="circulo ml-2">
                                                </div>
                                                <div class="ml-3">
                                                    <div class="mt-1 nombre-personal"><b>Alfonso Uribe</b></div> 
                                                    <div class="cargo">Barbero/Peluquero</div>
                                                </div>
                                            </div>
                                            <div class="form-check ml-2 mt-3 d-flex align-items-center radio-personal">
                                                <input class="form-check-input btn-radios" type="radio" name="personalradios" id=" " value="Pedro Hernandez">
                                                <div class="circulo ml-2">
                                                </div>
                                                <div class="ml-3">
                                                    <div class="mt-1 nombre-personal"><b>Pedro Hernandez</b></div> 
                                                    <div class="cargo">Barbero/Peluquero</div>
                                                </div>
                                            </div>
                                            <div class="form-check ml-2 mt-3 d-flex align-items-center radio-personal">
                                                <input class="form-check-input btn-radios" type="radio" name="personalradios" id=" " value="Raymundo Torres">
                                                <div class="circulo ml-2">
                                                </div>
                                                <div class="ml-3">
                                                    <div class="mt-1 nombre-personal"><b>Raymundo Torres</b></div> 
                                                    <div class="cargo">Barbero/Peluquero</div>
                                                </div>
                                            </div>
                                             
                                        

                                    </div>

                                    <div id="ele3" class="s_element">
                                        3 
                                    </div>
                                </div> 
                            </article>  
                        
    

                            <div class="mt-4" >
                                <h5 class="ml-4 panel-title"><a>Detalles</a> </h5>
                                    
                                <div class="resultado ml-3 m-1">  
                                    <div class="services-reserva "></div> 
                                    <div class="personal-reserva "></div>
                                    <div class="ml-3 mt-3 ubicacion-reserva" >
                                        <i class="fas fa-map-marker-alt  mt-3"></i>
                                        <span class="ml-3  resultado-nombre">Selene del Rio Estética </span>
                                    </div> 
                                    <div class="direccion">   
                                        Av. Monterrey 118 B, colonia<br>
                                        Roma Norte, CP. 06700 
                                    </div> 
                                        
                                </div> 
                            </div>
                        
                        </div> <!-- row-->  

                        <div class="modal-footer"> 
                                <button type="button" class="btn btn-secondary" id="btnAnt"  >Regresar</button><!--data-dismiss="modal"-->
                                <button type="button" class="btn btn-primary" id="btnSig">Continuar</button>
                        </div>

                        
                    </div><!-- modal body-->
                </div>
            </div>
        </div>
        <!-- ===============================================================
        ---------/ Modal termina
        =============================================================== --> 
</div><!--termina container-ppal--> 
 
<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
<!-- <script src="js/jquery.js" charset="utf-8"></script>  -->
<script src="js/swiper.min.js" charset="UTF-8"></script><!-- plugin del slider--> 
<script src="js/funciones.js" charset="utf-8"></script><!-- jquery para los efectos-->

</body>
</html>
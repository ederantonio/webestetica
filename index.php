<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<link rel="stylesheet" href="css/swiper.min.css">   
            <title>Barberia shop</title>
	<!-- Aqui va lo de los iconos --> 
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
                    <li><a class="btn-scroll color-link" data-id="link-Inicio">INICIO</a></li>
                    <li><a class="btn-scroll" data-id="link-QuienesSomos">NOSOTROS</a></li>
                    <li><a class="btn-scroll" data-id="link-Servicios">SERVICIOS</a></li>
                    <li><a class="btn-scroll" data-id="link-Paquetes">PAQUETES</a></li>
                    <!-- <li><a id="btn_ResultLinea">SESIÓN</a></li> -->
                    <li><a  class="contacto btn-scroll" data-id="link-Contacto" >CONTACTO</a></li>
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
        <section id="container-servdo">
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
        ---------/ Paquetes inicia
        =============================================================== -->
        

        <!-- ===============================================================
        ---------/ Contacto inicia
        =============================================================== --> 
        <div class="space bc-negro"></div> 
        <div class="container-tittle bc-negro">
            <span class="container-tittle__tittles2" id="link-Contacto">Contacto</span>
        </div>

        <div class="space_min bc-negro"></div>

        <div class="container-sec"><!--container sec por ende deja todo en columna por eso usa la clase container-ho2 para ahi poner en row los elementos-->
        <div class="container-ho2">  <!-- Esta clase se puede omitir se uso mas que nada para el llenado de todos los servicios y paquetes para evitar o permitir desbordamientos-->
                <!-- <form class="container-form" id="form-Contactanos" action="" method="">
                    
                        <input type="text" name="NombreContacto" value="" class="input-basic" placeholder="Nombre *"id="NombreContacto"/>
                        <span class="MMError" id="MErrorConNom">Error: El Nombre demasiado corto</span>

                        <input type="text" name="EmailContacto" value="" class="input-basic" placeholder="Email *" id="EmailContacto"/>
                        <span class="MMError" id="MErrorConEmail">Error: El Nombre demasiado corto</span>

                        <input type="text" name="TelefonoContacto" value="" class="input-basic" placeholder="Teléfono *" id="TelefonoContacto">
                        <span class="MMError" id="MErrorConTel">Error: El Nombre demasiado corto</span>

                        <textarea type="textarea" name="MensajeConacto" rows="8" cols="50" class="textare-basic" placeholder="Mensaje*" id="MensajeConacto"/></textarea>
                        <span class="MMError" id="MErrorMensajeContacto">Error: El Nombre demasiado corto</span>

                        <div id="RecaptchaField2" data-callback="imNotARobot2"></div>
                        <span class="MMError" id="MErrorRecaptchaField2">Error: No has realizado esta sección</span>
                        <span class="MMError" id="MErrorNoRobotContacto">Error: El Nombre demasiado corto</span>

                        <div class="container-form__btn">
                            <button type="button" name="button" class="btn-form background-colorVerd" id="btn-Contactanos"><strong>Enviar</strong></button>
                            <div class="loader" id="loaderContacto"></div>
                        </div>
                        <span class="MMError" id="AlertEnvioMsContacto"></span>
                </form> -->
                <div class="container-map">
                <iframe scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Residencial%20el%20Fresno,%20Torre%C3%B3n,%20Coahuila%20Torre%C3%B3n+(direccion)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="520" height="400" frameborder="0"></iframe> <a href='https://www.horando.de/en/'>HORANDO</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=67ea099f2f4909f7b5c0e9484d1ba4e54e4c5ddd'></script>
                <!-- <section class="map-basic">
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3600.833111943373!2d-103.4033063!3d25.5106118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fdc86bbd825df%3A0x617ad525fbd14268!2sCentro+Saulo!5e0!3m2!1ses-419!2smx!4v1566422794235!5m2!1ses-419!2smx" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                        
                </section>
                <span class="contacto-info__tittle colorTittle"><strong>LOCAL TORREÓN</strong></span>
                <span class="contacto-info__text">Blv. Revolución 1515 Ote., Col. Torreó. Torreón Coah.</span>
                <span class="contacto-info__text">(A un costado de un supermercado)</span>
                <span class="contacto-info__text">Tel. (618)722 99 03</span>
                <span class="contacto-info__text">correo@gmail.com.mx</span> -->
                </div>
            </div>
        </div>
        <div class="container-footer">
            <div class="footer-btn__flotante btn-scroll" data-id="link-Inicio"></div>
            <div class="container-derechos">
                <p class="derechos"> Todos los Derechos quedan reservados </p>
            </div>
        </div>
        <div class="infoSolicitud" id="infoSolicitudWaFa">
            <div class="">
                <span><strong>Agenda tu cita</strong></span>
                <span>Whatsapp:<br/> (618) 951 54 67</span>
                <span>Correo: correo@gmail.com</span>
            </div>
        </div> 
</div><!--termina container-ppal--> 

<script src="js/jquery.js" charset="utf-8"></script><!-- jQuery principal -->
<script src="js/swiper.min.js" charset="UTF-8"></script><!-- plugin del slider-->
<script src="js/funciones.js" charset="utf-8"></script><!-- jquery para los efectos-->

</body>
</html>
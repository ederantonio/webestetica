var clndr = {}; 
$(function()
{ 
   
    
  // var lotsOfEvents = [];
  // var actualfecha = moment().format('YYYY-MM-DD hh:mm:ss a');  
  // var fechaeningles = moment().format('LLLL').split(',');  
  // var dia = fechaeningles[0].substring(0,3);
  // var mes = fechaeningles[1].substring(0,4);

  // var numero = fechaeningles[1].replace(" ", "").split(' '); 
  
  // var  año = fechaeningles[2].replace(" ", "").split(' '); 
     
  // $(".fechaseleccionada").html( '&nbsp;<b>'+ dia +','+ numero[1] + mes +'del'+' '+ año[0]+'</b>');
  
 
  // var arreglohorario = ['10:00 am' , '11:00 am','12:00 pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm']; 
 
   
  
  // // $.ajax({
  // //   type : 'POST',
  // //   url: 'getEventList.php', 
  // //   dataType:'json',
  // //   data: { datos:actualfecha},
  // //   success: function(data){  
  //     var botonradios ="",botonradios2=""; 
     
  //       for(var i=0;i<arreglohorario.length;i++){// Para ir generando los radio buttons

  //         if((10+i)<12)
  //         {
  //           botonradios += `
  //           <div class="form-check ml-3 mt-2 d-flex align-items-center radio-personal"> 
  //             <input class="form-check-input btn-radios" type="radio" name="radiohoras" id=" " value="${10+i+':'+'00'+''+' am'}"> 
  //             <div class="ml-2">
  //                 <div class=" ">${10+i+':'+'00'+''+' am'}</div>
  //             </div>
  //           </div> 
  //           `; 
  //         }
  //         else{
  //           botonradios2 += `
  //           <div class="form-check ml-3 mt-2 d-flex align-items-center radio-personal"> 
  //             <input class="form-check-input btn-radios" type="radio" name="radiohoras" id=" " value="${(i == 2) ? '12:00 pm' : i-2+':'+'00'+''+'pm'}"> 
  //             <div class="ml-2">
  //                 <div class=" ">${(i == 2) ? '12:00 pm' : i-2+':'+'00'+''+' pm'}</div>
  //             </div>
  //           </div> 
  //           `;
  //         }   
  //       }
  //       $(".horario").html(botonradios);
  //       $(".horario2").html(botonradios2);
     
  //     /* -------------/ Reduce el arreglo a solo dos propiedades a title y date /----------*/
  //     // var datax = [];
  //     // for(var i = 0;i<data.length;i++) {// Se Genera un arreglo solo con el titulo y date
  //     // datax = {"title":data[i].title, "date": data[i].date};
  //     // lotsOfEvents.push(datax);
  //     // }
         
  //     clndr.selectedDate = $('#selected-date').clndr({  
  //       events: lotsOfEvents, // lotsOfEvents: date title para marcar en color verde la fecha que tiene eventos
  //       /*------------/ Limite de rango de fechas /----------*/ 
  //       constraints: {
  //         startDate: moment().format('YYYY-MM-DD'),//fecha actual
  //         endDate: moment().add(1, 'month').format('YYYY-MM-DD')
  //       }, 
  //       clickEvents: {
  //         click: function (target) 
  //         {   
  //              $(".fecha-formato").html(target.date._i) ;
             
  //           /* --------------/ Se da formato a la fecha que selecciona y se muestra /-----------------*/
  //           var fecha = target.date._d.toString();  // Se convierte a string para poder trabajarlo Thu Feb 18 2021 00:00:00 GMT-0600 (hora estándar central) 
             
  //           var fechaentexto = fecha.substring(0,fecha.indexOf("00")); 
  //           var fec = fechaentexto.split(' '); 
  //           fec.pop(); 
            
  //           /* -----------/ Al dar click en fechas inactivas pasadas, fin de rango del mes y del mes siguiente no hara nada /----------*/
  //           if(target.element.classList[2] == 'inactive'||   
  //              target.element.classList[1] == 'inactive'||      
  //              target.element.classList[3] == 'inactive'){ 
  //           } 
  //           else{
  //             $(".fechaseleccionada").html('<b> '+ fec[0] +','+fec[2]+' '+fec[1]+' del '+fec[3]+'</b>');  
  //           }
              
  //           $.ajax({ // Al dar click a alguna fecha se enviara a la db para traer datos de esa fecha
  //               url: 'getEventByDate.php',
  //               dataType:'json',
  //               type : 'POST',
  //               data: {
  //                 eventDate : target['date']['_i']   // 2021-02-19                      
  //               }, 
  //               success: function(json){ 
  //                   //console.log(json);
  //               }
                  
  //           });// Ajax  
  //         }, 
  //       }, 
  //           trackSelectedDate: true,// Para al seleccionar la fecha le coloca un color
  //           ignoreInactiveDaysInSelection: true,// Para no seleccionar los que estan inactivos
  //           template: $('#clndr-template').html()
  //     }); // SelectedDate 
  //   // }// Success
  // // });// Ajax Principal
});//function

 
var clndr = {}; 
$(function(){
  var lotsOfEvents = [];

  $.ajax({
    url: 'getEventList.php',
    dataType:'json',
    success: function(data){
      console.log(data);
      var datax = [];
        for(var i = 0;i<data.length;i++) {
          datax = {"title":data[i].title, "date": data[i].date};
          lotsOfEvents.push(datax);
        }
 
        clndr.selectedDate = $('#selected-date').clndr({  
          events: lotsOfEvents,
          /*------------/ Limitar rango de fechas /----------*/ 
          constraints: {
            startDate: moment().format('YYYY-MM-DD'),//fecha actual
            endDate: moment().add(1, 'month').format('YYYY-MM-DD')
          }, 
          clickEvents: {
            click: function (target) 
            { // Al dar click a la fecha que contiene datos se trae los datos 
             // console.log(target);
              $.ajax({
                  url: 'getEventByDate.php',
                  dataType:'json',
                  type : 'POST',
                  data: {
                    eventDate : target['date']['_i']                         
                  },
                  success: function(json){ 
                      console.log(json);
                  }
              }); 
            }, 
          },
              /*doneRendering: function () {
                console.log('The callbacks calendar just called doneRendering()');
              },*/
                trackSelectedDate: true,// Para al seleccionar la fecha le coloca un color
                ignoreInactiveDaysInSelection: true,// Para no seleccionar los que estan inactivos
                template: $('#clndr-template').html()
        }); //selectedDate 
    }
  });
});//function
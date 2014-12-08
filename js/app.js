    var eventData = [];
 
    var getEvents = $.ajax({
        type : "GET",
        url : "http://127.0.0.1:52400/getAllEvents/" + $.sessionStorage.get("userid"),
        cache : false,    
    });

        $("#logout").click(function(){      
            alert("Du er logget ud"); 
            window.location.replace("index.html")
        });  

    getEvents.done(function (response, textStatus, jqXHR) {
        response.forEach(function(event){
                var eventObj = {};
                eventObj["id"] = event.eventid;
                eventObj["start"] = new Date(event.start);
                eventObj["end"] = new Date(event.end);
                eventObj["title"] = event.title;
                eventData.push(eventObj);
        });
        startCalendar();
    });

var startCalendar = function(){
    $(document).ready(function() {

    // PAGE is now ready, initialize the calendar...

        $('#calendar').fullCalendar({

            header: {
                left: 'prev, next today',
                center: 'title',
                right: 'agendaDay agendaWeek month'
            },
            events: eventData,
            firstDay: 1,
           
 monthNames: ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli',
 'August', 'September', 'Oktober', 'November', 'December'],
           
 dayNamesShort: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør']

            
            
        })

    });
}
    

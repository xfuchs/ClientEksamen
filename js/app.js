    var eventData = [];
 
    var getEvents = $.ajax({
        type : "GET",
        url : "http://127.0.0.1:52400/getAllEvents/" + $.sessionStorage.get("userid"),
        cache : false,    
        done : function ( response, textStatus){
            console.log(response);
        }
    });

    getEvents.done(function (response, textStatus, jqXHR) {
        response.forEach(function(event){
                var eventObj = {};
                eventObj["id"] = event.eventid;
                eventObj["start"] = new Date(event.start);
                eventObj["end"] = new Date(event.end)
                eventObj["title"] = event.title;
                eventData.push(eventObj);
            startCalendar();
        });
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
            events: eventData
        })

    });
}
    
    

//     eventNew: function(calEvent, $event) {
//         
//         },
//            
//
//      eventDrop: function(calEvent, $event) {
//        displayMessage('<strong>Moved Event</strong><br/>Start: ' + calEvent.start + '<br/>End: ' + calEvent.end);
//      },
//      eventResize: function(calEvent, $event) {
//        displayMessage('<strong>Resized Event</strong><br/>Start: ' + calEvent.start + '<br/>End: ' + calEvent.end);
//      },
//      eventClick: function(calEvent, $event) {
//        displayMessage('<strong>Clicked Event</strong><br/>Start: ' + calEvent.start + '<br/>End: ' + calEvent.end);
//      },
//      eventMouseover: function(calEvent, $event) {
//        displayMessage('<strong>Mouseover Event</strong><br/>Start: ' + calEvent.start + '<br/>End: ' + calEvent.end);
//      },
//      eventMouseout: function(calEvent, $event) {
//        displayMessage('<strong>Mouseout Event</strong><br/>Start: ' + calEvent.start + '<br/>End: ' + calEvent.end);
//      },
//      noEvents: function() {
//        displayMessage('There are no events for this week');
//      }
//    });
//
//    function displayMessage(message) {
//      $('#message').html(message).fadeIn();
//    }
//
//    $('<div id="message" class="ui-corner-all"></div>').prependTo($('body'));
//  });

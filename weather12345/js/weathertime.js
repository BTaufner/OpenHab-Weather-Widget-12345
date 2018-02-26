angular
    .module('appweatheina', [])
    .controller('TimeCtrl', function($scope, $timeout) {

    $scope.weathertime = "loading clock..."; // initialise the time variable
    $scope.tickInterval = 1000 //ms

    var tick = function() {

        function pad(n) {
             return (n < 10) ? '0' + n : n;
        }
    
        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
                
        var time = new Date();
        
        var month = month[time.getMonth()];
        
        //var month = time.getMonth() + 1;
        var day = time.getDate();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        var ampm = "am";
    
        if (hours > 12) {
            hours -= 12;
            ampm = "pm";
        } else if (hours === 0) {
            hours = 12;
        }
    
        var todisplay = month + " " + day + ", " + hours + ':' + pad(minutes)+ ':' + pad(seconds) + " " + ampm;
        
        //var now = new Date('MMMM d, h:mm:ss a');
        //var now2 = now.toString();  
        todisplay.replace("AM","am");
        todisplay.replace("PM","pm");
        
        //$scope.weathertime = Date.now() // get the current time
        $scope.weathertime = todisplay; 
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

    // Start the timer
    $timeout(tick, $scope.tickInterval);
});

    
var myClock = document.querySelector("#myClock>div");
var $myDate = document.getElementById("myDate");
var $myHour = document.getElementById("myHour");
var local   = 'fr-FR';
var options = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            };

function myDate() {
    var d = new Date();
    var myDate  = d.toLocaleDateString(local, options);
    var myHour  = d.toLocaleTimeString(local);
    
    var myDate  = myDate.toLowerCase()
                        .split(' ')
                        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' ');

    $myDate.innerHTML = myDate;
    $myHour.innerHTML = myHour;
}

setInterval(myDate, 1000);

// CLOCK

myClock.addEventListener('click', {
    handleEvent: function (event) {
        if (myClock.getAttribute('class') === 'myBgTransparent') {
            myClock.setAttribute('class', 'myBgClock');        
        }
        else {
            myClock.setAttribute('class', 'myBgTransparent');
        }
    }
});

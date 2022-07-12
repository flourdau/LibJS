var myClock     = document.querySelector("#myClock>div");
var $myDate     = document.getElementById("myDate");
var $myHour     = document.getElementById("myHour");

var local       = 'fr-FR';
var options     = {
                        weekday : "long",
                        year    : "numeric",
                        month   : "long",
                        day     : "numeric"
                };

function myDate() {
        var d       = new Date();
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
                if (myClock.getAttribute('class') === 'myBgTrsprnt') {
                        myClock.setAttribute('class', 'myBgClock');
                }
                else {
                        myClock.setAttribute('class', 'myBgTrsprnt');
                }
        }
});

myLogoTemp.addEventListener('click', {
        handleEvent: function (event) {
                var myForm      = document.querySelector("#formCalendar");
                var myAir       = document.querySelector("#myAir>ul");
                var myLogoTemp  = document.querySelector("#myLogoTemp");
                var myTemp      = document.querySelector("#myTemp");

                myLogoTemp.setAttribute('class', 'myDisplayNone');
                myTemp.setAttribute('class', 'myDisplayNone');
                myForm.setAttribute('class', 'myDisplayNone');
                myAir.setAttribute('class', 'myDisplayNone');
        }
});

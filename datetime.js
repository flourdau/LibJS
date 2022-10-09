const $myDate   = document.getElementById("myDate");
const $myHour   = document.getElementById("myHour");
const local     = 'fr-FR';
const options   = {
                    weekday : "long",
                    year    : "numeric",
                    month   : "long",
                    day     : "numeric"
                };

function myDate() {
    const d         = new Date();
    const myHour    = d.toLocaleTimeString(local);
    let myDate      = d.toLocaleDateString(local, options);

    myDate = myDate.toLowerCase()
                    .split(' ')
                    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                    .join(' ');

    $myDate.innerHTML = myDate;
    $myHour.innerHTML = myHour;
}

setInterval(myDate, 1000);
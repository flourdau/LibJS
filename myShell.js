window.onload = () => {
    
    var buttonClose = document.getElementsByClassName("btnClose");
    const buttonMin = document.getElementsByClassName("btnMinimize");
    const buttonMax = document.getElementsByClassName("btnMaximize");
    const buttonOpacity = document.getElementsByClassName("btnCode");

    const myContentClock = document.getElementById("myClock");


    // BOUTONS 
    // CLOSE
    function myClose(e) {
        e.parentNode.parentNode.parentNode.parentNode.setAttribute('class', 'myDisplayNone');
    }

    for (i = 0; i < buttonClose.length; i++) {
        buttonClose[i].addEventListener("click", function() {
            myClose(this);
        });
    }


    // MAX
    function myMax(e) {
        var myContent = e.parentNode.parentNode.parentNode.parentNode;
        var myBarContent = myContent.querySelector("div:first-child");
        var myContent = myContent.querySelector("div:last-child");

        if (myBarContent.getAttribute('class') === 'myWidthMax bgColor1_98') {
            myBarContent.setAttribute('class', 'myMax600px bgColor1_98');
            myContent.setAttribute('class', 'myMax600px bgColor1_80');
            myContentClock.style.display = "block";
        }
        else {
            myBarContent.setAttribute('class', 'myWidthMax bgColor1_98');
            myContent.setAttribute('class', 'myWidthMax bgColor1_80');
            myContentClock.style.display = "none";
        }
    }

    for (i = 0; i < buttonMax.length; i++) {
        buttonMax[i].addEventListener("click", function() {
            myMax(this);
        });
    }


    // MIN
    for (i = 0; i < buttonMin.length; i++) {
        buttonMin[i].addEventListener("click", function() {
            myClose(this);;
            
        });
    }


    // OPACITY
    function myOpacity(e) {
        var myContent = e.parentNode.parentNode.parentNode.parentNode;
        var myBarContent = myContent.querySelector("div:first-child");
        var myContent = myContent.querySelector("div:last-child");

        if (myBarContent.getAttribute('class') === 'myMax600px myBgTransparent') {
            myBarContent.setAttribute('class', 'myMax600px bgColor1_98');
            myContent.setAttribute('class', 'myMax600px bgColor1_80');
        }
        else {
            myBarContent.setAttribute('class', 'myMax600px myBgTransparent');
            myContent.setAttribute('class', 'myMax600px myBgTransparent');
        }
    }

    for (i = 0; i < buttonOpacity.length; i++) {
        buttonOpacity[i].addEventListener("click", function() {
            myOpacity(this);
        });
    }

}
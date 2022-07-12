window.onload = () => {
    
    var buttonClose = document.getElementsByClassName("btnClose");
    const buttonMin = document.getElementsByClassName("btnMinimize");
    const buttonMax = document.getElementsByClassName("btnMaximize");
    const buttonOpacity = document.getElementsByClassName("btnCode");


    // BOUTONS 
    // CLOSE
    function myClose(e) {
        e.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.setAttribute('class', 'myDisplayNone');
    }

    for (i = 0; i < buttonClose.length; i++) {
        buttonClose[i].addEventListener("click", function() {
            myClose(this);
        });
    }


    // MAX
    function myMax(e) {
        var myContent = e.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        var myBarContent = myContent.querySelector("div:first-child");
        myContent =  myContent.querySelector("div:nth-child(2)");
        if (myBarContent.getAttribute('class') === 'myWidthMax bgColor1_98') {
            myBarContent.setAttribute('class', 'myMax600px bgColor1_98');
            myContent.setAttribute('class', 'myMax600px bgColor1_80');
        }
        else {
            myBarContent.setAttribute('class', 'myWidthMax bgColor1_98');
            myContent.setAttribute('class', 'myWidthMax bgColor1_80');
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
            myClose(this);
        });
    }


    // OPACITY
    function myOpacity(e) {        
        var myContent           = e.parentNode.parentNode.parentNode.parentNode;
        const myShellBar        = myContent.querySelector(".myShell>div>div:first-child");
        const myShellContent    = myContent.querySelector(".myShell>div>div:nth-child(2)");

        if (myShellBar.getAttribute('class') === 'myBgTrsprnt') {
            myShellBar.setAttribute('class', 'bgColor1_80');
            myShellContent.setAttribute('class', 'bgColor1_80');
        }
        else {
            myShellBar.setAttribute('class', 'myBgTrsprnt');
            myShellContent.setAttribute('class', 'myBgTrsprnt');
        }
    }

    for (i = 0; i < buttonOpacity.length; i++) {
        buttonOpacity[i].addEventListener("click", function() {
            myOpacity(this);
        });
    }

}
function showSnackbar() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}

function showAbout() {
    document.getElementById("about-overlay").style.display = "block";
}

function off() {
    document.getElementById("about-overlay").style.display = "none";
}

function showHowToExit() {
    const x = document.getElementById("showHowToExit");
    x.style.visibility = "visible";
    setTimeout(function () {
        x.style.visibility = x.style.visibility.replace("visible", "");
    }, 6000);
}

function scrollToContent() {
    document.querySelector('#content').scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToFindMe() {
    document.querySelector('#findMe').scrollIntoView({
        behavior: 'smooth'
    });
}


//Change Color On Scroll Down
let test = document.getElementById("test");

document.onscroll = function () {

    scrollTop = window.pageYOffset;
    test.innerHTML = scrollTop;

    allDivs = document.getElementsByTagName('div');

    for (i = 0; i < allDivs.length; i++) {
        curDiv = allDivs[i];

        // The code below makes the background color change when the scroll top passes the 2/3 of the previous div.
        heightBefore = 0;
        if (i > 0) {
            heightBefore = allDivs[i - 1].offsetHeight / 3;
        }

        if (scrollTop > curDiv.offsetTop - heightBefore) {
            color = curDiv.getAttribute("data-color");
            console.log(color);
            document.body.style.background = color;
        }
    }
};
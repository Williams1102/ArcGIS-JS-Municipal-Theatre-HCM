const srollobj = {
    scrollbtn: document.getElementById("btt-btn"),
}

window.addEventListener("scroll", function () {
    var st = window.pageYOffset;
    if (st == 0) {
        srollobj.scrollbtn.style.animationName = "fade-out";
    } else {
        srollobj.scrollbtn.style.animationName = "fade-in";
        srollobj.scrollbtn.style.display = "block";
    }
}, false);
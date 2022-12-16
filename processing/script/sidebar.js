const sidebar = {
    sidebarbtn: document.getElementById("sidebarbtn"),
    sidebarmenu: document.getElementById("sidebarmenu"),
    sidebarclosebtn: document.getElementById("sidebarclosebtn"),
}

sidebar.sidebarbtn.addEventListener("click", (e) => {
    sidebar.sidebarmenu.style.animationName = "sidebarmoveout";
    e.preventDefault();
});

sidebar.sidebarclosebtn.addEventListener("click", (e) => {
    sidebar.sidebarmenu.style.animationName = "sidebarmovein";
    e.preventDefault();
});
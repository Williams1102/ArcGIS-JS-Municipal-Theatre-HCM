const lienheobj = {
    lienheform: document.getElementById("lienheform"),
    hovateninput: document.getElementById("hovateninput"),
    emailinput: document.getElementById("emailinput"),
    ykieninput: document.getElementById("ykieninput"),
    lienheformbtn: document.getElementById("lienheformbtn"),
}

lienheobj.lienheform.addEventListener("submit", (e) => {
    if (lienheobj.hovateninput.value == "") {
        alert("Vui lòng nhập họ và tên!");
        lienheobj.hovateninput.focus();
        e.preventDefault();
    }
    else if (lienheobj.emailinput.value == "") {
        alert("Vui lòng nhập email!");
        lienheobj.emailinput.focus();
        e.preventDefault();
    }
    else if (lienheobj.ykieninput.value == "") {
        alert("Vui lòng nhập ý kiến đóng góp!");
        lienheobj.ykieninput.focus();
        e.preventDefault();
    }
    else {
        alert("Cảm ơn ý kiến đóng góp của bạn!!")
        window.reload();
    }
});
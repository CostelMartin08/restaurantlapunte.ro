
var iClass = document.querySelector(".fa-moon");

function mod() {
    var body = document.body;
    var oraCurenta = new Date().getHours();

    if (oraCurenta >= 18 || oraCurenta < 8) {
        body.classList.add('dark-mode');

        iClass.classList.add("fa-moon");
        iClass.classList.remove("fa-sun");

    } else {
        body.classList.remove('dark-mode');
        iClass.classList.remove("fa-moon");
        iClass.classList.add("fa-sun");

    }
}


function schimbaClasa() {
    var body = document.body;
 
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        iClass.classList.remove("fa-moon");
        iClass.classList.add("fa-sun");

    } else {

        body.classList.add('dark-mode');
        iClass.classList.add("fa-moon");
        iClass.classList.remove("fa-sun");

    }
}
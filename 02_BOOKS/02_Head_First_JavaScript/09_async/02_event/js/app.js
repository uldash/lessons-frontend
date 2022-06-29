window.onload = init;
function init() {
    // var image = document.getElementById("zero");
    // image.onclick = showAnswer;
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }
}

function showAnswer(eventObj) {
    // var image = document.getElementById("zero");
    // image.setAttribute("src", "./img/zero.jpg");
    var image = eventObj.target;
    if (image.src.slice(-8) === "blur.jpg") {
        image.setAttribute("src", "./img/" + image.id + ".jpg");
        setTimeout(()=>{image.setAttribute("src", "./img/" + image.id + "blur.jpg");}, 3000, image);
    } else {
        image.setAttribute("src", "./img/" + image.id + "blur.jpg");
    }
}
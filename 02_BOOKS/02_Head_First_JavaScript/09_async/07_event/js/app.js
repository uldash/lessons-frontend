window.onload = init;

function init() {
    // var image = document.getElementById("zero");
    // image.onclick = showAnswer;
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onmouseover = showAnswer;
        images[i].onmouseout = hideAnswer;
    }
}

function showAnswer(eventObj) {
    var image = eventObj.target;
    image.setAttribute("src", "./img/" + image.id + ".jpg");
}

function hideAnswer(eventObj) {
    var image = eventObj.target;
    image.setAttribute("src", "./img/" + image.id + "blur.jpg");
}
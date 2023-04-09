let imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++){
    let temp = imgs[i];
    temp.setAttribute("onclick",`enlarge("${temp.getAttribute("src")}")`);
}

const enlarge = (src) => {
    let overlay = document.getElementById("overlay");
    overlay.style.visibility = "visible";
    overlay.style.pointerEvents = "all";
    let img = document.createElement("img");
    img.setAttribute("onclick", "clearOverlay()");
    img.setAttribute("src", src);
    img.id = "enlarge";
    overlay.appendChild(img);
}

const clearOverlay = () => {
    let overlay = document.getElementById("overlay");
    overlay.innerHTML = "";
    overlay.style.visibility = "hidden";
    overlay.style.pointerEvents = "none";
}
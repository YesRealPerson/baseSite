let images = document.getElementsByTagName("img");
let bigImage = document.getElementById("bigImageClick");
let big = document.getElementById("bigImage");
for(let i = 0; i < images.length; i++){
    let image = images[i];
    let src = image.src;
    image.addEventListener("click", () => {
        bigImage.src = src;
        big.style.visibility = "visible";
    })
}
big.addEventListener("click", () => {
    big.style.visibility = "hidden";
})
bigImage.addEventListener("click", () => {
    big.style.visibility = "hidden";
})
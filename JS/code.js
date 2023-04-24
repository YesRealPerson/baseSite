var elements = document.getElementsByClassName("upper");
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight == "none"){
      content.style.maxHeight = "0px";
    } else {
      content.style.maxHeight = "none";
    } 
  });
}
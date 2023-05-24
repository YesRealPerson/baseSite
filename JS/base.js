let footer = document.getElementById("footer");
let content = document.getElementById("content");
let header = document.getElementById("header");
header.innerHTML=`<img src="./favicon.ico" style="border:none">
<h1 style="border:none">CONFLUXES</h1>`;
footer.innerHTML=`<a href="mailto:spark@confluxes.net">contact</a>`;
if(content.innerHTML == ""){
    content.innerHTML = "<h3>Nothing to see here... Yet...</h3>";
}
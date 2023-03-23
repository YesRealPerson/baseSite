let footer = document.getElementById("footer");
let content = document.getElementById("content");
let header = document.getElementById("header");
header.innerHTML=`<img src="./IMG/favicon.ico" style="border:none">
<h1 style="border:none">CONFLUXES</h1>
<div id="links" style="border: none">
    <a href="./index.html">home</a>
    <a href="./code.html" >code</a>
    <a href="./nonsense.html">talking</a>
    <a href="./photography.html" style="border: none">photography</a>
    
</div>`;
let random = Math.floor((Math.random()*5)+1);
console.log(random);
footer.innerHTML=`<a href="mailto:spark@confluxes.net">contact</a>`;
if(content.innerHTML == ""){
    content.innerHTML = "Nothing to see here!";
}
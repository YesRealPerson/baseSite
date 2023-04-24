//let images = ["./IMG/1261FD7C-90D0-4986-9AB5-52659DF0F308.jpg", "./IMG/1B9FE26D-4148-48CC-9EFA-60F41414C205.jpg", "./IMG/2A155E3E-5E52-4183-8CC8-E6DB61DC035F.jpg", "./IMG/2D1B2FDD-9179-4262-B79E-D900B824DC0C.jpg", "./IMG/2E1B0365-EF50-4244-A58D-042C66C35028.jpg", "./IMG/309786E4-1DEC-4BBF-B609-4C74E2BA7C89.jpg", "./IMG/32DE5349-0338-4D4D-BAC5-33D2BC6F3070.jpg", "./IMG/35F594F7-EDF9-46D2-8572-9D608E2816F3.jpg", "./IMG/3EC16CA5-C193-4EE5-8C1E-171017381F60.jpg", "./IMG/49212A39-18B5-4EF0-948F-D9E332A68263.jpg", "./IMG/58829AF1-4CCD-469A-A3DB-2775D8772BFF.jpg", "./IMG/5BC1014A-FB57-48AC-A8D0-425E6A10CB87.jpg", "./IMG/5EEA8F16-4063-490D-9ABE-ECD13C44327E.jpg", "./IMG/72039C54-815B-454A-BCC2-8830970DB75A.jpg", "./IMG/7F5D6A36-038F-46CD-99CF-B35C35DC8612.jpg", "./IMG/9C3981EE-9B94-4C9D-A34E-CB0FE551B8FD.jpg", "./IMG/9E9B4CA9-570A-432E-987E-15A0AEC74645.jpg", "./IMG/BB21767F-E28E-46B4-B6B8-5DA7DECB8663.jpg", "./IMG/C49C6492-671F-44FE-A8D5-F1C495D993B2.jpg", "./IMG/C82AF256-BAF6-4C1B-83CD-D165D131B156.jpg", "./IMG/C838F6FD-F572-4D62-A509-0210F887C450.jpg", "./IMG/C856A23C-137B-4E4A-94A1-38BC29AFF0BD.jpg", "./IMG/C912014B-F899-45CC-A3DA-A327264B8E5E.jpg", "./IMG/F45125AF-76C6-440D-A7D7-470ABC266A48.jpg", "./IMG/FFE0A7E7-F0BC-44F2-A38E-F86CCC79DF80.jpg", "./IMG/IMG_0967.jpg", "./IMG/IMG_0987.jpg", "./IMG/IMG_1245.jpg", "./IMG/IMG_1298.jpg", "./IMG/IMG_1316.jpg", "./IMG/IMG_1323.jpg", "./IMG/IMG_1342.jpg",]

let footer = document.getElementById("footer");
let content = document.getElementById("content");
let header = document.getElementById("header");
header.innerHTML=`<img src="./favicon.ico" style="border:none">
<h1 style="border:none">CONFLUXES</h1>
<div id="links" style="border: none">
    <a href="./index.html">home</a>
    <a href="./code.html" >code</a>
    <a href="./photography.html" style="border: none">photography</a>
    
</div>`;
//let random = Math.floor((Math.random()*images.length));
//header.style.backgroundImage = `url("${images[random]}")`;
footer.innerHTML=`<a href="mailto:spark@confluxes.net">contact</a>`;
console.log(content.innerHTML);
if(content.innerHTML == ""){
    content.innerHTML = "<h3>Nothing to see here... Yet...</h3>";
}
let footer = document.getElementById("footer");
let content = document.getElementById("content");
let header = document.getElementById("header");
const MOTD = ["I hate Destiny 2.", "TODO: ADD RANDOMIZED TEXT TO FOOTER", "&#60;footer id=\"footer\"&#62;&#60;/footer&#62;","<img src=\"./IMG/peepoPogClimbingTreeHard4House.webp\">", "Don't do drugs kids.", "You wouldn't download a car", "I heard the 404 page on this site is really funny", "I'm being held hostage to write these messages each time you refresh the page, send help.", "The ending was garbage get over it", "Medias are bad luck, don't trust 'em.", "I want this site to be garbage for 10 years at least!", "Down, down, down by the river...", "Ermmmm Actually...", "Mom I'm scared come pick me up."];
header.innerHTML=`<img src="./favicon.ico" style="border:none"><h1 style="border:none">CONFLUXES</h1>`;
footer.innerHTML=`${MOTD[Math.floor(Math.random()*MOTD.length)]}`;
if(content.innerHTML == ""){
    content.innerHTML = "<h3>Nothing to see here... Yet...</h3>";
}
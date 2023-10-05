let footer = document.getElementById("footer");
let content = document.getElementById("content");
let header = document.getElementById("header");
const MOTD = ["I hate Destiny 2.", "TODO: ADD RANDOMIZED TEXT TO FOOTER", "&#60;footer id=\"footer\"&#62;&#60;/footer&#62;","<img src=\"./IMG/peepoPogClimbingTreeHard4House.webp\">", "Don't do drugs kids.", "You wouldn't download a car", "I heard the 404 page on this site is really funny", "Cats > Dogs", "This guy doesn't actually know how to code, he's keeping me hostage making me write these messages each time you refresh the page!", "honk shoo honk shoo", "hoooooonk mi mi mi", "Yo yo yo my choombas", "I haven't broken a bone, have you? (Benefits of never going outside)", "I set two cards face down and end my turn.", "139 was garbage", "Medias are bad luck, don't trust 'em.", "Just spam magic missle.", "Down, down, down by the river...", "Ermmmm Actually...", "Y-Y-You're *Blushes* reading t-t-the footer? *tilts head down and looks up at you* (I deserve to go to hell)", "What? You don't *Gasps for air* use VIM? *Pushes up glasses and wipes off sweat*", "If this page hits my usage limits on cloudflare I will eat a dead rat.", "Mom I'm scared come pick me up."];
header.innerHTML=`<img src="./favicon.ico" style="border:none"><h1 style="border:none">CONFLUXES</h1>`;
footer.innerHTML=`${MOTD[Math.floor(Math.random()*MOTD.length)]}`;
if(content.innerHTML == ""){
    content.innerHTML = "<h3>Nothing to see here... Yet...</h3>";
}
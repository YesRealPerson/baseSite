const getSteamActivity = async () => {
    const activity = (await (await fetch("https://steamactivity.spark952.workers.dev/")).json()).response.games;
    for (let i = 0; i < activity.length; i++) {
        let recentTime = Math.floor(activity[i].playtime_2weeks / 60 * 10) / 10 + " hours";
        let allTime = Math.floor(activity[i].playtime_forever / 60 * 10) / 10 + " hours";

        let outer = document.createElement("div");
        outer.className = "game";

        let img = document.createElement("img");
        img.src = "https://cdn.cloudflare.steamstatic.com/steam/apps/" + activity[i].appid + "/capsule_231x87.jpg?t=1684872853"
        outer.appendChild(img);

        let name = document.createElement("a");
        name.href = "https://store.steampowered.com/app/" + activity[i].appid;
        name.innerHTML = activity[i].name + "<br> Time Played in the Past 2 Weeks: " + recentTime + "<br> Total Time Played: " + allTime;
        outer.appendChild(name);


        document.getElementById("games").appendChild(outer);
    }
}

const getCurrentGame = async () => {
    const currentGame = await (await fetch("https://currentgame.spark952.workers.dev/")).json();
    let body = document.getElementById("currentlyPlayingBody");
    let header = document.getElementById("currentlyPlayingHeader");
    if (currentGame.status == "yes") {
        header.innerHTML = "CURRENTLY PLAYING";
        header.style.visibility = "visible";
        body.style.visibility = "visible";
        let banner = document.createElement("img");
        banner.src = currentGame.banner;
        let name = document.createElement("a");
        name.href = currentGame.link;
        name.innerHTML = currentGame.name;
        body.appendChild(banner);
        body.appendChild(name);
    } else {
        body.style.margin = "0px";
        header.style.margin = "0px";
    }
}

const getGitHubActivity = async () => {
    const latest = (await ((await fetch("https://githubactivity.spark952.workers.dev/")).json()))[0];

    let outer = document.createElement("div");

    let profilePicture = document.createElement("img");
    profilePicture.src = latest.actor.avatar_url;
    profilePicture.id = "profilePicture";
    outer.appendChild(profilePicture);

    let profileName = document.createElement("a");
    profileName.href = "https://github.com/" + latest.actor.login;
    profileName.innerHTML = latest.actor.display_login;
    profileName.id = "profileName";
    outer.appendChild(profileName);

    document.getElementById("ghProfile").appendChild(outer);
    document.getElementById("latestActivity").innerHTML += "<b>Repo:</b> <a href=\"https://github.com/" + latest.repo.name + "\">" + latest.repo.name + "</a><br><b>Commit Message:</b> " + latest.payload.commits[0].message + "<br><b>Pushed At:</b> " + latest.created_at;
}

let rolling = false
let quickscopable = true
document.addEventListener("scroll", async (event) => {
    if ((window.innerHeight + window.scrollY+5) >= document.body.scrollHeight && !rolling && quickscopable) {
        rolling = true
        document.getElementById("hitmarker").style.visibility = "hidden";
        document.getElementById("hitmarker").style.zIndex = 100;
        quickscope = document.getElementById("quickscope");
        wow = document.getElementById("wow");

        quickscope.setAttribute("src", "./IMG/quickscope.gif");

        quickscope.style.visibility = "visible";
        quickscope.style.zIndex = 50000;
        await new Promise(r => setTimeout(r, 1500));
        quickscope.style.visibility = "hidden";
        quickscope.style.zIndex = 100;

        wow.setAttribute("src", "./IMG/wow.gif")

        wow.style.visibility = "visible";
        wow.style.zIndex = 50000;
        await new Promise(r => setTimeout(r, 3200));
        wow.style.visibility = "hidden";
        wow.style.zIndex = 100;

        quickscope.setAttribute("src", "")
        wow.setAttribute("src", "")
        rolling = false;
        quickscopable = false;
    }else{
        quickscopable = true;
    }
    if(!rolling) {
        timer = 100;
        document.getElementById("hitmarker").style.visibility = "visible";
        document.getElementById("hitmarker").style.zIndex = 101;
        await new Promise(r => setTimeout(r, 500));
        document.getElementById("hitmarker").style.visibility = "hidden";
        document.getElementById("hitmarker").style.zIndex = 100;
    }
});

let dvdRunning = false
let dvdObjects = []
let FPS = 30
const runDVD = async () => {
    dvdRunning = true
    while(true){
        for(let i = 0; i < dvdObjects.length; i++){
            let dvd = dvdObjects[i];
            let htmlObject = dvd.htmlObject;
            htmlObject.id = "test"
            if(!dvd.added){
                document.getElementById("DVD").appendChild(dvd.htmlObject);
            }
            dvd.x = dvd.x + dvd.vx/FPS
            dvd.y = dvd.y + dvd.vy/FPS
            htmlObject.style.left = dvd.x + "px"
            htmlObject.style.bottom = dvd.y + "px"
            if(dvd.x > window.innerWidth-50 || dvd.x < -50){
                dvd.vx *= -1;
            }
            if(dvd.y > window.innerHeight-50 || dvd.y < -50){
                dvd.vy *= -1;
            }
        }
        await new Promise(r => setTimeout(r, 1/FPS));
    }
}
const addDVD = async () => {
    console.log("TEST")
    let dvd = document.createElement("img");
    dvd.src = "./IMG/dvd.png"
    dvdObjects.push({
        htmlObject: dvd,
        x: Math.random()*window.innerWidth,
        y: Math.random()*window.innerHeight,
        vx: window.innerWidth/20,
        vy: window.innerWidth/20,
        added: false
    })
    if(!dvdRunning){
        runDVD();
    }
}
document.getElementById("DVDBUTTON").addEventListener("click", () => {addDVD()})
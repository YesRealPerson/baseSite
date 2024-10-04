const getSteamActivity = async () => {
    const activity = (await (await fetch("https://steamactivity.spark952.workers.dev/")).json()).response.games;
    for (let i = 0; i < activity.length; i++) {
        let recentTime = Math.floor(activity[i].playtime_2weeks / 60 * 10) / 10 + " hours";
        let allTime = Math.floor(activity[i].playtime_forever / 60 * 10) / 10 + " hours";

        let outer = document.createElement("div");
        outer.className = "game";

        let img = document.createElement("img");
        img.src = "https://cdn.cloudflare.steamstatic.com/steam/apps/" + activity[i].appid + "/capsule_231x87.jpg"
        outer.appendChild(img);

        let name = document.createElement("a");
        name.href = "https://store.steampowered.com/app/" + activity[i].appid;
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            name.innerHTML = activity[i].name + "<br> Past 2 Weeks: " + recentTime + "<br> Total: " + allTime;
        }else{
            name.innerHTML = activity[i].name + "<br> Time Played in the Past 2 Weeks: " + recentTime + "<br> Total Time Played: " + allTime;
        }
        outer.appendChild(name);
        document.getElementById("games").appendChild(outer);
    }
}

const getCurrentGame = async () => {
    const currentGame = await (await fetch("https://currentgame.spark952.workers.dev/")).json();
    let body = document.getElementById("currentlyPlayingBody");
    let header = document.getElementById("currentlyPlayingHeader");
    if (currentGame.status == "yes") {
        header.innerHTML = "<br><br><br><h3>CURRENTLY PLAYING</h3>  ";
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
    const latest = (await ((await fetch("https://githubactivity.spark952.workers.dev/")).json()));
    let outer = document.createElement("div");

    let profilePicture = document.createElement("img");
    profilePicture.src = latest[0].actor.avatar_url;
    profilePicture.id = "profilePicture";
    outer.appendChild(profilePicture);

    let profileName = document.createElement("a");
    profileName.href = "https://github.com/" + latest[0].actor.login;
    profileName.innerHTML = latest[0].actor.display_login;
    profileName.id = "profileName";
    outer.appendChild(profileName);

    document.getElementById("ghProfile").appendChild(outer);

    let type = "";
    let repo = "";
    let message = "";
    let final = "";
    for (let i = 0; i < latest.length; i++) {
        let item = latest[i];
        try {
            repo = item.repo.name.split("/")[1];
            type = item.type;
            let commits = item.payload.commits;
            for (let j = 0; j < commits.length; j++) {
                try {
                    message = commits[j].message;
                    break
                } catch (err) {
                    console.log(err + " Going next! (commit)");
                }
            }
            break
        } catch (err) {
            console.log(err + " Going next! (update)");
        }
    }

    switch (type) {
        case 'CreateEvent':
            final = "Cretaed repo: <a href=\"https://github.com/yesrealperson/" + repo + "\">" + repo + "</a><br>Message: " + message;
            break;
        case 'DeleteEvent':
            final = "Deleted repo: <a href=\"https://github.com/yesrealperson/" + repo + "\">" + repo + "</a><br>Message: " + message;
            break;
        case 'ForkEvent':
            final = "Forked repo: <a href=\"https://github.com/yesrealperson/" + repo + "\">" + repo + "</a><br>Message: " + message;
            break;
        case 'PushEvent':
            final = "Pushed to repo: <a href=\"https://github.com/yesrealperson/" + repo + "\">" + repo + "</a><br>Message: " + message;
            break;
        case 'ReleaseEvent':
            final = "Released  repo: <a href=\"https://github.com/yesrealperson/" + repo + "\">" + repo + "</a><br>Message: " + message;
            break;
    }
    document.getElementById("latestActivity").innerHTML = final;
}

const getLatestMusic = async () => {
    const response = (await ((await fetch("https://broad-bar-1afc.spark952.workers.dev/")).json())); 
    const latest = response.recent.recenttracks.track;
    const list = document.getElementById("music");
    const topList = document.getElementById("topMusic");
    for(let i = 0; i < latest.length; i++){
        let song = latest[i];
        let element = document.createElement("div");
        element.className = "music";

        let albumCover = document.createElement("img");
        albumCover.src = song.image[3]["#text"];
        if(albumCover.src == ""){
            albumCover.src = "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png";
        }
        element.appendChild(albumCover);

        let info = document.createElement("a");
        info.href = song.url;
        info.innerHTML = "";
        if(i==0 && song["@attr"] && song["@attr"].nowplaying){
            info.innerHTML = "<b>Currently playing!</b><br><br>";
        }
        info.innerHTML += `${song.name}`;
        if(song.artist["#text"]){
            info.innerHTML += `<br>By: ${song.artist["#text"]}`;
        }
        if(song.album["#text"]){
            info.innerHTML += `<br>Album: ${song.album["#text"]}`;
        }
        element.appendChild(info);

        list.appendChild(element);
    }

    const top = response.top.toptracks.track;
    const places = ["First", "Second", "Third"]
    for(let i = 0; i < 3; i++){
        let song = top[i];
        let element = document.createElement("div");
        element.className = "music";

        try{
            let albumCover = document.createElement("img");
            albumCover.src = (await ((await fetch(`https://gettrack.spark952.workers.dev?name=${song.name}&artist=${song.artist.name}`)).json())).image; 
            element.appendChild(albumCover);
        }catch{
            let albumCover = document.createElement("img");
            albumCover.src = "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png"; 
            element.appendChild(albumCover);
        }

        let info = document.createElement("a");
        info.href = song.url;
        info.innerHTML = "";
        info.innerHTML += `${places[i]} Place!<br>This song has been played ${song.playcount} times!<br><br>${song.name}`;
        if(song.artist.name){
            info.innerHTML += `<br>By: ${song.artist.name}`;
        }
        element.appendChild(info);

        topList.appendChild(element);
    }
}
// animated stuff
const animation = async () => {
    // Header
    let header = document.getElementById("header");
    let text = ["C", "o", "n", "f", "l", "u", "x", "e", "s"];
    let index = 0;
    // Title
    let titles = [
        "Welcome",
        "wElcome",
        "weLcome",
        "welCome",
        "welcOme",
        "welcoMe",
        "welcomE"
    ]
    document.getElementById("title").innerHTML = titles[Math.floor(Math.random() * titles.length)];

    let cycles = 0;
    while (true) {
        if (cycles == 1) {
            // document.getElementById("title").innerHTML = titles[Math.floor(Math.random()*titles.length)];
            cycles = 0;
        }
        document.getElementById("title").innerHTML = titles[Math.floor(Math.random() * titles.length)];
        text[index] = text[index].toLowerCase();
        if (++index == text.length) {
            index = 0;
        }
        text[index] = text[index].toUpperCase();
        header.innerText = text.join("");

        await new Promise(r => setTimeout(r, 150));
        cycles++;
    }
}
animation();
getSteamActivity();
getCurrentGame();
getGitHubActivity();
getLatestMusic();
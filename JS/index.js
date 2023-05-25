new GitHubCalendar("#activity", "yesrealperson").then(() => {
    document.getElementsByClassName("js-calendar-graph")[0].lastElementChild.remove();
});

const getSteamActivity = async () => {
    const activity = (await (await fetch("https://steamactivity.spark952.workers.dev/")).json()).response.games;
    console.log(activity);
    for(let i = 0; i < activity.length; i++){
        let recentTime = Math.floor(activity[i].playtime_2weeks/60*10)/10 + " hours";
        let allTime = Math.floor(activity[i].playtime_forever/60*10)/10 + " hours";

        let outer = document.createElement("div");
        outer.className = "game";

        let img = document.createElement("img");
        img.src = "https://cdn.cloudflare.steamstatic.com/steam/apps/"+activity[i].appid+"/capsule_231x87.jpg?t=1684872853"
        outer.appendChild(img);

        let name = document.createElement("a");
        name.href = "https://store.steampowered.com/app/"+activity[i].appid;
        name.innerHTML = activity[i].name + "<br> Time Played in the Past 2 Weeks: " + recentTime + "<br> Total Time Played: "+allTime;
        outer.appendChild(name);

        
        document.getElementById("games").appendChild(outer);
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
    profileName.href = "https://github.com/"+latest.actor.login;
    profileName.innerHTML = latest.actor.display_login;
    profileName.id = "profileName";
    outer.appendChild(profileName);

    document.getElementById("ghProfile").appendChild(outer);
    console.log("<a href=\""+latest.repo.url+"\">"+latest.repo.name + "</a><br>" + latest.payload.commits[0].message + "<br>" + latest.created_at);
    document.getElementById("latestActivity").innerHTML += "<b>Repo:</b> <a href=\"https://github.com/"+latest.repo.name+"\">"+latest.repo.name + "</a><br><b>Commit Message:</b> " + latest.payload.commits[0].message + "<br><b>Pushed At:</b> " + latest.created_at;
}
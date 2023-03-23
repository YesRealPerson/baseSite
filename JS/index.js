const getSteam = async () => {
    let steam = document.getElementById("steam");
    let xml = await fetch("https://steamcommunity.com/profiles/76561198205668829/?xml=1");
    console.log(xml);
}

getSteam();
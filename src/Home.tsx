import { useLoaderData } from "react-router-dom"
import { tryFetch } from "./components/Classes"
import parseGithubAPI from "./components/Github"
import parseLastFMAPI from "./components/Lastfm"
import type { steamGames, StyleProps } from "./components/Interfaces"
import HomeStatic from "./components/HomeStatic"

// Loader
export async function theGenuineArticle() {
  const steamActivity = await tryFetch("https://steamactivity.spark952.workers.dev/")
  const steamGame = await tryFetch("https://currentgame.spark952.workers.dev/")
  const githubActivity = await tryFetch("https://githubactivity.spark952.workers.dev/")
  const lastfmActivity = await tryFetch("https://broad-bar-1afc.spark952.workers.dev/")
  // await new Promise(resolve => setTimeout(resolve, 1000)); //test loader UNCOMMENT ME
  let statuses = [
    steamActivity.status,
    steamGame.status,
    githubActivity.status,
    lastfmActivity.status
  ]
  // Format lastfm because api broken af
  const lastfmjson = await lastfmActivity.json()
  for (let i = 0; i < lastfmjson.top.toptracks.track.length; i++) {
    const x = lastfmjson.top.toptracks.track[i];
    const response = await ((await tryFetch(`https://gettrack.spark952.workers.dev?name=${x.name}&artist=${x.artist.name}`)).json())
    let cover = response.image == "" || !response.image ? "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png" : response.image
    let title = !response.album ? "" : response.album
    x.fixedimage = cover
    x.albumtitle = title
  }
  return {
    steamActivity: {
      "status": statuses[0],
      "response": statuses[0] == 200 ? await (await steamActivity).json() : { message: (await steamActivity).statusText }
    },
    steamGame: {
      "status": statuses[1],
      "response": statuses[1] == 200 ? await (await steamGame).json() : { message: (await steamGame).statusText }
    },
    githubActivity: {
      "status": statuses[2],
      "response": statuses[2] == 200 ? await githubActivity.json() : { message: (await githubActivity).statusText }
    },
    lastfmActivity: {
      "status": statuses[3],
      "response": statuses[3] == 200 ? lastfmjson : { message: (await lastfmActivity).statusText }
    }
  }
}

// Component
export default function Index({ style }: StyleProps) {
  const response = useLoaderData()
  const steamActivity = response.steamActivity
  const steamGame = response.steamGame
  const githubActivity = parseGithubAPI(response.githubActivity, style)
  const lastfmActivity = parseLastFMAPI(response.lastfmActivity.response, style)
  let steamActivityElement = (<>Steam game activity endpoint failed to respond!<br />{steamActivity.response?.message}</>)
  let currentSteam = (<></>)
  let modernAppend = [(<></>), 0]
  if (steamGame.status == 200 && steamGame.response.status == "yes") {
    switch (style) {
      case 0:
        currentSteam = (
          <div className="flex flex-row mb-5">
            <div className="flex justify-center items-center">
              <img className="mr-5 w-40 md:w-50" alt={steamGame.name} src={"https://cdn.cloudflare.steamstatic.com/steam/apps/" + steamGame.appid + "/capsule_231x87.jpg"} onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "./missing.jpg";
              }} />
            </div>
            <div>
              <a className="!p-0 animateLink" href={steamGame.response.link}>{steamGame.response.name}</a>
              <br />
              Currently playing!
            </div>
          </div>
        )
        break;
      case 1:
        modernAppend[0] = (
          <div className="aspect-6/9 h-full slide">
            <a href={steamGame.response.link} target="_blank" className="relative block">
              <img className="h-full w-auto block" title={steamGame.response.name} alt={steamGame.response.name} src={"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/" + steamGame.response.appid + "/library_600x900_2x.jpg"} onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "/missing.jpg";
              }} />
              <div className="absolute left-0 top-0 w-0 bluebg font-mono whitespace-nowrap text-clip">
                <div className="opacity-0">Currently playing!</div>
              </div>
            </a>
          </div>
        )
        modernAppend[1] = steamGame.response.name;
        break;
    }
  }
  if (steamActivity.status == 200) {
    switch (style) {
      case 0:
        steamActivityElement = (
          steamActivity.response.response.games.map((x: steamGames) => (
            <div className="flex flex-row mb-5">
              <div className="flex justify-center items-center">
                <img className="mr-5 w-40 md:w-50" alt={x.name} src={"https://cdn.cloudflare.steamstatic.com/steam/apps/" + x.appid + "/capsule_231x87.jpg"} onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/missing.jpg";
                }} />
              </div>
              <div>
                <a className="!p-0 animateLink" href={"https://store.steampowered.com/app/" + x.appid}>{x.name}</a>
                <br />
                <span className="hidden md:inline">Time played last 2 weeks:</span><span className="md:hidden">Last 2 weeks:</span> {(Math.round(x.playtime_2weeks / 60 * 100) / 100)} hours
                <br />
                <span className="hidden  md:inline">Total time played:</span><span className="md:hidden">Total time:</span> {(Math.round(x.playtime_forever / 60 * 100) / 100)} hours
              </div>
            </div>
          ))
        )
        break;
      case 1:
        const games = modernAppend[1] ? steamActivity.response.response.games.slice(0, 4).reverse() : steamActivity.response.response.games.slice(0, 5);
        const namesList = games.map((x: steamGames) => x.name);
        if (modernAppend[1]) {
          namesList.unshift(modernAppend[1]);
          namesList.pop()
        }
        const names = namesList.join(", ") + "..."
        steamActivityElement = (
          <div className="min-h-[80vh] flex flex-col mt-[10vh]">
            <div className="h-[35vh] bg-[url(/IMGL2546.jpg)] text-white flex justify-end items-end flex-col p-10 text-4xl bg-cover" style={{ fontFamily: "Lexend Giga", backgroundPosition: "center -550px", backgroundRepeat: "no-repeat" }}>
              Holding your attention...<br />
              <div className="font-mono text-lg pl-5">Always more to do but never enough to be new.</div>
            </div>
            <div className="h-[40vh] max-h-[500px] pt-[5vh] px-10 flex flex-row items-start justify-end gap-5 relative">
              <div className="flex-grow text-white h-full flex items-center overflow-hidden
              [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"style={{ fontFamily: "Lexend Giga" }}>
                <div className="scrolling text-clip text-6xl whitespace-nowrap">{names}&emsp;&emsp;&emsp;</div>
                <div className="scrolling text-clip text-6xl whitespace-nowrap">{names}&emsp;&emsp;&emsp;</div>
              </div>
              {modernAppend[0]}
              {games.map((x: steamGames) => (
                <div className="aspect-6/9 h-full slide">
                  <a href={"https://store.steampowered.com/app/" + x.appid} target="_blank" className="relative block">
                    <img className="h-full w-auto block" title={x.name} alt={x.name} src={"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/" + x.appid + "/library_600x900_2x.jpg"} onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = "/missing.jpg";
                    }} />
                    <div className="absolute left-0 top-0 w-0 bluebg font-mono whitespace-nowrap text-clip">
                      <div className="opacity-0">{(Math.round(x.playtime_forever / 60 * 100) / 100)} hours</div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )
        break;
    }
  }

  return (
    <div>
      <HomeStatic style={style} />
      
      <h1 className='text-2xl'>
        Github Activity
      </h1>
      {response.githubActivity.status == 200 ? githubActivity : (<>GitHub API failed to respond!<br />{response?.message}</>)}
      <hr className="my-2" />
      {!style ? <>
        <h1 className='text-2xl'>
          Steam Activity
        </h1>
        I enjoy playing video games. Here is some of the ones of played most recently on my Steam account.<br /><br /></> : <></>}
      {currentSteam}
      {steamActivityElement}
      <hr className="my-2" />
      <h1 className='text-2xl my-2'>
        Last.fm Activity
      </h1>
      Last.fm is a service to record my music listening habits since I don't use Spotify.
      {response.lastfmActivity.status == 200 ? lastfmActivity : (<><br />Last.FM API failed to respond!<br />{response.lastfmActivity?.message}</>)}
    </div>
  )
}
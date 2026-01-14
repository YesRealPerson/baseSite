import { useLoaderData } from "react-router-dom"
import parseGithubAPI from "./components/Github"
import parseLastFMAPI from "./components/Lastfm"

export async function theGenuineArticle() {
  const steamActivity = fetch("https://steamactivity.spark952.workers.dev/")
  const steamGame = fetch("https://currentgame.spark952.workers.dev/")
  const githubActivity = fetch("https://githubactivity.spark952.workers.dev/")
  const lastfmActivity = fetch("https://broad-bar-1afc.spark952.workers.dev/")
  return {
    steamActivity: {
      "status": (await steamActivity).status,
      "response": await (await steamActivity).json()
    },
    steamGame: {
      "status": (await steamGame).status,
      "response": await (await steamGame).json()
    },
    githubActivity: {
      "status": (await githubActivity).status,
      "response": parseGithubAPI(await githubActivity)
    },
    lastfmActivity: {
      "status": (await lastfmActivity).status,
      "response": parseLastFMAPI(await (await lastfmActivity).json())
    }
  }
}

interface steamGames {
  "appid": number,
  "name": string,
  "playtime_2weeks": number,
  "playtime_forever": number,
  "img_icon_url": string
}

export default function Index() {
  const response = useLoaderData()
  const steamActivity = response.steamActivity
  const steamGame = response.steamGame
  const githubActivity = response.githubActivity
  const lastfmActivity = response.lastfmActivity

  let steamActivityElement = (<>Steam game activity endpoint failed to respond!</>)
  if (steamActivity.status == 200) {
    steamActivityElement = (
      steamActivity.response.response.games.map((x: steamGames) => (
        <div className="flex flex-row mb-5">
          <img className="mr-5" alt={x.name} src={"https://cdn.cloudflare.steamstatic.com/steam/apps/" + x.appid + "/capsule_231x87.jpg"}></img>
          <div>
            <a className="!p-0 animateLink" href={"https://store.steampowered.com/app/" + x.appid}>{x.name}</a>
            <br />
            Time played last 2 weeks: {(Math.round(x.playtime_2weeks / 60 * 100) / 100)}
            <br />
            Total time played: {(Math.round(x.playtime_forever / 60 * 100) / 100)}
          </div>
        </div>
      ))
    )
  }

  let currentSteam = (<></>)
  if (steamGame.status == 200 && steamGame.response.status=="yes") {
    currentSteam = (
      <div className="flex flex-row mb-5">
          <img className="mr-5" alt={steamGame.response.name} src={steamGame.response.banner}></img>
          <div>
            <a className="!p-0 animateLink" href={steamGame.response.link}>{steamGame.response.name}</a>
            <br />
            Currently playing!
          </div>
        </div>
    )
  }else if (steamGame.status != 200){
    currentSteam = (<>Current Steam game endpoint failed to respond!</>)
  }

  return (
    <div>
      <h1 className='text-4xl'>
        Hello!
      </h1>
      <p>
        This is my website, I am currently remaking it.<br /><br />
        This version is still a work in progress but all of the functionality I want is here (although who knows if I come up with anything cool to add to the site).
        <br/>
        I plan on making various styles for the home page in the near future but for now you get the nice and simple one.
      </p>
      <hr className="my-2" />
      <h1 className='text-2xl'>
        Steam Activity
      </h1>
      I enjoy playing video games. Here is some of the ones of played most recently on my steam account.<br/><br/>
      {currentSteam}
      {steamActivityElement}
      <hr className="my-2" />
      <h1 className='text-2xl'>
        Github Activity
      </h1>
      {githubActivity.status == 200 ? githubActivity.response : (<>GitHub API failed to respond!</>)}
      <hr className="my-2" />
      <h1 className='text-2xl my-2'>
        Last.fm Activity
      </h1>
      Last.fm is a service to record my music listening habits since I don't use Spotify.
      {lastfmActivity.status == 200 ? lastfmActivity.response : (<>GitHub API failed to respond!</>)}
    </div>
  )
}
import { useLoaderData } from "react-router-dom"
import { tryFetch } from "./components/Classes"
import parseGithubAPI from "./components/Github"
import parseLastFMAPI from "./components/Lastfm"
import type { steamGames } from "./components/Interfaces"
import HomeStatic from "./components/HomeStatic"

// Loader
export async function theGenuineArticle() {
  const steamActivity = tryFetch("https://steamactivity.spark952.workers.dev/")
  const steamGame = tryFetch("https://currentgame.spark952.workers.dev/")
  const githubActivity = tryFetch("https://githubactivity.spark952.workers.dev/")
  const lastfmActivity = tryFetch("https://broad-bar-1afc.spark952.workers.dev/")
  let statuses = [
    (await steamActivity).status,
    (await steamGame).status,
    (await githubActivity).status,
    (await lastfmActivity).status
  ]
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
      "response": statuses[2] == 200 ? parseGithubAPI(await githubActivity) : { message: (await githubActivity).statusText }
    },
    lastfmActivity: {
      "status": statuses[3],
      "response": statuses[3] == 200 ? parseLastFMAPI(await (await lastfmActivity).json()) : { message: (await lastfmActivity).statusText }
    }
  }
}

// Component
export default function Index() {
  const response = useLoaderData()
  const steamActivity = response.steamActivity
  const steamGame = response.steamGame
  const githubActivity = response.githubActivity
  const lastfmActivity = response.lastfmActivity
  let steamActivityElement = (<>Steam game activity endpoint failed to respond!<br />{steamActivity.response?.message}</>)
  if (steamActivity.status == 200) {
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
  }

  let currentSteam = (<></>)
  if (steamGame.status == 200 && steamGame.response.status == "yes") {
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
  }

  return (
    <div>
      <HomeStatic />
      <h1 className='text-2xl'>
        Steam Activity
      </h1>
      I enjoy playing video games. Here is some of the ones of played most recently on my Steam account.<br /><br />
      {currentSteam}
      {steamActivityElement}
      <hr className="my-2" />
      <h1 className='text-2xl'>
        Github Activity
      </h1>
      {githubActivity.status == 200 ? githubActivity.response : (<>GitHub API failed to respond!<br />{githubActivity.response?.message}</>)}
      <hr className="my-2" />
      <h1 className='text-2xl my-2'>
        Last.fm Activity
      </h1>
      Last.fm is a service to record my music listening habits since I don't use Spotify.
      {lastfmActivity.status == 200 ? lastfmActivity.response : (<><br />Last.FM API failed to respond!<br />{lastfmActivity.response?.message}</>)}
    </div>
  )
}
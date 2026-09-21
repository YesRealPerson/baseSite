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

  const statuses = [
    steamActivity.status,
    steamGame.status,
    githubActivity.status,
    lastfmActivity.status
  ]

  // Format Last.fm because API is broken
  const lastfmjson = await lastfmActivity.json()

  for (let i = 0; i < lastfmjson.top.toptracks.track.length; i++) {
    const x = lastfmjson.top.toptracks.track[i]

    const response = await (
      await tryFetch(
        `https://gettrack.spark952.workers.dev?name=${x.name}&artist=${x.artist.name}`
      )
    ).json()

    const cover =
      response.image == "" || !response.image
        ? "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png"
        : response.image

    const title = !response.album ? "" : response.album

    x.fixedimage = cover
    x.albumtitle = title
  }

  return {
    steamActivity: {
      status: statuses[0],
      response:
        statuses[0] == 200
          ? await steamActivity.json()
          : { message: steamActivity.statusText }
    },

    steamGame: {
      status: statuses[1],
      response:
        statuses[1] == 200
          ? await steamGame.json()
          : { message: steamGame.statusText }
    },

    githubActivity: {
      status: statuses[2],
      response:
        statuses[2] == 200
          ? await githubActivity.json()
          : { message: githubActivity.statusText }
    },

    lastfmActivity: {
      status: statuses[3],
      response:
        statuses[3] == 200
          ? lastfmjson
          : { message: lastfmActivity.statusText }
    }
  }
}

// Component
export default function Index({ style }: StyleProps) {
  const response = useLoaderData() as any

  const steamActivity = response.steamActivity
  const steamGame = response.steamGame

  const githubActivity = parseGithubAPI(
    response.githubActivity,
    style
  )

  const lastfmActivity = parseLastFMAPI(
    response.lastfmActivity.response,
    style
  )

  let steamActivityElement = (
    <>
      Steam game activity endpoint failed to respond!
      <br />
      {steamActivity.response?.message}
    </>
  )

  let currentSteam = <></>

  let modernAppend: [React.ReactNode, string] = [<></>, ""]

  /*
   * CURRENT STEAM GAME
   */
  let outer = "w-full sm:w-auto sm:aspect-[6/9] sm:h-full sm:max-w-[50vw] slide"
  let lastModifier = " last:col-span-2 last:justify-self-center last:w-1/2 sm:last:col-span-1 sm:last:justify-self-auto sm:last:w-auto"
  let inner = "w-full h-auto sm:h-full sm:w-auto block object-cover"
  if (
    steamGame.status === 200 &&
    steamGame.response.status === "yes"
  ) {
    
    switch (style) {
      case 0:
        currentSteam = (
          <div className="flex flex-col sm:flex-row mb-5 gap-4">
            <div className="flex justify-center items-center">
              <img
                className="w-full max-w-[16rem] sm:w-40 md:w-50"
                alt={steamGame.response.name}
                src={
                  "https://cdn.cloudflare.steamstatic.com/steam/apps/" +
                  steamGame.response.appid +
                  "/capsule_231x87.jpg"
                }
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null
                  currentTarget.src = "./missing.jpg"
                }}
              />
            </div>

            <div className="text-center sm:text-left">
              <a
                className="!p-0 animateLink"
                href={steamGame.response.link}
              >
                {steamGame.response.name}
              </a>

              <br />

              Currently playing!
            </div>
          </div>
        )
        break

      case 1:
        modernAppend = [
          <div className={outer}>
            <a
              href={steamGame.response.link}
              target="_blank"
              rel="noreferrer"
              className="relative block"
            >
              <img
                className={inner}
                title={steamGame.response.name}
                alt={steamGame.response.name}
                src={
                  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/" +
                  steamGame.response.appid +
                  "/library_600x900_2x.jpg"
                }
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null
                  currentTarget.src = "/missing.jpg"
                }}
              />

              <div className="absolute left-0 top-0 w-0 bluebg font-mono whitespace-nowrap text-clip">
                <div className="opacity-0">
                  Currently playing!
                </div>
              </div>
            </a>
          </div>,

          steamGame.response.name
        ]

        break
    }
  }

  /*
   * STEAM ACTIVITY
   */
  if (steamActivity.status === 200) {
    switch (style) {
      case 0:
        steamActivityElement = (
          <div>
            {steamActivity.response.response.games.map(
              (x: steamGames) => (
                <div key={x.appid} className="flex flex-col sm:flex-row mb-5 gap-4">
                  <div className="flex justify-center items-center shrink-0">
                    <img className="w-full max-w-[16rem] sm:w-40 md:w-50" alt={x.name}
                      src={
                        "https://cdn.cloudflare.steamstatic.com/steam/apps/" +
                        x.appid +
                        "/capsule_231x87.jpg"
                      }
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null
                        currentTarget.src = "/missing.jpg"
                      }}
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <a className="!p-0 animateLink" href={"https://store.steampowered.com/app/" + x.appid}>{x.name}</a>
                    <br />
                    <span className="hidden md:inline">Time played last 2 weeks:</span>
                    <span className="md:hidden">Last 2 weeks:</span>{" "}{Math.round((x.playtime_2weeks / 60) * 100) / 100}{" "}hours
                    <br />
                    <span className="hidden md:inline">Total time played:</span>
                    <span className="md:hidden">Total time:</span>{" "}{Math.round((x.playtime_forever / 60) * 100) / 100}{" "}hours
                  </div>
                </div>
              )
            )}
          </div>
        )
        break

      case 1: {
        let games = steamActivity.response.response.games.reverse(); // Reverse for chronological order
        if(modernAppend[1]){
          // Cap games list to 4
          if (games.length > 4) games = games.slice(0, 4);
          // Remove currently playing game
          for (let i = 0; i < games.length; i++){
            if (games[i].name == modernAppend[1]){
              games.splice(i, 1)
              break
            }
          }
        }

        const namesList = games.map(
          (x: steamGames) => x.name
        )
        if (modernAppend[1]) {
          namesList.unshift(modernAppend[1])
        }
        console.log(namesList)

        const names = namesList.join(", ") + "..."

        steamActivityElement = (
          <div className="min-h-0 sm:min-h-[80vh] flex flex-col mt-8 sm:mt-[10vh] overflow-hidden">
            <div className=" min-h-[15rem] sm:h-[35vh] text-white flex justify-end items-start sm:items-end flex-col p-5 sm:p-10 text-2xl sm:text-4xl bg-cover bg-center"
              style={{ fontFamily: "Lexend Giga", backgroundImage: "url(/slideshow/IMGL2546.jpg)", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
            >
              <div> Holding your attention...</div>

              <div className="font-mono text-sm sm:text-lg pl-0 sm:pl-5 mt-2 max-w-full">
                Always more to do but never enough to be new.
              </div>
            </div>

            {/* Games */}
            <div className=" pt-6 sm:pt-[5vh] px-3 sm:px-10 pb-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 relative overflow-hidden">
              {/* Scrolling text */}
              <div
                className="order-1 sm:py-2 sm:order-none w-full sm:flex-grow text-white h-auto sm:h-full flex items-center overflow-hidden 
                [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] font-[Lexend_Giga]">
                <div className="scrolling text-clip text-xl sm:text-4xl whitespace-nowrap ">
                  {names}&emsp;&emsp;&emsp;
                </div>

                <div className="scrolling text-clip text-xl sm:text-4xl whitespace-nowrap ">
                  {names}&emsp;&emsp;&emsp;
                </div>
              </div>

              

              {/* Game cards */}
              <div className="order-2 sm:order-none grid grid-cols-2 sm:flex sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto">
                {/* Current game */}
                {modernAppend[0]}
                {games.map((x: steamGames) => (
                  <div key={x.appid} 
                  className={outer + (namesList.length % 2 == 0 ? "" : lastModifier)}>
                    <a href={"https://store.steampowered.com/app/"+x.appid}target="_blank"rel="noreferrer" className="relative block">
                      <img className={inner}
                        title={x.name}
                        alt={x.name}
                        src={ "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/" + x.appid + "/library_600x900_2x.jpg"}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null
                          currentTarget.src = "/missing.jpg"
                        }}
                      />

                      <div className=" absolute left-0 top-0 w-0 bluebg font-mono whitespace-nowrap text-clip">
                        <div className="opacity-0">
                          {Math.round((x.playtime_forever / 60) * 100) / 100}{" "}hours
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

        break
      }
    }
  }

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <HomeStatic style={style} />

      <h1 className={"text-2xl" + style ? "hidden" : ""}>
        Github Activity
      </h1>

      {response.githubActivity.status === 200
        ? githubActivity
        : (
          <>
            GitHub API failed to respond!
            <br />
            {response.githubActivity?.response?.message}
          </>
        )}

      <hr className="my-2" />

      {!style ? (
        <>
          <h1 className="text-2xl">
            Steam Activity
          </h1>

          <p>
            I enjoy playing video games. Here is some of
            the ones I've played most recently on my Steam
            account.
          </p>

          <br />
        </>
      ) : null}

      {currentSteam}

      {steamActivityElement}

      <hr className="my-2" />

      <h1 className="text-2xl my-2">
        Last.fm Activity
      </h1>

      <p>
        Last.fm is a service to record my music listening
        habits since I don't use Spotify.
      </p>

      {response.lastfmActivity.status === 200
        ? lastfmActivity
        : (
          <>
            <br />
            Last.FM API failed to respond!
            <br />
            {response.lastfmActivity?.response?.message}
          </>
        )}
    </div>
  )
}

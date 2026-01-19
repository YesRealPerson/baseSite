import type {lastfmAPIResponse } from './Interfaces'

const getAlbumCover = async (url:string ): Promise<string> =>  {
    let image;
    let blank = "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png";
    try{
        image = (await ((await fetch(url)).json())).image
    }catch{
        image = blank
    }
    return image == "" ? blank : image 
}

export default async function parseLastFMAPI(response: lastfmAPIResponse) {
    // Top songs
    const top = response.top
    const topElement = top.toptracks.track.map(async (x) => (
        <div className="flex flex-row items-center">
            <div className="w-1">
                {x["@attr"].rank}
            </div>
            <img className="w-30 mx-5" src={await getAlbumCover(`https://gettrack.spark952.workers.dev?name=${x.name}&artist=${x.artist.name}`)}></img>
            <div>
                <a href={x.url} className="!p-0 animateLink">{x.name}</a><br />
                {x.artist.name}<br />
                Played {x.playcount} times!
            </div>
        </div>
    ))

    const recent = response.recent
    const recentElement = recent.recenttracks.track.map(async (x) => (
        <div className="flex flex-row items-center">
            <img className="w-30 mr-5 ml-6" src={x.image[3]["#text"]}></img>
            <div>
                <a href={x.url} className="!p-0 animateLink">{x.name}</a><br />
                {x.artist["#text"]}<br />
                {x.album["#text"]}
                {x["@attr"]?.nowplaying ? <div>Now playing!</div> : ""}
            </div>
        </div>
    ))
    return (
        <div>
            <div className="my-5">
                Most listens for the past week:<br />
                {topElement}
            </div>
            <div className="my-5">
                Most recent listens:<br />
                {recentElement}
            </div>
        </div>
    )
}
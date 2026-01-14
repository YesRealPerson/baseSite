interface size {
    size: string,
    "#text": string
}

interface trackTop {
    streamable: {
        fulltrack: string,
        "#text": string
    },
    mbid: string,
    name: string,
    image: size[],
    artist: {
        url: string,
        name: string,
        mbid: string
    },
    url: string,
    duration: string,
    "@attr": {
        rank: string
    }
    playcount: string
}

interface trackLatest {
    artist: {
        mbid: string,
        "#text": string,
    },
    streamable: string,
    image: size[],
    mbid: string,
    album: {
        mbid: string,
        "#text": string,
    },
    name: string,
    "@attr": {
        nowplaying: string
    },
    url: string

}

interface lastfmAPIResponse {
    top: {
        toptracks: {
            track: trackTop[],
            "@attr": {
                user: string,
                totalPages: string,
                page: string,
                total: string,
                perPage: string
            }
        }
    },
    recent: {
        recenttracks: {
            track: trackLatest[],
            "@attr": {
                user: string,
                totalPages: string,
                page: string,
                total: string,
                perPage: string
            }
        }
    }
    user: {
        user: {
            name: string,
            age: string,
            subscriber: string,
            realname: string,
            bootstrap: string,
            playcount: string,
            artist_count: string,
            playlists: string,
            track_count: string,
            album_count: string,
            image: size[]
            registered: {
                unixtime: string,
                "#text": number
            },
            country: string,
            gender: string,
            url: string,
            type: string
        }
    }
}

export default async function parseLastFMAPI(response: lastfmAPIResponse) {
    // Top songs
    const top = response.top
    const topElement = top.toptracks.track.map(async (x) => (
        <div className="flex flex-row items-center">
            <div className="w-1">
                {x["@attr"].rank}
            </div>
            <img className="w-30 mx-5" src={(await ((await fetch(`https://gettrack.spark952.workers.dev?name=${x.name}&artist=${x.artist.name}`)).json())).image}></img>
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
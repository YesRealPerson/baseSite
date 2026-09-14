import type { lastfmAPIResponse } from './Interfaces'

export default function parseLastFMAPI(response: lastfmAPIResponse, style: number) {
    // Account
    const account = response.user.user
    let accountElement;
    let topElement;
    let recentElement;
    switch (style) {
        case (0):
            accountElement = (
                <>
                    <div className="flex flex-row items-center text-center">
                        <img
                            className="w-30 mx-5"
                            src={account.image[3]["#text"]}
                        />

                        <div className="mx-5">
                            <a
                                className="!p-0 !m-0 animateLink"
                                href={account.url}
                            >
                                {account.name}
                            </a>
                            <br />
                            {account.playcount} recorded scrobbles!
                        </div>

                        <div className="hidden md:block">
                            <div>
                                Consisting of...<br />
                                {account.album_count} different albums<br />
                                {account.artist_count} different artists<br />
                                {account.track_count} different songs
                            </div>
                        </div>
                    </div>

                    <div className="block w-full flex items-center justify-center mt-5 md:hidden">
                        <div>
                            Consisting of...<br />
                            {account.album_count} different albums<br />
                            {account.artist_count} different artists<br />
                            {account.track_count} different songs
                        </div>
                    </div>
                </>
            )

            // Top songs
            topElement = response.top.toptracks.track.map((x) => (
                <div className="flex flex-row items-center" key={x.url}>
                    <div className="w-1">
                        {x["@attr"].rank}
                    </div>

                    <img
                        className="w-30 mx-5"
                        src={x.fixedimage}
                    />

                    <div>
                        <a
                            href={x.url}
                            className="!p-0 animateLink"
                        >
                            {x.name}
                        </a>
                        <br />
                        {x.artist.name}
                        <br />
                        Played {x.playcount} times!
                    </div>
                </div>
            ))

            // Recent songs
            recentElement = response.recent.recenttracks.track.map((x) => (
                <div
                    className="flex flex-row items-center"
                    key={x.url}
                >
                    <img
                        className="w-30 mr-5 ml-6"
                        src={x.image[3]["#text"]}
                    />

                    <div>
                        <a
                            href={x.url}
                            className="!p-0 animateLink"
                        >
                            {x.name}
                        </a>
                        <br />
                        {x.artist["#text"]}
                        <br />
                        {x.album["#text"]}

                        {x["@attr"]?.nowplaying && (
                            <div>Now playing!</div>
                        )}
                    </div>
                </div>
            ))

            return (
                <div>
                    <div className="my-5">
                        My Last.fm Profile:<br />
                        {accountElement}
                    </div>

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
        case 1:
            topElement = response.top.toptracks.track.map((x) => (
                <div className="flex-1">
                    <a href={x.url} target="_blank" className="block aspect-square overflow-hidden mb-5 relative">
                        <img
                            className="w-full h-full object-cover block"
                            title={x.name}
                            alt={x.name}
                            src={x.fixedimage}
                        />
                        <div className="absolute right-0 top-0 bluebg aspect-2/1 p-1"style={{ fontFamily: "Lexend Giga" }}>
                            #{x["@attr"].rank}
                        </div>
                    </a>

                    <div className="font-mono text-xs">
                        {x.albumtitle}
                    </div>

                    <div className="text-lg" style={{ fontFamily: "Lexend Giga" }}>
                        {x.name.length > 20 ? x.name.substring(0, 20)+"..." : x.name} — {x.artist.name}
                    </div>
                </div>
            ))
            recentElement = response.recent.recenttracks.track.map((x) => (
                <div className="flex-1">
                    <a href={x.url} target="_blank" className="block aspect-square overflow-hidden mb-5">
                        <img className="w-full h-full object-cover block" title={x.name} alt={x.name} src={x.image[3]["#text"]} />
                    </a>
                    <div className="font-mono text-xs">
                        {x.album["#text"]}
                    </div>
                    <div className="text-lg" style={{ fontFamily: "Lexend Giga" }}>
                        {x.name.length > 20 ? x.name.substring(0, 20)+"..." : x.name} — {x.artist["#text"]}
                    </div>
                </div>
            ))
            return (
                <div className="text-white">
                    <div className="font-mono">
                        always listening...
                        <h1 className="text-7xl w-full pl-5 mb-15 mt-2" style={{ fontFamily: "Lexend Giga" }}>
                            A UNIVERSAL EXPERIENCE<br />
                            SOMETHING TO FILL THE AIR
                        </h1>
                    </div>
                    <h3 className="text-4xl w-full pl-3 mb-15 mt-2" style={{ fontFamily: "Lexend Giga" }}>WEEKLY TOP TRACKS</h3>
                    <div className="flex flex-row gap-5 px-10">
                        {topElement}
                    </div>
                    <h3 className="text-4xl w-full pl-3 mb-15 mt-2" style={{ fontFamily: "Lexend Giga" }}>RECENT TRACKS</h3>
                    <div className="flex flex-row gap-5 px-10">
                        {recentElement}
                    </div>
                </div>)
    }
}
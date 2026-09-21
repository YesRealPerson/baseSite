import type { lastfmAPIResponse } from "./Interfaces"

export default function parseLastFMAPI(
    response: lastfmAPIResponse,
    style: number
) {
    const account = response.user.user

    let accountElement
    let topElement
    let recentElement

    switch (style) {
        case 0:
            accountElement = (
                <>
                    {/* Profile */}
                    <div className="
                        flex
                        flex-col
                        sm:flex-row
                        items-center
                        text-center
                        gap-4
                        sm:gap-0
                    ">
                        <img
                            className="
                                w-24
                                sm:w-30
                                mx-0
                                sm:mx-5
                            "
                            src={account.image[3]["#text"]}
                            alt={account.name}
                        />

                        <div className="mx-0 sm:mx-5">
                            <a
                                className="!p-0 !m-0 animateLink"
                                href={account.url}
                            >
                                {account.name}
                            </a>

                            <br />

                            {account.playcount} recorded scrobbles!
                        </div>

                        {/* Desktop */}
                        <div className="hidden md:block text-left">
                            <div>
                                Consisting of...
                                <br />
                                {account.album_count} different albums
                                <br />
                                {account.artist_count} different artists
                                <br />
                                {account.track_count} different songs
                            </div>
                        </div>
                    </div>

                    {/* Mobile */}
                    <div className="
                        block
                        md:hidden
                        w-full
                        text-center
                        mt-5
                    ">
                        <div>
                            Consisting of...
                            <br />
                            {account.album_count} different albums
                            <br />
                            {account.artist_count} different artists
                            <br />
                            {account.track_count} different songs
                        </div>
                    </div>
                </>
            )

            // Top songs
            topElement = response.top.toptracks.track.map((x) => (
                <div
                    className="
                        flex
                        flex-col
                        sm:flex-row
                        items-center
                        sm:items-start
                        mb-5
                        gap-3
                        sm:gap-0
                    "
                    key={x.url}
                >
                    <div className="
                        w-auto
                        sm:w-1
                        text-center
                        sm:text-left
                    ">
                        {x["@attr"].rank}
                    </div>

                    <img
                        className="
                            w-24
                            sm:w-30
                            mx-0
                            sm:mx-5
                        "
                        src={x.fixedimage}
                        alt=""
                    />

                    <div className="text-center sm:text-left">
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
            recentElement = tracks.map((x) => (
                <div
                    className="
                        flex
                        flex-col
                        sm:flex-row
                        items-center
                        sm:items-start
                        mb-5
                        gap-3
                        sm:gap-0
                    "
                    key={x.url}
                >
                    <img
                        className="
                            w-24
                            sm:w-30
                            mr-0
                            sm:mr-5
                            ml-0
                            sm:ml-6
                        "
                        src={x.image[3]["#text"]}
                        alt=""
                    />

                    <div className="text-center sm:text-left">
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
                <div className="w-full max-w-full overflow-x-hidden">
                    <div className="my-5">
                        My Last.fm Profile:
                        <br />
                        {accountElement}
                    </div>

                    <div className="my-5">
                        Most listens for the past week:
                        <br />
                        {topElement}
                    </div>

                    <div className="my-5">
                        Most recent listens:
                        <br />
                        {recentElement}
                    </div>
                </div>
            )

        case 1:
            const toptracks = response.top.toptracks.track.slice(0,5);
            topElement = toptracks.map((x) => (
                <div
                    className="
                        w-full
                        min-w-0
                        music
                        last:col-span-2
                        last:justify-self-center
                        last:w-1/2
                        sm:last:col-span-1
                        sm:last:justify-self-auto
                        sm:last:w-full
                    "
                    key={x.url}
                >
                    <a
                        href={x.url}
                        target="_blank"
                        rel="noreferrer"
                        className="
                            block
                            aspect-square
                            overflow-hidden
                            mb-3
                            sm:mb-5
                            relative
                        "
                    >
                        <img
                            className="
                                w-full
                                h-full
                                object-cover
                                block
                            "
                            title={x.name}
                            alt={x.name}
                            src={x.fixedimage}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null
                                currentTarget.src =
                                    "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png"
                            }}
                        />

                        <div
                            className="
                                absolute
                                right-0
                                top-0
                                bluebg
                                aspect-2/1
                                p-1
                                text-xs
                                sm:text-base
                            "
                            style={{
                                fontFamily: "Lexend Giga"
                            }}
                        >
                            #{x["@attr"].rank}
                        </div>
                    </a>

                    <div className="font-mono text-xs truncate">
                        {x.albumtitle}
                    </div>

                    <div
                        className="
                            text-sm
                            sm:text-lg
                            break-words
                        "
                        style={{
                            fontFamily: "Lexend Giga"
                        }}
                    >
                        {x.name.length > 20
                            ? x.name.substring(0, 20) + "..."
                            : x.name}{" "}
                        — {x.artist.name}
                    </div>
                </div>
            ))

            const recenttracks = response.recent.recenttracks.track.slice(0, 5);
            recentElement = recenttracks.map((x) => (
                <div
                    className="w-full min-w-0 music last:col-span-2 last:justify-self-center last:w-1/2 sm:last:col-span-1 sm:last:justify-self-auto sm:last:w-full"
                    key={x.url}
                >
                    <a
                        href={x.url}
                        target="_blank"
                        rel="noreferrer"
                        className="
                            block
                            aspect-square
                            overflow-hidden
                            mb-3
                            sm:mb-5
                            relative
                        "
                    >
                        <img
                            className="
                                w-full
                                h-full
                                object-cover
                                block
                            "
                            title={x.name}
                            alt={x.name}
                            src={x.image[3]["#text"]}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null
                                currentTarget.src =
                                    "https://lastfm.freetls.fastly.net/i/u/174s/174s/2a96cbd8b46e442fc41c2b86b821562f.png"
                            }}
                        />

                        {x["@attr"]?.nowplaying && (
                            <div
                                className="
                                    absolute
                                    right-0
                                    top-0
                                    bluebg
                                    p-1
                                    text-xs
                                    sm:text-base
                                "
                                style={{
                                    fontFamily: "Lexend Giga"
                                }}
                            >
                                Now Playing!
                            </div>
                        )}
                    </a>

                    <div className="font-mono text-xs truncate">
                        {x.album["#text"]}
                    </div>

                    <div
                        className="
                            text-sm
                            sm:text-lg
                            break-words
                        "
                        style={{
                            fontFamily: "Lexend Giga"
                        }}
                    >
                        {x.name.length > 20
                            ? x.name.substring(0, 20) + "..."
                            : x.name}{" "}
                        — {x.artist["#text"]}
                    </div>
                </div>
            ))

            return (
                <div className="
                    text-white
                    w-full
                    max-w-full
                    overflow-x-hidden
                ">
                    <div className="font-mono">
                        always listening...

                        <h1
                            className="
                                text-3xl
                                sm:text-5xl
                                lg:text-7xl
                                w-full
                                px-3
                                sm:pl-5
                                mb-10
                                sm:mb-15
                                mt-2
                                leading-tight
                            "
                            style={{
                                fontFamily: "Lexend Giga"
                            }}
                        >
                            A UNIVERSAL EXPERIENCE
                            <br />
                            SOMETHING TO FILL THE AIR
                        </h1>
                    </div>

                    {/* Weekly */}
                    <h3
                        className="
                            text-2xl
                            sm:text-3xl
                            lg:text-4xl
                            w-full
                            px-3
                            mb-8
                            sm:mb-15
                            mt-2
                        "
                        style={{
                            fontFamily: "Lexend Giga"
                        }}
                    >
                        WEEKLY TOP TRACKS
                    </h3>

                    <div className="
                        grid
                        grid-cols-2
                        sm:grid-cols-3
                        lg:grid-cols-5
                        gap-x-3
                        gap-y-8
                        sm:gap-5
                        px-3
                        sm:px-5
                        lg:px-10
                    ">
                        {topElement}
                    </div>

                    {/* Recent */}
                    <h3
                        className="
                            text-2xl
                            sm:text-3xl
                            lg:text-4xl
                            w-full
                            px-3
                            mb-8
                            sm:mb-15
                            mt-10
                            sm:mt-15
                        "
                        style={{
                            fontFamily: "Lexend Giga"
                        }}
                    >
                        RECENT TRACKS
                    </h3>

                    <div className="
                        grid
                        grid-cols-2
                        sm:grid-cols-3
                        lg:grid-cols-5
                        gap-x-3
                        gap-y-8
                        sm:gap-5
                        px-3
                        sm:px-5
                        lg:px-10
                    ">
                        {recentElement}
                    </div>
                </div>
            )
    }
}
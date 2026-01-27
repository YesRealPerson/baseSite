import type { JSX } from "react"

export interface size {
    size: string,
    "#text": string
}

// GENERAL
export interface StyleProps{
    style: number
}

// PICTURES

export interface ImgProps {
    src: string,
    alt: string,
    className?: string
    details: string[][]
}

// PROJECTS

export interface projectResponseItem {
    "name": string,
    "langauge": string,
    "readme": string,
    "url": string
}

// BLOG

export interface BlogEntryType {
    date: string,
    title: string,
    subtitle?: string,
    children: JSX.Element
}

// STEAM

export interface steamGames {
  "appid": number,
  "name": string,
  "playtime_2weeks": number,
  "playtime_forever": number,
  "img_icon_url": string
}

// LASTFM

export interface trackTop {
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

export interface trackLatest {
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

export interface lastfmAPIResponse {
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
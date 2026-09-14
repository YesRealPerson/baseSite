import type { StyleProps } from "./Interfaces";

export default function HomeStatic({ style }: StyleProps) {
    const styles = [
        (
            <>
                <h1 className='text-4xl'>
                    Hello!
                </h1>
                <p>
                    This is my website, I am currently remaking it.<br /><br />
                    This version is still a work in progress but all of the functionality I want is here (although who knows if I come up with anything cool to add to the site or if I forgot anything).
                </p>
                <hr className="my-2" />
            </>
        ),
        (
            <>
                <div className="mt-20 text-white text-4xl" style={{ fontFamily: "Lexend Giga" }} >Somewhere familiar...</div>
                <div className="text-2xl font-mono text-white ml-5">ABOUT THIS PAGE</div>
                <div className="flex flex-row pt-10 justify-between">
                    <div className="flex flex-col justify-between" style={{ fontFamily: "Lexend Giga" }}>
                        <div className="text-sm ml-10 text-white w-100">
                            This is my personal website.
                            This version of the site is meant to be kind of emulate that self-important website design feel.
                            A lot of big and bold fonts, big images, and a lot of text to say very little ultimately.
                            This blurb of text is the only bit of text thats not really trying to be a character on this page.
                            The main goal is for this to be fun to look at and maybe play a bit with the sort of uselessly provactive language.
                            Ultimately, just a fun way for me to spend time making something. 
                            I'm not a truly great at creative design so this website takes a lot of inspiration from Bungie's Marathon website.
                            You can say what you want about the game, but it's got some style.
                        </div>
                        <div className="min-h-[10vh] p-5 bg-white">
                                CONFLUXES.net<br/>
                                <div className="text-sm font-sans ml-2">Though never the same...</div>
                        </div>
                    </div>
                    {/* TODO: Find better image */}
                    <div className="bg-[url(/IMG_3563.jpg)] h-[70vh] w-[50vw]" style={{backgroundAttachment: "fixed", backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
                </div>
            </>
        )
    ]
    return styles[style]
}
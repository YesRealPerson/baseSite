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
                <div className="mt-20 text-white text-4xl" style={{ fontFamily: "Lexend Giga" }} >Somewhere familiar again</div>
                <div className="text-2xl font-mono text-white ml-5">ABOUT THIS PAGE</div>
                <div className="flex flex-row pt-15 p-10 justify-between">
                    <div className="text-md text-white w-100" style={{ fontFamily: "Lexend Giga" }}>
                        This is my personal website.
                        This version of the site is meant to be kind of emulate that self-important overly virtuous website design feel.
                        A lot of big and bold fonts, big simple images, and a lot of text to say very little ultimately.
                        This blurb of text is the only bit of text thats not really trying to be a character on this page.
                        The main goal is for this to be fun to look at and maybe play a bit with the sort of uselessly provactive language.
                        Ultimately, just a fun way for me to spend time making something. I've taken a lot of obvious inspiration from some sites.
                    </div>
                    {/* TODO: Find better image */}
                    <div className="bg-[url(/IMG_3563.jpg)] h-100 w-300" style={{backgroundAttachment: "fixed", backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
                </div>
            </>
        )
    ]
    return styles[style]
}
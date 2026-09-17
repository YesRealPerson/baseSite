import type { StyleProps } from "./Interfaces";

export default function HomeStatic({ style }: StyleProps) {
    const styles = [
        (
            <>
                <h1 className='text-4xl'>
                    Hello!
                </h1>
                <p>
                    This is my website, this version is the nice simple version of the site. You can click the cycle button to change how this main page is styled. Currently there is only one other style, but maybe I'll make more.<br /><br />
                </p>
                <hr className="my-2" />
            </>
        ),
        (
            <>
                <div className="mt-20 ml-5 sm:ml-0 text-white text-4xl" style={{ fontFamily: "Lexend Giga" }} >Somewhere familiar...</div>
                <div className="text-2xl font-mono text-white ml-5">ABOUT THIS PAGE</div>
                <div className="flex flex-col sm:flex-row pt-10 justify-between">
                    <div className="flex flex-col justify-between" style={{ fontFamily: "Lexend Giga" }}>
                        <div className="text-sm px-5 sm:px-0 sm:mx-10 mb-10 text-white w-full sm:w-100">
                            <b className="text-lg">Before going on, know that the text on this page is satirical.</b><br/><br/>You can read more about my inspirations and motivations below.<br/><br/>
                            This version of the site is meant to be kind of emulate that self-important website design feel.
                            A lot of big and bold fonts, big images, and a lot of text to say very little.
                            This blurb of text is the only bit of text thats not really trying to be a character on this page.
                            The main goal is for this to be fun to look at and maybe play a bit with the sort of uselessly provactive language.
                            Ultimately, just a fun way for me to spend time making something. 
                            I'm not truly great at creative design so this website takes a lot from <a href="https://marathonthegame.com" target="_blank" className="animateLink"><i>Bungie's Marathon</i></a> website.
                            You can say what you want about the game, but it's got some style.
                            <br/><br/>
                            You can press the cycle button on the header to change the website's styling.
                        </div>
                        <div className="min-h-[10vh] p-5 text-3xl bg-white">
                                CONFLUXES.net<br/>
                                <div className="text-xl font-sans ml-2">Though never the same...</div>
                        </div>
                    </div>
                    <div className="bg-[url(/0G3A9857.jpg)] aspect-square sm:aspect-auto sm:h-[70vh] sm:w-full sm:max-w-[50%] sm:w-[50vw] bg-cover bg-position-[center_bottom] bg-no-repeat"></div>

                </div>
            </>
        )
    ]
    return styles[style]
}
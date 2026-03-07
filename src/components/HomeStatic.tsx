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
                <div>ANOTHER POINT ON THE WEB</div>
                <div>ABOUT THIS PAGE</div>
                <div>
                    This is my personal website. 
                    This iteration of the site is meant to emulate some more modern, (almost synonymous to) corporate website design.
                    A lot of big and bold fonts, large striking images, and a lot of text to say very little ultimately.
                    This blurb of text is the only bit of text thats not really trying to be a character on this page.
                    The main goal is for this to be fun to look at and maybe play a bit with the sort of uselessly provactive language used in modern advertising.
                    Hopefully you enjoy (and maybe are impressed if you're hiring)!
                    <img src="/IMG_3563.jpg"/>
                </div>
            </>
        )
    ]
    return styles[style]
}
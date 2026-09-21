import { InlineMath } from "react-katex";
import { Link, useLocation } from "react-router-dom";
import type { StyleProps } from "./Interfaces";
import Slideshow from "./Slideshow";

const styles = [
    {
        HeaderStyle:
            "font-serif flex flex-row items-center mt-2 sm:mt-5 mx-2 sm:mx-5 justify-between lg:justify-start",

        IconStyle:
            "h-auto w-20 sm:w-28 lg:w-auto lg:max-w-[30vw] block left-2 sm:left-5 top-2 md:h-20",

        NavStyle:
            "fixed z-[9999] " +
            "top-2 right-2 " +
            "sm:top-8 sm:right-8 sm:left-auto " +
            "flex flex-col sm:flex-row items-center " +
            "justify-start sm:justify-end " +
            "gap-1 sm:gap-2 " +
            "sm:px-7 py-2 " +
            "min-h-12 sm:h-15 " +
            "max-w-none sm:max-w-[calc(100vw-4rem)] " +
            "rounded-2xl sm:rounded-4xl " +
            "backdrop-blur-lg " +
            "bg-[rgba(255,255,255,0.15)] sm:bg-transparent " +
            "hover:backdrop-blur-4xl " +
            "overflow-x-auto " +
            "whitespace-nowrap",

        LinkStyle:
            "animateLink text-nowrap shrink-0 " +
            "px-2 sm:px-5 " +
            "mx-0 sm:mx-2 md:mx-5",

        OuterImageStyle: "",
        OuterStyle: ""
    },

    {
        HeaderStyle:
            "fixed  w-full z-[9999] " +
            "max-w-[2000px] " +
            "font-[lexend] " +
            "text-sm sm:text-lg " +
            "flex flex-row justify-between",

        IconStyle:
            "w-16 sm:w-24 lg:w-30 filter-[brightness(0)]",

        NavStyle:
            "flex flex-row " +
            "z-[9999] " +
            "text-white " +
            "items-center " +
            "justify-center " +
            "sm:justify-end " +
            "text-left sm:text-right " +
            "bg-black " +
            "gap-2 sm:gap-5 lg:gap-10 " +
            "px-2 sm:px-5 lg:px-7 " +
            "sm:pl-28 lg:pl-32 " +
            "min-h-14 " +
            "w-full " +
            "overflow-x-auto " +
            "whitespace-nowrap",

        LinkStyle:
            "animateLink !border-white text-nowrap shrink-0 " +
            "px-1 sm:px-2",

        OuterImageStyle: "hidden",
        OuterStyle: "w-full flex flex-col items-center bg-black"
    }
]

export default function Header({ style, loading }: StyleProps) {
    let temp = useLocation();
    let paths = temp.pathname;
    paths = paths.endsWith("/") ? paths.slice(0, -1) : paths;
    let haha = paths.split("/")
    let location = haha[haha.length - 1]
    location = location ? location : "";
    location = location.toLocaleLowerCase();
    let next;
    let base;
    switch (style) {
        case 0:
            next = "/"
            next += location == "modern" ? "" : location
            base = "/modern/"
            break;
        // Make more styles one day!
        // case 2:
        //     next = "./"
        //     break;
        default:
            next = "/modern/" + location;
            base = "/"
            break;
    }
    console.log(location)
    const punch = (
        <>
            <div className="absolute w-full justify-center z-10 hidden sm:flex">
                <div className="max-w-[2000px] w-full flex justify-start">
                    <div className="relative top-0 left-0 bluebg w-30 text-4xl text-black min-h-[100vh] [writing-mode:sideways-lr] text-left font-mono">
                        <div className="flex w-full justify-center flex-col absolute bluefade pt-[20vh] pb-5 z-50">
                            <div>confluxes.net</div>
                            <div className="text-lg">flowing together \ meeting of currents \ confluence</div>
                        </div>
                    </div>
                </div>
                <div className="pointer-events-none fixed w-full top-20 left-0 flex justify-center z-10">
                    <div className="max-w-[2000px] w-full">
                        <img src="/favicon.ico" className={styles[style].IconStyle} alt="" />
                    </div>
                </div>
            </div>
            {/* SPLASH IMAGE */}
            <div className="flex flex-row h-[100vh] max-w-[2000px] w-full relative">
                <Slideshow/>
                <div className="absolute w-full h-full flex justify-center items-center left-0 top-0">
                    <div style={{ fontFamily: "Lexend Giga" }} className={loading ? "text-2xl md:text-8xl w-[90%] px-5 md:w-auto backdrop-brightness-25 backdrop-blur-xs backdrop-invert-100 pulse flex items-center justify-center text-black md:ml-20 text-center" : "hidden"}>Loading content...</div>
                </div>
            </div>
        </>)
    const pusher = (<>
        <div className="w-30 h-full absolute left-0 top-0 bluebg flex justify-center items-center text-black hidden sm:flex"><InlineMath math="\xrightarrow[\text{flowing}]{\text{currents}}"></InlineMath></div>
    </>)
    return (
        <div className={styles[style].OuterStyle}>
            <header className={styles[style].HeaderStyle}>
                <div className={styles[style].OuterImageStyle}>
                    <img src="/favicon.ico" className={styles[style].IconStyle} alt="" />
                </div>
                <nav className={styles[style].NavStyle}>
                    {style ? pusher : null}

                    <Link
                        className={styles[style].LinkStyle}
                        to={base}
                    >
                        Home [<InlineMath math="\times" />]
                    </Link>

                    <Link
                        className={styles[style].LinkStyle}
                        to={base + "pictures"}
                    >
                        Pictures [<InlineMath math="\Im" />]
                    </Link>

                    <Link
                        className={styles[style].LinkStyle}
                        to={base + "blog"}
                    >
                        Blog [<InlineMath math="\infty" />]
                    </Link>

                    {style != -1 ? (
                        <a
                            className={styles[style].LinkStyle}
                            href={next}
                        >
                            Cycle [<InlineMath math="\rightleftharpoons" />]
                        </a>
                    ) : null}
                </nav>
            </header>
            {location != "" ? <></> : punch}
        </div>
    )
}

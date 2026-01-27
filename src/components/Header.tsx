import { InlineMath } from "react-katex";
import { Link, useLocation } from "react-router-dom";
import type { StyleProps } from "./Interfaces";
import Slideshow from "./Slideshow";

const styles = [
    {
        HeaderStyle: "font-serif flex flex-row items-center mt-5 mx-5 justify-between lg:justify-start",
        IconStyle: "h-full max-w-[30vw] block left-5 top-2 md:h-20",
        NavStyle: "flex flex-col top-3 left-20 text-2xl text-right lg:text-left lg:flex-row",
        LinkStyle: "animateLink text-nowrap md:px-5 md:mx-5",
        OuterImageStyle: "",
        OuterStyle: ""
    },
    {
        HeaderStyle: "fixed w-full z-9999 max-w-[2000px] font-[lexend] text-lg flex flex-row justify-between",
        IconStyle: "w-25 filter-[brightness(0)]",
        NavStyle: "absolute flex z-9999 text-white items-center text-left flex-row backdrop-blur-lg gap-2 px-7 h-15 top-8 right-8 rounded-4xl transition-all duration-500 bg-none hover:backdrop-blur-4xl hover:gap-3 hover:px-10 hover:bg-[rgba(255,255,255,0.25)]",
        LinkStyle: "animateLink !border-white text-nowrap",
        OuterImageStyle: "hidden",
        OuterStyle: "w-full flex flex-col items-center bg-black"
    }
]

export default function Header({ style }: StyleProps) {
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
        case 1:
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
    console.log("what ", next)

    const punch = (
        <>
            <div className="absolute w-full flex justify-center z-10">
                <div className="max-w-[2000px] w-full flex justify-start">
                    <div className="relative top-0 left-0 bluebg w-25 text-4xl text-black min-h-[100vh] [writing-mode:sideways-lr] text-left font-mono">
                        <div className="flex w-full justify-center flex-col absolute bluefade pt-[20vh] pb-5 z-50">
                            <div>/kŏn′flŭks″/</div>
                            <div className="text-lg">flowing together \ meeting of currents \ confluence</div>
                        </div>
                    </div>
                </div>
            <div className="pointer-events-none fixed w-full top-3 left-0 flex justify-center z-10">
                <div className="max-w-[2000px] w-full">
                    <img src="/favicon.ico" className={styles[style].IconStyle} alt="" />
                </div>
            </div>
            </div>
            {/* SPLASH IMAGE */}
            <div className="flex flex-row h-[100vh] max-w-[2000px] w-full">
                <Slideshow />
            </div>
            {/* ICON */}
            <div className="absolute z-1000 w-full h-full top-0 left-0 flex justify-center">
                <div className="max-w-[2000px] w-full flex items-center justify-center">
                    <div style={{fontFamily: "Lexend Giga"}} className="text-9xl text-white ml-25">CONFLUXES</div>
                </div>
            </div>
        </>)
    return (
        <div className={styles[style].OuterStyle}>
            <header className={styles[style].HeaderStyle}>
                <div className={styles[style].OuterImageStyle}>
                    <img src="/favicon.ico" className={styles[style].IconStyle} alt="" />
                </div>
                <nav className={styles[style].NavStyle}>
                    <Link className={styles[style].LinkStyle} to={base}>Home [<InlineMath math="\times"></InlineMath>]</Link>
                    <Link className={styles[style].LinkStyle} to={base + "pictures"}>Pictures [<InlineMath math="\Im"></InlineMath>]</Link>
                    <Link className={styles[style].LinkStyle} to={base + "/projects"}>Projects [<InlineMath math="\Game"></InlineMath>]</Link>
                    <Link className={styles[style].LinkStyle} to={base + "/blog"}>Blog [<InlineMath math="\infty"></InlineMath>]</Link>
                    {style != -1 ? <a className={styles[style].LinkStyle} href={next}>Cycle [<InlineMath math="\rightleftharpoons"></InlineMath>]</a> : <></>}
                </nav>
            </header>
            {location.indexOf("modern") == -1 ? <></> : punch}
        </div>
    )
}

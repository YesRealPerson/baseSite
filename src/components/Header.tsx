import { InlineMath } from "react-katex";
import { Link, useLocation } from "react-router-dom";
import type { StyleProps } from "./Interfaces";
import Slideshow from "./Slideshow";

const styles = [
    {
        HeaderStyle: "font-serif flex flex-row items-center mt-5 mx-5 justify-between lg:justify-start",
        IconStyle: "h-full max-w-[30vw] block left-5 top-2 md:h-20",
        NavStyle: "absolute flex z-9999 text-black items-center text-left flex-row backdrop-blur-lg gap-2 px-7 h-15 top-8 right-8 rounded-4xl transition-all duration-500 bg-none hover:backdrop-blur-4xl hover:gap-3 hover:px-10 hover:bg-[rgba(255,255,255,0.25)]",
        LinkStyle: "animateLink text-nowrap md:px-5 md:mx-5",
        OuterImageStyle: "",
        OuterStyle: ""
    },
    {
        HeaderStyle: "fixed w-full z-9999 max-w-[2000px] font-[lexend] text-lg flex flex-row justify-between",
        IconStyle: "w-30 filter-[brightness(0)]",
        NavStyle: "absolute flex z-9999 text-white items-center justify-end text-right flex-row bg-black gap-10 px-7 h-15 top-0 right-0 w-full",
        LinkStyle: "animateLink !border-white text-nowrap",
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
    const punch = (
        <>
            <div className="absolute w-full flex justify-center z-10">
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
            <div className="flex flex-row h-[100vh] max-w-[2000px] w-full">
                <Slideshow />
            </div>
            {/* ICON */}
            {/* <div className="absolute z-1000 w-full h-full top-0 left-0 flex justify-center">
                <div className="max-w-[2000px] w-full flex items-end justify-end flex-col">
                    <div className="bluebg text-black font-mono h-35 pl-2 pt-2">
                        <div style={{fontFamily: "Lexend Giga"}} className="text-4xl">A new start</div>
                        <div style={{fontFamily: "Lexend Giga"}} className="text-2xl ml-5 mr-15">What is new becomes old.<br/>Again and again...</div>
                        <div className="font-mono text-10 text-center p-1 bg-black bluetext absolute right-0 bottom-0">Seek more.</div>
                    </div>
                </div>
            </div> */}
            {/* TODO MAKE THIS MORE INTERESTING, maybe some loading animation in place of the slideshow? */}
            <div className="w-full h-full flex justify-center items-center left-0 top-[5vw] fixed">
                <div style={{fontFamily: "Lexend Giga"}} className={loading ? "text-[3vw] text-white ml-25 text-center" : "hidden"}><br/>Loading dynamic content...</div>
            </div>
        </>)
    const pusher = (<>
    <div className="w-30 h-full absolute left-0 top-0 bluebg flex justify-center items-center text-black"><InlineMath math="\xrightarrow[\text{flowing}]{\text{currents}}"></InlineMath></div>
    </>)
    return (
        <div className={styles[style].OuterStyle}>
            <header className={styles[style].HeaderStyle}>
                <div className={styles[style].OuterImageStyle}>
                    <img src="/favicon.ico" className={styles[style].IconStyle} alt="" />
                </div>
                <nav className={styles[style].NavStyle}>
                    {style ? pusher : ""}
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

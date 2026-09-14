import BlogEntry from "./components/BlogEntry";
import Img from "./components/Image"
import { InlineMath, BlockMath } from 'react-katex';
import type { ImgProps, StyleProps } from "./components/Interfaces";

function BR() {
    return (<br className="block my-2" />)
}
interface MathBlockProps {
    math: string,
    className?: string
}
function MathBlock({ math, className}:MathBlockProps){
    return(
        <div className={"text-[4vw] md:text-xl "+className}>
            <BlockMath math={math} />
        </div>
    )
}
function Image({ src, alt, className, details }: ImgProps) {
    return (
        <div className="w-full flex items-center justify-center">
            <Img src={src} alt={alt} details={details} className={className}></Img>
        </div>
    )
}

export default function Blog({ style }: StyleProps) {
    return (
        <div className="mt-30 px-20">
            {style ? <div className={(style ? "text-white" : "text-black")+" mb-20"}>
                <div className="text-6xl" style={{ fontFamily: "Lexend Giga" }}>
                    BLOG
                </div>
                <div className="text-xl ml-5 font-serif">
                    This is a page for random pieces of text basically.<br/>It's probably going to stay fairly empty because I can't write things without wanting to delete them later.
                </div>
            </div> : <></>}
            <BlogEntry title="A Blog" date="September 14th, 2026" subtitle="Nothing of much importance" style={style}>
                <div>
                    I figured I should finish updating this website at some point and now is probably better than never...
                    Really not too sure what I'll ultimately use this blog for but it's nice to have it here.
                </div>
            </BlogEntry>
        </div>)
}
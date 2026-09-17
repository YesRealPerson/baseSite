import BlogEntry from "./components/BlogEntry";
// import Img from "./components/Image"
// import { InlineMath, BlockMath } from 'react-katex';
import type { /*ImgProps,*/ StyleProps } from "./components/Interfaces";

// function BR() {
//     return (<br className="block my-2" />)
// }
// interface MathBlockProps {
//     math: string,
//     className?: string
// }
// function MathBlock({ math, className}:MathBlockProps){
//     return(
//         <div className={"text-[4vw] md:text-xl "+className}>
//             <BlockMath math={math} />
//         </div>
//     )
// }
// function Image({ src, alt, className, details }: ImgProps) {
//     return (
//         <div className="w-full flex items-center justify-center">
//             <Img src={src} alt={alt} details={details} className={className}></Img>
//         </div>
//     )
// }

export default function Blog({ style }: StyleProps) {
    return (
        <div className="mt-30 px-10 md:px-20">
            <div className={(style ? "text-white font-[Lexend_Giga]" : "text-black font-serif")+" mb-20"}>
                <div className="text-3xl mb-2 md:text-6xl">
                    BLOG
                </div>
                <div className="text-xl ml-5 font-serif">
                    This is a page for random pieces of text basically.<br/>It's probably going to stay fairly empty because I can't write things without wanting to delete them later.
                </div>
            </div>
            {/* START BLOG ENTRIES */}
            <BlogEntry title="Movies" date="September 16th, 2026" subtitle="AMC's A-List" style={style}>
                <div>
                    Lots of good movies coming in October and late September. I'm very excited to see <i>Resident Evil</i>, <i>Digger</i>, <i>Primetime</i>, <i>The Social Reckoning</i>, <i>Fjord</i> and probably a few more I'm forgetting.
                    Also <i>Dune: Part 3</i> in December... I like movies, my monthly $30 to AMC is pretty worth it.
                </div>
            </BlogEntry>
            <BlogEntry title="A Blog" date="September 14th, 2026" subtitle="Nothing of much importance" style={style}>
                <div>
                    I figured I should finish updating this website at some point and now is probably better than never...
                    Really not too sure what I'll ultimately use this blog for but it's nice to have it here.
                </div>
            </BlogEntry>
        </div>)
}
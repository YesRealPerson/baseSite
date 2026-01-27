import BlogEntry from "./components/BlogEntry";
import Img from "./components/Image"
import { InlineMath, BlockMath } from 'react-katex';
import type { ImgProps } from "./components/Interfaces";

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

export default function Blog() {
    return (
        <>
            <BlogEntry title="A Refresher" date="January 22nd, 2026" subtitle="Trying something new">
                <div>
                    <div>
                        Hello! If you've visited this site before, you might notice it's almost completely different.
                        I'm the sort of person who tends to dislike things I make over time, so this site was overdue for some change.
                        <BR />
                        I also wanted to rewrite my site using more modern tools like React and TypeScript.
                        I've also added some functionality like making this a single page app or adding <InlineMath math="\LaTeX" /> (I don't really know if I'll write anything math related but who knows).
                        <BR />
                        <MathBlock math="(\forall p,a,b \in \mathbb{N})[(P(p) \land p|ab) \implies (p|b\lor p|a)]" />
                        <i className="block text-center">
                            For all natural numbers p, a, and b where p is prime and p divides a times b
                            implies p divides b or p divides a (Euclid's Lemma).
                        </i>
                        <BR />
                        I don't really know what I'll really write here from now on, maybe random thoughts, Gundams or something.
                        <Image src="/IMG_5271.jpg" alt="Strike Freedom Gundam" details={[["Perfect Grade", ""]]}></Image>
                        On a random note: I'm really excited for Marathon to come out March 5th.
                        I think this year I'd like to write something to this page weekly, but we'll see...
                    </div>
                </div>
            </BlogEntry>
        </>)
}
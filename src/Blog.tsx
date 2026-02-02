import BlogEntry from "./components/BlogEntry";
import Img from "./components/Image"
import { InlineMath, BlockMath } from 'react-katex';
import type { ImgProps } from "./components/Interfaces";

function BR() {
    return (<br className="block my-2" />)
}
function HR() {
    return (<hr className="block my-2" />)
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
        <div className="w-full flex items-center justify-center my-2">
            <Img src={src} alt={alt} details={details} className={className}></Img>
        </div>
    )
}

export default function Blog() {
    return (
        <>
            <BlogEntry title="Walking Along the Clock" date="February 1st, 2026" subtitle="Wasting less time">
                <div>
                    I think in the last year I have found myself increasingly using my phone to simply pass the time.
                    I have plenty that I can entertain myself with, whether that's my many unfinished projects (both physical and coding), movies, video games, or unfinished books.
                    And there's absolutely more than enough work I could be doing.
                    <BR/>
                    Yet oddly enough, there are times where nothing seems more appealing than simply passing the time.
                    Whether it's opening and closing apps, refreshing my email, or just looking through my image gallery I'm just looking not really thinking.
                    <BR/>
                    Part of me wants to attribute this to a sense of perfectionism, that when I do projects or work any time not spent making something I am 100% sure of is time wasted.
                    Or that if I watch or read something I need to closely analyze it to have intelligent thoughts about it for my own satisfaction.
                    But that's far from a constant truth, at the time of writing this site is actively being worked on and I have done a lot of reading and watching without thinking. 
                    <BR/>
                    On the other hand maybe it's my brain's way of telling me to stop thinking for a bit. 
                    I think it is a bit arrogant to think of myself as constantly thinking, but I also think if my thoughts were hooked straight to my mouth I wouldn't shut up.
                    <BR/>
                    I'm not sure how to solve this problem or if it's just inherent to the human experience. Something to think about I guess.
                    <BR/>
                    I don't really want this page to be anything too personal, but it seems like I'm too narcissistic and like talking about myself to even the void.
                    <Image src="/IMG_4889.jpg" alt="Gundam Astray Red Frame" details={[["Master Grade",""],["ECOPLA Neon Pink",""]]}></Image>
                    On a more light hearted note, I'm really excited for my PGU Nu Gundam pre-order to arrive. I think (and hope) this is the last Gundam model kit I'll buy for the foreseeable future, I'll come back if there's another PGU or MGEX.
                </div>
            </BlogEntry>
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
import { InlineMath } from "react-katex";
import Gallery from "./components/Gallery"
import type { StyleProps } from "./components/Interfaces"

export default function Photography({ style }: StyleProps) {
  return (
    <div>
      {!style ? <><h1 className='text-4xl'>
            Pictures
        </h1>
        <p>
            This is a page for pictures I take. I would like to think they're at least fun to look at.<br/><br/>
            You can click on an image to enlarge it and look at some additional information. 
        </p></> : 
        <div className="w-full  mt-30 text-white" style={{fontFamily: "Lexend Giga"}}>
          <span className="text-8xl font-sans">PHOTOGRAPHY</span><br/>
          This is a page for pictures I take. I would like to think they're at least fun to look at.<br/>
            You can click on an image to enlarge it and look at some additional information.<br/>
            Full resolution images can be found in the public folder of the <a href="https://github.com/YesRealPerson/baseSite/tree/dev/public" className="animateLink"><i>GitHub repo</i> <InlineMath math="\Rsh"></InlineMath></a>.
        </div>}
        
        <hr className="my-5"/>
        <div className='flex items-center justify-center'>
        <Gallery />
        </div>
    </div>
  )
}
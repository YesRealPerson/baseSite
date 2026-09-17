import { InlineMath } from "react-katex";
import Gallery from "./components/Gallery"
import type { StyleProps } from "./components/Interfaces"

export default function Photography({ style }: StyleProps) {
  let headerClass = "w-full mt-30 text-white p-5 md:max-w-[50%] font-[Lexend_Giga]"
  if(style==0) {
    headerClass = "w-full mt-30 text-black p-5 md:max-w-[50%] font-sans"
  }
  console.log(style==0, headerClass)
  return (
    <div>
        <div className={headerClass}>
          <span className="md:text-8xl text-2xl font-sans">PHOTOGRAPHY</span><br/>
          This is a page for pictures I take. I would like to think they're at least fun to look at.
            You can click on an image to enlarge it and look at some additional information.<br/><br/>
            <b>Full resolution images</b> can be downloaded by clicking the download button found in the detailed image view or in the public folder of the <a href="https://github.com/YesRealPerson/baseSite/tree/dev/public" className="dotted animateLink"><i>GITHUB REPO</i> <InlineMath math="\Rsh"></InlineMath></a>.
        </div>
        
        <hr className="my-5"/>
        <div className='flex items-center justify-center'>
        <Gallery />
        </div>
    </div>
  )
}
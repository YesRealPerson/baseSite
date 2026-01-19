import { useState } from "react"
import type { ImgProps } from "./Interfaces"

const Img = ({ src, alt, className, details }: ImgProps) => {
    const [classString, setClass] = useState(className)
    const [imgClass, setImg] = useState("h-[33vh] m-[1vh] w-auto "+className)
    const [altClass, setAlt] = useState("hidden")
    const [large, setLarge] = useState(false)
    function enlarge() {
        if (!large) {
            setClass("fixed top-0 left-0 flex w-screen h-screen justify-center items-center bgblur")
            setImg("max-w-[70vw] max-h-[90vh]")
            setLarge(true)
            setAlt("bg-white px-3 py-7 max-w-[15vw]")
        } else {
            setClass(className)
            setImg("h-[33vh] m-[1vh] w-auto "+className)
            setLarge(false)
            setAlt("hidden")
        }
    }
    let detailsElement = details.map(x => (
        <>
            <div className="flex flex-row justify-between px-[.5em]">
                <div>
                    {x[0]}
                </div>
                <div>
                    {x[1]}
                </div>
            </div>
            <hr className="my-[.5em]"/>
        </>
    ))
    return (
        <div className={classString} onClick={enlarge}>
            <div className="flex flex-row">
                <img src={src} alt={alt} className={imgClass} loading="lazy"></img>
                <div className={altClass}>
                    <div className="mb-5 px-[.5em]">
                        {alt}
                    </div>
                    <hr className="my-[.5em]"/>
                    {detailsElement}
                    <div className="mt-5 py-1 text-white bg-gray-800 text-center">
                        <a href={src} className="!border-none hover:text-gray-300" download={true}>download</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Img
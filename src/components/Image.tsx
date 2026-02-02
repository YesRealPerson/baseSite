import { useState } from "react"
import type { ImgProps } from "./Interfaces"

const defaultClass = "md:h-[20vh] md:m-[1vh] md:w-auto";
const zoomClass    = "max-h-[50vh] bg-black object-contain xl:max-w-[70vw] xl:max-h-[90vh]"

const Img = ({ src, alt, className, details }: ImgProps) => {
    const [classString, setClass] = useState(className)
    const [imgClass, setImg] = useState(defaultClass+" "+className)
    const [altClass, setAlt] = useState("hidden")
    const [large, setLarge] = useState(false)
    function enlarge() {
        if (!large) {
            setClass("fixed z-9999 top-0 left-0 flex w-screen h-screen justify-center items-center bgblur")
            setImg(zoomClass)
            setLarge(true)
            setAlt("bg-white px-3 py-3 xl:py-7 xl:max-w-[15vw]")
        } else {
            setClass(className)
            setImg(defaultClass+" "+className)
            setLarge(false)
            setAlt("hidden")
        }
    }
    let detailsElement = details.map(x => (
        <>
            <div className="flex flex-row gap-5 justify-between px-[.5em]">
                <div>
                    {x[0]}
                </div>
                <div>
                    {x[1]}
                </div>
            </div>
            <hr className="my-1 xl:my-[.5em]"/>
        </>
    ))
    return (
        <div className={classString} onClick={enlarge}>
            <div className="flex flex-col xl:flex-row">
                {/* <div className="w-full flex justify-center"> */}
                    <img src={src} alt={alt} className={imgClass} loading="lazy"></img>
                {/* </div> */}
                <div className={altClass}>
                    <div className="mb-5 px-[.5em]">
                        {alt}
                    </div>
                    <hr className="my-1 xl:my-[.5em]"/>
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
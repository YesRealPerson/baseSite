import { useState, useEffect } from 'react';

// TODO: Change images to something more fitting to look at
const images = [
    "/IMGL3654.jpg", 
    "/IMG_6911.jpg", 
    "/0G3A9885.jpg", 
    "/IMG_0265.jpg", 
    "/IMG_7694.jpg", 
    "/IMG_7766.jpg", 
    "/IMGL3649.jpg", 
    "/IMG_8235.jpg"]
const positions = [
    "object-center",
    "object-[center_-10px]",
    "object-center",
    "object-center",
    "object-[center_bottom]",
    "object-[center_-10px]",
    "object-center",
    "object-[-250px]",
]
// const filters = ["filter1"]

export default function Slideshow() {
    let first = true;
    const [index, setIndex] = useState(0);
    const [animation, setAnimation] = useState("invertAnimation");
    const [filter] = useState("filter1");
    
    const rotate = async () => {
        if(first){
            await new Promise(resolve => setTimeout(resolve, 1));
            setAnimation("")
            first = false;
        }
        document.documentElement.style.setProperty("--i1angle", Math.random()*360 + "deg")
        document.documentElement.style.setProperty("--i2angle", Math.random()*360 + "deg")
        document.documentElement.style.setProperty("--startx", Math.random() * 100 + "%")
        document.documentElement.style.setProperty("--starty", Math.random() * 100 + "%")
        document.documentElement.style.setProperty("--endx", Math.random() * 100 + "%")
        document.documentElement.style.setProperty("--endy", Math.random() * 100 + "%")
        document.documentElement.style.setProperty("--hueangle", (Math.random() * 120 + 60) + "deg")
        document.documentElement.style.setProperty("--contrast", (Math.random() * 100 + 100) + "%")
        document.documentElement.style.setProperty("--saturation", (Math.random() * 100 + 100) + "%")
        setAnimation("invertAnimation")
        // setFilter(filters[Math.floor(Math.random()*filters.length)]) // if I ever add additional filter styles
        setIndex((i) =>
            i === images.length - 1 ? 0 : i + 1
        );
        await new Promise(resolve => setTimeout(resolve, 2000));
        setAnimation("")
    };

    useEffect(() => {
        const intervalId = setInterval(rotate, 3000);
        return () => clearInterval(intervalId);
    }, [images.length]);
    const imageloader = images.map(x => {
        return (<img className="w-0" src={x} />)
    })
    return (
        <>
            <div>
                <img src={images[index]} className={'max-w-[2000px] w-[100vw] h-full object-cover noninverted '+positions[index]} />
                <img src={images[index]} id="in1" className={'max-w-[2000px] mx-auto w-[100vw] h-full object-cover inverted '+positions[index]+" "+animation} />
                <img src={images[index]} id="in2" className={'max-w-[2000px] mx-auto w-[100vw] h-full object-cover inverted '+positions[index]+" "+filter+" "+animation} />
            </div>
            {imageloader}
        </>
    );
};
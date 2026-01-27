import { useState, useEffect } from 'react';

const images = ["/IMG_4778.jpg", "/IMG_4282.jpg", "/IMG_0265.jpg", "/IMG_3563.jpg", "/IMG_4670.jpg"]
const filters = ["filter1"]

export default function Slideshow() {
    const [index, setIndex] = useState(0);
    const [animation, setAnimation] = useState("invertAnimation");
    const [filter, setFilter] = useState("filter1");
    
    const rotate = async () => {
        document.documentElement.style.setProperty("--i1angle", Math.random()*360 + "deg")
        document.documentElement.style.setProperty("--i2angle", Math.random()*360 + "deg")
        document.documentElement.style.setProperty("--startx", Math.random() * 100 + "%")
        document.documentElement.style.setProperty("--starty", Math.random() * 100 + "%")
        document.documentElement.style.setProperty("--endx", Math.random() * 100 + "%")
        document.documentElement.style.setProperty("--endy", Math.random() * 100 + "%")
        document.documentElement.style.setProperty("--hueangle", (Math.random() * 100 + 100) + "deg")
        document.documentElement.style.setProperty("--contrast", (Math.random() * 100 + 100) + "%")
        document.documentElement.style.setProperty("--saturation", (Math.random() * 100 + 100) + "%")
        setAnimation("invertAnimation")
        setFilter(filters[Math.floor(Math.random()*filters.length)])
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
                <img src={images[index]} className='w-full h-full object-cover noninverted' />
                <img src={images[index]} id="in1" className={'max-w-[2000px] mx-auto w-full h-full object-cover inverted '+animation} />
                <img src={images[index]} id="in2" className={'max-w-[2000px] mx-auto w-full h-full object-cover inverted '+filter+" "+animation} />
            </div>
            {imageloader}
        </>
    );
};
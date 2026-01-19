import Img from "./Image.tsx"
import type { ImgProps } from "./Interfaces.tsx"
export default function Gallery() {
    let pictures:ImgProps[]  = [
        {
            src: "./IMG_3452.jpg",
            alt: "Empty benches with visible deterioration in front of an empty playground.",
            details: [["Camera", "Canon EOS R8"], ["Shutter Speed", "1/1000"], ["F-Stop", "f/2.8"], ["ISO", "400"], ["Focal Length", "90mm"]]
        },
        {
            src: "./IMG_2170.jpg",
            alt: "People walking on a bridge along the beach with low clouds and the moon in the background.",
            details: [["Camera", "Canon EOS R8"]]
        },
        {
            src: "./IMG_3450.jpg",
            alt: "A cat staring at the camera next to an empty metal bowl and in front of a wall with peeling paint.",
            details: [["Camera", "Canon EOS R8"], ["Shutter Speed", "1/1000"], ["F-Stop", "f/2.8"], ["ISO", "400"], ["Focal Length", "185mm"]]
        },
        {
            src: "./IMG_4161.jpg",
            alt: "A small bird hiding under a tree surrounded by grass.",
            details: [["Camera", "Canon EOS R8"], ["Shutter Speed", "1/500"], ["F-Stop", "f/2.8"], ["ISO", "2500"], ["Focal Length", "200mm"]]
        },
        {
            src: "./IMG_4120.jpg",
            alt: "Various bushes with the sea and a bridge in the background.",
            details: [["Camera", "Canon EOS R8"], ["Shutter Speed", "1/2000"], ["F-Stop", "f/16"], ["ISO", "3200"], ["Focal Length", "88mm"]]
        },
        {
            src: "./IMG_4076.jpg",
            alt: "A winding trail beside the sea at sunset.",
            details: [["Camera", "Canon EOS R8"], ["Shutter Speed", "1/500"], ["F-Stop", "f/20"], ["ISO", "1250"], ["Focal Length", "70mm"]]
        },
        {
            src: "./IMG_4070.jpg",
            alt: "A series of rocks coming out of the ground with rolling hills in the background.",
            details: [["Camera", "Canon EOS R8"], ["Shutter Speed", "1/400"], ["F-Stop", "f/20"], ["ISO", "2500"], ["Focal Length", "70mm"]]
        },
        {
            src: "./IMG_3934.jpg",
            alt: "A heron landing in a patch of grass with a lake in the background.",
            details: [["Camera", "Canon EOS R8"], ["Shutter Speed", "1/4000"], ["F-Stop", "f/4.5"], ["ISO", "400"], ["Focal Length", "200mm"]]
        },
        {
            src: "./cat.jpg",
            alt: "My cat Ice Cream hiding behind some plants.",
            details: [["Camera", "Canon EOS R8"], ["Shutter Speed", "1/100"], ["F-Stop", "f/2.8"], ["ISO", "640"], ["Focal Length", "190mm"]]
        },
        {
            src: "./IMG_4282.jpg",
            alt: "An intense sunset behind a chain-link fence with pools of rainwater and pylons in the background.",
            details: [["Camera", "Canon EOS R8"], ["Shutter Speed", "1/500"], ["F-Stop", "f/20"], ["ISO", "2500"], ["Focal Length", "70mm"]]
        },
        {
            src: "./IMG_3216.jpg",
            alt: "A bench overlooking a lake under in the shade of trees with mountains in the background.",
            details: [["Camera", "Canon EOS R8"], ["Shutter Speed", "1/60"], ["F-Stop", "f/32"], ["ISO", "100"], ["Focal Length", "50mm"]]
        },
        {
            src: "./IMG_3229.jpg",
            alt: "A person walking on a snow covered bridge on top of a quiet lake, with an empty bench in the foreground and mountains in the background.",
            details: [["Camera", "Canon EOS R8"], ["Shutter Speed", "1/60"], ["F-Stop", "f/32"], ["ISO", "400"], ["Focal Length", "50mm"]]
        },
        {
            src: "./IMG_3563.jpg",
            alt: "A view from a stone bridge over a rushing river leading into the woods.",
            details: [["Camera", "Canon EOS R8"], ["Shutter Speed", "1/50"], ["F-Stop", "f/22"], ["ISO", "1600"], ["Focal Length", "75mm"]]
        },
    ]
    let picturesElement = pictures.map(x => (
                <div className="inline-block">
                    <Img src={x.src} alt={x.alt} details={x.details}/>
                </div>
            ))
    return (
        <div id="gallery" className="inline-block w-[90vw]">
            {picturesElement}
        </div>
    )
}
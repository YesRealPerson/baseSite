import Gallery from "./components/Gallery"

export default function Photography() {
  return (
    <div>
        <h1 className='text-4xl'>
            Pictures
        </h1>
        <p>
            This is a page for pictures I take. I would like to think they're at least fun to look at.<br/><br/>
            You can click on an image to enlarge it and look at some additional information.
        </p>
        <hr className="my-5"/>
        <div className='flex items-center justify-center'>
        <Gallery />
        </div>
    </div>
  )
}
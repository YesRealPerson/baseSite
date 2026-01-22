import { Link, useNavigation } from "react-router-dom";

export default function Loading() {
    const navigation = useNavigation();

    return (
        <>
            <header className="font-serif">
                <img src="./favicon.ico" className='w-12 absolute left-5 top-2' alt="" />
                <nav className="absolute flex flex-row top-3 left-20 w-[75vw] text-2xl">
                    <Link className="animateLink" to="/">Home [×]</Link>
                    <Link className="animateLink" to="/pictures">Pictures [×]</Link>
                    <Link className="animateLink" to="/projects">Projects [×]</Link>
                </nav>
            </header>
            <main className="mt-20 m-5 ">
                <div className={
                    navigation.state === "loading" ? "fixed left-0 top-0 w-screen h-screen bgblur flex justify-center items-center" : "hidden"
                }>
                    <div className="text-white text-4xl flex flex-row justify-center">
                        <div className="loader"></div>
                    </div>
                </div>
                <div>
                    <h1 className='text-4xl'>
                        Hello!
                    </h1>
                    <p>
                        This is my website, I am currently remaking it.<br /><br />
                        This version is still a work in progress but all of the functionality I want is here (although who knows if I come up with anything cool to add to the site).
                        <br />
                        I plan on making various styles for the home page in the near future but for now you get the nice and simple one.
                    </p>
                    <hr className="my-2" />
                    <div className="w-full text-center text-2xl">
                        Loading dynamic content...
                    </div>
                </div>
            </main>
            <footer>
                <hr className="mt-10 mb-3" />
                <div className="flex flex-row justify-center items-center">
                    <a className="animateLink" href="mailto:contact@confluxes.net">contact</a>
                </div>
            </footer>
        </>
    )
} 
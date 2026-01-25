import { Link, useNavigation } from "react-router-dom";
import HomeStatic from "./components/HomeStatic";

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
                    <Link className="animateLink" to="/blog">Blog [×]</Link>
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
                    <HomeStatic />
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
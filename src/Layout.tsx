import { Link, Outlet, useNavigation } from "react-router-dom";
import "./components/loading.css"

export default function Layout() {
    const navigation = useNavigation();
    return (
        <>
            <header className="font-serif flex flex-row items-center mt-5 mx-5 justify-between md:justify-start">
                <div>
                    <img src="./favicon.ico" className='h-full max-w-[30vw] block left-5 top-2 md:h-20' alt="" />
                </div>
                <nav className="flex flex-col top-3 left-20 text-2xl text-right md:text-left md:w-[75vw] md:flex-row">
                    <Link className="animateLink md:px-5 md:mx-5" to="/">Home [×]</Link>
                    <Link className="animateLink md:px-5 md:mx-5" to="/pictures">Pictures [×]</Link>
                    <Link className="animateLink md:px-5 md:mx-5" to="/projects">Projects [×]</Link>
                    <Link className="animateLink md:px-5 md:mx-5" to="/blog">Blog [×]</Link>
                </nav>
            </header>
            <main className="mt-5 m-5 ">
                <div className={
                    navigation.state === "loading" ? "fixed left-0 top-0 w-screen h-screen bgblur flex justify-center items-center" : "hidden"
                }>
                    <div className="text-white text-4xl flex flex-row justify-center">
                        <div className="loader"></div>
                    </div>
                </div>
                <Outlet />
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
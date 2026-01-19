import { Link, Outlet, useNavigation, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./components/loading.css"

const Regular = () => {
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

const Modern = () => {
    const navigation = useNavigation();
    return (
        <>
            <header className="font-serif">
                <img src="./favicon.ico" className='w-12 absolute left-5 top-2' alt="" />
                <nav className="absolute flex flex-row top-3 left-20 w-[75vw] text-2xl">
                    <Link className="animateLink" to="/">Test [×]</Link>
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

export default function Layout() {
    const location = useLocation()
    const [style, setStyle] = useState(Regular)
    useEffect(() => {
        
    })
    return style
}
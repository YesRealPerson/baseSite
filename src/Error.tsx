import { useState, useEffect } from "react";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function ErrorPage() {
    const errorMessages = [
        "I'm so proud of this 404 page.",
        "If you keep refreshing this message will change.",
        "I like to drink black coffee, although I sometimes order lattes at cafes.",
        "I really like Frank Herbert's Dune series.",
        "If cigarettes didn't give people cancer I would probably be addicted.",
        "I'm allergic to bananas.",
        "I've spent way too long trying to come up with interesting 404 messages.",
        "I hate using any and all Google workspace products."
    ]
    const error = useRouteError();
    let status = "Error 500"
    let temp = "Internal server error"
    if (isRouteErrorResponse(error)) {
        status = "" + error.status
        temp = error.statusText
    }
    let index = -1
    let message: String;
    let setValue: Function;
    if (status === "404") {
        status = "Error 404"
        index = Math.floor(Math.random() * errorMessages.length);
        [message, setValue] = useState(errorMessages[index]);
        useEffect(() => {
            const refresh = (event: KeyboardEvent) => {
                if (event.key.toLowerCase() == 'r') {
                    event.preventDefault()
                    console.log("refresh")
                    index += 1 + Math.floor(Math.random() * (errorMessages.length - 1))
                    index = index % errorMessages.length
                    setValue(errorMessages[index])
                }
            }
            document.addEventListener('keydown', refresh)
            return () => {
                document.removeEventListener('keydown', refresh)
            }
        })
    } else {
        [message, setValue] = useState(temp)
    }

    return (
        <>
            <header className="font-serif">
                <img src="./favicon.ico" className='w-12 absolute left-5 top-2' alt="" />
                <nav className="absolute z-1 flex flex-row top-3 left-20 w-[75vw] text-[2vh]">
                    <Link className="animateLink" to="/">Home [×]</Link>
                    <Link className="animateLink" to="/pictures">Pictures [×]</Link>
                    <Link className="animateLink" to="/projects">Projects [×]</Link>
                </nav>
            </header>
            <main className="mt-20 m-5">
                <div className="flex fixed top-0 left-0 z-0 w-screen h-screen justify-center items-center">
                    <div className="text-center">
                        <h1 className="text-4xl">{status}</h1>
                        <br />
                        <p className="text-xl">{message}</p>
                    </div>
                </div>
            </main>
        </>
    );
}
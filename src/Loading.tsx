import { useNavigation } from "react-router-dom";
import HomeStatic from "./components/HomeStatic";
import Header from "./components/Header";

export default function Loading() {
    const navigation = useNavigation();

    return (
        <>
            <Header style={1}/>
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
import { Outlet, useNavigation } from "react-router-dom";
import "./components/loading.css"
import Header from "./components/Header";
import type { StyleProps } from "./components/Interfaces";

const styles = [
    {
        MainStyle: "mt-5 m-5",
        OutletStyle: ""
    },
    {
        MainStyle: "w-full flex justify-center absolute z-55 bg-black",
        OutletStyle: "max-w-[2000px] w-full bg-white"
    }
]

export default function Layout({ style }: StyleProps) {
    const navigation = useNavigation();
    return (
        <>
            <Header style={style} />
            <main className={styles[style].MainStyle}>
                <div className={
                    navigation.state === "loading" ? "fixed left-0 top-0 w-screen h-screen bgblur flex justify-center items-center" : "hidden"
                }>
                    <div className="text-white text-4xl flex flex-row justify-center">
                        <div className="loader"></div>
                    </div>
                </div>
                <div className={styles[style].OutletStyle}>
                    <Outlet />
                    <footer className="mb-10">
                        <hr className="mt-10 mb-3" />
                        <div className="flex flex-row justify-center items-center gap-5">
                            <a className="animateLink" href="mailto:contact@confluxes.net">contact</a>
                            {style == 0 ? "Default" : "Modern"}
                        </div>
                    </footer>
                </div>
            </main>
        </>
    )
}
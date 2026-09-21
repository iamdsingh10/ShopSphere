import type {ReactNode} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


interface MainLAyoutProps{
    children: React.ReactNode;
}

function MainLayout({ children }: MainLAyoutProps){
    return (
        <>
        <Navbar/>
        <main>
            {children}
        </main>
        <Footer/>
        </>
    )
}

export default MainLayout;
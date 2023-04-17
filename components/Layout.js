import Banner from "./Banner";
import Footer from "./Footer";
import NavBar from "./NavBar";


export default function Layout({children}) {
    return (
        <>
        <div>{children}</div>
        <Banner />
        <Footer />
        <NavBar />
        <style jsx>{`

        `}</style>
        </>
    )
}
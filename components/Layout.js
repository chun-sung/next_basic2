import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({children}) {
    return (
        <>
        <div>{children}</div>
        <NavBar />
        <Footer />
        <style jsx>{`

        `}</style>
        </>
    )
}
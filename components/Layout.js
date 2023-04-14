import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({children}) {
    return (
        <>
        <NavBar />
        <div>{children}</div>
        <Footer />
        <style jsx>{`

        `}</style>
        </>
    )
}
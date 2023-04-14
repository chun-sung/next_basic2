import Seo from "@/components/Seo";
import { useEffect, useState } from "react";

export default function Woman() {

    const [fade, setFade] = useState('');

    useEffect(() => {
        setFade('end')
        return () => setFade('');
    },[])
    
    return (
        <div className={"start " + fade}>
        <Seo title="woman | SuperStar" />
        <h1 className="text-3xl"><b>Woman Page</b></h1>
        <style jsx>{`

            `}</style>
        </div>
    )
}
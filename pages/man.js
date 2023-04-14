import Seo from "@/components/Seo";
import { useEffect, useState } from "react";

export default function Man() {

    const [fade, setFade] = useState('');

    useEffect(() => {
        // window.scrollTo(0,0)           // 최상단 이동 
        setFade('end')
        return () => setFade('')
    },[])

    return (

        <div className={"start + " + fade }>
            <Seo title='man | SuperStar' />
            <h1 className="text-2xl mt-[160px] lg:mt-56"><b>Man Page</b></h1>
            <style jsx>{`

            `}</style>
        </div>
    )

}
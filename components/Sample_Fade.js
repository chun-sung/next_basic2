import { useEffect, useState } from "react"

export default function Fade() {

    const [fade, setFade] = useState()

    useEffect(()=> {
        setFade('end')
        return () => setFade('')
    },[])
    
    return (

        <div className={'start ' + fade}>
            <style jsx>{`
            .start {
                        opacity: 0;
                        transform: fade;                        
                        transition: all 1s;
                    }
            .end {
                opacity: 1;
                transform: fade;
                transition: all 1s;
            }                    
            `}</style>
        </div>
    )
}
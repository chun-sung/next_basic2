import Seo from '@/components/Seo'
import { useEffect, useState } from 'react'

export default function Home() {

  const [fade, setFade] = useState();

  useEffect(() => {
    setFade('end')
    return () => setFade('')
  },[])

  return (
    <div className={'start ' + fade}>
      <Seo title='Home | SuperStar' />
      <div className="mainBg mt-9"></div>


















      <style jsx>{`    
      b {color: red;}  
      .mainBg {
            {/* border: 1px solid grey; */}
            width: 100%;
            height: 500px;
            background-image: url('/mainBg.png');
            background-size: cover;
            background-position: center;         
        }
        @media (max-width: 1024px) {
          .mainBg {
            height: 200px;     
                   
          }
        }    
      `}</style>
    </div>
  )
}

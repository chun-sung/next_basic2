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
      <div className="mainBg mt-[90px] lg:mt-[133px]"></div>
      <div className='bg-blue-800 h-96 text-center pt-10'>box</div>
      <div className='bg-blue-700 h-96 text-center pt-10'>box</div>
      <div className='bg-blue-600 h-96 text-center pt-10'>box</div>
      <div className='bg-blue-500 h-96 text-center pt-10'>box</div>
      <div className='bg-blue-400 h-96 text-center pt-10'>box</div>
      <div className='bg-blue-300 h-96 text-center pt-10'>box</div>
      <div className='bg-blue-200 h-96 text-center pt-10'>box</div>
      <div className='bg-blue-100 h-96 text-center pt-10'>box</div>
      <div className='bg-blue-50 h-96 text-center pt-10'>box</div>
21















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

import Seo from '@/components/Seo'
import Image from 'next/image';
import { useEffect, useState } from 'react'


export default function Home() {

  const [fade, setFade] = useState();

  useEffect(() => {
    setFade('end')
    return () => setFade('')
  },[])


  // pwa 설치 코드 (클릭시 installApp함수 호출후 설치 화면 팝업 됨)
  let deferredPrompt

  useEffect(() => {    
    window.addEventListener('beforeinstallprompt', e => {
        e.preventDefault()
        deferredPrompt = e

        return false;

    });
  
  })
  
  function installApp(){
      if(!deferredPrompt) {
          // alert(`이미 앱이 설치되어 있거나 앱을 설치할 수 없는 환경입니다.`)
          alert(`웹브라우저 새로고침후 로딩이 완료된 후 클릭해 보세요.`)
          return
      }
      deferredPrompt.prompt()
      // BeforeInstallPromptEvent.prompt()        
  }

  return (
    <div className={'start ' + fade}>           
      <Seo title='Home | SuperStar' />
      <div className="mainBg mt-[90px] lg:mt-[133px] relative">
        <Image className='pwa  rounded-full hover:border-[1px] hover:border-red-400 absolute bottom-[10px] right-[10px]' onClick={()=>{installApp()}} src={'/pwaInstalBtn.png'}  width={40} height={35} alt='pwa button' />
      </div>

      <div className='bg-blue-50 h-96 text-center pt-10'>box</div>
      <div className='bg-blue-100 h-96 text-center pt-10'>box</div>
      <div className='bg-blue-200 h-96 text-center pt-10'>box</div>
      <div className='bg-blue-300 h-96 text-center pt-10'>box</div>
      <div className='bg-blue-400 h-96 text-center pt-10'>box</div>
      <div className='bg-blue-500 h-96 text-center pt-10'>box</div>
      <div className='bg-blue-600 h-96 text-center pt-10'>box</div>
      <div className='bg-blue-700 h-96 text-center pt-10'>box</div>
      <div className='bg-blue-800 h-96 text-center pt-10'>box</div>
















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
            background-position: -100px 0px;            
          }
        }    
      `}</style>
    </div>
  )
}

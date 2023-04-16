import Image from "next/image";
import { useRouter } from "next/router";

export default function Card({shoes, i}) {

  let router = useRouter();  
       
  return (

        <div className="  md:w-72 lg:w-96 inline-block" >
            <Image className="cursor-pointer sm:w-[300px] md:w-[300px] lg:w-[400px]" onClick={()=> router.push(`/detail/${shoes[i].id}`)}
             src={"https://www.springstar.shop/img/shoes/shoes"+(i+1)+".jpg"} width={320} height={200} alt="shoes"/>
            <h4 className="text-center text-2xl m-3">{shoes[i].title}</h4>
            <p className="text-center mb-3">{shoes[i].content}</p>
        </div>
  )
}


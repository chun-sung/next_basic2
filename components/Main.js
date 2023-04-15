import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

export default function Main() {
    
    const [shoes, setShoes] = useState([]);
    // let [more , setMore] = useState(0)        // 상품 더보기 버튼 초기 값
    
    useEffect(() =>{
        axios.get('https://www.springstar.shop/shoes/items')
        .then((res)=> {
            setShoes(res.data)
        })
    },[])

    return ( 
        <>
            {/* 신발 상품 표시 */}
            <div className=''>
                <div className=' m-auto max-w-[300px] md:max-w-[600px] lg:max-w-[1200px]  flex flex-wrap gap-6 mt-10 mb-0'>
                    {
                        !shoes && <h4>Loading...</h4>                        
                    }
                    {                        
                        shoes?.map((a, i) => {
                            return <Card className="" shoes={shoes} i={i} key={i} />
                        }) 
                    }
                </div>
            <button className='block m-auto mt-10 mb-36 bg-red-300 rounded-md p-2 hover:bg-red-500' onClick={()=>{
                // ★ 리덕스 Toolkit 사용하지 않은 상태에서의 state 의 배열 데이터 값 변경
                // if(more == 0){
                    axios.get('https://www.springstar.shop/shoes/items2')
                    .then((res)=> {
                        if(shoes.length !== 9 ){
                            let copy = [...shoes, ...res.data];
                            setShoes(copy);
                        } else {
                            alert('가져올 상품이 없습니다.')
                        }                        
                    })
                // } 
            }}><b>상품더보기</b></button>                                 
            </div>
            
        </>
    )
}
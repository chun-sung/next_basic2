import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NavBar() {
    const router = useRouter()

    let [mMenu, setMmenu] = useState(false);
    
    return (
        <div className="">
            <div className="bg text-center text-5xl fixed top-0 w-full h-30 pt-2 lg:pt-20 pb-0 ">
                <Link className="" href='/'><b>StarMall</b></Link>                
                <span onClick={() => {
                    setMmenu(!mMenu)
                    }} 
                    className="lg:hidden absolute left-0 bottom-1 h-6 border-2 text-sm px-1 border-slate-300 w-12 bg-slate-600 text-white hover:bg-red-500 hover:cursor-pointer rounded-sm ml-1 ">Menu
                </span>
                <div className="bg2  mt-5 lg:mt-32">
                    <nav className={mMenu === false ? 'start2' : `start2 end2`}>
                        <div className="icon">
                        <Link onClick={() => { setMmenu(false)}} href={'/'}><Image width={45} height={45} src="/logo512.png" alt="logo"/></Link>
                        </div>
                        <div>
                            <ul>
                                <li><Link className='p-3 text-neutral-700' href="/man" onClick={() => { setMmenu(false)}}>남성용품</Link></li>
                                <li><Link className='p-3 text-neutral-700' href="/woman" onClick={() => { setMmenu(false)}}>여성용품</Link></li>
                                <li><Link className='p-3 text-neutral-700' href="/life" onClick={() => { setMmenu(false)}} >생활용품</Link></li>
                                <li><Link className='p-3 text-neutral-700' href="/cart" onClick={() => { setMmenu(false)}}>장바구니</Link></li>
                                <li><Link className='p-3 text-neutral-700' href="/coupon" onClick={() => { setMmenu(false)}}>쿠폰함</Link></li>
                                <li><Link className='p-3 text-neutral-700' href="/board" onClick={() => { setMmenu(false)}}>고객게시판</Link></li>
                                <li><Link className='p-3 text-neutral-700' href="/member" onClick={() => { setMmenu(false)}}>회원가입</Link></li>                
                            </ul>
                        </div>
                        <div className="logo">
                            <Link className='p-3 text-white' href="/login" onClick={() => {setMmenu(false)}}>login</Link>
                        </div>
                        <span onClick={()=> {
                        setMmenu(false);
                    }} className="btn-close bg-slate-600 hover:bg-red-500 lg:hidden block pt-0.5">X</span>
                    </nav>
                </div>
            </div>
            <hr className="hr border-grey-300 lg:border-hidden lg:mt-72" />
            <hr className="hr2" />




            <style jsx>{`
                .bg {
                    background-color: #FFE3E7;
                }
                .bg2 {
                    background-color: #5CBAB3;
                }

                nav {            
                    font-size: 18px;
                    display: flex;                
                    justify-content: space-between;
                    align-items: center;
                    width: 1200px;
                    height: 70px;
                    margin: 0 auto;                
                    margin-top: 20px;                 
                }                
                ul li {
                    display: inline-block;
                    padding: 5px;
                    margin-right: 20px;
                    {/* border: 1px solid grey; */}
                }
                li:hover {
                    background-color: rgba(0,0,0,0.06);
                    border-radius: 5px;
                }                
                link {
                    padding:10px;
                }
                link:hover {color: red;}
                .logo {       
                    width: 80px;         
                    padding: 5px;
                    border-radius: 5px;
                    color: red;
                }
                .logo:hover { background: rgba(0,0,0,0.06) }
                
                .mobileMenu {
                    position: absolute;
                    left: 0px;
                    top: 100px;
                }

{/* 반응형 */}

                @media (max-width: 1024px) {
                    .bg {padding-bottom: 36px}
                    nav {
                        width: 200px;
                        height: 320px;
                        background-color: #F2CDAC;                        
                        margin: 0;
                        top: 90px;       
                        {/* 왜 left: 는 적용이 안될까  */}
                        border: 1px solid rgba(230, 148, 148, 0.4);
                        border-radius: 5px;
                        font-size: 14px;
                        cursor: pointer;
                    }
                    ul { margin-left: 60px;}
                    ul li {
                        margin-top: 5px;
                    }
                    .logo {
                        position: absolute;
                        margin-left: 73px;
                        margin-top: 5px;
                    }
                    .icon { 
                        display: block;
                        width: 50px;
                        margin-left: 93px;
                        margin-top: 20px;
                        margin-bottom: 10px;
                    }
                    .hr {
                        display: none;                        
                    }
                    .hr2 {
                        margin-top: 75px;
                    } 
                     .btn-close {
                        position: absolute;                        
                        width: 20px;
                        height: 20px;
                        top: 5px;
                        right: 5px;
                        text-align: center;
                        border-radius: 3px;
                        border: 1px solid rgba(0, 0,0,0.3);                      
                        color: white;                       
                        font-size: 12px;  
                        cursor: pointer;                      
                    }

                    {/* 애니메이션 */}

                    .start2 {
                        opacity: 0;
                        display: block;
                        position: absolute;
                        transform: fade;
                        left: -200px;
                        transition: all 0.2s;
                    }
                    .end2 {
                        opacity: 1;
                        display: block;
                        position: absolute;
                        transform: fade;
                        left: -42px;
                        transition: all 0.3s;
                    }
                }

            `}</style>
        </div>
    )
}
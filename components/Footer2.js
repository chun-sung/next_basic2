import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {

    let router = useRouter();

    return (
        <footer className="bg-red-100">        
        <div className="text-center">
            <div className="footer__menu ">
                <div>
                    <h3>제품 소개</h3>
                    <ul>
                        <li><a href="#" onClick={()=>router.push('/man')}>남성용품</a></li>
                        <li><a href="#" onClick={()=>router.push('/woman')}>여성용품</a></li>
                        <li><a href="#" onClick={()=>router.push('/living')}>생활용품</a></li>
                        <li><a href="#" onClick={()=>router.push('/')}>Shoes</a></li>
                    </ul>
                </div>
                <div>
                    <h3>서비스센터</h3>
                    <ul>
                        <li><a href="#" onClick={()=>router.push('/board')}>불만 상담 코너</a></li>
                        <li><a href="#" onClick={()=>router.push('/board')}>고객은 원한다.</a></li>

                    </ul>
                </div>
                <div>
                    <h3>맴버쉽 운영</h3>
                    <ul>
                        <li><a href="#" onClick={()=>router.push('/member')}>회원가입</a></li>
                        <li><a href="#" onClick={()=>router.push('/mypage')}>MyPage</a></li>
                        <li><a href="#" onClick={()=>router.push('/cupon')}>쿠폰</a></li>
                  
                    </ul>
                </div>
                <div>
                    <h3>전국 지점</h3>
                    <ul>
                        <li><Link href="/">대전</Link></li>
                        <li><Link href="/">대구</Link></li>
                        <li><Link href="/">서울</Link></li>
                        <li><Link href="/">강원도</Link></li>
                        <li><Link href="/">제주도</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>제휴사</h3>
                    <ul>
                        <li><Link href="/">삼성전자</Link></li>
                        <li><Link href="/">현대쇼핑</Link></li>
                        <li><Link href="/">네셔널지오그라피</Link></li>                    
                    </ul>
                </div>
                <div>
                    <h3>비전</h3>
                    <ul>
                        <li><Link href="/">고객을 고객답게</Link></li>
                        <li><Link href="/">제품을 신선하게</Link></li>
                        <li><Link href="/">신기술 적용</Link></li>                        
                    </ul>
                </div>
            </div>
            <div className="footer__right">
                2022 SpringStar Portfolio<br />
                All rights reserved.
            </div>            
        </div>    
        <style jsx>{`

            .footer__menu {
                display: flex;
            }
            .footer__right {
                position: fixed;
                padding: 10px;
                bottom: 0px;                
                color: white;
                width: 100%;
                text-align: center;
                background: #6aa54f;
            }
            @media(max-width:1024px) {
                footer {
                    {/* margin-top: 400px; */}
                }
                .footer__menu {
                    display: block;
                    margin: 0 auto;
                }
                .footer__menu div, h3{
                    border: 1px solid grey;
                    
                }
            }
        `}</style>            
    </footer>    
    )
}


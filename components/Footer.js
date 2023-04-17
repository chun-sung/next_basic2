import Link from "next/link";

function Footer() {

    return (
        <footer id="footerType" className="footer__wrap nexon section">
        <h2 className="blind">푸터 영역</h2>
        <div className="footer__inner container">
            <div className="footer__menu">
                <div>
                    <h3>제품 소개</h3>
                    <ul className="">
                        <li><Link href="/man">남성용품</Link></li>
                        <li><Link href="/woman">여성용품</Link></li>
                        <li><Link href="/living">생활용품</Link></li>
                        <li><Link href="/">Shoes</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>서비스센터</h3>
                    <ul>
                        <li><Link href="/board">불만 상담 코너</Link></li>
                        <li><Link href="/board">고객은 원한다.</Link></li>

                    </ul>
                </div>
                <div>
                    <h3>맴버쉽 운영</h3>
                    <ul>
                        <li><Link href="/member#">회원가입</Link></li>
                        <li><Link href="membership">MyPage</Link></li>
                        <li><Link href="#">쿠폰</Link></li>
                  
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
        <div className="topBtn" onClick={()=> { window.scroll(0, 0); }}></div>                          
    </footer>    
    )
}

export default Footer;
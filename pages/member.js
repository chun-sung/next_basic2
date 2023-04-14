import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Seo from "@/components/Seo";

export default function Member() {

    let [user_id, setUser_id] = useState('');
    let [psword, setPsword] = useState('');
    let [psword2, setPsword2] = useState('');
    let [nickName, setNickname] = useState('');
    let [fade, setFade] = useState('');
    let member = { user_id, psword, nickName };
    let router = useRouter();

    useEffect(() => {
        setFade('end');
        return () => setFade('');
    },[])

    function ajax(e) {
        e.preventDefault()
        psword !== psword2 ? alert('비밀번호가 일치하지 않습니다.') 
        :axios.post("https://www.springstar.shop/memberShip", { member }).then((res) => {
            if (res.data.msg === "성공") {
                console.log(res.data.msg);
                alert("회원가입이 완료되었습니다.");
                router.push('/login');
            } else if (res.data.msg === "ID") {
                alert("아이디는 최소 5자 이상이어야 합니다.");
            } else if (res.data.msg === "PW") {
                alert("비밀번호는 최소 5자 이상이어야 합니다.");
            } else if (res.data.msg === "nickName") {
                alert("닉네임은 최소 2자 이상이어야 합니다.");
            } else {
                alert("이미 사용중인 아이디 입니다.");                
            }
        });
    }

    return (
        <div className={"start " + fade}>
        <Seo title='member | SuperStar' />
        <h1 className="text-2xl mt-[160px] lg:mt-56"><b>회원가입</b></h1>
        <div className="member">
            <input className="border-2 outline-red-400" onChange={(e)=>{ setUser_id(e.target.value) }} type="text" placeholder="Email or ID" /><br />
            <input className="border-2 outline-red-400" onChange={(e)=>{ setPsword(e.target.value) }} type="password" placeholder="Password" /><br />
            <input className="border-2 outline-red-400" onChange={(e)=>{ setPsword2(e.target.value) }}  type="password" placeholder="Password Check" /><br />
            <input className="border-2 outline-red-400" onChange={(e)=>{ setNickname(e.target.value) }}  type="text" placeholder="Nick-name" />
        </div>
        <div className="btnGroup">
            <Link href='/' onClick={ajax} className=''><button className="btn">가입</button></Link>
            <Link href='/' className=''><button className="btn">홈</button></Link>           
        </div>

        <style jsx>{`
        .member {
            width: 270px;
            margin: 0 auto;

        }   
        .member input {
            width: 250px;
            padding: 12px;
            margin-bottom: 5px;
        } 
        .btnGroup {            
            width: 165px;
            margin: 0 auto;
            margin-top: 20px;
        }
        `}</style>
        </div>
    )
}
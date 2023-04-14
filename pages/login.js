import Seo from "@/components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Login() {

    let [user_id, setId] = useState('')
    let [password, setPw] = useState('')
    let router = useRouter();

    const [fade, setFade] = useState('');

    useEffect(() => {
        // window.scrollTo(0,0)           // 최상단 이동 
        setFade('end')
        return () => setFade('')
    },[])



    function ajax(e) {

        e.preventDefault()
        user_id.length == 0 || password.length == 0 
        ? alert('ID 및 PW 를 입력해 주세요') 
        : axios.post("https://www.springstar.shop/login2", { user_id, password }).then((res) => {
            
            if (res.data.msg == "성공") {                
                alert(`로그인 ${res.data.msg}`);
                // localStorage.setItem('springStar_nick', res.data.nickName);
                // localStorage.setItem('springStar', res.data.jwttoken);
                // console.log(res.data)
                // dispatch(login(res.data))
                //{msg: '성공', jwttoken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrTmFtZ…hciJ9.QM5-0nCExpxWV6S_Lc4XBi90HIABZncOf31rN-SgcmA',
                // nickName: '춘성', user_id: 'choonsung'}
                router.push("/");
            } else {
                alert(`로그인 ${res.data.msg}`);
            }
        });
    }

    function loginEnterBtn() {

        // e.preventDefault()
        user_id.length == 0 || password.length == 0 
        ? alert('ID 및 PW 를 입력해 주세요') 
        : axios.post("https://www.springstar.shop/login2", { user_id, password }).then((res) => {
            
            if (res.data.msg == "성공") {                
                alert(`로그인 ${res.data.msg}`);
                // localStorage.setItem('springStar_nick', res.data.nickName);
                // localStorage.setItem('springStar', res.data.jwttoken);
                // console.log(res.data)
                // dispatch(login(res.data))
                //{msg: '성공', jwttoken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrTmFtZ…hciJ9.QM5-0nCExpxWV6S_Lc4XBi90HIABZncOf31rN-SgcmA',
                // nickName: '춘성', user_id: 'choonsung'}
                router.push("/");
            } else {
                alert(`로그인 ${res.data.msg}`);
            }
        });
    }

    return (
        <div className={"start " + fade}>
        <Seo title="Login | SuperStar" />
        <h1 className="text-2xl"><b>Login</b></h1>
        <div className="member">
            <input className="border-2 outline-red-400" onChange={(e)=>{setId(e.target.value)}} type="text" placeholder="Email or ID" /><br />
            <input className="border-2 outline-red-400 outline-" onKeyUp={() => {if(window.event.keyCode==13){loginEnterBtn()}}} onChange={(e)=>{setPw(e.target.value)}}  type="password" placeholder="Password" /><br />
        </div>
        <div className="btnGroup">           
            <Link className="" onClick={ajax} href='/'><button className="btn">확인</button></Link>           
            <Link className="" href='/'><button className="btn">홈</button></Link>          
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
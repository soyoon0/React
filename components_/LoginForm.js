import React from 'react';
import { Link } from 'react-router-dom'
import '../css/new.css'

const LoginForm=(props)=>{

    const _changeMode = props.changeMode;
    const _userData = props.userData;
    const _setUserName = props.setUserName;

    const login_btn =(e)=>{
        e.preventDefault();
        const id_element = document.getElementById('id_val');
        const pass_element = document.getElementById('password_val')
        if(_userData.id === id_element.value && _userData.password === pass_element.value) {
            alert('로그인에 성공했습니다.');
            _changeMode(e);
            _setUserName(_userData.name);
        }else{
            alert('로그인에 실패했습니다.');
        }
        console.log(_userData);
    }

    return (
        <section className="main">
            <div className="m_login">
            <h3><span><img src={require("../img/main/daisy_logo3_.png")} alt="" />
            </span>LOGIN<span><img src={require("../img/main/daisy_logo3_.png")} alt="" /></span></h3>
            <div className="log_box">
                <form  onSubmit={(e)=>{login_btn(e)}}>
                <div className="in_ty1">
                    <span><img src={require("../img/main/m_log_i3.png")} alt="" /></span>
                    <input type="text" id="id_val" name="id" placeholder="ID" />
                </div>
                <div  className="in_ty1">
                    <span className="ic_2">
                        <img src={require("../img/main/m_log_i2.png")} alt="" />
                    </span>
                    <input type="password" id="password_val" placeholder="비밀번호" />
                </div>
                <ul className="af">
                    <li><Link to={'/register_check'}>회원가입</Link></li>
                    <li className="pwr_b"><a href="#n">비밀번호 재설정</a></li>
                </ul>
                <button className="s_bt" type="submit">로그인</button>
                </form>
            </div>
            </div>
        </section>
    );
    
}

export default LoginForm;
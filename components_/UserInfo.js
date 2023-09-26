import React, {} from 'react';
import { throttle } from "lodash";
import '../css/new.css'

const UserInfo=(props)=>{

    const _userData = props.userData;

    const throttleFunc = throttle(() => {
      console.log("Throttle API Call");
    }, 1000);

    return (
      <div id='User_Info'>
        <div id='user_info'>
          <h1 className='Info'>사용자 정보</h1>
          <div className='profile'><img src={require("../img/sub/profile2.png")} alt=""/></div>
          <p className='user_name'>이름 : <span>{_userData.name}</span></p>
          <p className='user_email'>email : <span>{_userData.email}</span></p>
          <p className='user_phone'>phone : <span>{_userData.phone}</span></p>
        </div>
        <div id='search'>
          <h2>내 게시글 찾기</h2> 
          <input type="text" onChange={throttleFunc} />
          <button type="submit">검색</button>
        </div>
      </div>
    )
  
}

export default UserInfo;
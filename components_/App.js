import React, {useState} from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import '../css/new.css'
import HeaderAdmin from './Header/Header admin';
import Footer from './Footer/Footer';
import LoginForm from './LoginForm';
import UserInfo from './UserInfo';
import Register from './Register';

const App=()=>{
  
    const [userName, setUserName] = useState('');

    const changeMode=(e)=>{
      e.preventDefault();
      navigate('/UserApproval');
    }

    const userData={
      id: 'soyooni',
      password: '0000',
      name: '이소윤',
      email: 'soyooni@google.com',
      phone: '010-0000-0000'
    }

    const navigate = useNavigate();

    return (
      <div className="App">
        <HeaderAdmin name={userData.name} userName={userName}/> 
        <Routes>
          <Route path='/LoginCheck' element={<LoginForm userData={userData} changeMode={changeMode} setUserName={setUserName} />} />
          <Route path='/UserApproval' element={<UserInfo userName={userName} navigate={navigate} userData={userData}/>} />
          <Route path='/register_check' element={<Register userName={userName} navigate={navigate} />} />
        </Routes>
        <Footer/>
      </div>
    );
  
}

export default App;
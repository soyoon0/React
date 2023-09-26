import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/new.css'

const Header=(props)=>{

    const _userName = props.userName;

    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkLoginStatus = (e) => {
        if (!isLoggedIn && !_userName) {
            e.preventDefault();
            alert('로그인이 필요합니다.');
            navigate('/LoginCheck');
        }
    };

        return(
            <header className="gnb_box">
                <div className="hd_top">
                    <div className="top_wrap ct1 af">
                    <ul className="hd_left af">
                        <li className="my1"><b>내정보</b>
                        </li>
                        <li  className="my2"><b><span>1</span>알림</b>
                        </li>
                    </ul>
                    <div className="hd_right">
                        <p>{ _userName ? <span>'{_userName}'</span> : null }님 반갑습니다.</p>
                    </div>
                    </div>
                </div>
                <div className="h_nav ct1 af">
                    <div className="logo">
                        <Link to={'/LoginCheck'}><img src={require("../../img/sub/daisy_logo2.jpg")} alt="logo"/></Link>
                    </div>
                    <nav className="gnb gnb_admin">
                    <ul className="af">
                        <li className="menulist">
                            <Link to={'/UserApproval'} onClick={isLoggedIn ? null : checkLoginStatus}>사용자 관리</Link>
                        </li>
                        <li className="menulist">
                            <Link to={'/AdminResearchProject'}>Research Projects 관리</Link>
                        </li>
                        <li className="menulist">
                            <Link to={'/AdminSoftwareList'}>Software Tools 관리</Link>
                        </li>
                        <li className="menulist">
                            <Link to={'/AdminDataSourceList'}>Data Sources 관리</Link>
                        </li>
                        {/* 드롭다운 이벤트 */}
                        <li  className="menulist"><Link to={'/floatPopulationList'}>유동인구 조회</Link>
                        <ul className="gn_2">
                            <li><Link to={'/community/notice'}>공지사항</Link></li>
                        </ul>
                        </li>
                        <li  className="menulist">
                            <Link to={'/SubCodeManage'}>Sub code 관리</Link>
                        </li>
                    </ul>
                    </nav>
                </div>
            </header>
        );
    
}

export default Header;
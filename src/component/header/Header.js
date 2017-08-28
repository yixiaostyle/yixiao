import React from 'react';
import './Header.css';
class Header extends React.Component{
	render(){
		return(<div className="header">
			<div>登录/注册</div>
			<div><h1>巨融财</h1></div>
			<div>刷新</div>
		</div>)
	}
}
export default Header;

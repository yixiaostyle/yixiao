import React from 'react';
import './Footer.css';
import More from '../more/More';
import Page from '../page/Page';
import Licai from '../licai/Licai';
import {BrowserRouter as Router,Route,Link,Redirect} from "react-router-dom";
class Footer extends React.Component{
	change(index){
		this.refs.ab.style.backgroundColor="#fff";
		this.refs.cd.style.backgroundColor="#fff";
		this.refs.ef.style.backgroundColor="#fff";
		switch(index){
			case 0:
				this.refs.ab.style.backgroundColor="red";
				break;
			case 1:
				this.refs.cd.style.backgroundColor="red";
				break;
			case 2:
				this.refs.ef.style.backgroundColor="red";
				break;
				
		}
	}
	render(){
		return(
			<Router>
				<div>
					<Route exact path='/' component={Page}></Route>
					<Route path="/goods" component={More}></Route>
					<Route path="/Licai" component={Licai}></Route>
					<Redirect to="/" />
					<div className="footer">
						<div onClick={this.change.bind(this,0)}><Link to="/"><img ref="ab" src="./image/shouye.png" /><span>首页</span></Link></div>
						<div><img src="./image/wode.png" /><span>我的</span></div>
						<div onClick={this.change.bind(this,1)}><Link to="Licai"><img ref="cd" src="./image/licai.png" /><span>理财</span></Link></div>
						<div onClick={this.change.bind(this,2)}><Link to="goods"><img ref="ef" src="./image/gengduo.png" /><span>更多</span></Link></div>
					</div>
				</div>
			</Router>
		)
	}
}
export default Footer;

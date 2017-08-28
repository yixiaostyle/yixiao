import React from 'react';
import './Center.css';
import Banner from '../banner/Banner';

import {connect} from 'react-redux';
class Center extends React.Component{
	render(){
		return(<div>
			<Banner />
			<div className="center">
			<div className="tab">
				<div><img src="./image/tab1.jpg" /><span>推荐好友</span></div>
				<div><img src="./image/tab2.jpg" /><span>我的佣金</span></div>
				<div><img src="./image/tab3.jpg" /><span>消费金融</span></div>
				<div><img src="./image/tab4.jpg" /><span>优先理财</span></div>
			</div>
			<div className="ding">
				<span>新手投资注册</span>
				<span>{this.props.info}%</span>
				<img src="./image/dinggo.jpg" onClick={this.props.handleClick}/>
			</div>
		</div>
		</div>)
	}
}
function mapStateToProps(state){
	return{
		info:state.info
	}
}
function mapDispatchToProps(dispatch){
	return{
	handleClick:()=>dispatch({type:'change'})
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Center);
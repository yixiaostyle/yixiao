import React from 'react';
import ReactSwipe from 'react-swipe';
import './Banner.css';
class Banner extends React.Component{
	constructor(){
		super();
		this.state={indexs:0}
	}
	render(){
		let self=this;
		let opt={
			auto:1500,
			callback:function(index){
				self.setState({indexs:index});
			}
		}
		return(<div>
			<ReactSwipe className="carousel" swipeOptions={opt}>
			<div><img src="./image/banner.jpg" /></div>
			<div><img src="./image/bannerpink.jpg" /></div>
			<div><img src="./image/bannerblue.jpg" /></div>
		</ReactSwipe></div>)
	}
}
export default Banner;
import React from 'react';
import './More.css';
class More extends React.Component{
	render(){
		return(<div>
			<div className="headers">
				<h2>更多</h2>
				<span>刷新</span>
			</div>
			<div className="gengduo">
				<div>最新活动</div>
				<div>平台公告</div>
				<div>关于我们</div>
				<div>帮助中心</div>
				<div>客服电话</div>
				<div>官方QQ群</div>
				<div>检查更新</div>
				<div>加入我们</div>
				<button>安全退出</button>
			</div>
		</div>)
	}
}
export default More;
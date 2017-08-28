import React from 'react';
import './Licai.css';
class Licai extends React.Component{
	render(){
		return(<div className="licai">
			<div className="headers">
				<h2>更多</h2>
				<span>刷新</span>
			</div>
			<div className="dates">
				<img src="./image/zhizhen.jpg"/>
				<div className="tab">
					<p><img src="./image/jin.jpg"/>起投金额<span>1.000元</span></p>
					<p><img src="./image/week.jpg"/>锁定日期<span>6~18个月</span></p>
				</div>
			</div>
			<div className="list">
				<h5>
					<span>预计年化率(%)</span>
					<span>锁定期限</span>
				</h5>
				<p>
					<span>7.99</span>
					<span>6<ff>个月</ff></span>
				</p>
				<button>立即加入</button>
			</div>
		</div>)
	}
}
export default Licai;
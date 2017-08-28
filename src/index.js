import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './component/footer/Footer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from './component/center/reducer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={createStore(reducer)}>
		<Footer />
	</Provider>, document.getElementById('root'));
registerServiceWorker();

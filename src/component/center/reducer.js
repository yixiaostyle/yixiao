export function reducer(state={info:0},action){
	let value=state.info;
	if(action.type=="change"){
		return {info:++value};
	}else{
		return state;
	}
	
}


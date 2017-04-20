import React from 'react';

class InputFrom extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			data : "type Someting"
		}

		this.updateState = this.updateState.bind(this)
	}



		updateState(e) {
			this.setState({data:e.target.value});
		}
		



	render(){
		return(
			<div className = "container">
				<div className = "row" >
			<h1>
				Editor
			</h1>

				<div className="col-sm-6" ><textarea type="text" value = {this.state.data} onChange = {this.updateState} ></textarea></div>
				<div className="col-sm-6" dangerouslySetInnerHTML = {{__html:this.state.data}}></div>
			
			</div>
			</div>
			
		)
	}
}

export default InputFrom;
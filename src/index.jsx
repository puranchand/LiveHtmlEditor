import React from 'react';
import ReactDOM from 'react-dom';
import YourComponent from './YourComponent';
import InputFrom from './components/InputFrom';
import Webpage from './components/webpage';




 class App extends React.Component{
 	render(){
 		return(

 			<div>
 				<Webpage />
 				<InputFrom />
 				
 			</div>

 			)
 	}
 }


ReactDOM.render(<App />,document.getElementById('app'));
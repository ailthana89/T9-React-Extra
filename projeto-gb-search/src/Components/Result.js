// import React, {Component} from 'react';

// class Result extends Component{
//     constructor (props){
//         super(props);
//         this.state = {value: ''};

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }

//     handleSubmit(event) {
//         console.log('Respostas:' + this.state.value);
//         event.preventDefault();
//     }

//       render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     <input type='text' value={this.state.value} onChange={this.handle}/>
//                 </label>
//                      <button type='submit' value='submit'/>
//             </form>
                    
//         )
//     }
// }
    


// export default Result;
import React, {Component} from 'react';
import './SearchBar.css'


class SearchBar extends Component {
        constructor (props){
            super(props);
            this.state = {value: ''};
            this.state = {currentText: ''};
    
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
    
        handleChange(event) {
            this.setState({value: event.target.value});
        }
    
        handleSubmit(event) {
           this.setState({currentText: this.state.value});
            event.preventDefault();
        } 

        render (){
        return(
            <div className="searchbar-main">
                <form onSubmit={this.handleSubmit}>
                    <label>
                    <input 
                    className="input-main" 
                    placeholder="Digite um usuário para consultar seus reporitórios" 
                    type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange} />
                    </label>
                    <button 
                    type="submit" 
                    value="submit"
                    onClick={ () => (this.state.currentText)}
                    >OK</button>
                    
                    <p>{this.state.currentText}</p>
                    
                </form>
               
            </div>
        )
    }
}

export default SearchBar;
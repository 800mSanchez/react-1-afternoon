import React, {Component}  from "react";

class FilterObject extends Component {
    constructor(){
        super()
        this.state = {
            avengers: [
                {
                  name: 'Iron Man',
                  title: 'Billionaire/Playboy/Philanthropist',
                  age: 30
                },
                {
                  name: 'Thor',
                  age: 28,
                  hairColor: 'Blonde'
                },
                {
                  name: 'Captain America',
                  title: 'The First Avenger',
                }
              ],
              filteredAvengers: [],
              userInput: ""
    }
}

    handleChange(val) {
        this.setState({ userInput: val})
}

    filterAvengers(prop) {
        let avengers = this.state.avengers;
        let filteredAvengers = [];
    
        for ( let i = 0; i < avengers.length; i++ ) {
          if ( avengers[i].hasOwnProperty(prop) ) {
            filteredAvengers.push(avengers[i]);
          }
        } 
    

    this.setState({ filteredAvengers: filteredAvengers })
  }


    render(){
        return (
            <div className = "puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className = "puzzleText"> Original: { JSON.stringify(this.state.avengers, null, 10) } </span>
                <input className = "inputLine" onChange = {(e) => this.handleChange(e.target.value) }/>
                <button className = "confirmationButton" onClick ={() => {this.filterAvengers(this.state.userInput) }}>Split</button>
                <span className = "resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredAvengers, null, 10) } </span>
            </div> 
        )
    }
}

export default FilterObject
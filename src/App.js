import React, { Component } from 'react';
import data from './data/data';
import Nameslist from './components/nameslist'
import Credit from './components/Credit'
import Search from './components/search'
import Shortlist from './components/shortlist'

class App extends Component {
//constructor to provide the initial values to the variables
constructor(props){
  super(props);
  this.state = {
    filterText: '',
    favourites:[]              //array that stores the names of the favourite names;initially empty
  }
}

filterUpdate(value){
  this.setState({
    filterText: value         //function to get the value of the text entered from text box
  })
}

addFavourite(id){
  const list = this.state.favourites.concat([id])
  this.setState({                                   //add the names to the array of favourite list
    favourites: list
  })
}

deleteFavourite(id){
  const { favourites } = this.state
  const newlist = [
    ...favourites.slice(0, id),                  //remove a name from the array..this slices the id which is
    ...favourites.slice(id + 1)                  //is clicked and the remaining list is kept in newlist
  ]
  this.setState({
    favourites: newlist
  })
}
  render() {
    return(
    <div>
    <Search
    filterText={this.state.filterText}
    filterUpdate={this.filterUpdate.bind(this)}
    />
    <main>
    <Shortlist
    favourites={this.state.favourites}
    data={data}
    deleteFavourite={this.deleteFavourite.bind(this)}
    />
    <Nameslist data={data}
    filterText={this.state.filterText}
    addFavourite={this.addFavourite.bind(this)}
    />
    <Credit />
    </main>
    </div>
  )
  }
}

export default App;

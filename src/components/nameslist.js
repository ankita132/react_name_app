import React, { Component } from 'react'

class  Nameslist extends Component{
  render(){
      const { data ,filterText, addFavourite } = this.props;

      const Nameslist = data
      .filter(name => {
      //remove names that do not match current filter text
      return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
      })
      .map(name => {
        return (
          <li key={name.id} className={name.sex}
          onClick={() => addFavourite(name.id)}
          >{name.name}</li>
        )
      })
      return (
        <div>
          <ul>
        {Nameslist}
          </ul>
          </div>
      );
  }
}

export default Nameslist;

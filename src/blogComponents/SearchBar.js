import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.sendSearchString = this.sendSearchString.bind(this);
    }
     sendSearchString(){
         if(document.getElementById("searchBar").value != ""){
             var newSearchString= document.getElementById("searchBar").value;
             this.props.sendSearchString(newSearchString);
            // this.makeSearchForSearchString();
         }
    }
     makeSearchForSearchString(){
         //here we request for available titles on the given searchString
    }

  render() {


    return (
        <div>
            <input id="searchBar" type="text" name="search" placeholder="Search.."/>
            <button onClick = {this.sendSearchString}>Search</button>

        </div>
    );
  }
}

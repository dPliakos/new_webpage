import React from 'react';
import BlogPost from './blogpost.js';
import {Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: ''
        };
        this.receiveSearchString = this.receiveSearchString.bind(this);

    }

    receiveSearchString(newSearch) {
        this.setState({searchString: newSearch});
        this.makeTitleSearchRequest();
    }

    makeTitleSearchRequest() {
        for (var i = 0; i < 5; i++) {
            //to make component of title... so we append such components with
            //received titles
            var node = document.createElement("button");
            node.className = "resultTitle";
            node.innerHTML = "THIS IS A TITLE AND ITS A TITLE" + i;
            node.addEventListener("click", this.makePostSearchRequest);
            document.getElementById("box3").appendChild(node);
        }

    }
    makePostSearchRequest(){
     //make new request of the clicked title

    //receive Post and render
    console.log("REnderpost");
      ReactDOM.render(<Post /> ,document.getElementById("box3") );
    }


    renderPost(){

  }

    render() {

        return (<div className="myContainer">

            <div className="box box1"><SearchBar sendSearchString={this.receiveSearchString}/> {this.state.searchString}
            </div>
            <div className="box box2 ">
                <h4>Search By tag</h4><br/>
                <LeftTagsPanel/>
            </div>
            <div className="box box3" id="box3">
                <h3>Results</h3>
            </div>

        </div>);
    }
}

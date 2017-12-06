import React from 'react';

export default class LeftTagsPanel extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
     function availableTagClicked(ev){
         console.log("available");
         // ev.currentTarget.removeEventListener("click",availableTagClicked);
          var node = ev.target.cloneNode(true);
          ev.target.remove();
          console.log(node);
          node.removeEventListener("click",availableTagClicked);
          node.addEventListener("click", selectedTagClicked);
          node.className ="selectedTagButton";

          document.getElementById("selectedTagsBoxId").appendChild(node);

      }
      function selectedTagClicked(ev){
          console.log("fixed?");
          var node = ev.target.cloneNode(true);
          ev.target.remove();
          node.removeEventListener("click",selectedTagClicked);
          node.addEventListener("click", availableTagClicked);
          node.className ="availableTagButton";
           document.getElementById("availableTagsBoxId").appendChild(node);
      }

    return (
        <div className="tagsBox ">
            <div className="availableTagsBox" id="availableTagsBoxId">
                <button className="availableTagButton" onClick={availableTagClicked}>Machine Learning</button>
                <button className="availableTagButton" onClick={availableTagClicked}>Networking</button>
                <button className="availableTagButton" onClick={availableTagClicked}>Arduino</button>
                <button className="availableTagButton" onClick={availableTagClicked}>Web</button>
                <button className="availableTagButton" onClick={availableTagClicked}>Python</button>
                <button className="availableTagButton" onClick={availableTagClicked}>Workshop</button>
                <button className="availableTagButton" onClick={availableTagClicked}>Presentation</button>
                <button className="availableTagButton" onClick={availableTagClicked}>Develepment</button>
                <button className="availableTagButton" onClick={availableTagClicked}>Backend</button>
                <button className="availableTagButton" onClick={availableTagClicked}>Machine Learning</button>
                <button className="availableTagButton" onClick={availableTagClicked}>Networking</button>
                <button className="availableTagButton" onClick={availableTagClicked}>Arduino</button>
                <button className="availableTagButton" onClick={availableTagClicked}>Web</button>
                <button className="availableTagButton" onClick={availableTagClicked}>Python</button>
                <button className="availableTagButton" onClick={availableTagClicked}>Workshop</button>
                <button className="availableTagButton" onClick={availableTagClicked}>Presentation</button>
                <button className="availableTagButton" onClick={availableTagClicked}>Develepment</button>
                <button className="availableTagButton" onClick={availableTagClicked}>Backend</button>
            </div>
            <hr className="tagsSeparator"/>
            <div className="selectedTagsBox" id="selectedTagsBoxId">

            </div>
        </div>
    );
  }
}

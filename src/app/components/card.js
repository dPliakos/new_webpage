import React from 'react';

class Card extends React.Component {
  render() {

    const title = this.props.title || '';
    let body = '';
    if (this.props.body) {
      if (this.props.body instanceof Array) {
        body = this.props.body.map((paragrpaph, i)=>{
          return <div key={i} className="card__body-item"> {paragrpaph} </div>;
        });
      } else {
        body = this.props.body;
      }
    }

    return (
      <div className="card">
        <div className="card__header">
          <div className="card__title">
            {title}
          </div>
        </div>
        <div className="card__body">
          {body}
        </div>
      </div>
    );
  }
}

export default Card;

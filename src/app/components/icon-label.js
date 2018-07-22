import React from 'react';

class IconLabel extends React.Component {


  render() {

    const icon = this.props.icon || '';
    const label = this.props.label;

    const iconElement = <span className={`icon-label__icon fas fa-${icon}`}></span>;
    const labelElement = <div className="icon-label__label"> {label} </div>;

    let body;
    if (this.props.url) {
      body = (
        <a href={this.props.url} className="icon-label__url">
          {iconElement}
          {labelElement}
        </a>
      );
    } else {
      body = <div>
        {iconElement}
        {labelElement}
      </div>
    }

    return (
      <div className="icon-label" >
        {body}
      </div>
    );
  }
}

export default IconLabel;

import React from 'react';

class ExpandibleCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false;
    }
  }

  render() {
    return (
      <div> Hello World </div>
    );
  }
}

export default ExpandibleCard;

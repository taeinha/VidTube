import React from 'react';

class Load extends React.Component {

  render() {
    const { load } = this.props;
    
    if (load) {
      return (
        <div className="loading-bar">
        </div>
      );
    } else {
      return null;
    }
  }
};

export default Load;
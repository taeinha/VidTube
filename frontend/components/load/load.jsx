import React from 'react';

class Load extends React.Component {

  render() {
    const { show, color } = this.props;
    
    const barStyle = {
      background: color
    };

    if (show) {
      return (
        <div className="loading-bar" style={barStyle}>
        </div>
      );
    } else {
      return null;
    }
  }
};

export default Load;
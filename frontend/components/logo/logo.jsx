import React from 'react';
import { Link } from 'react-router-dom';

const VidtubeLogo = () => {
  return (
    <Link to="/">
      <img src={window.vidtube} className="vidtube-logo pointer" />
    </Link>
  )
};

export default VidtubeLogo;
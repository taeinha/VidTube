import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currentUser, logoutUser } = this.props;

    const renderAuthButtons = currentUser ? (
      <div>
        <p>Hello {currentUser.username}</p>
        <button onClick={logoutUser}>Log Out</button>
      </div>
    ) : (
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    )
    return (
      <nav className="nav-bar-container">
        {renderAuthButtons}
      </nav>
    );
  }
}

export default NavBar;
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
        <Link to="/login">Sign In</Link>
      </div>
    )
    return (
      <>
        <header className="main-nav-container">
          <nav className="left-nav">
            <img src={window.hamburgerIcon} className="small-img convert-gray" />
            <div>
              <img src={window.youtubeIcon} className="youtube-logo" />
            </div>
          </nav>
          <nav className="center-nav">
            <input type="search" />
          </nav>
          <nav className="right-nav">
            <img src={window.addVideoIcon} className="convert-gray"/>
            <img src={window.appsIcon} className="small-img convert-gray"/>
            <img src={window.notificationIcon} className="small-img convert-gray"/>
            <img src={window.mochiIcon} className="profile-picture"/>
          </nav>
        </header>
        {renderAuthButtons}
      </>
    );
  }
}

export default NavBar;
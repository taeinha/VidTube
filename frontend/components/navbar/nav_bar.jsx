import React from 'react';
import { Link } from 'react-router-dom';
import { throws } from 'assert';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown(e) {
    this.setState({showDropdown: !this.state.showDropdown});
  }

  render() {
    const { currentUser, logoutUser } = this.props;

    const gearDropDown = this.state.showDropdown ? (
      <ul className="gearDropDown">
        <li>Hello {currentUser.username}</li>
        <li><button onMouseDown={logoutUser}>Log Out</button></li>
      </ul>
    ) : null;
    return (
      <>
        <header className="main-nav-container">
          <nav className="left-nav">
            <img src={window.hamburgerIcon} className="small-img convert-gray" />
            <div>
              <img src={window.vidtube} className="vidtube-logo" />
            </div>
          </nav>
          <nav className="center-nav">
            <input type="search" />
          </nav>
          <nav className="right-nav">
            <img src={window.addVideoIcon} className="convert-gray"/>
            {/* <img src={window.appsIcon} className="small-img convert-gray"/>
            <img src={window.notificationIcon} className="small-img convert-gray"/> */}
            {currentUser ? 
              <div 
                style={{ border: "1px solid #CCC" }}
                onBlur={() => this.toggleDropdown()}
                onFocus={() => this.toggleDropdown()}
                tabIndex="0">
                <img 
                  src={window.mochiIcon} 
                  className="profile-picture"
                />
                {gearDropDown}
              </div>
              : <Link to="/login">
                  <img src={window.blueUserIcon} />
                  <span>SIGN IN</span>
                </Link> }
          </nav>
        </header>
      </>
    );
  }
}

export default NavBar;
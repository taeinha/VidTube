import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import VidtubeLogo from '../logo/logo';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    };
    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  showDropdown(_, dropdown) {
    this.setState({[dropdown]: true });
  }

  hideDropdown(_, dropdown) {
    this.setState({ [dropdown]: false });
  }

  toggleDropdown(_, dropdown) {
    this.setState({ [dropdown]: !this.state.showDropdown });
  }

  _userGearDropdown() {
    const { currentUser, logoutUser } = this.props;
    return this.state.showDropdown ? (
      <div className="user-drop-down">
        <header>
          <img src={window.mochiIcon} className="profile-picture" />
          {currentUser.username}
        </header>
        <section
          onMouseDown={(e) => {
            this.hideDropdown(e, "showDropdown");
            logoutUser();
          }}
          className="pointer">
          <img src={window.signOutIcon} />
          <span>Sign Out</span>
        </section>
      </div>
    ) : null;
  }

  render() {
    const { currentUser, showModal } = this.props;
    let that = this;
    return (
      <div className="overall-main-nav-container">
        <header className="main-nav-container">
          <nav className="left-nav">
            {/* <img src={window.hamburgerIcon} className="small-img convert-gray" /> */}
            <div>
              <VidtubeLogo />
            </div>
          </nav>
          <nav className="center-nav">
            <input type="search" placeholder="Search"/>
            <div className="pointer"><img src={window.searchIcon}/></div>
          </nav>
          <nav className="right-nav">
            <img 
              src={window.addVideoIcon}
              className="convert-gray pointer"
              onClick={() => {
                if (currentUser) {
                  showModal({type: 'create_video'})
                } else {
                  that.props.history.push(`/login`);
                }
              }}
          />
            {/* <img src={window.appsIcon} className="small-img convert-gray"/>
            <img src={window.notificationIcon} className="small-img convert-gray"/> */}
            {currentUser ? 
              <>
                <div 
                  onBlur={(e) => this.hideDropdown(e, "showDropdown")}
                  onFocus={(e) => this.showDropdown(e, "showDropdown")}
                  tabIndex="0">
                  <img
                    src={window.mochiIcon}
                    className="profile-picture pointer"
                    onMouseDown={(e) => this.toggleDropdown(e, "showDropdown")}
                    tabIndex="0"
                  />
                  {this._userGearDropdown()}
                </div>
              </>
              : <Link to="/login">
                  <img src={window.blueUserIcon} />
                  <span>SIGN IN</span>
                </Link> }
          </nav>
        </header>
      </div>
    );
  }
}

export default withRouter(NavBar);
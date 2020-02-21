import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import VidtubeLogo from '../logo/logo';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false
    };
  }
  componentDidMount() {
    this.props.hideSidebar();
  }
  
  styleWideSidebar() {
    const { sidebar } = this.props;

    if (sidebar.show) {
      return "side-bar-show-wider";
    } 
    return "";
  }

  styleCurrentRoute() {
    const { location } = this.props;

    if (location.pathname === "/") {
      return "side-bar-red";
    }
    return "";
  }

  handleHideSidebar() {
    const { hideSidebar } = this.props;
    return e => {
      this.setState({ hide: true });
      setTimeout(() => {
        this.setState({ hide: false });
        hideSidebar();
      }, 220);
    };
  }

  isModalSidebar() {
    const { location } = this.props;

    if ( location.pathname.includes("/videos")) {
      return (
        <nav className="side-bar-top">
          <img
            src={window.hamburgerIcon}
            className="small-img convert-gray pointer"
            onClick={this.handleHideSidebar()}
          />
          <div>
            <VidtubeLogo />
          </div>
        </nav>
      )
    }
  }

  isVideoShow() {
    const { location } = this.props;
    const { hide } = this.state;

    if (location.pathname.includes("/videos")) {
      if (hide) {
        return "side-bar-transition-out";
      }

      return "side-bar-transition-in";
    }
    return "";
  }

  displaySidebar() {
    return (
      <main 
        className={`side-bar-main-container ${this.styleWideSidebar()} ${this.isVideoShow()}`} 
        onClick={e => e.stopPropagation()}>
        {this.isModalSidebar()}
        {this.isVideoShow() ? (<div></div>) : null}
        <Link
          to="/"
          className={`${this.styleCurrentRoute()} ${this.styleWideSidebar()}`}
        >
          <img src={window.homeIcon} />
          Home
        </Link>
        <a
          href="https://github.com/taeinha/VidTube"
          target="_blank"
          className={`${this.styleWideSidebar()}`}
        >
          <img src={window.githubLogo} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/tae-in-ha/"
          target="_blank"
          className={`${this.styleWideSidebar()}`}
        >
          <img src={window.linkedinLogo} />
          LinkedIn
        </a>
        <a
          href="https://angel.co/tae-in-ha"
          target="_blank"
          className={`${this.styleWideSidebar()}`}
        >
          <img src={window.angellistLogo} />
          AngelList
        </a>
        <a
          href="https://taeinha.com/"
          target="_blank"
          className={`${this.styleWideSidebar()}`}
        >
          <img src={window.portfolioIcon} />
          Portfolio
        </a>
        <div className="side-bar-border-line">

        </div>
      </main>
    )
  }

  displaySidebarModal() {
    const { sidebar } = this.props;

    if (sidebar.show) {
      return (
        <div className="modal-background" onClick={this.handleHideSidebar()}>
          {this.displaySidebar()}
        </div>
      )
    }
  }

  render() {
    return (
      <>
        {this.isVideoShow() ? this.displaySidebarModal() : this.displaySidebar()}
      </>
    )
  }
}

export default withRouter(SideBar);
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SideBar extends React.Component {

  componentDidMount() {
    this.props.hideSidebar();
  }
  
  styleWideSidebar() {
    const { sidebar } = this.props;

    if (sidebar.show) {
      return "side-bar-show-wider";
    }
  }

  styleCurrentRoute() {
    const { location } = this.props;

    if (location.pathname === "/") {
      return "side-bar-red";
    }
  }

  render() {
    return (
      <main className={`side-bar-main-container ${this.styleWideSidebar()}`}>
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
        <div>

        </div>
      </main>
    )
  }
}

export default withRouter(SideBar);
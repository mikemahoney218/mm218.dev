import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

import avatar from '../assets/images/avatar.webp';
import config from '../../config';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'About', href: 'about' },
        { content: 'Education', href: 'education' },
        { content: 'Publications', href: 'publications' },
//        { content: 'Conference Activity', href: 'conferences' },
//        { content: 'Teaching Experience', href: 'teaching' },
//        { content: 'Research Experience', href: 'research' },
//        { content: 'Outreach', href: 'community' },
        { content: 'Professional Experience', href: 'experience' },
//        { content: 'Software', href: 'software' },
        { content: 'Skills', href: 'skills' },
        { content: 'Awards', href: 'awards' },
        //{ content: 'Blog', href: 'blog' },
      ],
      isCollapsed: true,
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  }

  render() {
    const { tabs, isCollapsed } = this.state;
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand" href="#page-top">
          <span className="d-block d-lg-none">
            {config.firstName} {config.lastName}
          </span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={avatar}
              alt=""
            />
          </span>
        </a>
        <button
          className={`navbar-toggler navbar-toggler-right ${
            isCollapsed ? 'collapsed' : ''
            }`}
          type="button"
          data-toggle="collapse"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}
          id="navbarSupportedContent">
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
            className="navbar-nav"
          >
            {tabs.map((tab, i) => {
              const { href, content } = tab;
              return (
                <li className="nav-item" key={href}>
                  <Scroll type="id" element={href}>
                    <a className="nav-link" href={`${href}`}>
                      {content}
                    </a>
                  </Scroll>
                </li>
              );
            })}
          </Scrollspy>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

export const SideNav = ({ routes }) => (
  <div className="SideNav">
    <div className="SideNav__Toolbar">
      <div className="SideNav__Menu">
        <div className="SideNav__Menu__Item">
          <span className="SideNav__Menu__Item__Title">
            <Link to="/">React School</Link>
          </span>
        </div>
      </div>
      <hr />
      <div className="SideNav__Menu">
        {
          routes && routes.map(({ title, route }) => (
            <div className="SideNav__Menu__Item" key={title}>
              <Link to={route}>{title}</Link>
            </div>
          ))
        }
      </div>
    </div>
  </div>
);

SideNav.propTypes = {
  classes: PropTypes.object,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      route: PropTypes.string,
    }),
  ),
}

import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './SideNav.css';

export const SideNav = ({ routes }) => (
  <div className="SideNav">
    <div className="SideNav__Toolbar">
      <ListGroup variant="flush">
        {
          routes && routes.map(({ title, route }) => (
            <ListGroupItem key={title}>
              <Link to={route}>{title}</Link>
            </ListGroupItem>
          ))
        }
      </ListGroup>
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

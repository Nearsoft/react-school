import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

export const Header = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand><Link to="/">React Async Patterns</Link></Navbar.Brand>
  </Navbar>
)

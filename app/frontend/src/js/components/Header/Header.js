import React from 'react';

const Header = () => {
  const header = {
    height: '50px',
    backgroundColor: '#212329',
    paddingRight: '60px'
  }
  const content = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%'
  }
  const loggedUser = {
    color: 'white'
  }

  return (
    <div style={header}>
      <div style={content}>
        <span style={loggedUser}>Leonardo Carrasco</span>
      </div>
    </div>
)};

export default Header;

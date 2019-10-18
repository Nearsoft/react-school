import React from 'react';

function Layout({ children }) {
  return (
    <div className="app-wrapper r-padding-vertical-large">
      { children }
    </div>
  );
}

export default Layout;

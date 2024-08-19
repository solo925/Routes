import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header>
        <h1>My Application</h1>
        {/* You can add navigation links here if needed */}
      </header>
      <main>
        <Outlet /> {/* This renders the matching child route component */}
      </main>
      <footer>
        <p>Footer Content</p>
      </footer>
    </div>
  );
}

export default Layout;

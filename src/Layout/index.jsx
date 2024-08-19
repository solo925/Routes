import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom/dist';

function Layout() {
    const navigate = useNavigate();
  return (
    <div>
      <header>
        <h1>My Application</h1>
        <Link to={"/recipe"}>go to recipes page</Link>
        <Link to={"/comments"}>go to comments page</Link>
        <button onClick={()=>navigate('/recipe')}>recipes</button>
        <button onClick={() => navigate('/comments')}>comments</button>
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

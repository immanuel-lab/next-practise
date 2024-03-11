import React from 'react';

function Layout({ children, users,revenue,notifications}) {
  return (
    <>
    {children}
     {users}
     {revenue}
     {notifications}
    </>
  );
}

export default Layout;


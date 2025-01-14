import React from 'react'
import SideNav from './_components/SideNav';

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
        <div>
            <SideNav/>
        </div>
        <div>
        {children}
        </div>
    </div>
  )
}

export default layout
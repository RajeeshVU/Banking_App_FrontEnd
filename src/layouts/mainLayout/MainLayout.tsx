import React, { FC } from 'react';
import './mainlayout.css'
interface MainLayoutProps {
    children?: React.ReactNode;
    backgroundImage?: string;
}

const MainLayout: FC<MainLayoutProps> = ({children,backgroundImage}) => {
  return (
    <>
    <div className="container-fluid main p-0" style={{background:`url(${backgroundImage})`}}>
     
      {children}
     
   
    </div>
      
    </>
  );
};

export default MainLayout;
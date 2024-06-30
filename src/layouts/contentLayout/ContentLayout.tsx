import { FC } from 'react';

interface ContentLayoutProps {
    children?: React.ReactNode;
    fluid?:boolean,
    height?:string
}

const ContentLayout: FC<ContentLayoutProps> = ({ children,fluid,height}) => {
  return (
    <>
    <div className={fluid?`container-${fluid}`:'container'} style={{height:`${height}`}}>
    {children}
    </div>
    
    </>
  );
};

export default ContentLayout;
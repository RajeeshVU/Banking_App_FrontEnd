import { FC } from "react";
import './content.css'
interface ContentLayoutProps {
  children?: React.ReactNode;
  fluid?: boolean;
  height?: string;
  isMarginTop?: boolean;
}

const ContentLayout: FC<ContentLayoutProps> = ({
  children,
  fluid,
  height,
  isMarginTop,
}) => {
  return (
    <>
       <div
      className={`${fluid ? `container-${fluid}` : "container"} ${isMarginTop ? "responsive" : ""}`}
      style={{ height: `${height}` }}
    >
        {children}
      </div>
    </>
  );
};

export default ContentLayout;

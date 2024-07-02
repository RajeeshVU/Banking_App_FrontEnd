import { FC } from 'react';

interface ImageComponentProps {
  src:string;
  alt:string;
  className:string;
}

const ImageComponent: FC<ImageComponentProps> = ({src,alt,className}) => {
  return (
    <>
        <div className={className}>
              <img src={src} alt={alt} loading="lazy" />
            </div>
    </>
  );
};

export default ImageComponent;
import { FC } from 'react';

interface ButtonComponentProps {
  type?:"submit" | "reset" | "button" | undefined;
  label?:string;
  className?:string;
}

const ButtonComponent: FC<ButtonComponentProps> = ({type,label,className}) => {
  return (
    <>
       <button
                      type={type}
                      className={className}
                    >
                      {label}
                    </button>
    </>
  );
};

export default ButtonComponent;
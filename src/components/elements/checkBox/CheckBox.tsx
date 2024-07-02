import { FC } from 'react';

interface CheckboxProps {
    label?: string;
    className?:string;
}

const Checkbox: FC<CheckboxProps> = ({ label,className
}) => {
  return (
    <>
    <input type="checkbox" className="form-check-input"/>
    <label className={`form-check-label ${className}`}  >{label}</label>
    </>
  );
};

export default Checkbox;
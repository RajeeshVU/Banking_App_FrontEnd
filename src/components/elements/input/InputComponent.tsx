import { FC } from "react";
import "./input.css";

interface InputComponentProps {
  label?: string;
  type?: string;
  className?: string;
  holder?: string;
  icons?: React.ReactNode;
}

const InputComponent: FC<InputComponentProps> = ({
  label,
  type = "text",
  className = "",
  holder,
  icons,
}) => {
  const inputClass = `form-control ${className}`;

  return (
    <div className="col-12">
      <label htmlFor={inputClass}>{label}</label>
      {icons && (
        <div className="input_container">
         <div className="row">
        <input type={type}
              className="col-11 px-3"
              style={{ outline: "none", border: "none" }}
              placeholder={`Enter ${holder}`}/>
           
              <div className="icon-group  col-1"  >
          <span className="input-icon h-100  ">{icons}</span>
        </div>
              </div>
       
      </div>
        // <div className="input_container">
        //   <div className="row h-100">
        //     <input
        //       type={type}
        //       className="col-11 px-3 "
        //       style={{ outline: "none", border: "none" }}
        //       placeholder={`Enter ${holder}`}
        //     />
        //     <div className="col-1 p-0 d-flex align-items-center justify-content-center">
        //       {icons}
        //     </div>
        //   </div>
        // </div>
      )}
      {!icons && (
        <div className="input_container">
          <div className="row h-100">
            <input
              type={type}
              className="col-12 px-3"
              style={{ outline: "none", border: "none" }}
              placeholder={`Enter ${holder}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InputComponent;

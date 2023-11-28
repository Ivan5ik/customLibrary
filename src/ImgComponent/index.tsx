import React, { FC } from "react";

export interface ButtonComponentProps {
  onClick?: any;
  children?: any;
}

const ImgComponent: FC<ButtonComponentProps> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      {children}
    </div>
  );
};

export { ImgComponent };

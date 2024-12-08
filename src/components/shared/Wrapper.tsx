import React, { FC } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="max-w-[1440px] mx-auto px-4 sm:px-0 ">{children}</div>;
};

export default Wrapper;

import React, { memo } from "react";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default memo(Admin);

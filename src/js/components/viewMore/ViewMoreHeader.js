import React from "react";
import GoBackButton from "../shared/GoBackButton";
import IconButton from "../shared/IconButton";

function ViewMoreHeader({ toggle }) {
  return (
    <header className="view-more-header">
      <GoBackButton />
      <IconButton
        action={toggle}
        imgSrc={"/images/icons/less_ico.svg"}
        alt={"View less"}
      ></IconButton>
    </header>
  );
}

export default ViewMoreHeader;

import React, { useEffect, useState } from "react";
import Button from "../Button";

import { MdClose } from "react-icons/md";

import "./index.scss";

const Popup = ({ show, children, close }) => {
  const [overlay, setOverlay] = useState(document.createElement("div"));

  const showOverLay = () => {
    overlay.classList.add("overlay")
    overlay.addEventListener("click", () => close(false))

    if(show) document.body.append(overlay);
    else overlay.remove();
  };

  useEffect(showOverLay, [show]);

  return (
    <>
      {show ? (
        <div className="popup">
          <Button onClick={() => close(false)} icon={<MdClose size={20} color="white"/>}></Button>
          <div className="popup__content">{ children }</div>
        </div>
      ) : null}
    </>
  );
};

export default Popup;

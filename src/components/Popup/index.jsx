import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Button from "../Button";

import { MdClose } from "react-icons/md";

import "./index.scss";

const Popup = ({ show, children, close, className }) => {
  const [overlay, setOverlay] = useState(document.createElement("div"));

  const showOverLay = () => {
    overlay.classList.add("overlay");
    overlay.addEventListener("click", () => close(false));

    if (show) document.body.append(overlay);
    else overlay.remove();
  };

  const getClassNamePopup = () => {
    return classNames({
      popup: true,
      "popup-open": show,
    }, className);
  };

  useEffect(showOverLay, [show]);

  return (
    <>
      {show ? (
        <div className={getClassNamePopup()}>
          <Button className="close-button" onClick={() => close(false)} icon={<MdClose size={20} color="white" />}></Button>
          <div className="popup__content">{children}</div>
        </div>
      ) : null}
    </>
  );
};

export default Popup;

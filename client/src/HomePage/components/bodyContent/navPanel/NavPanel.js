import React, { useEffect, useRef } from "react";
import ReactDom from "react-dom";
import Navbar from "../../header/navbar/Navbar";
import SellerBtn from "../../header/sellerBtn/SellerBtn";

import "./NavPanel.css";

function NavPanel(props) {
  const navPanelRef = useRef(null);
  const navPanelOverlayRef = useRef(null);
  useEffect(() => {
    if (props.slideStatus) {
      navPanelRef.current.style.transform = "translateX(200px)";
      navPanelRef.current.setAttribute("tabIndex", "1");
      navPanelRef.current.focus();
    } else {
      navPanelRef.current.style.transform = "translateX(-200px)";
    }
  });



  if (props.slideStatus) {
    return ReactDom.createPortal(
      <>
        <div
          className="navPanel"
          id="navPanelId"
          ref={navPanelRef}
          onBlur={props.onClose}
        >
          <Navbar
            NavbarStyleClassName="navbarNavPanel"
            NavContainerStyleClassName="navContainerNavPanel"
          />
          <SellerBtn StyleClassName="NavPanelSlrBtn" />
        </div>
        <div className="navPanel-overlay" ref={navPanelOverlayRef}></div>
      </>,
      document.getElementById("slidePanel")
    );
  } else {
    return ReactDom.createPortal(
      <div
        className="navPanel"
        id="navPanelId"
        ref={navPanelRef}
        onBlur={props.onClose}
      >
        <Navbar
          NavbarStyleClassName="navbarNavPanel"
          NavContainerStyleClassName="navContainerNavPanel"
        />
        <SellerBtn StyleClassName="NavPanelSlrBtn" />
      </div>,
      document.getElementById("slidePanel")
    );
  }
}

export default NavPanel;

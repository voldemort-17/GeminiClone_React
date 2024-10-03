import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
import {
  faAdd,
  faBars,
  faClockRotateLeft,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import {
  faMessage,
  faCircleQuestion,
} from "@fortawesome/free-regular-svg-icons";
import "./Sidebar.css";
import { useState } from "react";
import { Context } from "../context/Context";
import SidebarContent from "./SidebarContent";

function Sidebar() {
  const { onSent, prevPrompt, setRecentPrompt, newChat, theme, setTheme, openTab, setOpenTab, mainTab, setMainTab } = useContext(Context);

  const loadPrompt = (prompt) => {
    setRecentPrompt(prompt);
    onSent(prompt)
  }

  return (
    <div
      className={`${
        openTab ? "w-[320px]" : "w-[72px]"
      } hidden relative lg:flex flex-col p-5 pt-6 h-screen transition-all overflow-hidden ${theme == "light" ? "bg-[#1e1f20]" : "bg-[#f0f4f9]"}`}
    >
      <SidebarContent/>
    </div>
  );
}

export default Sidebar;

import React, {useContext} from "react";
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
import { Context } from "../context/Context";

function SidebarContent() {
  const {
    onSent,
    prevPrompt,
    setRecentPrompt,
    newChat,
    theme,
    setTheme,
    openTab,
    setOpenTab,
  } = useContext(Context);

  const loadPrompt = (prompt) => {
    setRecentPrompt(prompt);
    onSent(prompt);
  };


  return (
    <>
      <div className="absolute">
        <FontAwesomeIcon
          icon={faBars}
          className={`block px-3 cursor-pointer ${
            theme == "light" ? "text-[#e3e3e3]" : ""
          } `}
          onClick={() => setOpenTab(!openTab)}
        />
        <div
          className={`inline-flex mt-9 items-center gap-3 px-3 py-2 rounded-[50px] text-[14px] text-gray-400 cursor-pointer ${
            theme == "light" ? "bg-[#131314]" : "bg-[#e6eaf1]"
          }`}
          onClick={() => newChat()}
        >
          <FontAwesomeIcon
            icon={faAdd}
            className={`${
              theme == "light" ? "text-[#686868]" : "text-gray-400"
            }`}
          />
          <p
            className={`font-medium ${openTab ? "" : "hidden"} ${
              theme == "light" ? "text-[#686868]" : "text-gray-400"
            }`}
          >
            New chat
          </p>
        </div>
        <div className={`mt-5`}>
          <p
            className={`${openTab ? "" : "hidden"} px-2 font-medium mb-4 ${
              theme == "light" ? "text-[#e3e3e3]" : ""
            }`}
          >
            Recent
          </p>
          {prevPrompt.map((value, i) => {
            return (
              <div
                className={`${openTab ? "" : "hidden"} item-container ${
                  theme === "dark" ? "hover:bg-[#e2e6eb]" : "hover:bg-[#303030]"
                }`}
              >
                <FontAwesomeIcon
                  icon={faMessage}
                  className={`${openTab ? "" : "hidden"} ${
                    theme == "dark" ? "text-black" : "text-[#e3e3e3]"
                  }`}
                />
                <p
                  key={i}
                  className={`${
                    theme == "dark" ? "text-black" : "text-[#e3e3e3]"
                  }`}
                  onClick={() => loadPrompt(value)}
                >
                  {value.slice(0, 18)} {value.length > 18 ? "..." : ""}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`absolute bottom-5 flex flex-col font-medium`}>
        <div
          className={`item-container mt-1 ${
            theme === "dark" ? "hover:bg-[#e2e6eb]" : "hover:bg-[#303030]"
          }`}
        >
          <FontAwesomeIcon
            icon={faCircleQuestion}
            className={`${theme == "light" ? "text-[#e3e3e3]" : ""}`}
          />
          <p
            className={`${openTab ? "" : "hidden"} ${
              theme == "light" ? "text-[#e3e3e3]" : ""
            }`}
          >
            Help
          </p>
        </div>
        <div
          className={`item-container mt-1 ${
            theme === "dark" ? "hover:bg-[#e2e6eb]" : "hover:bg-[#303030]"
          }`}
        >
          <FontAwesomeIcon
            icon={faClockRotateLeft}
            className={`${theme == "light" ? "text-[#e3e3e3]" : ""}`}
          />
          <p
            className={`${openTab ? "" : "hidden"} ${
              theme == "light" ? "text-[#e3e3e3]" : ""
            }`}
          >
            Activity
          </p>
        </div>
        <div
          className={`item-container mt-1 ${
            theme === "dark" ? "hover:bg-[#e2e6eb]" : "hover:bg-[#303030]"
          }`}
        >
          <FontAwesomeIcon
            icon={faGear}
            className={`${theme == "light" ? "text-[#e3e3e3]" : ""}`}
          />
          <p
            className={`${openTab ? "" : "hidden"} ${
              theme == "light" ? "text-[#e3e3e3]" : ""
            }`}
          >
            Settings
          </p>
        </div>
      </div>
    </>
  );
}

export default SidebarContent;

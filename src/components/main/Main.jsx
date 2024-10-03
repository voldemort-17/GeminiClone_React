import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
import {
  faCircleUser,
  faCode,
  faCompass,
  faImage,
  faLightbulb,
  faMessage,
  faMicrophone,
  faMoon,
  faPaperPlane,
  faSun,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import "./Main.css";
import { Context } from "../context/Context";

function Main() {
  const {
    onSent,
    recentPrompt,
    input,
    resultData,
    showResult,
    loading,
    setInput,
    theme,
    setTheme,
    mainTab,
    setMainTab,
  } = useContext(Context);

  const colors = {
    sidebar: "#303030",
    mainText: "#686868",
    card: "#212121",
  };

  const handleTab = () => {
    return setMainTab(!mainTab);
  };

  return (
    <div
      className={`flex-1 basis-[95%] w-full pb-[15vh] relative overflow-hidden ${
        theme == "light" ? "bg-[#131314]" : "bg-white"
      }`}
    >
      <div className="flex justify-between h-8 m-4 items-center text-[#585858]">
        <div className="flex gap-5">
          <p
            className={`text-xl ${
              theme == "light" ? "text-[#e3e3e3]" : ""
            } cursor-pointer`}
          >
            Gemini
          </p>
        </div>
        <div className="flex gap-5">
          <FontAwesomeIcon
            onClick={() => setTheme(theme == "light" ? "dark" : "light")}
            icon={theme == "light" ? faMoon : faSun}
            className={`text-3xl ${
              theme == "dark" ? "" : "text-white"
            } cursor-pointer`}
          />
          <FontAwesomeIcon
            icon={faCircleUser}
            className={`text-3xl ${
              theme == "dark" ? "" : "text-white"
            } cursor-pointer`}
          />
        </div>
      </div>

      {!showResult ? (
        <>
          <div className="m-auto w-[450px] sm:w-[900px]">
            <div className="w-[900px] my-[50px] text-[25px] md:text-[50px] p-5 font-medium">
              <p>
                <span className="headerDesign">Hello, Yash.</span>
              </p>
              <p
                className={`${
                  theme == "light" ? "text-[#444746]" : "text-[#c4c7c5]"
                }`}
              >
                How can I help you today ?
              </p>
            </div>
            <div className="flex flex-col m-auto sm:grid gap-[15px] w-[300px] sm:w-[900px] sm:grid-cols-4 p-5 text-[#585858] text-[15px]">
              <div
                className={`cardDesign ${
                  theme == "light" ? "bg-[#1e1f20]" : "bg-[#f0f4f9]"
                } ${
                  theme == "light" ? "hover:bg-[#333537]" : "hover:bg-[#dfe4ea]"
                } ${theme == "light" ? "text-[#e3e3e3]" : ""}`}
              >
                <p>
                  Provide a list of questions to help me prepare for a social
                  media manager job interview.
                </p>
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className={`cardIconDesign ${
                    theme == "light" ? "bg-[#131314]" : "bg-white"
                  }`}
                />
              </div>
              <div
                className={`cardDesign ${
                  theme == "light" ? "bg-[#1e1f20]" : "bg-[#f0f4f9]"
                } ${
                  theme == "light" ? "hover:bg-[#333537]" : "hover:bg-[#dfe4ea]"
                } ${theme == "light" ? "text-[#e3e3e3]" : ""}`}
              >
                <p>Generate four unit tests for the following C# function</p>
                <FontAwesomeIcon
                  icon={faCode}
                  className={`cardIconDesign ${
                    theme == "light" ? "bg-[#131314]" : "bg-white"
                  }`}
                />
              </div>
              <div
                className={`cardDesign ${
                  theme == "light" ? "bg-[#1e1f20]" : "bg-[#f0f4f9]"
                } ${
                  theme == "light" ? "hover:bg-[#333537]" : "hover:bg-[#dfe4ea]"
                } ${theme == "light" ? "text-[#e3e3e3]" : ""}`}
              >
                <p>Give me 10 tips for room organization. </p>
                <FontAwesomeIcon
                  icon={faCompass}
                  className={`cardIconDesign ${
                    theme == "light" ? "bg-[#131314]" : "bg-white"
                  }`}
                />
              </div>
              <div
                className={`cardDesign ${
                  theme == "light" ? "bg-[#1e1f20]" : "bg-[#f0f4f9]"
                } ${
                  theme == "light" ? "hover:bg-[#333537]" : "hover:bg-[#dfe4ea]"
                } ${theme == "light" ? "text-[#e3e3e3]" : ""}`}
              >
                <p>
                  Write a beginner's guide to kitesurfing, including an overview
                  of what is needed to get started.{" "}
                </p>
                <FontAwesomeIcon
                  icon={faMessage}
                  className={`cardIconDesign ${
                    theme == "light" ? "bg-[#131314]" : "bg-white"
                  }`}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="w-[45%] m-auto scrollHide">
          <div className="flex p-4 gap-4 items-center">
            <FontAwesomeIcon
              icon={faCircleUser}
              className={`text-3xl ${
                theme == "dark" ? "text-black" : "text-[#e3e3e3]"
              }`}
            />
            <p
              className={`${theme == "dark" ? "text-black" : "text-[#e3e3e3]"}`}
            >
              {recentPrompt}
            </p>
          </div>
          <div className="flex p-4 gap-4 items-start">
            <img src="/google-gemini-icon.svg" alt="" className="w-6" />
            {loading ? (
              <div className="w-full gap-3 flex flex-col">
                <hr className="loadingBar" />
                <hr className="loadingBar" />
                <hr className="loadingBar" />
              </div>
            ) : (
              <p
                dangerouslySetInnerHTML={{ __html: resultData }}
                className={`text-[17px] leading-8 ${
                  theme == "dark" ? "text-black" : "text-[#e3e3e3]"
                }`}
              ></p>
            )}
          </div>
        </div>
      )}

      <div className="sm:absolute w-full flex justify-center items-center flex-col bottom-2">
        <div className="flex max-w-[900px] w-full items-center justify-between flex-col sm:flex-row">
          <input
            value={input}
            type="text"
            placeholder="Enter a prompt here"
            className={`flex-1 border-none sm:rounded-l-3xl sm:rounded-r-none mb-2 sm:mb-0 rounded-3xl pl-7 py-4 outline-none font-medium ${
              theme == "light" ? "bg-[#1e1f20]" : "bg-[#f0f4f9]"
            } ${theme == "dark" ? "text-black" : "text-[#e3e3e3]"}`}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="">
            <div
              className={`py-4 px-7 sm:pr-7 sm:pl-0 rounded-3xl sm:rounded-r-3xl sm:rounded-l-none cursor-pointer ${
                theme == "light" ? "bg-[#1e1f20]" : "bg-[#f0f4f9]"
              }`}
            >
              <FontAwesomeIcon
                icon={faImage}
                title="Upload Image"
                // className="mr-5 hover:text-gray-500"
                className={`${
                  theme == "dark" ? "text-black" : "text-[#e3e3e3]"
                } mr-5 `}
              />
              <FontAwesomeIcon
                icon={faMicrophone}
                title="Use Microphone"
                // className="mr-5 hover:text-gray-500"
                className={`${
                  theme == "dark" ? "text-black" : "text-[#e3e3e3]"
                } mr-5 `}
              />
              {input ? (
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  title="Submit"
                  // className="hover:text-gray-500"
                  className={`${
                    theme == "dark" ? "text-black" : "text-[#e3e3e3]"
                  }`}
                  onClick={() => onSent()}
                />
              ) : null}
            </div>
          </div>
        </div>
        <p
          className={`mt-2 px-2 text-[12px] items-center ${
            theme == "dark" ? "text-black" : "text-[#e3e3e3]"
          }`}
        >
          Gemini may display inaccurate info, including about people, so
          double-check its responses.
          <a href="#" className="underline">
            Your privacy and Gemini Apps
          </a>
        </p>
      </div>
    </div>
  );
}

export default Main;

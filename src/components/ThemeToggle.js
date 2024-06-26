import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../actions";

const ThemeToggle = () => {
  const isDarkMode = useSelector((state) => state.theme); // получаем текущее состояние темы из Redux Store
  const dispatch = useDispatch();

  const handleToggleClick = () => {
    dispatch(toggleTheme()); // диспатчим действие для изменения темы
  };
  //   const body = document.querySelector("body");
  //   body.style.background = isDarkMode ? "white" : "black";
  //   body.style.color = isDarkMode ? "black" : "white";

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.toggle("theme-dark", isDarkMode);
    body.classList.toggle("theme-light", !isDarkMode);
  });
  const buttonClassName = isDarkMode ? "light-mode-btn" : " dark-mode-btn";

  return (
    <button className={` ${buttonClassName}`} onClick={handleToggleClick}>
      {isDarkMode ? "Включить светлую тему" : " Включить тёмную тему"}
    </button>
  );
};

export default ThemeToggle;

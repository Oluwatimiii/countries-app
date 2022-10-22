import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [toggleBtn, setToggleBtn] = useState(
    '<i class="fas fa-moon"></i> Dark Mode'
  );

  const toggleDarkMode = () => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
      setToggleBtn('<i class="fas fa-sun"></i> Light Mode');
      setDarkTheme((theme) => (theme = !theme));
    }
    if (!darkTheme) {
      document.documentElement.classList.remove("dark");
      setToggleBtn('<i class="fas fa-moon"></i> Dark Mode');
      setDarkTheme((theme) => (theme = !theme));
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 shadow-sm shadow-black dark:text-white overflow-hidden fixed top-0 left-0">
      <div className="w-screen shadow-sm py-5 bg-white dark:bg-gray-700 dark:text-white">
        <div className="flex items-center justify-between container px-4 md:px-8 mx-auto">
          <Link to="/">
            <h1 className="font-bold text-md lg:text-lg cursor-pointer">
              Where in the world?
            </h1>
          </Link>

          <div className="font-medium">
            <button
              onClick={() => toggleDarkMode()}
              dangerouslySetInnerHTML={{ __html: toggleBtn }}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

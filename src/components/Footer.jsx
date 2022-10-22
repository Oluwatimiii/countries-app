import React from "react";

const Footer = () => {
  return (
    <footer className="footer dark:bg-gray-100 bg-gray-800 border-t-[1px]  dark:border-black border-white">
      <div className=" dark:text-black text-white text-[14px] text-center py-3">
        <h2 className=" dark:text-black text-white text-[14px] pb-2">
          Developed by
          <span className="cursor-pointer text-[#cfcaca] dark:text-black pl-1 hover:text-[#fff] transition-all ease-in">
            <a href="https://github.com/Oluwatimiii" target="_blank" rel="noreferrer">
              Oke Timilehin.
            </a>
          </span>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;

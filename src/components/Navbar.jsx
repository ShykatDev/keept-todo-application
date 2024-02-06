import { useContext } from "react";
import { logo } from "../assets";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaMoon,
  FaSun,
} from "react-icons/fa6";
import { ThemeContext } from "../context";

const Navbar = () => {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-black border-b dark:border-neutral-800 border-neutral-400 dark:bg-opacity-30 bg-opacity-50 backdrop-blur-md fixed w-full z-50">
      <div className="container flex justify-between items-center py-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" />
          <span className=" capitalize text-3xl font-bold mb-1.5 dark:text-neutral-200 ">
            Keept
          </span>
        </div>

        <div className="relative flex items-center gap-6">
          <div
            className="p-2 bg-neutral-800 rounded-md text-neutral-300 cursor-pointer"
            onClick={() => setDark(!dark)}
          >
            {dark ? <FaSun className="text-amber-300" /> : <FaMoon />}
          </div>
          <div className="group">
            <p className="underline font-medium cursor-pointer hover:text-neutral-700 dark:text-neutral-400">
              About App
            </p>
            <div className="absolute opacity-0 invisible top-1/2 z-10 right-0 w-[15rem] duration-300 ease-in-out group-hover:opacity-100 group-hover:top-full group-hover:visible">
              <div className="mt-3 rounded-md border bg-neutral-50 dark:bg-neutral-950 dark:border-neutral-800 border-neutral-400">
                <div className="p-3 text-right">
                  <p className="text-sm font-medium dark:text-neutral-500">
                    Version: 1.0.0
                  </p>
                  <p className="text-sm font-medium dark:text-neutral-500">
                    Developer: Shykat Raha
                  </p>
                </div>
                <div className="px-3 flex gap-2 justify-end py-3 border-t dark:border-neutral-800 border-neutral-400">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/saikat.raha.1/"
                  >
                    <FaFacebookF className="text-sm text-neutral-600 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/ShykatDev"
                  >
                    <FaGithub className="text-sm text-neutral-600 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/shykat-raha1/"
                  >
                    <FaLinkedinIn className="text-sm text-neutral-600 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

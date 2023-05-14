"use client";

import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
// import { Abhaya_Libre } from "@next/font/google";
import { useState } from "react";
import Link from "next/link";

// const abhayaLibre = Abhaya_Libre({
//   weight: ["400", "500", "600", "700", "800"],
//   subsets: ["latin"],
//   display: "optional",
// });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-gray-200 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-gray-200">
              luke wong
            </h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <FontAwesomeIcon
                    onClick={handleClick}
                    icon={faSun}
                    className="cursor-pointer text-2xl dark:text-gray-200"
                  />
                ) : (
                  <FontAwesomeIcon
                    onClick={handleClick}
                    icon={faMoon}
                    className="cursor-pointer text-2xl"
                  />
                )}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl font-burtons">
              luke wong
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl capitalize dark:text-gray-200">
              developer && tech nerd.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium aliquid beatae neque optio.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="#">
              <FontAwesomeIcon
                className="hover:text-teal-600 dark:text-gray-200 dark:hover:text-teal-600"
                icon={faGithub}
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                className="hover:text-teal-600 dark:text-gray-200 dark:hover:text-teal-600"
                icon={faLinkedin}
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                className="hover:text-teal-600 dark:text-gray-200 dark:hover:text-teal-600"
                icon={faStackOverflow}
              />
            </a>
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96">
            {/* import image of profile */}
            {/* <Image src="" fill style={{ objectFit: "cover" }} alt="profile photo" /> */}
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-200">
              services I offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
              aperiam? <span className="text-teal-500">Lorem.</span> Lorem,
              ipsum dolor. <span className="text-teal-500">Lorem.</span> Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Rem laudantium
              soluta libero.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              mollitia sunt impedit?
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              {/* import card images */}
              {/* <Image src="" width={100} height={100} alt="project images" /> */}
              <h3 className="text-lg font-medium pt-8 pb-2">
                beautiful designs
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                dicta.
              </p>
              <h4 className="py-4 text-teal-600">design tools I use</h4>
              <p className="text-gray-800 py-1">Lorem, ipsum.</p>
              <p className="text-gray-800 py-1">Lorem ipsum dolor sit.</p>
              <p className="text-gray-800 py-1">Lorem, ipsum dolor.</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              {/* import card images */}
              {/* <Image src="" width={100} height={100} alt="project images" /> */}
              <h3 className="text-lg font-medium pt-8 pb-2">
                beautiful designs
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                dicta.
              </p>
              <h4 className="py-4 text-teal-600">design tools I use</h4>
              <p className="text-gray-800 py-1">Lorem, ipsum.</p>
              <p className="text-gray-800 py-1">Lorem ipsum dolor sit.</p>
              <p className="text-gray-800 py-1">Lorem, ipsum dolor.</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              {/* import card images */}
              {/* <Image src="" width={100} height={100} alt="project images" /> */}
              <h3 className="text-lg font-medium pt-8 pb-2">
                beautiful designs
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                dicta.
              </p>
              <h4 className="py-4 text-teal-600">design tools I use</h4>
              <p className="text-gray-800 py-1">Lorem, ipsum.</p>
              <p className="text-gray-800 py-1">Lorem ipsum dolor sit.</p>
              <p className="text-gray-800 py-1">Lorem, ipsum dolor.</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-200">portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
              aperiam? <span className="text-teal-500">Lorem, ipsum.</span>{" "}
              Lorem, ipsum dolor.{" "}
              <span className="text-teal-500">Lorem ipsum dolor sit.</span>{" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
              laudantium soluta libero.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eos
              distinctio, incidunt soluta blanditiis ea?
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              {/* import portfolio image */}
              {/* <Image src="" alt="image" className="rounded-lg object-cover" width={'100%'} height={'100%} responsive /> */}
            </div>
            <div className="basis-1/3 flex-1">
              {/* import portfolio image */}
              {/* <Image src="" alt="image" className="rounded-lg object-cover" width={'100%'} height={'100%} responsive /> */}
            </div>
            <div className="basis-1/3 flex-1">
              {/* import portfolio image */}
              {/* <Image src="" alt="image" className="rounded-lg object-cover" width={'100%'} height={'100%} responsive /> */}
            </div>
            <div className="basis-1/3 flex-1">
              {/* import portfolio image */}
              {/* <Image src="" alt="image" className="rounded-lg object-cover" width={'100%'} height={'100%} responsive /> */}
            </div>
            <div className="basis-1/3 flex-1">
              {/* import portfolio image */}
              {/* <Image src="" alt="image" className="rounded-lg object-cover" width={'100%'} height={'100%} responsive /> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

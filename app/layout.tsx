import "./globals.css";
import { Lato } from "next/font/google";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

// If loading a variable font, you don't need to specify the font weight
const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "optional",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //       if (window.scrollY > 400) {
  //           setShowTopBtn(true);
  //       } else {
  //           setShowTopBtn(false);
  //       }
  //   });
  // }, []);

  return (
    <html lang="en" className={lato.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* scroll to top button */}
        <button className="rounded-full bg-teal-600 fixed w-12 h-12 right-10 z-10 bottom-10 border-black border-solid border">
          <FontAwesomeIcon className="text-gray-200" icon={faArrowUp} />
        </button>

        {children}

        <footer>
          <div className="bg-teal-600 py-3.5 px-4 grid grid-rows-2 justify-items-center gap-2 content-center items-center sm:flex sm:justify-between">
            <p className="text-gray-200 text-sm">
              get connected with me on social networks:
            </p>
            <div className="grid grid-cols-4 gap-x-4">
              <a href="#">
                <FontAwesomeIcon
                  className="text-gray-200 w-5 h-5 hover:text-black"
                  icon={faGithub}
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  className="text-gray-200 w-5 h-5 hover:text-black"
                  icon={faLinkedin}
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  className="text-gray-200 w-5 h-5 hover:text-black"
                  icon={faStackOverflow}
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  className="text-gray-200 w-5 h-5 hover:text-black"
                  icon={faFacebook}
                />
              </a>
            </div>
          </div>
          <div className="bg-gray-800 grid p-5 gap-4 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1">
            <div>
              <h4 className="text-base text-gray-200">about me</h4>
              <p className="text-sm text-gray-200">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur nihil quas ex odio repellat? Voluptas provident ex
                eveniet modi doloribus, ipsum laborum officiis incidunt iure
                excepturi eaque voluptatibus tempora cum. Hic voluptatibus eum,
                aut vitae asperiores ratione incidunt sapiente suscipit.
              </p>
            </div>
            <div>
              <h4 className="text-base text-gray-200">useful links</h4>
              <p className="text-sm text-gray-200">Lorem, ipsum dolor.</p>
              <p className="text-sm text-gray-200">Lorem ipsum dolor sit.</p>
              <p className="text-sm text-gray-200">Lorem, ipsum.</p>
              <p className="text-sm text-gray-200">Lorem.</p>
            </div>
          </div>
          <div className="bg-teal-900 flex justify-center py-2 items-center gap-1">
            <FontAwesomeIcon
              className="text-gray-200 w-3 h-3"
              icon={faCopyright}
            />
            <p className="text-gray-200 text-xs">
              2023 Copyright: Luke Wong Zhi Kiang
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

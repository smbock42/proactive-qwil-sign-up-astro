import ThemeProvider from "../theme-provider";
import Navbar from "../defaultNavbar"

import {
  Button,
  Typography
} from "@material-tailwind/react";
import SignUpNavBar from "../signup-navbar";

export function HeroSectionFour() {
  return (
    <ThemeProvider>
      <SignUpNavBar />
      <header className="h-screen min-h-screen w-screen bg-white">
        <div className="relative h-screen flex align-center flex-col justify-center text-center bg-cover" style={{backgroundImage: `url('/404.jpg')`}}>
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800"></span>
          <Typography
            variant="h1"
            color="white"
            className="mb-4 !leading-tight lg:text-7xl z-20"
          >
            Error 404
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 w-full opacity-80 md:w-10/12 lg:w-7/12 mx-auto px-28 z-10"
          >
            The page you are looking for does not exist.
          </Typography>
          <div className="w-auto mx-auto">
            <div className="flex items-center">
              <a className="z-10" href="./">
                <Button color="dark" className="w-full px-4">
                  Go Home
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroSectionFour;

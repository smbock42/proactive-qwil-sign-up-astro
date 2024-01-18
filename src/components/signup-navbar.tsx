import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  UserCircleIcon,
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

import ThemeProvider from "./theme-provider";

 
const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};
 
export default function SignUpNavBar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  return (
    <ThemeProvider>
      <Navbar className="absolute mx-auto left-0 right-0 top-3 max-w-screen-xl px-4 py-2 z-10">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="./"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            Proactive BLG
          </Typography>
          <div className="hidden gap-2 lg:flex">
            <a href="./login">
              <Button variant="text" size="sm" color="blue-gray">
                Sign In
              </Button>
            </a>
            <a href="./">
              <Button size="sm" color="dark">
                Sign Up
              </Button>
            </a>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <a href="/astro-launch-ui/login">
              <Button variant="outlined" size="sm" color="dark" fullWidth>
                Sign In
              </Button>
            </a>
            <a href="/astro-launch-ui/signup">
              <Button size="sm" fullWidth color="dark">
                Sign Up
              </Button>
            </a>
          </div>
        </Collapse>
      </Navbar>
    </ThemeProvider>
  );
}
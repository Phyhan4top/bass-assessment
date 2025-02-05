"use client";
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="">
      <Navbar className="sticky top-0 z-10 max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-inherit text-black">
        <div className="flex items-center justify-around h-[95px]">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-extrabold text-2xl text-[#0166ff]"
          >
            SHARP EVENT
          </Typography>
          <div className="flex items-center justify-around gap-4 h-full w-[45%]">
            <div className="text-lg text-black font-bold">List Your Space</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden py-3 px-9 lg:inline-block text-[#0166ff] border-[#0166ff] border-[2px] rounded-xl"
              >
                <span>Log In</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden py-3 px-9 lg:inline-block rounded-xl hover:bg-blue-700 bg-[#0166ff]"
              >
                <span>Sign in</span>
              </Button>
            </div>{" "}
            <IconButton
              variant="text"
              className=" h-6 w-6 text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          <div className="flex items-center gap-x-1">
            <Button
              variant="text"
              size="sm"
              className="text-[#0166ff] border-[#0166ff] border-[2px] rounded-xl hover:bg-blue-700 w-full"
            >
              Log in
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className="text-white bg-[#0166ff] rounded-xl hover:bg-blue-700 w-full"
            >
              Sign up
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}

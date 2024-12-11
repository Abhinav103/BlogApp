import { Navbar } from "flowbite-react";
import Image from "./Image";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
const NavBarComp = () => {
  return (
    <>
      <Navbar className="my-3 rounded-xl !bg-transparent">
        <Navbar.Brand
          className="flex justify-between gap-4 cursor-pointer "
          href="/"
        >
          <Image src="logo.png" alt="Blog App Image" w={32} h={32} />
          <span className="text-xl text-black font-bold">Blog Mint</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" className="text-black">
            Home
          </Navbar.Link>
          <Navbar.Link href="#" className="text-black">
            Trending
          </Navbar.Link>
          <Navbar.Link href="#" className="text-black">
            Most Popular
          </Navbar.Link>
          <Navbar.Link href="/about" className="text-black">
            About
          </Navbar.Link>
          <SignedOut>
            <Navbar.Link href="/login">
              <button className="bg-blue-700 text-white py-2 px-4  rounded-3xl ">
                Login 
              </button>
            </Navbar.Link>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBarComp;

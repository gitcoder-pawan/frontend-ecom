import { useState, useEffect } from 'react'
import './App.css'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle, Link } from '@nextui-org/react';
import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from './assets/logo-color.png'; // Adjust the path as needed
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
    
      <Navbar variant="floating" className="light:bg-white shadow-md dark:bg-zinc-900">
        <NavbarBrand className=''>
          <Link href="/" className="text-xl font-bold text-black">
            {/* <img src={logo} alt="Brand Logo" className=" mr-2" /> */}
            <span className='text-warning-600 text-2l'>Infy</span>
            <span className='text-secondary-600'>Tech</span>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden lg:flex space-x-4">
          <NavbarItem>
            <Link href="/" className="text-black dark:text-white">Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/about" className="text-black dark:text-white">About</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/services" className="text-black dark:text-white">Services</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/contact" className="text-black dark:text-white">Contact</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenuToggle aria-label="toggle navigation" onClick={toggleMenu} className="lg:hidden">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </NavbarMenuToggle>
        <NavbarMenu isopen={menuOpen.toString()} className="lg:hidden">
          <NavbarContent className="flex flex-col space-y-4">
            <NavbarItem>
              <Link href="/" className="text-black dark:text-white">Home</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/about" className="text-black dark:text-white">About</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/services" className="text-black dark:text-white">Services</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/contact" className="text-black dark:text-white">Contact</Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarMenu>
        <span
          onClick={toggleDarkMode}
          className="text-3xl p-3 text-black dark:text-white"
        >
          {darkMode ? <CiLight/> : <MdDarkMode/>}
        </span>
      </Navbar>
    </>
  )
}

export default App

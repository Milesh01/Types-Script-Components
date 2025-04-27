"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  label: string;
  link: string;
  dropdown: boolean;
  items?: {
    label: string;
    href: string;
  }[];
}

const menuItems: MenuItem[] = [
  { label: "About Us", link: "/about-us", dropdown: false },
  {
    label: "Locations",
    link: "#",
    dropdown: true,
    items: [
      { label: "Delhi", href: "#" },
      { label: "Mumbai", href: "#" },
    ],
  },
  {
    label: "Speciality",
    link: "#",
    dropdown: true,
    items: [
      { label: "Cardiac Care", href: "#" },
      { label: "Cancer Care", href: "#" },
      { label: "Neurosciences", href: "#" },
      { label: "Gastrosciences", href: "#" },
      { label: "Orthopaedics", href: "#" },
      { label: "Renal Care", href: "#" },
      { label: "View All Specialities", href: "#" },
    ],
  },
  {
    label: "Health Library",
    link: "#",
    dropdown: true,
    items: [
      { label: "Articles", href: "#" },
      { label: "Videos", href: "#" },
      { label: "FAQs", href: "#" },
    ],
  },
  {
    label: "Services",
    link: "#",
    dropdown: true,
    items: [
      { label: "Consultation", href: "#" },
      { label: "Diagnostics", href: "#" },
      { label: "Surgery", href: "#" },
      { label: "Service Details", href: "/service-details" },
    ],
  },
  {
    label: "International Patients",
    link: "#",
    dropdown: true,
    items: [
      { label: "Visa Assistance", href: "#" },
      { label: "Travel Help", href: "#" },
      { label: "Patient Stories", href: "#" },
    ],
  },
  { label: "Contact Us", link: "#", dropdown: false },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const handleLinkClick = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        opacity: { duration: 0.2 },
        height: { duration: 0.3 }
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: {
        opacity: { duration: 0.2 },
        height: { duration: 0.3 }
      }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        opacity: { duration: 0.2 },
        height: { duration: 0.3 }
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: {
        opacity: { duration: 0.1 },
        height: { duration: 0.2 }
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-primary-teal shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1740647826/WSClinicLogo_mk.svg"
            alt="ws clinic logo"
            width={160}
            height={60}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-white">
          {menuItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 hover:text-gray-300 transition focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === item.label}
                  aria-controls={`${item.label}-menu`}
                  onClick={() => toggleDropdown(item.label)}
                >
                  {item.label}
                  <IoMdArrowDropdown
                    className={`text-lg transition-transform duration-300 ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      id={`${item.label}-menu`}
                      className="absolute top-full left-0 mt-2 w-56 bg-white text-primary-teal shadow-md rounded-md p-2 z-40"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                    >
                      {item.items?.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="block px-3 py-2 hover:bg-primary-red/10 rounded"
                          onClick={handleLinkClick}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.link}
                className="hover:text-gray-300 transition"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/request-call"
            className="ml-4 bg-primary-red hover:bg-primary-red/85 text-white px-4 py-2 rounded-md text-sm transition shadow"
          >
            Request A Call
          </Link>
        </nav>

        <button
          className="lg:hidden text-white text-xl"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden absolute bg-white shadow-md border-t border-gray-200 px-4 overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="py-4 space-y-4 text-gray-700">
              {menuItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label}>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center justify-between w-full text-left py-2 font-medium"
                      aria-haspopup="true"
                      aria-expanded={openDropdown === item.label}
                      aria-controls={`${item.label}-menu-mobile`}
                    >
                      {item.label}
                      <IoMdArrowDropdown
                        className={`text-lg transition-transform duration-300 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          id={`${item.label}-menu-mobile`}
                          className="pl-4 space-y-2 overflow-hidden"
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={dropdownVariants}
                        >
                          {item.items?.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              className="block py-1 hover:text-gray-300"
                              onClick={handleLinkClick}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.link}
                    className="block py-2 hover:text-gray-300"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                href="/request-call"
                className="inline-block w-full text-center bg-[#ce3033] hover:bg-[#b02a2c] text-white px-4 py-2 rounded-md transition"
                onClick={handleLinkClick}
              >
                Request A Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
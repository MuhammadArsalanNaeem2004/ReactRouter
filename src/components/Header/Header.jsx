import React from 'react'
import {Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
      <header className="shadow  rounded-2xl sticky z-50 top-0">
          <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
              <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                  <Link to="/" className="flex items-center">
                      <img
                          src="data:image/png;base64,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"
                          className="mr-3 h-14"
                          alt="Logo"
                      />
                  </Link>
                  <div className="flex items-center lg:order-2">
                      <Link
                          to="#"
                          className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                      >
                          Log in
                      </Link>
                      <Link
                          to="#"
                          className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                      >
                          Get started
                      </Link>
                  </div>
                  <div
                      className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                      id="mobile-menu-2"
                  >
                      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                          <li>
                              <NavLink
                              to="/"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-red-500":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-700 lg:p-0`
                                  }
                              >
                                  Home
                              </NavLink>
                          </li>
                          <li>
                              <NavLink
                              to="/about"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-red-500":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-700 lg:p-0`
                                  }
                              >
                                  About
                              </NavLink>    
                          </li>
                          <li>
                              <NavLink
                              to="/contact"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-red-500":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-700 lg:p-0`
                                  }
                              >
                                  Contact
                              </NavLink>
                          </li>
                          <li>
                              <NavLink
                              to="/github"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-red-500":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-700 lg:p-0`
                                  }
                              >
                                  Github
                              </NavLink>
                          </li>
                          
                          
                      </ul>
                  </div>
              </div>
          </nav>
      </header>
  );
}



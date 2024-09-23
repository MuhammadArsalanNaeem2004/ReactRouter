import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Lorem ipsum dolor, sit amet consectetur, is a filler text commonly used in design 
                      and typesetting, and doesn’t have any direct meaning. It’s meant to give a sense 
                      of how text will look in a layout.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Are we less worthy of enjoying privileges and fairness when the law expedites the
                       process? Shouldn't those without power and the unknown be able to state their
                        case with the same freedom as those who receive privileges? Will their dignity
                         and voice always remain overshadowed?
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
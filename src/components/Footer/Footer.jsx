import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="data:image/png;base64,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 "
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/MuhammadArsalanNaeem2004"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
  <a
    href="https://www.linkedin.com/in/muhammad-arsalan-naeem-20834a287"
    className="hover:underline"
    target="_blank"
    rel="noreferrer"
  >
    Linkedin
  </a>
  {/* <Link to="/" className="hover:underline">
      linkedin
  </Link> */}
</li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2024
                        <a href="https://www.linkedin.com/in/muhammad-arsalan-naeem-20834a287" className="hover:underline">
                            arsalannaeem
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

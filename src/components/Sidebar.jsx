import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Sidebar = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 w-[250px] h-screen bg-[#1A1A1D] text-[#BABAC1] flex flex-col px-4 py-3 shadow-lg transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative`}
      >
        <div className="flex items-center justify-between mt-3 relative">
          <div className="w-[40px] h-[40px]">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain cursor-pointer"
            />
          </div>

          <div className="hidden lg:flex w-[40px] h-[40px] items-center justify-center cursor-pointer group">
            <svg
              width="40"
              height="40"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:fill-[#EBEBEF] transition-colors"
            >
              <path
                d="M17.3333 22H14.6666M20 13.3333C20 12.2724 19.5785 11.255 18.8284 10.5049C18.0783 9.75474 17.0608 9.33331 16 9.33331C14.9391 9.33331 13.9217 9.75474 13.1715 10.5049C12.4214 11.255 12 12.2724 12 13.3333C12 15.3934 11.4803 16.804 10.8997 17.7369C10.4101 18.5239 10.1652 18.9174 10.1742 19.0272C10.1841 19.1487 10.2099 19.195 10.3078 19.2677C10.3963 19.3333 10.795 19.3333 11.5925 19.3333H20.4074C21.2049 19.3333 21.6037 19.3333 21.6921 19.2677C21.7901 19.195 21.8158 19.1487 21.8258 19.0272C21.8347 18.9174 21.5899 18.5239 21.1002 17.7369C20.5197 16.804 20 15.3934 20 13.3333Z"
                stroke="#7E808A"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:fill-[#EBEBEF] transition-colors"
              />
            </svg>
          </div>

          {/* Button for close Sidebar */}
          <button
            className="absolute top-0 right-0 p-2 rounded-md lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.293 4.293a1 1 0 011.414 0L10 6.586l3.293-3.293a1 1 0 111.414 1.414L11.414 8l3.293 3.293a1 1 0 01-1.414 1.414L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 8 5.293 4.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-4 mt-6 mb-3">
          <div className="bg-[#363639] p-3 rounded-lg border border-[#35373B]">
            <p className="text-sm text-gray-300">My proxies (0)</p>

            <button className="bg-[#FCFF72] mt-3 w-full text-black py-2 rounded-full font-semibold border border-[#D5D747] hover:bg-[#D0D330] transition-colors">
              Purchase proxies
            </button>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          <Link
            to="/"
            className="flex items-center gap-3 p-2 hover:bg-[#363639]  hover:text-[#EBEBEF] rounded transition-colors group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:fill-[#EBEBEF] transition-colors"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.57919 0.265588C7.81268 0.035901 8.18722 0.035901 8.42072 0.265588L15.6207 7.34827C15.8569 7.58065 15.8601 7.96054 15.6277 8.19677C15.3953 8.433 15.0154 8.43612 14.7792 8.20374L13.8333 7.27325V13.3333C13.8333 13.6095 13.6094 13.8333 13.3333 13.8333H2.66662C2.39048 13.8333 2.16662 13.6095 2.16662 13.3333V7.27325L1.22072 8.20374C0.984485 8.43612 0.604599 8.433 0.372217 8.19677C0.139835 7.96054 0.142955 7.58065 0.379186 7.34827L7.57919 0.265588ZM7.99995 1.53497L12.8333 6.28954V12.8333H10.6333V9.06666C10.6333 8.79052 10.4094 8.56666 10.1333 8.56666H6.93328C6.65714 8.56666 6.43328 8.79052 6.43328 9.06666V12.8333H3.16662V6.28954L7.99995 1.53497ZM7.43328 12.8333H9.63328V9.56666H7.43328V12.8333Z"
                fill="#7E808A"
                className="group-hover:fill-[#EBEBEF] transition-colors"
              />
            </svg>
            Dashboard
          </Link>

          <Link
            to="/proxies"
            className="flex items-center gap-3 p-2 hover:bg-[#363639]  hover:text-[#EBEBEF] rounded transition-colors group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:fill-[#EBEBEF] transition-colors"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.09998 3.66669C2.09998 3.39055 2.32383 3.16669 2.59998 3.16669H13.4C13.6761 3.16669 13.9 3.39054 13.9 3.66669V10.2C13.9 10.4762 13.6761 10.7 13.4 10.7H13.3333H2.66664H2.59998C2.32383 10.7 2.09998 10.4762 2.09998 10.2V3.66669ZM2.16664 11.6365C1.54949 11.4506 1.09998 10.8778 1.09998 10.2V3.66669C1.09998 2.83826 1.77155 2.16669 2.59998 2.16669H13.4C14.2284 2.16669 14.9 2.83826 14.9 3.66669V10.2C14.9 10.8778 14.4505 11.4506 13.8333 11.6365V12.3334C13.8333 13.1618 13.1617 13.8334 12.3333 13.8334H3.66664C2.83821 13.8334 2.16664 13.1618 2.16664 12.3334V11.6365ZM12.8333 11.7V12.3334C12.8333 12.6095 12.6095 12.8334 12.3333 12.8334H3.66664C3.3905 12.8334 3.16664 12.6095 3.16664 12.3334V11.7H12.8333ZM5.36664 6.93335C5.36664 6.65721 5.5905 6.43335 5.86664 6.43335H7.49998V4.80002C7.49998 4.52388 7.72383 4.30002 7.99998 4.30002C8.27612 4.30002 8.49998 4.52388 8.49998 4.80002V6.43335H10.1333C10.4095 6.43335 10.6333 6.65721 10.6333 6.93335C10.6333 7.2095 10.4095 7.43335 10.1333 7.43335H8.49998V9.06669C8.49998 9.34283 8.27612 9.56669 7.99998 9.56669C7.72383 9.56669 7.49998 9.34283 7.49998 9.06669V7.43335H5.86664C5.5905 7.43335 5.36664 7.2095 5.36664 6.93335Z"
                fill="#7E808A"
                className="group-hover:fill-[#EBEBEF] transition-colors"
              />
            </svg>
            My proxies
          </Link>

          <Link
            to="/top-up"
            className="flex items-center gap-3 p-2 hover:bg-[#363639]  hover:text-[#EBEBEF] rounded transition-colors group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:fill-[#EBEBEF] transition-colors"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.16669 2.59998C3.16669 2.32383 3.39055 2.09998 3.66669 2.09998H9.71914C9.85175 2.09998 9.97892 2.15265 10.0727 2.24642L12.6869 4.86064C12.7807 4.9544 12.8334 5.08158 12.8334 5.21419V13.4C12.8334 13.6761 12.6095 13.9 12.3334 13.9H3.66669C3.39055 13.9 3.16669 13.6761 3.16669 13.4V2.59998ZM3.66669 1.09998C2.83826 1.09998 2.16669 1.77155 2.16669 2.59998V13.4C2.16669 14.2284 2.83826 14.9 3.66669 14.9H12.3334C13.1618 14.9 13.8334 14.2284 13.8334 13.4V5.21419C13.8334 4.81636 13.6753 4.43483 13.394 4.15353L10.7798 1.53932C10.4985 1.25801 10.117 1.09998 9.71914 1.09998H3.66669ZM4.80002 4.29998C4.52388 4.29998 4.30002 4.52383 4.30002 4.79998C4.30002 5.07612 4.52388 5.29998 4.80002 5.29998H8.00002C8.27616 5.29998 8.50002 5.07612 8.50002 4.79998C8.50002 4.52383 8.27616 4.29998 8.00002 4.29998H4.80002ZM4.80002 7.49998C4.52388 7.49998 4.30002 7.72383 4.30002 7.99998C4.30002 8.27612 4.52388 8.49998 4.80002 8.49998H11.2C11.4762 8.49998 11.7 8.27612 11.7 7.99998C11.7 7.72383 11.4762 7.49998 11.2 7.49998H4.80002ZM4.80002 10.7C4.52388 10.7 4.30002 10.9238 4.30002 11.2C4.30002 11.4761 4.52388 11.7 4.80002 11.7H11.2C11.4762 11.7 11.7 11.4761 11.7 11.2C11.7 10.9238 11.4762 10.7 11.2 10.7H4.80002Z"
                fill="#7E808A"
                className="group-hover:fill-[#EBEBEF] transition-colors"
              />
            </svg>
            Top up balance
          </Link>

          <Link
            to="/transactions"
            className="flex items-center gap-3 p-2 hover:bg-[#363639]  hover:text-[#EBEBEF] rounded transition-colors group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:fill-[#EBEBEF] transition-colors"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.09998 3.66669C2.09998 3.39055 2.32383 3.16669 2.59998 3.16669H13.4C13.6761 3.16669 13.9 3.39054 13.9 3.66669V10.2C13.9 10.4762 13.6761 10.7 13.4 10.7H13.3333H2.66664H2.59998C2.32383 10.7 2.09998 10.4762 2.09998 10.2V3.66669ZM2.16664 11.6365C1.54949 11.4506 1.09998 10.8778 1.09998 10.2V3.66669C1.09998 2.83826 1.77155 2.16669 2.59998 2.16669H13.4C14.2284 2.16669 14.9 2.83826 14.9 3.66669V10.2C14.9 10.8778 14.4505 11.4506 13.8333 11.6365V12.3334C13.8333 13.1618 13.1617 13.8334 12.3333 13.8334H3.66664C2.83821 13.8334 2.16664 13.1618 2.16664 12.3334V11.6365ZM12.8333 11.7V12.3334C12.8333 12.6095 12.6095 12.8334 12.3333 12.8334H3.66664C3.3905 12.8334 3.16664 12.6095 3.16664 12.3334V11.7H12.8333ZM5.36664 6.93335C5.36664 6.65721 5.5905 6.43335 5.86664 6.43335H7.49998V4.80002C7.49998 4.52388 7.72383 4.30002 7.99998 4.30002C8.27612 4.30002 8.49998 4.52388 8.49998 4.80002V6.43335H10.1333C10.4095 6.43335 10.6333 6.65721 10.6333 6.93335C10.6333 7.2095 10.4095 7.43335 10.1333 7.43335H8.49998V9.06669C8.49998 9.34283 8.27612 9.56669 7.99998 9.56669C7.72383 9.56669 7.49998 9.34283 7.49998 9.06669V7.43335H5.86664C5.5905 7.43335 5.36664 7.2095 5.36664 6.93335Z"
                fill="#7E808A"
                className="group-hover:fill-[#EBEBEF] transition-colors"
              />
            </svg>
            Transactions
          </Link>
        </nav>

        <div className="mt-auto border-t border-gray-700 pt-3">
          <Link
            to="/support"
            className="flex items-center gap-3 p-2 hover:bg-[#363639]  hover:text-[#EBEBEF] rounded transition-colors group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:fill-[#EBEBEF] transition-colors"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.967163 7.99972C0.967163 4.11568 4.11581 0.967033 7.99985 0.967033C11.8839 0.967033 15.0325 4.11568 15.0325 7.99972C15.0325 11.8837 11.8839 15.0324 7.99985 15.0324C4.11581 15.0324 0.967163 11.8837 0.967163 7.99972ZM7.99985 1.91703C4.64048 1.91703 1.91716 4.64035 1.91716 7.99972C1.91716 11.3591 4.64048 14.0824 7.99985 14.0824C11.3592 14.0824 14.0825 11.3591 14.0825 7.99972C14.0825 4.64035 11.3592 1.91703 7.99985 1.91703ZM8.79987 11.2C8.79987 11.6418 8.4417 12 7.99987 12C7.55804 12 7.19987 11.6418 7.19987 11.2C7.19987 10.7582 7.55804 10.4 7.99987 10.4C8.4417 10.4 8.79987 10.7582 8.79987 11.2ZM6.41665 6.66668C6.41665 5.92212 7.05839 5.21668 7.99999 5.21668C8.94158 5.21668 9.58332 5.92212 9.58332 6.66668C9.58332 7.21103 9.27998 7.48822 8.78109 7.79129C8.72428 7.8258 8.65937 7.8635 8.59031 7.90361L8.5903 7.90362C8.39537 8.01683 8.16738 8.14923 7.99528 8.28333C7.74043 8.4819 7.44999 8.79741 7.44999 9.28002C7.44999 9.58377 7.69623 9.83002 7.99999 9.83002C8.30374 9.83002 8.54999 9.58377 8.54999 9.28001L8.54994 9.27875C8.5498 9.27618 8.54969 9.27426 8.55624 9.26391C8.56857 9.24446 8.59946 9.20705 8.67136 9.15103C8.78158 9.06516 8.90524 8.99348 9.06756 8.8994L9.06757 8.89939L9.06769 8.89932C9.15116 8.85093 9.24486 8.79662 9.35221 8.73141C9.92 8.38648 10.6833 7.82367 10.6833 6.66668C10.6833 5.27791 9.51173 4.11668 7.99999 4.11668C6.48825 4.11668 5.31665 5.27791 5.31665 6.66668C5.31665 6.97044 5.5629 7.21668 5.86665 7.21668C6.17041 7.21668 6.41665 6.97044 6.41665 6.66668Z"
                fill="#7E808A"
                className="group-hover:fill-[#EBEBEF] transition-colors"
              />
            </svg>
            Support
          </Link>

          <div className="flex items-center gap-3 p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="4" fill="#363639" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 4.96499C9.88201 4.96499 8.16502 6.68198 8.16502 8.79999C8.16502 10.6076 9.41559 12.1231 11.0987 12.5285C9.75796 12.663 8.61256 13.1147 7.75992 13.955C6.72051 14.9794 6.19171 16.5067 6.19171 18.5066C6.19171 18.7689 6.40438 18.9816 6.66671 18.9816C6.92905 18.9816 7.14171 18.7689 7.14171 18.5066C7.14171 16.6666 7.62621 15.4206 8.42676 14.6316C9.22871 13.8413 10.4234 13.435 12 13.435C13.5765 13.435 14.7713 13.8413 15.5733 14.6316C16.3738 15.4206 16.8583 16.6666 16.8583 18.5066C16.8583 18.7689 17.071 18.9816 17.3333 18.9816C17.5956 18.9816 17.8083 18.7689 17.8083 18.5066C17.8083 16.5067 17.2795 14.9794 16.2401 13.955C15.3874 13.1147 14.242 12.663 12.9013 12.5285C14.5844 12.1231 15.835 10.6076 15.835 8.79999C15.835 6.68198 14.118 4.96499 12 4.96499Z"
                fill="#EBEBEF"
              />
            </svg>
            <p className="text-gray-300">Username239845</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

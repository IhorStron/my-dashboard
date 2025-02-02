import "./styles/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(122.0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="flex bg-primary text-textLight min-h-screen w-screen">
        {/* Button for open Sidebar */}
        <button
          className="fixed top-4 left-4 z-50 p-2 bg-[#000] text-white border border-[#363639] rounded-lg lg:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 w-64 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform lg:relative lg:translate-x-0 bg-primary  min-h-screen flex flex-col text-gray-300 z-50`}
        >
          <Sidebar
            balance={balance}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
        </div>

        <div className="flex-1 min-h-screen flex flex-col bg-primary p-8 sm:p-12 w-full max-w-[1400px] mx-auto relative">
          <div className="fixed top-0 left-0 right-0 bg-[#000] px-8 py-4 flex justify-between items-center shadow-md z-40 lg:ml-64 border-b border-[#363639] mb-4">
            <div className="bg-[#141417] px-4 py-2 rounded-lg text-lg text-[#363639] flex items-center space-x-3  ml-12 lg:ml-0">
              <span className="font-semibold text-[#363639]">Balance:</span>
              <span className="text-white">${balance.toFixed(2)}</span>

              <button
                className="ml-2 text-[#FCFF72] hover:text-[#D0D330] text-2xl font-bold flex items-center pb-1 justify-center leading-none"
                onClick={() => console.log("Поповнити баланс")}
              >
                +
              </button>
            </div>

            <div>
              <div className="relative">
                <select
                  className="bg-[#141417] text-[#363639] rounded-lg appearance-none 
               text-base px-4 py-2 w-20 sm:hidden"
                >
                  <option value="en">EN</option>
                  <option value="ua">UA</option>
                </select>

                <select
                  className="bg-[#141417] text-[#363639] rounded-lg appearance-none 
               text-lg px-7 py-2  w-30 hidden sm:block"
                >
                  <option value="english">English</option>
                  <option value="ukrainian">Ukrainian</option>
                </select>

                <div className="absolute top-1/2 right-3 sm:right-4 transform -translate-y-1/2 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <Routes>
              <Route path="/" element={<Dashboard balance={balance} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

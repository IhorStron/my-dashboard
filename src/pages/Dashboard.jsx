import logo from "../assets/logo.png";

const Dashboard = ({ balance }) => {
  return (
    <div className="w-full flex flex-col px-6 sm:px-12 pt-6 max-w-[1400px] mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-white">Overview</h2>

      <div className="grid grid-cols-2 gap-6 w-full max-w-[1100px] mx-auto">
        <div className="p-6 bg-[#1A1A1D] rounded-lg shadow flex flex-col space-y-4">
          <div className="rounded-full self-start">
            <div className="w-[50px] h-[50px]">
              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-contain cursor-pointer"
              />
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-400">Proxies</p>
            <p className="text-2xl font-semibold">3</p>
          </div>
        </div>

        <div className="p-6 bg-[#1A1A1D] rounded-lg shadow flex flex-col space-y-4">
          <div className="rounded-full self-start">
            <div className="w-[50px] h-[50px]">
              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-contain cursor-pointer"
              />
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-400">Amount Spent</p>
            <p className="text-2xl font-semibold">${balance.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 text-white">
        Latest Transactions
      </h2>

      <div className="mt-6 bg-[#1A1A1D] p-6 rounded-lg w-full max-w-[1100px] mx-auto">
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-[#363639]">
          <thead className="bg-[#363639] text-white">
            <tr>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Method</th>
              <th className="py-2 px-4">Created On</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                name: "NL KPN 1 Month",
                method: "BTC",
                date: "16/12/2023",
                amount: "$89.00",
                status: "Active",
              },
              {
                name: "NL KPN 1 Month",
                method: "BTC",
                date: "14/11/2023",
                amount: "$89.00",
                status: "Active",
              },
              {
                name: "NL KPN 1 Month",
                method: "BTC",
                date: "14/10/2023",
                amount: "$89.00",
                status: "Active",
              },
              {
                name: "NL KPN 1 Month",
                method: "BTC",
                date: "15/09/2023",
                amount: "$89.00",
                status: "Cancelled",
              },
            ].map((tx, index) => (
              <tr key={index} className="border-b border-[#363639]">
                <td className="py-2 px-4">{tx.name}</td>
                <td className="py-2 px-4">{tx.method}</td>
                <td className="py-2 px-4">{tx.date}</td>
                <td className="py-2 px-4">{tx.amount}</td>
                <td className="py-2 px-4 text-center">
                  <span
                    className={`inline-flex items-center justify-center min-w-[70px] h-[25px] px-3 py-1 rounded-lg text-sm font-medium
      ${
        tx.status === "Active"
          ? "bg-[#123E2E] text-white"
          : "bg-gray-600 text-white"
      }
    `}
                  >
                    {tx.status}
                  </span>
                </td>
                <td className="py-2 px-4 text-center">
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.62494 8C3.62494 8.62132 3.12126 9.125 2.49994 9.125C1.87862 9.125 1.37494 8.62132 1.37494 8C1.37494 7.37868 1.87862 6.875 2.49994 6.875C3.12126 6.875 3.62494 7.37868 3.62494 8ZM8.62494 8C8.62494 8.62132 8.12126 9.125 7.49994 9.125C6.87862 9.125 6.37494 8.62132 6.37494 8C6.37494 7.37868 6.87862 6.875 7.49994 6.875C8.12126 6.875 8.62494 7.37868 8.62494 8ZM12.4999 9.125C13.1213 9.125 13.6249 8.62132 13.6249 8C13.6249 7.37868 13.1213 6.875 12.4999 6.875C11.8786 6.875 11.3749 7.37868 11.3749 8C11.3749 8.62132 11.8786 9.125 12.4999 9.125Z"
                      fill="white"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        <div className="flex justify-center items-center gap-3 mt-6 text-[#7E808A]">
  {/* Ліва стрілка (тільки на маленьких екранах) */}
  <button className="p-2 rounded-full bg-[#2A2A2D] hover:bg-[#363639] transition sm:hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#7E808A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  </button>

  {/* Нумерація сторінок (тільки на великих екранах) */}
  <div className="hidden sm:flex space-x-3">
    {[1, 2, 3].map((num) => (
      <button
        key={num}
        className="w-10 h-10 flex items-center justify-center rounded-full text-[#7E808A] transition 
        hover:bg-[#E2E4694D] hover:border hover:border-[#E2E469] hover:text-white"
      >
        {num}
      </button>
    ))}

    <span className="text-[#7E808A] flex items-center justify-center">...</span>

    {[8, 9, 10].map((num) => (
      <button
        key={num}
        className="w-10 h-10 flex items-center justify-center rounded-full text-[#7E808A] transition 
        hover:bg-[#E2E4694D] hover:border hover:border-[#E2E469] hover:text-white"
      >
        {num}
      </button>
    ))}
  </div>

  {/* Права стрілка (тільки на маленьких екранах) */}
  <button className="p-2 rounded-full bg-[#2A2A2D] hover:bg-[#363639] transition sm:hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E2E469"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  </button>
</div>

      </div>
    </div>
  );
};

export default Dashboard;

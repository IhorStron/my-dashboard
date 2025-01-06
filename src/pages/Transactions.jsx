const Transactions = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Transactions</h1>
      <table className="mt-5 w-full text-left border border-gray-700">
        <thead className="bg-gray-800">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Method</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-700">
            <td className="p-2">NL KPN 1 Month</td>
            <td className="p-2">BTC</td>
            <td className="p-2">$80.00</td>
            <td className="p-2 text-green-400">Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
// 6. TopUpBalance.jsx
import { useState } from 'react';

const TopUpBalance = ({ balance, setBalance }) => {
  const [amount, setAmount] = useState("");
  
  const handleTopUp = () => {
    const topUpValue = parseFloat(amount);
    if (!isNaN(topUpValue) && topUpValue > 0) {
      setBalance(balance + topUpValue);
      setAmount("");
    } else {
      alert("Please enter a valid amount");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold">Top Up Balance</h1>
      <div className="mt-5 p-5 bg-gray-800 rounded-lg">
        <label className="block text-lg mb-2">Amount:</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          className="w-full p-2 bg-gray-700 rounded" 
          placeholder="$0.00" 
        />
        <button onClick={handleTopUp} className="mt-3 p-2 bg-green-500 hover:bg-green-600 rounded text-white">
          Top Up
        </button>
      </div>
    </div>
  );
};

export default TopUpBalance;
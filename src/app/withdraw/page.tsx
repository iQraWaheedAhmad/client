'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const plans = [
  { priceUSD: 50, profitUSD: 2 },
  { priceUSD: 100, profitUSD: 4 },
  { priceUSD: 150, profitUSD: 6 },
  { priceUSD: 250, profitUSD: 10 },
  { priceUSD: 500, profitUSD: 20 },
  { priceUSD: 1000, profitUSD: 40 },
  { priceUSD: 1500, profitUSD: 60 },
  { priceUSD: 2500, profitUSD: 100 },
];

export default function WithdrawPage() {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [asset, setAsset] = useState('BTC');
  const [loading, setLoading] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

  const handleWithdraw = async () => {
    if (!address || !amount) {
      setError('Please enter address and amount');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await fetch('/api/withdraw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address, amount, asset }),
      });

      setPopupVisible(true);
      setAddress('');
      setAmount('');

      // Redirect after 5 seconds
      setTimeout(() => {
        router.push('/');
      }, 5000);

    } catch (err: any) {
      setError(err.message || 'Withdraw failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-6">Withdraw Funds</h1>

      <div className="bg-gray-800 p-6 rounded w-full max-w-md">
        <label className="block mb-2 text-sm font-medium">Asset</label>
        <select
          value={asset}
          onChange={e => setAsset(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-700 text-white"
        >
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
          <option value="USDT">USDT</option>
        </select>

        <label className="block mb-2 text-sm font-medium">Recipient Address</label>
        <input
          type="text"
          value={address}
          onChange={e => setAddress(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-700 text-white"
          placeholder="Enter wallet address"
        />

        <label className="block mb-2 text-sm font-medium">Profit (USD)</label>
        <select
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-700 text-white"
        >
          <option value="">Select Profit</option>
          {plans.map((plan, index) => (
            <option key={index} value={plan.profitUSD}>
              ${plan.profitUSD}
            </option>
          ))}
        </select>

        <button
          onClick={handleWithdraw}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Withdraw'}
        </button>

        {error && <p className="text-red-400 mt-4">{error}</p>}
      </div>

      {/* POPUP - Only message, no confirmation */}
      {popupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded text-center max-w-sm">
            <h2 className="text-xl font-semibold mb-4">Withdrawal is in process...</h2>
            <p className="text-gray-300">Your request is being verified. You will receive your withdrawal within 12 hours.</p>
          </div>
        </div>
      )}
    </div>
  );
}

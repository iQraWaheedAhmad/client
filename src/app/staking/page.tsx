import Head from 'next/head';

export default function BinanceStaking() {
  return (
    <>
      <Head>
        <title>Binance Staking - How to Join</title>
        <meta name="description" content="Step-by-step guide to stake USDT (TRC20) using Binance Wallet and start earning daily." />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-center">How to Join Our USDT (TRC20) Staking Program</h1>
        <p className="mb-8 text-center text-lg">Follow these steps to stake USDT (TRC20) and earn daily profits.</p>

        {/* Step 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Step 1: Copy the Wallet Address</h2>
          <p>Send USDT (TRC20) to the following address:</p>
          <code className="block bg-gray-100 text-sm p-3 mt-2 rounded">
            TJuZCvYANND2emRa4ssrWqpZswPFUaJVWQ
          </code>
        </div>

        {/* Step 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Step 2: Open Your Binance App or Wallet</h2>
          <ol className="list-decimal ml-5 space-y-2">
            <li>Open Binance app or use your Tron-compatible wallet (e.g., Trust Wallet, TronLink).</li>
            <li>Ensure your wallet is funded with USDT and the network is set to <strong>TRC-20</strong>.</li>
          </ol>
        </div>

        {/* Step 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Step 3: Send USDT</h2>
          <ol className="list-decimal ml-5 space-y-2">
            <li>Tap on <strong>"Withdraw" or "Send"</strong> in your wallet.</li>
            <li>Paste the address: 
              <code className="bg-gray-100 px-1 rounded ml-1">TJuZCvYANND2emRa4ssrWqpZswPFUaJVWQ</code>
            </li>
            <li>Enter the amount you want to stake (e.g., 100 USDT).</li>
            <li>Select <strong>TRC20</strong> as the network.</li>
            <li>Review and confirm the transaction.</li>
          </ol>
        </div>

        {/* Step 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Step 4: Send Us the Transaction Hash (TXID)</h2>
          <ol className="list-decimal ml-5 space-y-2">
            <li>Once the transfer is complete, copy the transaction hash (TXID) from your wallet or TronScan.</li>
            <li>Send the TXID to us via our platform or contact channel.</li>
          </ol>
          <p className="mt-2">We will verify your deposit manually.</p>
        </div>

        {/* Step 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Step 5: Start Earning</h2>
          <p>After verification, you will start receiving daily profits (e.g., $2/day for 100 USDT).</p>
          <p>Your initial deposit is locked for 30 days. You can withdraw it after that period.</p>
        </div>

        {/* Notes */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <h3 className="text-lg font-bold mb-2">Important Notes</h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>Only send <strong>USDT via TRC20</strong>. Sending via the wrong network may result in loss of funds.</li>
            <li>Never share your wallet's seed phrase.</li>
            <li>Withdrawals before 30 days are not allowed.</li>
            <li>Keep your TXID for future reference.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

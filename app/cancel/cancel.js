export default function Cancel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-sm text-center">
        <h1 className="text-2xl font-bold text-red-600">Payment Canceled</h1>
        <p className="mt-4">
          Your payment was canceled. Please try again if needed.
        </p>
        <a
          href="/"
          className="mt-6 inline-block bg-[#B8EA80] text-black font-bold py-2 px-4 rounded-lg"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}

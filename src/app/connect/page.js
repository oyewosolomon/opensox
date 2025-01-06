import Link from "next/link";

export default function ConnectPage() {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col bg-gray-100">
        <Link href="/" className="flex place-items-center py-3 mx-auto">
          <img 
            src="/logo-white.svg" 
            alt="Company Logo" 
            className="h-8 md:h-10"
          />
          <span className="text-black font-bold text-2xl ml-2">
            Opensox
          </span>
        </Link>

        <div className="flex flex-col items-center justify-start my-auto px-4 md:px-10">
          <h1 className="text-2xl font-semibold mb-8">What interests you?</h1>

          <div className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden">
            <ul className="divide-y divide-gray-200 h-72 overflow-y-auto">
              {[
                'Customer Experience',
                'Data & Insights',
                'Engineering',
                'Finance & Legal',
                'International',
                'Marketing',
                'People',
                'Product & Design',
                'Sales',
                'All',
              ].map((item) => (
                <li key={item} className="px-6 py-4 flex justify-between items-center hover:bg-gray-50">
                  <span className="text-gray-700">{item}</span>
                  <input type="radio" name="interest" className="form-radio text-blue-600" />
                </li>
              ))}
            </ul>
          </div>

          <button className="mt-8 px-6 py-3 w-3/5 bg-black text-white rounded-lg hover:bg-gray-800">
            Continue
          </button>

          <p className="mt-4 text-sm text-gray-500">
            Already connected? <a href="#" className="text-blue-600">Sign in.</a>
          </p>
        </div>
      </div>

      {/* Right Section (Hidden on Mobile) */}
      <div className="hidden md:flex w-1/2 bg-blue-600 text-white flex-col justify-center px-16">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-xl">❤️</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Stand out from the crowd</h2>
              <p className="text-sm">Help us match your profile by telling us a bit more about yourself.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg- rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-xl">🔔</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Job subscriptions</h2>
              <p className="text-sm">Be the first to know about our job openings.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-whie rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-xl">💬</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Add recommendations</h2>
              <p className="text-sm">Add people who can recommend you as a colleague.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// pages/login.jsx
import Link from 'next/link';

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Forgot password</h2>
        <div className='text-gray-500'>
        Enter your email and we will send you a link to reset your password.
        </div>
        <form className="space-y-4">
          {/* Email Input */}
          <div className='mb-5 mt-3'>
            <label htmlFor="email" className="block text-sm font-bold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

        
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
           Send reset link
          </button>
        </form>

       
      </div>
    </div>
  );
}

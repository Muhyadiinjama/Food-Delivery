import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  // Example: protect dashboard (check token)
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // 🚫 Redirect if not logged in
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-10 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">🍽 Welcome to Your Dashboard</h1>
        <p className="text-lg text-gray-700">
          Manage your food orders, view your account info, and explore new meals!
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-green-100 rounded-xl p-5 hover:bg-green-200 cursor-pointer transition">
            <h2 className="text-xl font-semibold text-green-800">🍕 My Orders</h2>
            <p className="text-sm text-gray-600">Track your current and past orders</p>
          </div>
          <div className="bg-green-100 rounded-xl p-5 hover:bg-green-200 cursor-pointer transition">
            <h2 className="text-xl font-semibold text-green-800">🧑‍🍳 Account Info</h2>
            <p className="text-sm text-gray-600">Edit profile, email, password</p>
          </div>
        </div>
      </div>
    </div>
  );
}

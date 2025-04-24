import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Cek token saat komponen dimuat
  useEffect(() => {
    const cekin = localStorage.getItem('token');
    if (cekin) {
      alert('Anda sudah login');
        navigate('/');
     
    }
  }, [navigate]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("username:", username, "Password:", password);

    try {
      const response = await axios.post('http://localhost:5600/login', {
        username,
        password,
      });

      const { token } = response.data;

      localStorage.setItem('token', token);
      console.log("Login berhasil, token disimpan:", token);

      navigate('/');
    } catch (error) {
      if (error.response) {
        console.error("Login gagal:", error.response.data.message);
        alert("Login gagal: " + error.response.data.message);
      } else {
        console.error("Terjadi kesalahan saat login:", error.message);
        alert("Terjadi kesalahan jaringan.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

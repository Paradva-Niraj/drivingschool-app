import { useState } from "react";
import '../style/Login.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password, role });

    // role base api call
    if (role == 'admin') {
      try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/adminlogin`, {
          email,
          password,
        });

        const { token, role } = res.data;

        localStorage.setItem('token', token);
        localStorage.setItem('role', role);

        if (res) {
          navigate('/dashboard');
        }
        else {
          navigate('/login');
        }
      }
      catch(err){
        console.log(err.response?.data?.error || "Login failed");
      }
    }
  };

  return (
    <div className="login-container">
      <Link to="/" className="home-link" > &larr;Home</Link>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label>Email</label>
        <input
          type="email"
          required
          value={email}
          placeholder="Entter ID"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student" selected>Student</option>
          <option value="driver">Driver</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
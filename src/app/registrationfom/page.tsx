'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [registered, setRegistered] = useState(false);
  const router = useRouter();

  const validatePassword = (password: string): string => {
    if (password.length < 8) return 'At least 8 characters required.';
    if (!/[0-9]/.test(password)) return 'Include at least one number.';
    if (!/[A-Z]/.test(password)) return 'Include an uppercase letter.';
    if (!/[a-z]/.test(password)) return 'Include a lowercase letter.';
    if (!/[@!#?$%^&*]/.test(password)) return 'Include a special character.';
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setPasswordError('');

    const passwordValidationError = validatePassword(password);
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Registration failed.");
      setMessage("✅ Registration successful!");
      setRegistered(true);

      // Redirect to login after short delay
      setTimeout(() => {
        router.push("/login_route");
      }, 1000);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black py-12 px-4">
      <div className="max-w-md w-full bg-gray-900 p-8 rounded-lg shadow-lg space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-gray-400"
            >
              {showPassword ? '👁️' : '🙈'}
            </button>
          </div>
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-indigo-600 text-white py-2 rounded ${loading ? 'opacity-50' : 'hover:bg-indigo-700'}`}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        {message && <p className="text-white text-center">{message}</p>}

        <p className="text-white text-center">
          Already have an account?{' '}
          <Link href="/login_route" className="text-indigo-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;

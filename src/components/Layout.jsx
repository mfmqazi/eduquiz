import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, User, BookOpen, History, LayoutDashboard } from 'lucide-react';

export default function Layout({ children }) {
  const { currentUser, logout, userData } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  async function handleLogout() {
    try {
      await logout();
      navigate('/login');
    } catch {
      console.error("Failed to log out");
    }
  }

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-extrabold text-white flex items-center gap-2 drop-shadow-md">
            <BookOpen className="text-white" strokeWidth={2.5} />
            <span>EduQuiz</span>
          </Link>

          {currentUser && (
            <div className="flex items-center gap-6">
              <div className="hidden md:flex gap-1 bg-white/10 p-1 rounded-full backdrop-blur-sm">
                <Link
                  to="/"
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all font-medium ${isActive('/') ? 'bg-white text-indigo-600 shadow-sm' : 'text-white/90 hover:bg-white/10 hover:text-white'}`}
                >
                  <LayoutDashboard size={18} />
                  Dashboard
                </Link>
                <Link
                  to="/history"
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all font-medium ${isActive('/history') ? 'bg-white text-indigo-600 shadow-sm' : 'text-white/90 hover:bg-white/10 hover:text-white'}`}
                >
                  <History size={18} />
                  History
                </Link>
              </div>

              <div className="flex items-center gap-4 pl-6 border-l border-white/20">
                <div className="text-right hidden sm:block">
                  <div className="text-sm font-bold text-white">
                    {userData?.firstName} {userData?.lastName}
                  </div>
                  <div className="text-xs text-indigo-100 font-medium">@{userData?.username}</div>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-full hover:bg-white/20 text-white transition-all"
                  title="Log Out"
                >
                  <LogOut size={20} />
                </button>
              </div>
            </div>
          )}

          {!currentUser && (
            <div className="flex gap-4">
              <Link to="/login" className="text-white/90 hover:text-white font-medium px-4 py-2">Log In</Link>
              <Link to="/signup" className="px-5 py-2 rounded-full bg-white text-indigo-600 hover:bg-indigo-50 font-bold transition-all shadow-md">Sign Up</Link>
            </div>
          )}
        </div>
      </nav>

      <main className="flex-grow container mx-auto py-8 px-4">
        {children}
      </main>

      <footer className="py-6 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} EduQuiz Platform. All rights reserved.
      </footer>
    </div>
  );
}

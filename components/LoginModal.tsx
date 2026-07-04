"use client";

import { useState } from 'react';

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const [view, setView] = useState<'login' | 'forgot'>('login');
  const [loginType, setLoginType] = useState<'user' | 'admin'>('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (loginType === 'user') {
      if (email === 'user@spars.com' && password === 'user123') {
        window.location.href = '/heatmap3d.html';
      } else {
        setErrorMsg('Invalid user credentials. Please try again.');
      }
    } else {
      if (email === 'admin@spars.com' && password === 'admin123') {
        window.location.href = '/dashboard.html';
      } else {
        setErrorMsg('Invalid admin credentials. Please try again.');
      }
    }
  };

  const handleTypeChange = (type: 'user' | 'admin') => {
    setLoginType(type);
    setErrorMsg('');
    // Auto fill placeholder credentials to make testing easier for user
    if (type === 'user') {
      setEmail('user@spars.com');
      setPassword('user123');
    } else {
      setEmail('admin@spars.com');
      setPassword('admin123');
    }
  };

  const supportNumbers = [
    { label: 'Admin Support Line 1', phone: '+91 99016 41165', href: 'tel:+919901641165' },
    { label: 'Admin Support Line 2', phone: '+91 63666 27980', href: 'tel:+916366627980' },
    { label: 'System Admin Desk', phone: '+91 70229 27743', href: 'tel:+917022927743' },
    { label: 'Operations Support', phone: '+91 98486 84654', href: 'tel:+919848684654' },
    { label: 'Network Control', phone: '+91 98805 50484', href: 'tel:+919880550484' },
  ];

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div 
        className="modal-card" 
        style={{ 
          width: 'min(440px, 92vw)', 
          padding: '2.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}
      >
        {/* Header Section */}
        <div className="modal-header" style={{ marginBottom: '0.5rem' }}>
          <div className="label" style={{ opacity: 0.6 }}>
            {view === 'login' ? 'SPARS Access' : 'Help Desk'}
          </div>
          <button className="modal-close" type="button" onClick={onClose}>
            Close
          </button>
        </div>

        {view === 'login' ? (
          <form className="modal-form" onSubmit={handleLogin} style={{ gap: '1.5rem' }}>
            {/* Title & Desc */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <h2 className="serif" style={{ fontSize: '2.2rem', fontWeight: 400, margin: 0, lineHeight: 1.15 }}>
                Login here to access already set-up SPARS
              </h2>
              <p style={{ opacity: 0.6, fontSize: '0.9rem', lineHeight: '1.45', margin: 0 }}>
                Choose authorization level and enter credentials to load dashboards.
              </p>
            </div>

            {/* User vs Admin Tab Switcher */}
            <div 
              style={{ 
                display: 'flex', 
                borderBottom: '1px solid var(--border)', 
                marginTop: '0.5rem',
                gap: '1rem'
              }}
            >
              <button 
                type="button"
                onClick={() => handleTypeChange('user')}
                style={{ 
                  flex: 1, 
                  paddingBottom: '0.8rem', 
                  background: 'none', 
                  border: 'none', 
                  borderBottom: loginType === 'user' ? '2px solid var(--fg)' : '2px solid transparent', 
                  fontWeight: loginType === 'user' ? 700 : 400,
                  cursor: 'pointer',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: loginType === 'user' ? 'var(--fg)' : 'rgba(24, 24, 27, 0.4)',
                  transition: 'all 0.2s var(--ease-smooth)',
                  textAlign: 'center'
                }}
              >
                For Users
              </button>
              <button 
                type="button"
                onClick={() => handleTypeChange('admin')}
                style={{ 
                  flex: 1, 
                  paddingBottom: '0.8rem', 
                  background: 'none', 
                  border: 'none', 
                  borderBottom: loginType === 'admin' ? '2px solid var(--fg)' : '2px solid transparent', 
                  fontWeight: loginType === 'admin' ? 700 : 400,
                  cursor: 'pointer',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: loginType === 'admin' ? 'var(--fg)' : 'rgba(24, 24, 27, 0.4)',
                  transition: 'all 0.2s var(--ease-smooth)',
                  textAlign: 'center'
                }}
              >
                Admin Login
              </button>
            </div>

            {/* Inputs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '0.5rem' }}>
              <label>
                Email Address
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder={loginType === 'user' ? 'user@spars.com' : 'admin@spars.com'} 
                  style={{ width: '100%' }}
                  required 
                />
              </label>
              
              <label>
                Password
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="••••••••" 
                  style={{ width: '100%' }}
                  required 
                />
              </label>
            </div>

            {errorMsg && (
              <div style={{ color: '#E11D48', fontSize: '0.85rem', fontWeight: 500 }}>
                ⚠️ {errorMsg}
              </div>
            )}

            {/* Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1rem' }}>
              <button 
                className="start-btn" 
                type="submit" 
                style={{ 
                  width: '100%', 
                  justifyContent: 'center', 
                  padding: '1rem',
                  fontSize: '13px',
                  alignSelf: 'stretch'
                }}
              >
                Submit Access <span>→</span>
              </button>
              
              <button 
                className="nav-cta" 
                type="button" 
                onClick={() => setView('forgot')}
                style={{ 
                  width: '100%', 
                  justifyContent: 'center', 
                  padding: '0.8rem',
                  fontSize: '10px'
                }}
              >
                Forgot Password?
              </button>
            </div>
          </form>
        ) : (
          <div className="modal-form" style={{ gap: '1.5rem' }}>
            {/* Title & Desc */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <h2 className="serif" style={{ fontSize: '2.2rem', fontWeight: 400, margin: 0, lineHeight: 1.15 }}>
                Forgot Password?
              </h2>
              <p style={{ opacity: 0.6, fontSize: '0.9rem', lineHeight: '1.45', margin: 0 }}>
                Your security credentials are set up individually. Please call one of our help desk administrators below to verify your identity and retrieve your password.
              </p>
            </div>

            {/* Styled Contact Card List */}
            <div 
              style={{ 
                borderTop: '1px solid var(--border)', 
                paddingTop: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem'
              }}
            >
              {supportNumbers.map((num, i) => (
                <a 
                  key={i}
                  href={num.href}
                  style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.9rem 1.1rem',
                    border: '1px solid var(--border)',
                    textDecoration: 'none',
                    color: 'var(--fg)',
                    background: 'rgba(0,0,0,0.01)',
                    transition: 'all 0.2s ease',
                    fontSize: '13px',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(0,0,0,0.04)';
                    e.currentTarget.style.borderColor = 'var(--fg)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(0,0,0,0.01)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                >
                  <span style={{ opacity: 0.6, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {num.label}
                  </span>
                  <span style={{ fontWeight: 700, fontFamily: 'var(--font-mono), monospace' }}>
                    {num.phone} ↗
                  </span>
                </a>
              ))}
            </div>

            {/* Actions */}
            <div style={{ marginTop: '1rem' }}>
              <button 
                className="nav-cta" 
                type="button" 
                onClick={() => setView('login')} 
                style={{ width: '100%', justifyContent: 'center', padding: '0.8rem' }}
              >
                Back to Login
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

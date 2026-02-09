import React, { useState } from 'react';
import '../Login/Login.css';

const Log = () => {
    const [isActive, setIsActive] = useState(false);

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login Submitted');
       
    };

    const handleRegisterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Register Submitted');
       
    };

    const toggleForm = () => {
        setIsActive(!isActive);
    };

    return (
        <section id="login">
            <div className={`wrapper ${isActive ? 'active' : ''}`}>
                {/* Login Form */}
                <form id="loginForm" onSubmit={handleLoginSubmit}>
                    <span className="rotate-bg"></span>
                    <span className="rotate-bg2"></span>
                    <div className="form-box login">
                        <h2 className="title animation" style={{ '--i': 0, '--j': 0 } as React.CSSProperties}>Login</h2>
                        <div className="input-box animation" style={{ '--i': 1, '--j': 1 } as React.CSSProperties}>
                            <input type="text" id="email" required />
                            <label>Email</label>
                            <i className="bx bxs-user"></i>
                        </div>
                        <div className="input-box animation" style={{ '--i': 2, '--j': 2 } as React.CSSProperties}>
                            <input type="password" id="password" required />
                            <label>Password</label>
                            <i className="bx bxs-lock-alt"></i>
                        </div>
                        <button type="submit" className="btn animation" style={{ '--i': 3, '--j': 3 } as React.CSSProperties}>
                            Login
                        </button>
                        <div className="linkTxt animation" style={{ '--i': 4, '--j': 4 } as React.CSSProperties}>
                            <p>
                                Don't have an account?{' '}
                                <a href="#" className="register-link" onClick={(e) => { e.preventDefault(); toggleForm(); }}>
                                    Sign Up
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="info-text login">
                        <h2 className="animation" style={{ '--i': 0, '--j': 4 } as React.CSSProperties}>Green Shadow</h2>
                        <p className="animation" style={{ '--i': 1, '--j': 3 } as React.CSSProperties}>
                            "Welcome to GreenShadow – where innovation meets sustainability! 🌿"
                        </p>
                    </div>
                </form>

                {/* Register Form */}
                <form id="registerForms" onSubmit={handleRegisterSubmit}>
                    <div className="form-box register">
                        <h2 className="title animation" style={{ '--i': 0, '--j': 0 } as React.CSSProperties}>Sign Up</h2>
                        <div className="input-box animation" style={{ '--i': 1, '--j': 1 } as React.CSSProperties}>
                            <input type="text" id="registerName" required />
                            <label>Username</label>
                            <i className="bx bxs-user"></i>
                        </div>
                        <div className="input-box animation" style={{ '--i': 2, '--j': 2 } as React.CSSProperties}>
                            <input type="email" id="registerEmail" required />
                            <label>Email</label>
                            <i className="bx bxs-envelope"></i>
                        </div>
                        <div className="input-box animation" style={{ '--i': 3, '--j': 3 } as React.CSSProperties}>
                            <input type="password" id="registerPassword" required />
                            <label>Password</label>
                            <i className="bx bxs-lock-alt"></i>
                        </div>
                        <div className="input-box animation" style={{ '--i': 4, '--j': 4 } as React.CSSProperties}>
                            <input type="text" id="userRole" required />
                            <label>Role</label>
                            <i className="bx bxs-user"></i>
                        </div>
                        <button type="submit" className="btn animation" style={{ '--i': 5, '--j': 5 } as React.CSSProperties}>
                            Sign Up
                        </button>
                        <div className="linkTxt animation" style={{ '--i': 6, '--j': 6 } as React.CSSProperties}>
                            <p>
                                Already have an account?{' '}
                                <a href="#" className="login-link" onClick={(e) => { e.preventDefault(); toggleForm(); }}>
                                    Login
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="info-text register">
                        <h2 className="animation" style={{ '--i': 0, '--j': 6 } as React.CSSProperties}>Green Shadow</h2>
                        <p className="animation" style={{ '--i': 1, '--j': 5 } as React.CSSProperties}>
                            "Welcome to GreenShadow – where innovation meets sustainability! 🌿"
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Log;

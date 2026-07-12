import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout({ totalCount, uniqueLanguages, oldestYear, activeTab, setActiveTab }) {
    return (
        <div className="app-container">
            <header className="app-header">
                <h1>📚 Book Dashboard</h1>
                <p>Your library at a glance</p>
            </header>

            <main className="workspace-layout">

                <section className="stats-sidebar">
                    <div className="vintage-stamp">🏷️Archive</div>

                    <div className="stat-circle">
                        <span className="stat-value">{totalCount}</span>
                        <span className="stat-label">Volumes</span>
                    </div>

                    <div className="stat-circle">
                        <span className="stat-value">{uniqueLanguages}</span>
                        <span className="stat-label">Unique Languages</span>
                    </div>

                    <div className="stat-circle">
                        <span className="stat-value">{oldestYear}</span>
                        <span className="stat-label">Oldest Year</span>
                    </div>
                </section>
                <Outlet />
            </main>

            <footer className="bottom-navbar">
                <nav className="nav-links">
                    <Link 
                        to="/"
                        className={activeTab === 'dashboard' ? "active-link" : ''}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        onClick={() => setActiveTab('dashboard')}
                    >
                        🏠 Home Dashboard
                    </Link>

                    <Link 
                        to="/insights"
                        className={activeTab === 'insights' ? 'active-link' : ''}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        onClick={() => setActiveTab('insights')}
                    >
                        🧠 Data Insights 
                    </Link>

                    <Link 
                        to="/about"
                        className={activeTab === 'about' ? 'active-link' : ''}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        onClick={() => setActiveTab('about')}
                    >
                        ℹ️ About Archives
                    </Link>
                </nav>
            </footer>
        </div>
    );
}

export default Layout; 
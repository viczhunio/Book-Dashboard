import React from 'react';
import { Link } from 'react-router-dom'; 

function DashboardHome({
    filteredBooks, 
    searchTerm, 
    setSearchTerm, 
    languageFilter, 
    setLanguageFilter, 
    availableLanguages
}) {
    return (
        <section className="catalog-drawer-card">
            <div className="controls-row">
                <input 
                    type="text"
                    placeholder="Search by title, author, year"
                    className="vintage-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />

                <select 
                    className="vintage-select"
                    value={languageFilter}
                    onChange={(e) => setLanguageFilter(e.target.value)} 
                >
                    <option value="All">All Languages</option>
                    {availableLanguages && availableLanguages.map((lang) => (
                        <option key={lang} value={lang}>
                            {lang} 
                        </option>
                    ))}
                </select>
            </div>

            <div className="manifest-feed">
                <h3>Browse Books:</h3>
                {filteredBooks.map((book) => (
                    <Link 
                        to={`/book/${book.id}`}
                        key={book.id}
                        className="book-ledger-row"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <div>
                            <strong className="book-title">{book.title}</strong>
                            <span className="book-author"> by {book.author}</span>
                        </div>
                        <div className="book-meta">
                            📅 {book.year} | 🌐 Edition: {book.language}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default DashboardHome; 
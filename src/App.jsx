import { useState, useEffect } from 'react'
import './App.css'

const languageNames = {
  eng: 'English',
  spa: 'Spanish',
  fre: 'French',
  ger: 'German',
  pol: 'Polish',
  jpn: 'Japanese',
  ita: 'Italian',
  rus: 'Russian',
  chi: 'Chinese',
  por: 'Portuguese',
  dut: 'Dutch',
  swe: 'Swedish',
  ara: 'Arabic',
  gre: 'Greek',
  heb: 'Hebrew',
  kor: 'Korean',
  und: 'Unknown',
};

function App() {
  const [books, setBooks] = useState([]); 
  const [loading, setLoading] = useState(true);
  const[error, setError] = useState(null); 
  const [activeTab, setActiveTab] = useState('dashboard');

  const [searchTerm, setSearchTerm] = useState(''); 
  const [languageFilter, setLanguageFilter] = useState('All'); 

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch ('https://openlibrary.org/search.json?q=book&limit=80'); 
        const data = await response.json(); 

        const formattedBooks = (data.docs || [])
          .filter((book) => book.first_publish_year && book.title)
          .map((book) => {
            return {
              title: book.title || 'Unknown Title',
              author: book.author_name ? book.author_name.join(', ') : 'Unknown Author',
              year: book.first_publish_year,   
              language: book.language && book.language[0] ? 
              (languageNames[book.language[0]] || book.language[0]) : 'Unknown',
            }
          })

          setBooks(formattedBooks); 
      } catch (err) {
        setError('Failed to fetch books.'); 
        console.error(err); 
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) || 
      book.year.toString().includes(searchTerm);

    const matchesLanguage =
      languageFilter === 'All' || book.language === languageFilter;

    return matchesSearch && matchesLanguage;
});

  const totalCount = books.length; 
  const uniqueLanguages = new Set(books.map((book) => book.language)).size;
  const oldestYear = books.length ? Math.min(...books.map((book) => book.year)) : '-'; 

  if (loading) return <div className="app-container"><p style={{padding: '40px', textAlign: 'center'}}>Loading Library...</p></div>
  if (error) return <div className="app-container"><p style={{padding: '40px', textAlign: 'center'}}>{error}</p></div>

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📚 BookDash</h1>
        <p>Your library, at a glance</p>
      </header>

      <main className="workspace-layout">

        <section className="stats-sidebar">
          <div className = "vintage-stamp">🏷️Archive</div>

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

        <section className="catalog-drawer-card">
          <div className="controls-row">
            <input 
            type="text"
            placeholder="Search by title, author, year"
            className="vintage-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select className="vintage-select"
              value={languageFilter}
              onChange={(e) => setLanguageFilter(e.target.value)}
            >
              <option value="All">All Languages</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Polish">Polish</option>
              <option value="Japanese">Japanese</option>
              <option value="Italian">Italian</option>
              <option value="Russian">Russian</option>
              <option value="Chinese">Chinese</option>
              <option value="Portuguese">Portuguese</option>
              <option value="Dutch">Dutch</option>
              <option value="Swedish">Swedish</option>
              <option value="Arabic">Arabic</option>
              <option value="Greek">Greek</option>
              <option value="Hebrew">Hebrew</option>
              <option value="Korean">Korean</option>
            </select>
          </div>

          <div className="manifest-feed">
            <h3>Browse Books:</h3>
            {filteredBooks.map((book, index) => (
              <div key={index} className="book-ledger-row">
                <div>
                  <strong className="book-title">{book.title}</strong>
                  <span className="book-author"> by {book.author}</span>
                </div>
                <div className="book-meta"> 
                  📅 {book.year} | 🌐 {book.language}
                </div>
              </div>
            ))}
          </div>

        </section>
      </main>

      <footer className="bottom-navbar">
        <nav className="nav-links">
          <span 
            className= {activeTab === 'dashboard' ? "active-link" : ''}
            onClick={() => setActiveTab('dashboard')}
          >
            🏠 Dashboard
          </span>
          <span
            className= {activeTab === 'search' ? 'active-link' : ''}
            onClick={() => setActiveTab('search')}
          >
            🔍 Search Library
          </span>
          <span
            className= {activeTab === 'archives' ? 'active-link' : ''}
            onClick={() => setActiveTab('archives')}
          >
            ℹ️ About Archives
          </span>
        </nav>
      </footer>
    </div>
  )
}

export default App

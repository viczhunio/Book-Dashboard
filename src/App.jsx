import { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout';
import DashboardHome from './routes/DashboardHome';
import DetailView from './routes/DetailView';
import About from './routes/About';
import Insights from './routes/Insights'; 


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
        const response = await fetch ('https://openlibrary.org/search.json?q=book&limit=80&fields=key,title,author_name,first_publish_year,language,cover_i,edition_count,want_to_read_count,already_read_count'); 
        const data = await response.json(); 

        const formattedBooks = (data.docs || [])
          .filter((book) => book.first_publish_year && book.title)
          .map((book) => {

            const rawLang = book.language && book.language[0] ? book.language[0].toLowerCase() : 'und'; 
            let cleanLang= 'Other'; 

            if (rawLang !== 'und' && rawLang !== 'unknown') {
              try { 
                const languageDisplayer = new Intl.DisplayNames(['en'], {type: 'language' });
                const translatedName = languageDisplayer.of(rawLang);

                if (translatedName.toLowerCase() === rawLang) {
                  cleanLang = rawLang === 'roa' ? 'Romance' : rawLang.toUpperCase(); 
                } else {
                  cleanLang = translatedName;
                }
              } catch (e) {
                cleanLang = rawLang === 'roa' ? 'Romance' : rawLang.toUpperCase();
              }
            }

            return {
              id: book.key ? book.key.replace("/works/", "") : Math.random().toString(), 
              title: book.title || 'Unknown Title',
              author: book.author_name ? book.author_name.join(', ') : 'Unknown Author',
              year: book.first_publish_year,   
              language: cleanLang,
              coverId: book.cover_i || null, 

              editions: book.edition_count || 1, 
              wantToRead: book.want_to_read_count || 0, 
              alreadyRead: book.already_read_count || 0
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

  const availableLanguages = Array.from(new Set(books.map((book) => book.language)));

  if (loading) return <div className="app-container"><p style={{padding: '40px', textAlign: 'center'}}>Loading Library...</p></div>
  if (error) return <div className="app-container"><p style={{padding: '40px', textAlign: 'center'}}>{error}</p></div>


  let element = useRoutes([
    {
      path: "/",
      element: (
        <Layout 
          totalCount={totalCount}
          uniqueLanguages={uniqueLanguages}
          oldestYear={oldestYear}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      ),
      children: [
        {
          index: true, 
          element: (
            <DashboardHome 
              filteredBooks={filteredBooks}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              languageFilter={languageFilter}
              setLanguageFilter={setLanguageFilter}
              availableLanguages={availableLanguages}
            />
          )
        }, 
        {
          path:"insights",
          element: <Insights books={books} />
        }, 
        {
          path: "book/:id",
          element: <DetailView books={books} />
        }, 
        {
          path: "about", 
          element: <About />
        }
      ]
    }
  ]); 

  return element; 
  
    /*<div className="app-container">
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
              {availableLanguages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>

          <div className="manifest-feed">
            <h3>Browse Books:</h3>
            {filteredBooks.map((book) => (
              <div key={book.id} className="book-ledger-row">
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
  )*/
}

export default App

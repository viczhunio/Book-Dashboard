import React from 'react'
import { useParams, Link } from 'react-router-dom'

const DetailView = ({ books }) => {
    const { id } = useParams(); 

    const book = books?.find((b) => {
        const cleanKey = b.key?.replace("/works/", "") || b.id; 
        return cleanKey === id || b.id === id; 
    }); 

    if (!book) {
        return (
        <div style={{ padding: '2rem', color: '#fff', background: '#0f172a', minHeight: '100vh' }}>
            <h2>Looking for Book Details...</h2>
            <p style={{ color: '#1d54a1' }}>We couldn't locate that specific entry. It might still be loading or the link is incorrect.</p>
            <Link to="/" style={{ color: '#38bdf8', textDecoration: 'underline' }}>Back to Dashboard Home</Link>
        </div>
        );
    }

    return (
        <div style={{ padding: '2rem', maxWidth: '900px', color: '#fff'}}>

            <Link to="/" style={{ display: 'inline-block', marginBottom: '1.5rem', color: '#38bdf8', textDecoration: 'none', fontWeight: '500' }}>
                ← Back to Main Dashboard Catalog
            </Link>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', background: '#1e293b', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>

                <div style={{ flex: '1 1 100%', maxWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem'}}>
                    {book.coverId ? (
                        <img 
                            src={`https://covers.openlibrary.org/b/id/${book.coverId}-L.jpg`}
                            alt={`${book.title} book cover`}
                            style={{ width: 'auto', maxWidth: '280px', display: 'block', margin: '0 auto', borderRadius: '8px', boxShadow: '0 6px 16px rgba(0,0,0,0.4)', objectFit: 'cover', maxHeight: '450px' }}
                        />
                ) : (
                    <div style={{ width: '100%', height: '360px', background: '#475569', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
                        <span style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>📖</span>
                        <span style={{ fontFamily: "'DM Mono', monospace"}}>No Cover Image Found</span>
                    </div>
                    )}
                </div>

                <div style={{ flex: '2 1 450px', minWidth: '400px' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#f8fafc', fontFamily: "'Fraunces', serif", lineHeight: '2rem' }}>
                        {book.title}
                    </h1>
                    <h3 style={{ color: '#cbd5e1', fontSize: '1.3rem', marginBottom: '1.5rem', fontWeight: '400', fontFamily: "'DM Mono', monospace" }}>
                        By {book.author}
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', borderTop: '1px solid #334155', paddingTop: '1.5rem' }}>

                        <div>
                            <p style={{ margin: '0 0 0.8rem 0' }}>
                                <strong style={{ color: '#94a3b8' }}>First Published:</strong><br /> 
                                {book.year || 'N/A'}
                            </p>
                            <p style={{ margin: '0 0 0.8rem 0' }}>
                                <strong style={{ color: '#94a3b8' }}>Edition Language:</strong><br /> 
                                {book.language || 'Unknown'}
                            </p>
                            <p style={{ margin: '0 0 0.8rem 0' }}>
                                <strong style={{ color: '#94a3b8' }}>Global Editions:</strong><br /> 
                                {book.editions}
                            </p>
                        </div>

                        <div>
                            <p style={{ margin: '0 0 0.8rem 0' }}>
                                <strong style={{ color: '#94a3b8' }}>Community Demand:</strong><br /> 
                                {book.wantToRead} users want to read
                            </p>
                            <p style={{ margin: '0 0 0.8rem 0' }}>
                                <strong style={{ color: '#94a3b8' }}>Archival Circulation:</strong><br /> 
                                {book.alreadyRead} logged checkouts
                            </p>
                            <p style={{ margin: '0 0 0.8rem 0' }}>
                                <strong style={{ color: '#94a3b8' }}>Catalog Status:</strong><br /> 
                                Verified Record 
                            </p>
                        </div>

                    </div>

                    <div style={{ marginTop: '2rem', background: '#0f172a', padding: '1rem', borderRadius: '6px', border: '1px solid #334155' }}>
                        <span style={{ fontSize: '0.85rem', color: '#64748b', display: 'block', marginBottom: '0.2rem', fontFamily:"'DM Mono', monospace" }}>Unique Router Key Identifier</span>
                        <code style={{ color: '#38bdf8', fontSize: '1rem', fontFamily: "'DM Mono', monospace" }}>{id}</code>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailView; 
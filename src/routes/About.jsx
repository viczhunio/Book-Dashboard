import React from  'react'

const About = () => {
    return (
        <div style = {{ padding: '2rem', maxWidth: '800px', color: '#fff' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #012a4a', color: '#012a4a', paddingBottom: '1rem', fontFamily: "'Fraunces', serif" }}>
                About BookDash
            </h1>

            <section style={{ marginBottom: '2rem' }}>
                <h2>The Project Goal</h2>
                <p style={{ lineHeight: '1.6', color: '#315378', marginBottom: '3rem' }}>
                    All metadata displayed through this dashboard is live-fetched from the open-source 
                    public API infrastructure. By using this dataset, the app is able to calculate 
                    real-time summary statistics. It allows instantaneous catalog searches, and breaks 
                    down dataset attributes into clean, readable, interactive charts. 
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ color: '#3D5A46', fontFamily: "'Fraunces', serif", fontSize: '2rem', marginBottom: '2rem'}}>How to Navigate</h2>
                <ul style={{ color: '#223c2b', lineHeight: '1.8' }}>
                    <li><strong>Dashboard Home:</strong> Search, filter, and view individual metrics across the dataset.</li>
                    <li><strong>Data Insights:</strong> View advanced graphical charts mapping out dataset attributes and anomalies.</li>
                    <li><strong>Detail View:</strong> Click on any individual entry in the main list to open a deep-dive breakdown of that specific item.</li>
                </ul>
            </section>
        </div>
    );
};

export default About; 
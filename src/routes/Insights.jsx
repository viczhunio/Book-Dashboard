import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts';

function Insights ({ books }) {
    //Chart 1 
    const languageCounts = books.reduce((acc, book) => {
        acc[book.language] = (acc[book.language] || 0) + 1; 
        return acc;
    }, {}); 
    const languageData = Object.keys(languageCounts).map(lang => {
        let cleanName= lang; 

        if (lang === 'und' || lang === 'UND') cleanName = 'Undetermined'; 
        if (lang === 'roa' || lang === 'ROA') cleanName = 'Romance'; 
        if (lang === 'mul' || lang === 'MUL') cleanName = 'Multiple';

        return {
            name: cleanName,
            count: languageCounts[lang]
        };
    })

    //Chart 2 
    const yearCounts= books.reduce((acc, book) => {
        if (book.year) {
            acc[book.year] = (acc[book.year] || 0) + 1; 
        }
        return acc; 
    }, {}); 

    const yearData = Object.keys(yearCounts)
    .map(year => ({ year: parseInt(year), count: yearCounts[year] }))
    .sort((a, b) => a.year - b.year);

  return (
    <div style={{ padding: '2rem', color: '#fff', width: '100%', maxWidth: '900px' }}>
        <h2 style={{ color: '#012a4a', fontFamily: "'Fraunces', serif", fontSize: '2rem', marginBottom: '0.5rem'}}>
            🧠 Data Insights & Trends
        </h2>
        <p style={{ color: '#315378', marginBottom: '2rem', fontFamily: "'DM Mono', monospace" }}>
            A visual breakdown of our live catalog attributes to discover trends in publication timelines and linguistic scope.
        </p>

      {/* Chart 1: Language Distribution */}
        <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem' }}>
        <h3>🌐 Volume Distribution by Language</h3>
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer>
            <BarChart data={languageData} margin={{ bottom: 50 }}>

                <XAxis 
                    dataKey="name" 
                    stroke="#94a3b8" 
                    interval={0}
                    angle={-45}
                    textAnchor="end"
                    height={70}
                />

                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }} />
                <Bar dataKey="count" fill="#38bdf8" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chart 2: Publication Timeline */}
      <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '12px' }}>
        <h3>📅 Publication Timeline Trends</h3>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={yearData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="year" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }} />
              <Line type="monotone" dataKey="count" stroke="#f43f5e" strokeWidth={3} dot={{ fill: '#f43f5e' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Insights; 
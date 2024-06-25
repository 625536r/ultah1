// src/components/Quotes.jsx
import React from 'react';

const quotes = [
  "Hidup adalah perjalanan yang harus dinikmati setiap langkahnya.",
  "Selamat ulang tahun! Semoga semua impianmu menjadi kenyataan.",
  "Hari ini adalah hari spesialmu, nikmati dengan penuh kebahagiaan!",
  "Semoga usia barumu membawa keberuntungan dan kesuksesan.",
  "Hidup itu singkat, nikmati setiap momennya. Selamat ulang tahun!"
];

const Quotes = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div className="quotes-container">
      <h3>Quotes of the Day</h3>
      <p>{randomQuote}</p>
    </div>
  );
};

export default Quotes;

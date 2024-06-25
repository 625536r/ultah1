// src/components/BirthdayMessage.jsx
import React from 'react';

const BirthdayMessage = ({ name, onReset }) => (
  <div className="message-container">
    <h2>Selamat Ulang Tahun, {name}!</h2>
    <img 
      src="https://example.com/birthday-cake.jpg" 
      alt="Kue Ulang Tahun" 
      className="birthday-image"
    />
    <p>Semoga hari-harimu ke depan dipenuhi dengan kebahagiaan dan kesuksesan!</p>
    <button onClick={onReset}>Ulangi</button>
  </div>
);

export default BirthdayMessage;

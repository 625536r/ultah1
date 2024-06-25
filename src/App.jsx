// src/App.jsx
import React from 'react';
import './App.css';
import birthdaySong from './assets/birthday_song.mp3';
import GreetingForm from './components/GreetingForm';
import BirthdayMessage from './components/BirthdayMessage';
import Quotes from './components/Quotes';
import Confetti from './components/Confetti';
import BalloonAnimation from './components/BalloonAnimation';

function App() {
  const [name, setName] = React.useState('');
  const [showMessage, setShowMessage] = React.useState(false);
  const audio = new Audio(birthdaySong);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
    audio.play();
  };

  return (
    <div className="app-container">
      <h1>Selamat Ulang Tahun!</h1>
      {!showMessage ? (
        <GreetingForm 
          name={name} 
          onInputChange={handleInputChange} 
          onSubmit={handleSubmit} 
        />
      ) : (
        <>
          <Confetti />
          <BalloonAnimation />
          <BirthdayMessage 
            name={name} 
            onReset={() => setShowMessage(false)} 
          />
        </>
      )}
      <Quotes />
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [hexColor, setHexColor] = useState('#');
  const [rgbColor, setRgbColor] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value.toUpperCase();
    setHexColor(inputValue);

    if (inputValue.length === 7 && inputValue.startsWith('#')) {
      try {
        const red = parseInt(inputValue.slice(1, 3), 16);
        const green = parseInt(inputValue.slice(3, 5), 16);
        const blue = parseInt(inputValue.slice(5, 7), 16);
        setRgbColor(`rgb(${red}, ${green}, ${blue})`);
        setError('');
        document.body.style.backgroundColor = inputValue;
      } catch (error) {
        setError('Invalid HEX color format');
        setRgbColor('');
        document.body.style.backgroundColor = 'white';
      }
    } else if (inputValue.length > 7) {
      setError('Maximum 7 characters allowed');
      setRgbColor('');
      document.body.style.backgroundColor = 'white';
    } else if (inputValue.length < 7 && inputValue.startsWith('#')) {
      setError('Введите значиение HEX');
      setRgbColor('');
      document.body.style.backgroundColor = 'white';
    } else {
      setError('');
      setRgbColor('');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <div className="color-converter">
      <h1>HEX to RGB Color Converter</h1>
      <input
        type="text"
        placeholder="Введите # и код цвета"
        value={hexColor}
        onChange={handleInputChange}
        maxLength={7}
      />
      {error && <p className="error">{error}</p>}
      {rgbColor && <p>RGB: {rgbColor}</p>}
    </div>
  );
};

export default App;

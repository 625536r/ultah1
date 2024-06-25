// src/components/GreetingForm.jsx
import React from 'react';

const GreetingForm = ({ name, onInputChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input
      type="text"
      placeholder="Masukkan nama"
      value={name}
      onChange={onInputChange}
    />
    <button type="submit">Tampilkan Ucapan</button>
  </form>
);

export default GreetingForm;

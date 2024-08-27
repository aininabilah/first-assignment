

// Task:
// 1. Aku mau style-nya tidak dipanggil berulang-ulang
// 2. Aku mau semua style-nya dijadikan variable
// 3. Aku mau value dar masing-masing box, diambl dar variable, bukan di harcoded
// 4. Aku mau item box menjadi child component dengan file yang terpisah,
// dan disimpan di folder "components"
// 5. Panggil component itu di App.js
// 6. Buat folder baru beranama constants, dan pindahkan variable items ke sana
// 7. Panggil variable items di App.js
// 8. Kita bikin state, dimana state itu value awalnya adalah dari constant
// 9. Kita tambahkan tombol "Tambah Item", ketika tombol di klik,
// maka akan menambahkan satu item lagi dibawahnya
// 10. Upload tugasnya ke akun github masing-masing, dan kirimkan link repo-nya


import './App.css';
import React, { useState } from 'react';
import { items as initialItems } from './constants';
import Card from './components/card2';

function App() {
  // 8. Kita bikin state, dimana state itu value awalnya adalah dari constant
  const [items, setItems] = useState(initialItems);

  // add new item
  const addItem = () => {
    const newItem = {
      id: items.length + 1, 
      title: `New Card's h2`,
      subTitle: `New Card's h3`,
    };
    setItems([...items, newItem]); // add item baru
  };

  return (
    <div className="App">
      <header className="App-Header">
        <h1>Task: Add Card elements</h1>
      </header>
      {items.map((item, index) => {
        return ( // Add 'return' here
          <Card 
            key={index}
            title={item.title}
            subTitle={item.subTitle}
          />
        );
      })}
      
      <button onClick={addItem}>Tambah Item</button>
    </div>
  );
}

export default App;

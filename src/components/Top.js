import React from 'react';

const Top = () => {
  const handlePesan = (value) => {                // parameter ini
    alert("Halaman Top Tampil");
    alert(value);
  }

  return (
    <a href="/" onClick={()=>handlePesan("Pesan dari Top")}>
      Halaman Top
    </a>
  );
};

export default Top;

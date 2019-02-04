import React from 'react';

const Top = () => {
  const handlePesan = (value, e) => {
    e.preventDefault();                            // preventDefault ini utk supaya tidak reload. Dan, variable 'e' itu tidak hrs 'e', bisa diganti dgn nama apapun. Namun disarankan menggunakan 'e'
    alert("Halaman Top Tampil");
    alert(value);
  }

  return (
    <a href="/" onClick={(e)=>handlePesan("Pesan dari Top", e)}>
      Halaman Top
    </a>
  );
};

export default Top;

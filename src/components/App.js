import React, { Component } from 'react';
import Header from './Header';
import Top from './Top';
import Footer from './Footer';
import List from './List';

class App extends Component {
  render() {
    return (
      <div>
        <Header list="3 Terbaik"/>
        <Top />
        <List />
        <Footer name="Makanan Nusantara" tahun="1990"/>
      </div>
    );
  }
}

export default App;

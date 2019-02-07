import React, {Component} from "react";
import Header from "./Header";
import Top from "./Top";
import Main from "./Main";
import Footer from "./Footer";
import List from "./List";

class App extends Component {
  render() {
    return (
      <div>
        <Header list="3 Terbaik" />
        <Top />
        <Main
          menuMakanan={[
            {
              nama: "Mie Ayam++",
              harga: 10000
            },
            {
              nama: "Bakso Pedas++",
              harga: 15000
            },
            {
              nama: "Mie Ayam Bakso",
              harga: 20000
            },
            {
              nama: "Soto",
              harga: 10000
            }
          ]}
        />
        <List />
        <Footer name="Makanan Nusantara" tahun="1990" />
      </div>
    );
  }
}

export default App;

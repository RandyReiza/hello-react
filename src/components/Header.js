import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {                                      // state sama fungsinya seperti var {dapat menampung value}, namun state dapat merubah value secara dinamis, sehingga saat value diubah tidak perlu refresh halaman web
      daftar: "Daftar Makanan Nusantara",
      dataList: this.props.list
    };
    this.handlePesan = this.handlePesan.bind(this);     // ini supaya bisa menggunakan 'this' didalam fungsi, seperti fungsi 'handlePesan' dibawah
  }

  handlePesan() {
    // alert("Halaman Header");
    alert(this.state.daftar);
  }

  render() {
    return (
      <div>
        <h2>Makanan khas Indonesia</h2>
        <p>{this.state.daftar}</p>
        <p>{this.state.dataList}</p>
        <a href="/" onClick={this.handlePesan}>Halaman Header</a>
      </div>
    )
  }
}

export default Header;

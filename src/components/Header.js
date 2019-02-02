import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {                              // state sama fungsinya seperti var {dapat menampung value}, namun state dapat merubah value secara dinamis, sehingga saat value diubah tidak perlu refresh halaman web
      daftar: "Daftar Makanan Nusantara",
      dataList: this.props.list
    };
  }

  render() {
    return (
      <div>
        <h2>Makanan khas Indonesia</h2>
        <p>{this.state.daftar}</p>
        <p>{this.state.dataList}</p>
      </div>
    )
  }
}

export default Header;

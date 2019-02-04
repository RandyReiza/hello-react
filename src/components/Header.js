import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      daftar: "Daftar Makanan Nusantara",
      dataList: this.props.list
    };
    this.handlePesan = this.handlePesan.bind(this);
  }

  handlePesan(value, e) {
    e.preventDefault();                                   // preventDefault ini utk supaya tidak reload. Dan, variable 'e' itu tidak hrs 'e', bisa diganti dgn nama apapun. Namun disarankan menggunakan 'e'
    alert(this.state.daftar);
    alert(value);
  }

  render() {
    return (
      <div>
        <h2>Makanan khas Indonesia</h2>
        <p>{this.state.daftar}</p>
        <p>{this.state.dataList}</p>
        <a href="/" onClick={(e)=>this.handlePesan("Pesan dari Header", e)}>
          Halaman Header
        </a>
      </div>
    )
  }
}

export default Header;

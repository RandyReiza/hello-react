import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      daftar: "Daftar Makanan Nusantara",
      dataList: this.props.list,
      statusRendering: true
    };
    this.handlePesan = this.handlePesan.bind(this);
    this.handleElement = this.handleElement.bind(this);
  }

  handlePesan(value, e) {
    e.preventDefault();                                           // preventDefault ini utk supaya tidak reload. Dan, variable 'e' itu tidak hrs 'e', bisa diganti dgn nama apapun. Namun disarankan menggunakan 'e'
    alert(this.state.daftar);
    alert(value);
  }


  componentDidMount(){                                             // fungsi yg akan di eksekusi setelah fungsi render di jalankan
    console.log("Jalan : componenDidMount");
  }

  handleElement() {
    this.setState((state, props) => {
      return {statusRendering: !state.statusRendering};
    })
  }

  render() {
    console.log("Jalan : Render");
    console.log(this.state.statusRendering);

    return (
      <div>
        {this.state.statusRendering === true ? (                                // ini adalah if-then-else
          <div>
            <h1>Selamat Datang</h1>
            <h2>Silahkan pilih Makanan</h2>
          </div>                                                                // jika akan merender lbh dr 1 element, maka hrs d bungkus dgn <div>
        ) : (
          <div>
            <h1>Selamat Tinggal</h1>
            <h2>Don't come back</h2>
          </div>
        )}
        <button onClick={this.handleElement}>Change</button>
      </div>
    )


    // return (
    //   <div>
    //     <h2>Makanan khas Indonesia</h2>
    //     <p>{this.state.daftar}</p>
    //     <p>{this.state.dataList}</p>
    //     <a href="/" onClick={(e)=>this.handlePesan("Pesan dari Header", e)}>
    //       Halaman Header
    //     </a>
    //   </div>
    // )
  }
}

export default Header;

import React, { Component } from 'react';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Menu Makanan",
      title2: "Menu Minuman",
      inputValue: "",
      inputKota: "",
      menuMakanan: [
        {
          nama: "Mie Ayam",
          harga: 10000
        },
        {
          nama: "Bakso",
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
      ]
    };
    this.rubahData = this.rubahData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  rubahData() {
    this.setState((state, prop) => {                          // 'state' & 'props' dalam parameter, dpt dihilangkan. namun jika ingin memasukkan state atau props utk fungsi tsb, maka hrs dimasukkan ke dlm parameter
      return {
        title: state.title2,                                  // seperti contoh ini, state.title1 ingin diisi oleh state.title2, jd di parameter dimasukin 'state'
        title2: state.title
      };
    });
  }

  handleChange(value, e) {
    this.setState({ [value] : e.target.value});              // supaya state yg diubah dr kolom input dapat langsung diubah isinya


    // const eventTarget = e.target.value;                          // penulisannya ini yg recomended kalo butuh props atau mau lbh dinamis
    // this.setState((state, props) => {
    //   return{
    //     inputValue: eventTarget
    //   };
    // });

    console.log(e.target.value);
  }

  render() {
    return(
      <div>
        <h3>{this.state.title}</h3>
        <h2>{this.state.title2}</h2>
        <button onClick={this.rubahData}>Rubah Data</button>

        <br />
        <br />
        <input
          type="text"
          value={this.state.inputValue}
          onChange={e => this.handleChange("inputValue", e)}
          placeholder="name"
        />
        <input
          type="text"
          value={this.state.inputKota}
          onChange={e => this.handleChange("inputKota", e)}
          placeholder="kota"
        />

        {this.state.menuMakanan.map((data, index) => {
          console.log(data);
          return (
            <div key={index}>
              <p>No : {index + 1}</p>
              <p>Nama Makanan : {data.nama}</p>
              <p>Harga : {data.harga}</p>
            </div>
          )
        })}
      </div>
    );
  }
}


export default Main;

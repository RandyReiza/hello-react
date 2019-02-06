import React, { Component } from 'react';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Menu Makanan",
      title2: "Menu Minuman",
      inputValue: "Nasi Padang Nusantara"
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

  handleChange(e) {
    // this.setState({inputValue: e.target.value});              // supaya state yg diubah dr kolom input dapat langsung diubah isinya


    const eventTarget = e.target.value;                          // penulisannya ini yg recomended kalo butuh props atau mau lbh dinamis
    this.setState((state, props) => {
      return{
        inputValue: eventTarget
      };
    });

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
        <input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
      </div>
    );
  }
}


export default Main;

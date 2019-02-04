import React, { Component } from 'react';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Menu Makanan"
    };
    this.rubahData = this.rubahData.bind(this);               // utk dapat memasukkan 'this' ke dalam fungsi yg dituju, fungsi yg dituju dlm kasus ini adalah fungsi 'rubahData'
  }

  // rubahData() {
  //   this.setState({title: "Pilih Makanan"});
  // }

  rubahData() {                                               // bentuk lain utk fungsi 'rubahData', utk merubah value state
    this.setState((state, props) => {                         // dan ini penulisan yg RECOMENDED
      return {title: "Pilih Menu Makanan"};
    });
  }

  render() {
    return(
      <div>
        <h3>{this.state.title}</h3>
        <button onClick={this.rubahData}>Rubah Data</button>
      </div>
    );
  }
}


export default Main;

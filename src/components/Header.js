import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {                                          // state sama fungsinya seperti var {dapat menampung value},
      daftar: "Daftar Makanan Nusantara"                    // namun state dapat merubah value secara dinamis,
    };                                                      // sehingga saat value diubah tidak perlu refresh halaman web
  }

  render() {
    return (
      <div>
        <h2>Makanan khas Indonesia</h2>
        <p>{this.state.daftar}</p>
      </div>
    )
  }
}

export default Header;












// export default class Header extends Component {          // option lainnya utk langsung mengexport component
//   render() {
//     return (
//       <div>
//         <h2>Makanan khas Indonesia</h2>
//       </div>
//     )
//   }
// }

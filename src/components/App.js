import React, {Component} from "react";
import Header from "./Header";
import Top from "./Top";
// import Main from "./Main";
import Form from "./Form";
import Footer from "./Footer";
// import List from "./List";

class App extends Component {
  render() {
    return (
      <div>
        <Header list="3 Terbaik" />
        <Top />
        <Form />
        {
          // <Main />                                     // penulisan comment di dalam fungsi 'return()' hrs dibungkus dgn {}
          // <List />
        }
        <Footer name="Makanan Nusantara" tahun="1990" />
      </div>
    );
  }
}

export default App;

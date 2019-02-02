import React from 'react';

const Footer = props => {
  return (
    <div>
      <h4>Halaman Footer {props.name}</h4>
      <p>@{props.tahun}</p>
    </div>
  );
};


export default Footer;







// const Footer = () => (                 // option 2 dalam membuat function, namun function ini tidak bisa syntax2 javascript kedalamnya, hanya html saja yg bisa, jd penulisan ini tdk disarankan
//   <div>
//     <h4>Halaman Footer</h4>
//     <p>@2018</p>
//   </div>
// );


// function Footer () {                   // option 3 dalam membuat function
//   return (
//     <div>
//       <h4>Halaman Footer</h4>
//       <p>@2018</p>
//     </div>
//   );
// };

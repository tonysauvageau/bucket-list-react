import React from 'react';

class Nav extends React.Component {
  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  render() {
    let navs = [
      { name: 'Home', url: '/'},
    ].map( (nav, i) => {
      return (
        <li key={i}>
         <a href={nav.url}>{nav.name}</a>
       </li>
      )
    });

    return (
      <nav>
        <div className="nav-wrapper">
         <a href="/" className="brand-logo">Bucket List</a>
         <a href="#" data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
         <ul className="right hide-on-med-and-down">
           { navs }
         </ul>
         <ul className="side-nav" id="mobile">
           { navs }
         </ul>
        </div>
       </nav>
     );
   }
}

export default Nav;


